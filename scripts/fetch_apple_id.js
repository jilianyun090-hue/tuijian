import axios from 'axios';
import fs from 'fs';
import path from 'path';

const TARGET_URL = 'https://fanqiangnan.com/appleid.html';
const OUTPUT_FILE = path.join(process.cwd(), 'docs/airport/apple-id-shared.md');

async function fetchAppleId() {
    try {
        console.log('正在获取数据自: ' + TARGET_URL);
        const response = await axios.get(TARGET_URL, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
        });
        const html = response.data;

        // 提取共享账号区域
        // 根据分析，区域开始于 🎁 Apple ID与小火箭共享账号，结束于 id="nodeSharingSection"
        const sectionMatch = html.match(/🎁 Apple ID与小火箭共享账号[\s\S]*?<div class="accounts-grid" id="accountsGrid">([\s\S]*?)<\/div>\s*<div[^>]*id="nodeSharingSection"/);
        
        if (!sectionMatch) {
            console.error('未找到账号区域。请检查目标网站结构是否发生变化。');
            return;
        }

        const gridHtml = sectionMatch[1];
        
        // 改进的正则匹配每个 account-card
        // 每个 card 内部有多个 div，我们需要匹配到闭合的那个
        // 观察发现每个 card 结束于 <div class="update-time">...</div> 之后的第一个 </div>
        const cardRegex = /<div class="account-card">([\s\S]*?<div class="update-time">[\s\S]*?<\/div>\s*<\/div>)/g;
        
        const cards = [];
        let match;
        while ((match = cardRegex.exec(gridHtml)) !== null) {
            const cardHtml = match[1];
            
            // 提取账号 (从 copyText 提取)
            const emailMatch = cardHtml.match(/copyText\('([^']+)', this\)">复制账号/);
            // 提取密码 (从 copyText 提取)
            const passwordMatch = cardHtml.match(/copyText\('([^']+)', this\)">复制密码/);
            // 提取地区
            const regionMatch = cardHtml.match(/<div class="account-region">([^<]+)<\/div>/);
            // 提取状态
            const statusMatch = cardHtml.match(/<span class="status-text">([^<]+)<\/span>/);
            // 提取更新时间
            const timeMatch = cardHtml.match(/<div class="update-time">更新时间：([^<]+)<\/div>/);

            if (emailMatch && passwordMatch) {
                cards.push({
                    email: emailMatch[1],
                    password: passwordMatch[1],
                    region: regionMatch ? regionMatch[1].trim() : '未知',
                    status: statusMatch ? statusMatch[1].trim() : '正常',
                    time: timeMatch ? timeMatch[1].trim() : '未知'
                });
            }
        }

        if (cards.length === 0) {
            console.warn('未解析到任何账号，请检查正则表达式。');
            // 输出一小段 HTML 供调试
            // console.log('DEBUG HTML:', gridHtml.substring(0, 500));
            return;
        }

        // 生成 Markdown 内容
        let content = `---
title: "【免费】2026 小火箭共享账号 | 美区ID / 苹果ID共享 (已购Shadowrocket) - 每日更新"
description: "2026年最新苹果 Apple ID 共享账号，包含美区、日区、港区等已购 Shadowrocket (小火箭) 的账号，每30分钟自动更新，确保稳定可用。免费下载小火箭 VPN 必备。"
head:
  - - meta
    - name: keywords
      content: 小火箭共享账号, 美区ID共享, 苹果ID共享, Shadowrocket, 免费Apple ID, 小火箭下载, 科学上网, 2026苹果ID, 免费节点
  - - meta
    - name: geo.region
      content: "CN"
  - - meta
    - name: geo.placename
      content: "China"
  - - meta
    - name: author
      content: "道一博客"
---

# 2026 免费苹果ID (支持Shadowrocket下载) 与小火箭共享账号

提供每30分钟自动更新的 **日区/港/台/美区苹果ID** 与免费 **小火箭VPN节点**。可用于 **Shadowrocket下载（小火箭下载）** 无需充值。账号稳定更新维护，内容一键复制。

::: danger 共享账号风险提示（必看）
1. **⚠️ 使用苹果ID必须从 App Store 登录，千万不要登录「iCloud」！** 否则可能导致锁机或者隐私泄漏！
2. **⚠️ 本站不提供任何付费解锁服务，也不会索取任何个人信息。** 任何收费解锁或信息索取行为，均为诈骗，请提高警惕。
:::

::: tip 使用须知
*   本资源来自海外社区贡献者，仅供学习和测试。请2小时内自行退出并删除。
*   登录后如弹出“开启双重认证”，请点击“**不升级**”或“**其他选项 -> 不升级**”。
*   共享账号容易被锁，如果无法登录请尝试其他账号或稍后再试。
:::

## 共享账号列表

| 地区 | 账号 | 密码 | 状态 | 更新时间 |
| :--- | :--- | :--- | :--- | :--- |
`;

        cards.forEach(card => {
            // 使用反引号包裹账号密码方便复制
            content += `| ${card.region} | \`${card.email}\` | \`${card.password}\` | ${card.status} | ${card.time} |\n`;
        });

        content += `
---

[回到首页](/) | [更多工具](/proxy/)
`;

        // 确保目录存在
        const dir = path.dirname(OUTPUT_FILE);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        fs.writeFileSync(OUTPUT_FILE, content);
        console.log(`成功抓取 ${cards.length} 个账号，已更新到 ${OUTPUT_FILE}`);

    } catch (error) {
        console.error('抓取过程中发生错误:', error.message);
    }
}

fetchAppleId();
