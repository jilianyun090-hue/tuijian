import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { parseStringPromise } from 'xml2js';

const SITE_URL = 'https://clash-jichang.com';
const INDEXNOW_KEY = '7ed17addd6714c9bb9398a7251d90866';
const SITEMAP_PATH = path.resolve('docs/.vuepress/dist/sitemap.xml');

async function submitIndexNow() {
  try {
    if (!fs.existsSync(SITEMAP_PATH)) {
      console.error('Sitemap not found at:', SITEMAP_PATH);
      return;
    }

    const sitemapXml = fs.readFileSync(SITEMAP_PATH, 'utf-8');
    const sitemap = await parseStringPromise(sitemapXml);
    const urls = sitemap.urlset.url.map(u => u.loc[0]);

    console.log(`Found ${urls.length} URLs in sitemap. Submitting to IndexNow...`);

    const payload = {
      host: 'clash-jichang.com',
      key: INDEXNOW_KEY,
      keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
      urlList: urls
    };

    // Submit to Bing
    try {
      const bingResponse = await axios.post('https://www.bing.com/indexnow', payload, {
        headers: { 'Content-Type': 'application/json; charset=utf-8' }
      });
      if (bingResponse.status === 200 || bingResponse.status === 202) {
        console.log('✅ Bing IndexNow submission successful!');
      } else {
        console.warn('⚠️ Bing IndexNow response:', bingResponse.status);
      }
    } catch (bingError) {
      const errData = bingError.response?.data;
      if (errData?.errorCode === 'UserForbiddedToAccessSite') {
        console.warn('⚠️ Bing IndexNow 403: Domain NOT verified in Bing Webmaster Tools.');
        console.warn('   → Go to https://www.bing.com/webmasters and add/verify clash-jichang.com first.');
      } else if (bingError.response?.status === 403) {
        console.warn('⚠️ Bing IndexNow 403:', JSON.stringify(errData));
      } else {
        console.error('❌ Bing IndexNow error:', bingError.message);
      }
    }

    // Submit to IndexNow API (also works for Yandex, Seznam etc)
    try {
      const apiResponse = await axios.post('https://api.indexnow.org/IndexNow', payload, {
        headers: { 'Content-Type': 'application/json; charset=utf-8' }
      });
      if (apiResponse.status === 200 || apiResponse.status === 202) {
        console.log('✅ IndexNow API submission successful!');
      } else {
        console.warn('⚠️ IndexNow API response:', apiResponse.status);
      }
    } catch (apiError) {
      const errData = apiError.response?.data;
      if (errData?.errorCode === 'UserForbiddedToAccessSite') {
        console.warn('⚠️ IndexNow API 403: Verify your site at https://www.bing.com/webmasters first.');
      } else if (apiError.response?.status === 403) {
        console.warn('⚠️ IndexNow API 403:', JSON.stringify(errData));
      } else {
        console.error('❌ IndexNow API error:', apiError.message);
      }
    }

  } catch (error) {
    console.error('❌ Error in IndexNow submission:', error.message);
  }
}

// Create the key file in the public directory if it doesn't exist
const publicPath = path.resolve('docs/.vuepress/public');
const keyFilePath = path.join(publicPath, `${INDEXNOW_KEY}.txt`);
if (!fs.existsSync(keyFilePath)) {
  fs.writeFileSync(keyFilePath, INDEXNOW_KEY);
  console.log(`Created IndexNow key file: ${keyFilePath}`);
}

submitIndexNow();
