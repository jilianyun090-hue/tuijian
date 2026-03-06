<template><div><h1 id="cursor-ai-智能编程指南" tabindex="-1"><a class="header-anchor" href="#cursor-ai-智能编程指南"><span>Cursor AI 智能编程指南</span></a></h1>
<p>Cursor 是一款基于 VS Code 的 AI 驱动代码编辑器，内置 GPT-4 和 Claude 等顶级 AI 模型，让你直接在编辑器中与 AI 对话编程。它正在改变开发者的工作方式，被誉为&quot;程序员的 AI 副驾驶&quot;。</p>
<h2 id="cursor-是什么" tabindex="-1"><a class="header-anchor" href="#cursor-是什么"><span>Cursor 是什么</span></a></h2>
<p>Cursor 由 Anysphere 公司开发，基于 VS Code 构建，保留了 VS Code 的全部功能和插件生态，同时深度集成了多个 AI 模型。你可以像使用普通编辑器一样写代码，随时召唤 AI 帮你写代码、解释代码、修复 Bug。</p>
<p><strong>Cursor vs VS Code + Copilot：</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">功能</th>
<th style="text-align:left">Cursor</th>
<th style="text-align:left">VS Code + Copilot</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><strong>AI 对话</strong></td>
<td style="text-align:left">内置完整对话窗口</td>
<td style="text-align:left">需要 Copilot Chat 插件</td>
</tr>
<tr>
<td style="text-align:left"><strong>多模型支持</strong></td>
<td style="text-align:left">GPT-4, Claude, 自定义</td>
<td style="text-align:left">仅 GPT-4</td>
</tr>
<tr>
<td style="text-align:left"><strong>代码编辑</strong></td>
<td style="text-align:left">AI 可直接修改当前文件</td>
<td style="text-align:left">主要是建议和补全</td>
</tr>
<tr>
<td style="text-align:left"><strong>上下文理解</strong></td>
<td style="text-align:left">自动索引整个项目</td>
<td style="text-align:left">仅当前文件</td>
</tr>
<tr>
<td style="text-align:left"><strong>价格</strong></td>
<td style="text-align:left">$20/月 (Pro)</td>
<td style="text-align:left">$10/月</td>
</tr>
</tbody>
</table>
<h2 id="安装与配置" tabindex="-1"><a class="header-anchor" href="#安装与配置"><span>安装与配置</span></a></h2>
<h3 id="_1-下载安装" tabindex="-1"><a class="header-anchor" href="#_1-下载安装"><span>1. 下载安装</span></a></h3>
<ol>
<li>访问 <a href="https://cursor.sh" target="_blank" rel="noopener noreferrer">cursor.sh</a> 官网</li>
<li>下载对应系统版本（Windows / macOS / Linux）</li>
<li>安装并启动</li>
</ol>
<h3 id="_2-导入-vs-code-配置" tabindex="-1"><a class="header-anchor" href="#_2-导入-vs-code-配置"><span>2. 导入 VS Code 配置</span></a></h3>
<p>首次启动时，Cursor 会提示你导入 VS Code 的：</p>
<ul>
<li>扩展插件</li>
<li>主题设置</li>
<li>快捷键配置</li>
<li>用户设置</li>
</ul>
<p>一键导入即可无缝迁移。</p>
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
<td style="text-align:left"><strong>Free</strong></td>
<td style="text-align:left">免费</td>
<td style="text-align:left">每月 2000 次补全 + 50 次高级请求</td>
</tr>
<tr>
<td style="text-align:left"><strong>Pro</strong></td>
<td style="text-align:left">$20/月</td>
<td style="text-align:left">无限补全 + 500 次高级请求</td>
</tr>
<tr>
<td style="text-align:left"><strong>Business</strong></td>
<td style="text-align:left">$40/月</td>
<td style="text-align:left">团队协作 + 管理控制台</td>
</tr>
</tbody>
</table>
<blockquote>
<p>💡 可通过 <RouteLink to="/account/">合租平台</RouteLink> 降低 Pro 订阅费用</p>
</blockquote>
<h2 id="核心-ai-功能" tabindex="-1"><a class="header-anchor" href="#核心-ai-功能"><span>核心 AI 功能</span></a></h2>
<h3 id="_1-tab-智能补全" tabindex="-1"><a class="header-anchor" href="#_1-tab-智能补全"><span>1. Tab 智能补全</span></a></h3>
<p>Cursor 的 Tab 补全远超传统智能感知：</p>
<ul>
<li>不仅补全当前行，还能预测接下来数行代码</li>
<li>理解项目上下文，补全内容与项目风格一致</li>
<li>支持多行补全和函数级补全</li>
</ul>
<h3 id="_2-ctrl-k-内联编辑" tabindex="-1"><a class="header-anchor" href="#_2-ctrl-k-内联编辑"><span>2. <code v-pre>Ctrl+K</code> 内联编辑</span></a></h3>
<p>选中一段代码，按 <code v-pre>Ctrl+K</code>，输入你的需求：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>选中一个函数 → Ctrl+K → "给这个函数添加错误处理和日志记录"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>AI 会直接在当前位置修改代码，你可以预览变更后接受或拒绝。</p>
<h3 id="_3-ctrl-l-ai-聊天" tabindex="-1"><a class="header-anchor" href="#_3-ctrl-l-ai-聊天"><span>3. <code v-pre>Ctrl+L</code> AI 聊天</span></a></h3>
<p>打开侧边栏 AI 对话窗口：</p>
<ul>
<li>询问代码功能和实现方式</li>
<li>让 AI 生成新的函数或模块</li>
<li>调试：粘贴错误信息，AI 帮你定位问题</li>
<li>代码审查：让 AI 检查代码质量</li>
</ul>
<h3 id="_4-ctrl-i-全局编辑-composer" tabindex="-1"><a class="header-anchor" href="#_4-ctrl-i-全局编辑-composer"><span>4. <code v-pre>Ctrl+I</code> 全局编辑 (Composer)</span></a></h3>
<p>最强大的功能 — 多文件同时编辑：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>输入："给这个 React 项目添加暗色模式，包括主题切换按钮、CSS 变量和 localStorage 持久化"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Cursor 会同时修改多个相关文件，自动处理导入和引用关系。</p>
<h2 id="常用快捷键" tabindex="-1"><a class="header-anchor" href="#常用快捷键"><span>常用快捷键</span></a></h2>
<table>
<thead>
<tr>
<th style="text-align:left">快捷键</th>
<th style="text-align:left">功能</th>
<th style="text-align:left">使用场景</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>Tab</code></td>
<td style="text-align:left">接受 AI 补全</td>
<td style="text-align:left">编码时自动触发</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>Ctrl+K</code></td>
<td style="text-align:left">内联 AI 编辑</td>
<td style="text-align:left">修改选中代码</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>Ctrl+L</code></td>
<td style="text-align:left">打开 AI 聊天</td>
<td style="text-align:left">提问和生成代码</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>Ctrl+I</code></td>
<td style="text-align:left">全局编辑器</td>
<td style="text-align:left">多文件修改</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>Ctrl+Shift+K</code></td>
<td style="text-align:left">终端 AI</td>
<td style="text-align:left">生成终端命令</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>Esc</code></td>
<td style="text-align:left">拒绝 AI 建议</td>
<td style="text-align:left">不需要补全时</td>
</tr>
</tbody>
</table>
<h2 id="实战技巧" tabindex="-1"><a class="header-anchor" href="#实战技巧"><span>实战技巧</span></a></h2>
<h3 id="高效-prompt-写法" tabindex="-1"><a class="header-anchor" href="#高效-prompt-写法"><span>高效 Prompt 写法</span></a></h3>
<p><strong>❌ 差的 Prompt：</strong></p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>帮我写一个函数</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>✅ 好的 Prompt：</strong></p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>写一个 Python 函数 parse_csv_data，接收文件路径参数，</span></span>
<span class="line"><span>读取 CSV 文件，跳过表头，返回字典列表。</span></span>
<span class="line"><span>需要处理文件不存在和编码错误的异常，使用 type hints。</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-引用上下文" tabindex="-1"><a class="header-anchor" href="#使用-引用上下文"><span>使用 @ 引用上下文</span></a></h3>
<p>在对话中使用 <code v-pre>@</code> 符号引用项目文件：</p>
<ul>
<li><code v-pre>@filename.py</code> — 引用特定文件</li>
<li><code v-pre>@folder/</code> — 引用整个目录</li>
<li><code v-pre>@Docs</code> — 搜索外部文档</li>
</ul>
<h3 id="配合-cursorrules-文件" tabindex="-1"><a class="header-anchor" href="#配合-cursorrules-文件"><span>配合 .cursorrules 文件</span></a></h3>
<p>在项目根目录创建 <code v-pre>.cursorrules</code> 文件，定义 AI 的行为规范：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>你是一个 Python 开发助手。</span></span>
<span class="line"><span>- 使用 Python 3.12+ 语法</span></span>
<span class="line"><span>- 遵循 PEP 8 规范</span></span>
<span class="line"><span>- 所有函数添加 docstring</span></span>
<span class="line"><span>- 使用 type hints</span></span>
<span class="line"><span>- 偏好使用 asyncio 处理并发</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2>
<p><strong>Q: Cursor 免费版够用吗？</strong></p>
<p>对于个人学习和小项目完全够用。每月 2000 次补全 + 50 次高级请求可以满足日常需求。</p>
<p><strong>Q: 我的 VS Code 插件能用吗？</strong></p>
<p>可以。Cursor 基于 VS Code 构建，所有 VS Code 插件都可以直接安装使用。</p>
<p><strong>Q: Cursor 需要翻墙吗？</strong></p>
<p>需要。Cursor 的 AI 功能需要连接海外服务器。→ <RouteLink to="/airport/">机场推荐</RouteLink></p>
<p><strong>Q: 代码安全性如何？</strong></p>
<p>Cursor 承诺不会使用用户代码进行训练。Pro 用户可以开启隐私模式，确保代码不被存储。</p>
<hr>
<ul>
<li><RouteLink to="/ai/midjourney-guide.html">Midjourney AI 绘画指南</RouteLink></li>
<li><RouteLink to="/ai/">AI 工具导航</RouteLink></li>
<li><RouteLink to="/account/platforms.html">合租平台推荐</RouteLink></li>
<li><RouteLink to="/airport/">机场推荐</RouteLink></li>
<li><RouteLink to="/">回到首页</RouteLink></li>
</ul>
</div></template>


