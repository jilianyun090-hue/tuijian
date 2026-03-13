/**
 * 搜索引擎推送脚本 (Search Engine Ping Script)
 * 
 * 功能：
 * 1. 通知 Google 和 Bing 网站地图已更新
 * 2. 通过 IndexNow API 主动推送 URL（Bing/Yandex/Naver 等均支持）
 * 
 * 使用方法：node scripts/ping-search-engines.js
 */

import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://clash-jichang.com';
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;
const INDEXNOW_KEY = 'clash-jichang-indexnow-key';

// ---- HTTP GET Helper ----
function httpGet(url) {
    return new Promise((resolve) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => resolve({ status: res.statusCode, body: data }));
        }).on('error', (err) => resolve({ status: 0, body: err.message }));
    });
}

// ---- HTTP POST Helper ----
function httpPost(hostname, urlPath, payload) {
    return new Promise((resolve) => {
        const options = {
            hostname, port: 443, path: urlPath, method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Content-Length': Buffer.byteLength(payload)
            }
        };
        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => resolve({ status: res.statusCode, body: data }));
        });
        req.on('error', (err) => resolve({ status: 0, body: err.message }));
        req.write(payload);
        req.end();
    });
}

// ---- 1. Ping Google ----
async function pingGoogle() {
    const url = `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`;
    const res = await httpGet(url);
    console.log(res.status === 200 ? '✅ Google Ping 成功' : `⚠️ Google Ping: ${res.status}`);
}

// ---- 2. Ping Bing ----
async function pingBing() {
    const url = `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`;
    const res = await httpGet(url);
    console.log(res.status === 200 ? '✅ Bing Ping 成功' : `⚠️ Bing Ping: ${res.status}`);
}

// ---- 3. IndexNow 推送 ----
async function pushIndexNow(urls) {
    const payload = JSON.stringify({
        host: 'clash-jichang.com',
        key: INDEXNOW_KEY,
        keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: urls
    });
    const res = await httpPost('api.indexnow.org', '/IndexNow', payload);
    if (res.status === 200 || res.status === 202) {
        console.log(`✅ IndexNow 推送成功 (${urls.length} 个 URL)`);
    } else {
        console.log(`⚠️ IndexNow: ${res.status} - ${res.body}`);
    }
}

// ---- 4. 从 sitemap.xml 提取 URL ----
function extractUrls() {
    const sitemapPath = path.join(__dirname, '..', 'docs', '.vuepress', 'dist', 'sitemap.xml');
    if (!fs.existsSync(sitemapPath)) {
        console.log('⚠️ sitemap.xml 未找到，请先执行 npm run build');
        return [];
    }
    const content = fs.readFileSync(sitemapPath, 'utf-8');
    const urls = [];
    const regex = /<loc>(.*?)<\/loc>/g;
    let match;
    while ((match = regex.exec(content)) !== null) urls.push(match[1]);
    return urls;
}

// ---- 主函数 ----
async function main() {
    console.log('🔍 搜索引擎推送工具');
    console.log('='.repeat(50));
    console.log(`📍 站点: ${SITE_URL}`);
    console.log(`📄 Sitemap: ${SITEMAP_URL}`);
    console.log('='.repeat(50));
    console.log('');

    console.log('📡 Step 1: Ping Google & Bing Sitemap...');
    await Promise.all([pingGoogle(), pingBing()]);
    console.log('');

    console.log('🚀 Step 2: IndexNow 主动推送...');
    const urls = extractUrls();
    if (urls.length > 0) {
        console.log(`   找到 ${urls.length} 个 URL`);
        await pushIndexNow(urls.slice(0, 10000));
    } else {
        console.log('   未找到 URL，跳过推送');
    }

    console.log('');
    console.log('='.repeat(50));
    console.log('✨ 推送完成！');
    console.log('');
    console.log('💡 建议在以下平台手动验证网站并提交 sitemap：');
    console.log('   Google Search Console: https://search.google.com/search-console');
    console.log('   Bing Webmaster Tools:  https://www.bing.com/webmasters');
}

main().catch(console.error);
