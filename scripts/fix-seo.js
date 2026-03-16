import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const docsDir = path.join(__dirname, '../docs');

const titleMap = {
    '账号合租中心': '2026 流媒体与 AI 账号合租中心：Netflix、ChatGPT 等超低价拼车推荐',
    '合租避坑指南': '2026 流媒体账号合租避坑实战指南：防骗防跑路全攻略',
    '合租平台推荐': '2026 可靠的流媒体与 AI 账号合租平台推荐：银河录像局、奈飞小铺等对比',
    '账号合租价格行情': '2026 年最新流媒体与 AI 账号合租价格行情参考表',
    'AI 工具使用导航': '2026 必备 AI 工具使用导航与国内直连教程汇总',
    'Grok 4 使用指南': 'Grok 4 全面解析与国内直连使用高级指南',
    'Google Gemini 教程': 'Google Gemini 最强多模态 AI 模型国内直连使用全攻略',
    'Cursor AI 编程指南': '2026 Cursor AI 智能代码编辑器完整教程与实战指南',
    'Claude 3.5 使用攻略': 'Claude 3.5 Sonnet 注册、国内访问与高级使用完整攻略',
    'ChatGPT 深度使用指南': '2026 ChatGPT 深度使用指南：国内镜像站推荐与高效提问技巧',
    'Midjourney AI 绘画指南': '2026 Midjourney AI 绘画完整教程：注册、参数与实战案例',
    '客户端下载指南': '2026 全平台科学上网客户端下载指南：Clash、Shadowrocket 等代理软件',
    'Windows客户端下载': '2026 Windows 电脑端 Clash Verge Rev 科学上网客户端下载与配置教程',
    'IOS客户端下载': '2026 iOS 苹果手机端 Shadowrocket 小火箭科学上网客户端下载与配置教程',
    'Android客户端下载': '2026 Android 安卓手机端 Clash Meta 科学上网客户端下载与配置教程',
    '机场选购避坑指南': '2026 科学上网机场选购避坑与防跑路全方位综合指南',
    '科学上网知识库': '科学上网与翻墙基础知识全面指南（2026更新首选）',
    '如何判断机场线路类型': '如何准确判断机场节点线路类型：专线、中转与直连深度全方位评测',
    '翻墙后必备国外网站清单': '2026 翻墙后必看的优质国外网站清单与各类别访问详细指南',
    'Telegram 注册使用教程': '2026 年 Telegram (电报) 国内最新注册与安全使用完整详尽教程',
    '如何选择 VPN 机场避坑指南': '2026 年 VPN 机场选购实战与避坑指南：识别线路与稳定防跑路策略',
    '网站数据统计': '科学上网与流媒体账号评测网站访问数据全面统计图表',
    '友情链接': '2026 科学上网与流媒体服务、AI 工具优质网站友情链接专区',
    '账号合租': '流媒体与 AI 账号合租工具、价格监控及精选推荐（2026版）',
    'Hulu / HBO Max 观看指南': 'Hulu 与 HBO Max 国内观看完整指南：含区域解锁与合租订阅方案',
};

function walkSync(currentDirPath, callback) {
    fs.readdirSync(currentDirPath).forEach(function (name) {
        if (name === 'node_modules' || name === '.vuepress' || name.startsWith('.')) return;
        var filePath = path.join(currentDirPath, name);
        var stat = fs.statSync(filePath);
        if (stat.isFile() && filePath.endsWith('.md')) {
            callback(filePath, stat);
        } else if (stat.isDirectory()) {
            walkSync(filePath, callback);
        }
    });
}

function updateFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Update Title
    let titleMatch = content.match(/^title:\s*(.+)$/m);
    let titleChanged = false;
    if (titleMatch) {
        const title = titleMatch[1].trim();
        if (titleMap[title]) {
            content = content.replace(/^title:\s*(.+)$/m, `title: ${titleMap[title]}`);
            titleChanged = true;
            console.log(`Updated title in ${filePath}: ${title} -> ${titleMap[title]}`);
        } else if (title.length < 15 && !titleMap[title]) {
            // Generic expand
            const newTitle = `${title}（2026最新完整版）`;
            content = content.replace(/^title:\s*(.+)$/m, `title: ${newTitle}`);
            titleChanged = true;
            console.log(`Expanded title in ${filePath}: ${title} -> ${newTitle}`);
        }
    }

    // Update Description
    let descMatch = content.match(/^description:\s*(.+)$/m);
    let descChanged = false;
    if (descMatch) {
        let desc = descMatch[1].trim();
        if ((desc.startsWith('"') && desc.endsWith('"')) || (desc.startsWith("'") && desc.endsWith("'"))) {
            desc = desc.substring(1, desc.length - 1);
        }
        
        if (desc.length < 80) { 
            let appendix = '。为您量身定制的2026最新评测与实战教程方案，涵盖详细平台配置指导与实用有效避坑建议，助您全面优化安全数字生活体验。';
            
            let newDesc = desc;
            if (newDesc.endsWith('。') || newDesc.endsWith('.')) {
                 newDesc = newDesc + appendix.substring(1);
            } else {
                 newDesc = newDesc + appendix;
            }

            content = content.replace(/^description:\s*(.+)$/m, `description: ${newDesc}`);
            descChanged = true;
            console.log(`Expanded description in ${path.relative(docsDir, filePath)}`);
        }
    }

    if (titleChanged || descChanged) {
        fs.writeFileSync(filePath, content, 'utf8');
    }
}

walkSync(docsDir, (filePath) => {
    updateFile(filePath);
});
console.log('SEO Metadata update complete.');
