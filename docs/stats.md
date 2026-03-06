---
title: 网站数据统计
description: 资源导航指南网站数据统计面板，包含页面访问量、访客来源、内容分布等核心数据指标。
head:
  - - meta
    - name: keywords
      content: 网站统计,流量数据,访问统计,站点数据
---

# 网站数据统计

本站使用 [Umami](https://umami.is/) 进行实时访客统计，数据公开透明。

<div style="background:#f9f9f9;border:1px solid #e8e8e8;border-radius:8px;padding:16px 20px;margin:16px 0;font-size:14px;color:#666;">
  <strong>实时统计面板：</strong>部署完成后请将下方的 iframe src 替换为您的 Umami 分享链接br/>
  注册 <a href="https://cloud.umami.is/" target="_blank">Umami Cloud</a>（免费），添加网站 设置 开启分享链接，复制链接填入下方代码。
</div>

<iframe style="width:100%;height:800px;border:0;border-radius:8px;overflow:hidden;" src="https://cloud.umami.is/share/your-share-id/your-domain" loading="lazy"></iframe>

<style>
.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin: 24px 0;
}
@media (max-width: 768px) {
  .stats-grid { grid-template-columns: 1fr; }
}
.stats-card {
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 24px;
}
.stats-card h3 {
  margin: 0 0 20px 0;
  font-size: 18px;
  font-weight: 600;
  color: #333;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 12px;
}
.bar-row {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 13px;
  line-height: 1;
}
.bar-label {
  width: 180px;
  min-width: 180px;
  color: #555;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: right;
  padding-right: 12px;
}
.bar-track {
  flex: 1;
  height: 20px;
  background: #f5f5f5;
  border-radius: 3px;
  position: relative;
}
.bar-fill-green {
  height: 100%;
  background: linear-gradient(90deg, #7ec87e, #5cb85c);
  border-radius: 3px;
  min-width: 2px;
}
.bar-fill-blue {
  height: 100%;
  background: linear-gradient(90deg, #7ec8e3, #5b9bd5);
  border-radius: 3px;
  min-width: 2px;
}
.bar-value {
  min-width: 40px;
  text-align: right;
  color: #888;
  font-size: 12px;
  padding-left: 8px;
}
.counter-box {
  text-align: center;
  padding: 24px;
  margin: 24px 0;
  background: #f9f9f9;
  border-radius: 8px;
}
.counter-num {
  font-size: 48px;
  font-weight: 700;
  color: #5cb85c;
  line-height: 1.2;
}
.counter-label {
  font-size: 14px;
  color: #999;
  margin-top: 4px;
}
.stats-summary {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin: 24px 0;
}
.summary-item {
  background: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
}
.summary-num {
  font-size: 28px;
  font-weight: 700;
  color: #333;
}
.summary-label {
  font-size: 13px;
  color: #999;
  margin-top: 4px;
}
</style>

<div class="stats-summary">
  <div class="summary-item">
    <div class="summary-num">2,235</div>
    <div class="summary-label">总访问量</div>
  </div>
  <div class="summary-item">
    <div class="summary-num">1,847</div>
    <div class="summary-label">独立访客</div>
  </div>
  <div class="summary-item">
    <div class="summary-num">24</div>
    <div class="summary-label">文章总数</div>
  </div>
  <div class="summary-item">
    <div class="summary-num">6</div>
    <div class="summary-label">栏目数量</div>
  </div>
</div>

<div class="stats-grid">

<div class="stats-card">
<h3>页面访问</h3>

<div class="bar-row">
  <div class="bar-label">2026年翻墙机场推荐</div>
  <div class="bar-track"><div class="bar-fill-green" style="width:100%"></div></div>
  <div class="bar-value">331</div>
</div>

<div class="bar-row">
  <div class="bar-label">2026最新免费美区Apple...</div>
  <div class="bar-track"><div class="bar-fill-green" style="width:49%"></div></div>
  <div class="bar-value">162</div>
</div>

<div class="bar-row">
  <div class="bar-label">首页</div>
  <div class="bar-track"><div class="bar-fill-green" style="width:37%"></div></div>
  <div class="bar-value">121</div>
</div>

<div class="bar-row">
  <div class="bar-label">SSONE机场评测</div>
  <div class="bar-track"><div class="bar-fill-green" style="width:29%"></div></div>
  <div class="bar-value">95</div>
</div>

<div class="bar-row">
  <div class="bar-label">2026年热门翻墙机场推荐</div>
  <div class="bar-track"><div class="bar-fill-green" style="width:26%"></div></div>
  <div class="bar-value">85</div>
</div>

<div class="bar-row">
  <div class="bar-label">分类</div>
  <div class="bar-track"><div class="bar-fill-green" style="width:25%"></div></div>
  <div class="bar-value">82</div>
</div>

<div class="bar-row">
  <div class="bar-label">Shadowrocket(小火...</div>
  <div class="bar-track"><div class="bar-fill-green" style="width:24%"></div></div>
  <div class="bar-value">78</div>
</div>

<div class="bar-row">
  <div class="bar-label">XXYUN机场评测</div>
  <div class="bar-track"><div class="bar-fill-green" style="width:23%"></div></div>
  <div class="bar-value">77</div>
</div>

<div class="bar-row">
  <div class="bar-label">9esim使用指南</div>
  <div class="bar-track"><div class="bar-fill-green" style="width:21%"></div></div>
  <div class="bar-value">69</div>
</div>

<div class="bar-row">
  <div class="bar-label">博客</div>
  <div class="bar-track"><div class="bar-fill-green" style="width:20%"></div></div>
  <div class="bar-value">65</div>
</div>

<div class="bar-row">
  <div class="bar-label">Asspp下载使用教程</div>
  <div class="bar-track"><div class="bar-fill-green" style="width:15%"></div></div>
  <div class="bar-value">49</div>
</div>

<div class="bar-row">
  <div class="bar-label">2026年最新Telegram...</div>
  <div class="bar-track"><div class="bar-fill-green" style="width:14%"></div></div>
  <div class="bar-value">46</div>
</div>

<div class="bar-row">
  <div class="bar-label">2026年怎么选VPN机场</div>
  <div class="bar-track"><div class="bar-fill-green" style="width:14%"></div></div>
  <div class="bar-value">45</div>
</div>

<div class="bar-row">
  <div class="bar-label">机场推荐导航</div>
  <div class="bar-track"><div class="bar-fill-green" style="width:13%"></div></div>
  <div class="bar-value">43</div>
</div>

</div>

<div class="stats-card">
<h3>访客来源</h3>

<div class="bar-row">
  <div class="bar-label">https://www.google.com/</div>
  <div class="bar-track"><div class="bar-fill-blue" style="width:100%"></div></div>
  <div class="bar-value">621</div>
</div>

<div class="bar-row">
  <div class="bar-label">https://www.google.com.hk/</div>
  <div class="bar-track"><div class="bar-fill-blue" style="width:49%"></div></div>
  <div class="bar-value">306</div>
</div>

<div class="bar-row">
  <div class="bar-label">https://www.bing.com/</div>
  <div class="bar-track"><div class="bar-fill-blue" style="width:35%"></div></div>
  <div class="bar-value">219</div>
</div>

<div class="bar-row">
  <div class="bar-label">https://www.example.com/posts...</div>
  <div class="bar-track"><div class="bar-fill-blue" style="width:7%"></div></div>
  <div class="bar-value">45</div>
</div>

<div class="bar-row">
  <div class="bar-label">https://www.example.com/artic...</div>
  <div class="bar-track"><div class="bar-fill-blue" style="width:6%"></div></div>
  <div class="bar-value">35</div>
</div>

<div class="bar-row">
  <div class="bar-label">https://github.com/</div>
  <div class="bar-track"><div class="bar-fill-blue" style="width:4%"></div></div>
  <div class="bar-value">23</div>
</div>

<div class="bar-row">
  <div class="bar-label">https://www.example.com/airport/</div>
  <div class="bar-track"><div class="bar-fill-blue" style="width:3%"></div></div>
  <div class="bar-value">17</div>
</div>

<div class="bar-row">
  <div class="bar-label">https://duckduckgo.com/</div>
  <div class="bar-track"><div class="bar-fill-blue" style="width:2%"></div></div>
  <div class="bar-value">11</div>
</div>

<div class="bar-row">
  <div class="bar-label">https://yandex.com/</div>
  <div class="bar-track"><div class="bar-fill-blue" style="width:2%"></div></div>
  <div class="bar-value">10</div>
</div>

<div class="bar-row">
  <div class="bar-label">https://www.example.com/blog/</div>
  <div class="bar-track"><div class="bar-fill-blue" style="width:2%"></div></div>
  <div class="bar-value">10</div>
</div>

<div class="bar-row">
  <div class="bar-label">https://www.example.com/resou...</div>
  <div class="bar-track"><div class="bar-fill-blue" style="width:1.5%"></div></div>
  <div class="bar-value">9</div>
</div>

<div class="bar-row">
  <div class="bar-label">https://cn.bing.com/</div>
  <div class="bar-track"><div class="bar-fill-blue" style="width:1.5%"></div></div>
  <div class="bar-value">9</div>
</div>

<div class="bar-row">
  <div class="bar-label">https://www.example.com/blog/...</div>
  <div class="bar-track"><div class="bar-fill-blue" style="width:1%"></div></div>
  <div class="bar-value">5</div>
</div>

<div class="bar-row">
  <div class="bar-label">https://www.example.com/</div>
  <div class="bar-track"><div class="bar-fill-blue" style="width:1%"></div></div>
  <div class="bar-value">5</div>
</div>

</div>

</div>

---

## 内容分布

| 栏目 | 文章数| 覆盖内容 |
| :--- | :--- | :--- |
| 流媒体观看| 6  | Netflix、Disney+、YouTube、Spotify、Hulu/HBO |
| 账号合租 | 4  | 平台推荐、价格行情、避坑指南|
| 优质线路 | 6  | 机场推荐、选购指南、客户端教程 |
| AI 使用指南 | 5  | ChatGPT、Claude、Gemini、接码平台|
| 科学上网知识库| 1  | 基础知识、协议对比、线路原 |
| 首页 | 1  | 站点导航与最近更新|

---

## 机场推荐状态监控

| 机场名称 | 线路类型 | 最低月付| 状态|
| :--- | :--- | :--- | :--- |
| 极连| IEPL 专线 | ¥8/月| 正常运营 |
| 奈云 | 中转 + IEPL | ¥10.6/月(年付) | 正常运营 |
| 隐云 | IPLC/IEPL/BGP | ¥25/季| 正常运营 |
| 山海机场 | 中转 + 专线 + 直连 | ¥6/月| 正常运营 |
| 光速云 | BGP 中转 | ¥15/月| 正常运营 |
| 光年| IEPL 专线 | ¥18/月| 正常运营 |
| 全球| IPLC 专线 | ¥20/月| 正常运营 |
| 星岛| 中转 | ¥15/月| 正常运营 |
| 大哥云| 中转 + 专线 | ¥19.9/月| 正常运营 |
| 龙猫云| IPLC 专线 | ¥15/月| 正常运营 |
| 飞鸟机场 | 中转 + IEPL | ¥15/月| 正常运营 |

---

- [查看所有标签](/tag/)
- [机场推荐](/airport/)
- [回到首页](./index.md)
