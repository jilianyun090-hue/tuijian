<template><div><h1 id="midjourney-ai-绘画使用指南" tabindex="-1"><a class="header-anchor" href="#midjourney-ai-绘画使用指南"><span>Midjourney AI 绘画使用指南</span></a></h1>
<p>Midjourney 是目前最强大的 AI 图像生成工具之一，通过文字描述（Prompt）即可生成高质量、风格多样的图像。无论你是设计师、插画师还是普通用户，都能用它创作令人惊叹的视觉作品。</p>
<h2 id="midjourney-是什么" tabindex="-1"><a class="header-anchor" href="#midjourney-是什么"><span>Midjourney 是什么</span></a></h2>
<p>Midjourney 是一个独立研究实验室开发的 AI 图像生成工具，主要通过 Discord 平台使用。用户输入文字描述（Prompt），AI 即可在约 60 秒内生成 4 张高质量图像。</p>
<p><strong>核心优势：</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">特点</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><strong>图像质量</strong></td>
<td style="text-align:left">目前 AI 绘画工具中画质最高，细节最丰富</td>
</tr>
<tr>
<td style="text-align:left"><strong>风格多样</strong></td>
<td style="text-align:left">支持写实、油画、水彩、赛博朋克、动漫等数十种风格</td>
</tr>
<tr>
<td style="text-align:left"><strong>上手简单</strong></td>
<td style="text-align:left">只需输入文字描述，无需任何设计基础</td>
</tr>
<tr>
<td style="text-align:left"><strong>迭代快速</strong></td>
<td style="text-align:left">约 60 秒生成 4 张图，支持放大、变化、重新生成</td>
</tr>
</tbody>
</table>
<h2 id="注册与准备" tabindex="-1"><a class="header-anchor" href="#注册与准备"><span>注册与准备</span></a></h2>
<h3 id="_1-注册-discord-账号" tabindex="-1"><a class="header-anchor" href="#_1-注册-discord-账号"><span>1. 注册 Discord 账号</span></a></h3>
<p>Midjourney 目前主要通过 Discord 使用，你需要先注册一个 Discord 账号：</p>
<ol>
<li>访问 <a href="https://discord.com" target="_blank" rel="noopener noreferrer">discord.com</a> 注册账号</li>
<li>下载 Discord 客户端（或使用网页版）</li>
<li>验证邮箱完成注册</li>
</ol>
<blockquote>
<p>💡 需要科学上网才能访问 Discord → <RouteLink to="/airport/">机场推荐</RouteLink></p>
</blockquote>
<h3 id="_2-加入-midjourney-服务器" tabindex="-1"><a class="header-anchor" href="#_2-加入-midjourney-服务器"><span>2. 加入 Midjourney 服务器</span></a></h3>
<ol>
<li>访问 <a href="https://www.midjourney.com" target="_blank" rel="noopener noreferrer">midjourney.com</a> 官网</li>
<li>点击 &quot;Join the Beta&quot; 加入 Discord 服务器</li>
<li>在任意 <code v-pre>#newbies</code> 频道中开始使用</li>
</ol>
<h3 id="_3-订阅套餐" tabindex="-1"><a class="header-anchor" href="#_3-订阅套餐"><span>3. 订阅套餐</span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:left">套餐</th>
<th style="text-align:left">价格</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><strong>Basic</strong></td>
<td style="text-align:left">$10/月</td>
<td style="text-align:left">约 200 张图/月，适合轻度使用</td>
</tr>
<tr>
<td style="text-align:left"><strong>Standard</strong></td>
<td style="text-align:left">$30/月</td>
<td style="text-align:left">无限生成（放松模式），推荐</td>
</tr>
<tr>
<td style="text-align:left"><strong>Pro</strong></td>
<td style="text-align:left">$60/月</td>
<td style="text-align:left">隐身模式 + 更快速度</td>
</tr>
</tbody>
</table>
<blockquote>
<p>💡 可通过 <RouteLink to="/account/">合租平台</RouteLink> 降低订阅费用</p>
</blockquote>
<h2 id="prompt-提示词技巧" tabindex="-1"><a class="header-anchor" href="#prompt-提示词技巧"><span>Prompt 提示词技巧</span></a></h2>
<h3 id="基础格式" tabindex="-1"><a class="header-anchor" href="#基础格式"><span>基础格式</span></a></h3>
<p>在 Discord 中输入 <code v-pre>/imagine</code> 命令，后接你的描述：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>/imagine prompt: a cute cat wearing a space suit, floating in the galaxy, cinematic lighting, 8k --ar 16:9</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="prompt-结构公式" tabindex="-1"><a class="header-anchor" href="#prompt-结构公式"><span>Prompt 结构公式</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>[主体描述] + [场景/背景] + [风格关键词] + [质量关键词] + [参数]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="常用风格关键词" tabindex="-1"><a class="header-anchor" href="#常用风格关键词"><span>常用风格关键词</span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:left">风格</th>
<th style="text-align:left">关键词</th>
<th style="text-align:left">效果</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">写实摄影</td>
<td style="text-align:left"><code v-pre>realistic, photo, DSLR</code></td>
<td style="text-align:left">接近真实照片</td>
</tr>
<tr>
<td style="text-align:left">油画风格</td>
<td style="text-align:left"><code v-pre>oil painting, by Monet</code></td>
<td style="text-align:left">经典艺术风格</td>
</tr>
<tr>
<td style="text-align:left">赛博朋克</td>
<td style="text-align:left"><code v-pre>cyberpunk, neon lights</code></td>
<td style="text-align:left">科技未来感</td>
</tr>
<tr>
<td style="text-align:left">动漫风格</td>
<td style="text-align:left"><code v-pre>anime style, Studio Ghibli</code></td>
<td style="text-align:left">日系动漫风</td>
</tr>
<tr>
<td style="text-align:left">水彩画</td>
<td style="text-align:left"><code v-pre>watercolor, soft tones</code></td>
<td style="text-align:left">柔和清新</td>
</tr>
<tr>
<td style="text-align:left">3D 渲染</td>
<td style="text-align:left"><code v-pre>3D render, Unreal Engine</code></td>
<td style="text-align:left">立体质感</td>
</tr>
</tbody>
</table>
<h3 id="常用参数" tabindex="-1"><a class="header-anchor" href="#常用参数"><span>常用参数</span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">作用</th>
<th style="text-align:left">示例</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>--ar</code></td>
<td style="text-align:left">画面比例</td>
<td style="text-align:left"><code v-pre>--ar 16:9</code>（横版）、<code v-pre>--ar 9:16</code>（竖版）</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>--v</code></td>
<td style="text-align:left">模型版本</td>
<td style="text-align:left"><code v-pre>--v 6</code>（最新版本）</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>--q</code></td>
<td style="text-align:left">质量控制</td>
<td style="text-align:left"><code v-pre>--q 2</code>（高质量）</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>--s</code></td>
<td style="text-align:left">风格强度</td>
<td style="text-align:left"><code v-pre>--s 750</code>（默认 100）</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>--no</code></td>
<td style="text-align:left">排除元素</td>
<td style="text-align:left"><code v-pre>--no text, watermark</code></td>
</tr>
</tbody>
</table>
<h2 id="实用案例" tabindex="-1"><a class="header-anchor" href="#实用案例"><span>实用案例</span></a></h2>
<h3 id="商业海报设计" tabindex="-1"><a class="header-anchor" href="#商业海报设计"><span>商业海报设计</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>/imagine prompt: modern tech company poster, abstract geometric shapes, gradient blue and purple, minimalist design, clean typography space, professional --ar 2:3 --v 6</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="社交媒体配图" tabindex="-1"><a class="header-anchor" href="#社交媒体配图"><span>社交媒体配图</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>/imagine prompt: cozy coffee shop interior, warm lighting, autumn atmosphere, Instagram aesthetic, bokeh background --ar 1:1 --v 6</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="游戏概念设定" tabindex="-1"><a class="header-anchor" href="#游戏概念设定"><span>游戏概念设定</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>/imagine prompt: fantasy warrior character design, full body, detailed armor, epic pose, dark fantasy style, concept art --ar 2:3 --v 6</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2>
<p><strong>Q: Midjourney 免费吗？</strong></p>
<p>目前需要付费订阅才能使用，最低 $10/月。可通过 <RouteLink to="/account/">合租平台</RouteLink> 降低费用。</p>
<p><strong>Q: 生成的图片有版权吗？</strong></p>
<p>付费用户拥有生成图片的商用权。免费试用期间生成的图片遵循 CC BY-NC 协议。</p>
<p><strong>Q: 如何提高图片质量？</strong></p>
<p>使用更详细的 Prompt 描述，添加质量关键词（如 <code v-pre>8k, detailed, masterpiece</code>），并使用 <code v-pre>--q 2</code> 参数。</p>
<hr>
<ul>
<li><RouteLink to="/ai/cursor-guide.html">Cursor AI 编程指南</RouteLink></li>
<li><RouteLink to="/ai/">AI 工具导航</RouteLink></li>
<li><RouteLink to="/account/platforms.html">合租平台推荐</RouteLink></li>
<li><RouteLink to="/airport/">机场推荐</RouteLink></li>
<li><RouteLink to="/">回到首页</RouteLink></li>
</ul>
</div></template>


