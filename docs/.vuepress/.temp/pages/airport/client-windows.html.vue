<template><div><h1 id="windows-mac-linux-客户端下载与配置" tabindex="-1"><a class="header-anchor" href="#windows-mac-linux-客户端下载与配置"><span>Windows / Mac / Linux 客户端下载与配置</span></a></h1>
<p>本教程以 <strong>Clash Verge Rev</strong> 为例，手把手教您完成从下载安装到成功科学上网的全过程。Clash Verge Rev 是目PC 端最推荐的代理客户端，界面清晰、内TUN 模式、支持规则分流。</p>
<h2 id="下载安装" tabindex="-1"><a class="header-anchor" href="#下载安装"><span>下载安装</span></a></h2>
<h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows"><span>Windows</span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:left">版本</th>
<th style="text-align:left">下载链接</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><strong>Windows x64</strong> (推荐)</td>
<td style="text-align:left"><a href="https://file.ermao.net/files/clash-verge-rev/Clash.Verge.Windows.x64.exe" target="_blank" rel="noopener noreferrer">国内加速下载</a></td>
<td style="text-align:left">适用于绝大多Windows 电脑</td>
</tr>
<tr>
<td style="text-align:left">Windows ARM64</td>
<td style="text-align:left"><a href="https://file.ermao.net/files/clash-verge-rev/Clash.Verge.Windows.arm64.exe" target="_blank" rel="noopener noreferrer">ARM 版本下载</a></td>
<td style="text-align:left">适用ARM 架构设备 (Surface Pro X)</td>
</tr>
</tbody>
</table>
<h3 id="macos" tabindex="-1"><a class="header-anchor" href="#macos"><span>macOS</span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:left">版本</th>
<th style="text-align:left">下载链接</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><strong>Apple Silicon</strong> (推荐)</td>
<td style="text-align:left"><a href="https://file.ermao.net/files/clash-verge-rev/Clash.Verge.Mac.aarch64.dmg" target="_blank" rel="noopener noreferrer">M 系列芯片下载</a></td>
<td style="text-align:left">适用M1/M2/M3/M4 芯片 Mac</td>
</tr>
<tr>
<td style="text-align:left">Intel x64</td>
<td style="text-align:left"><a href="https://file.ermao.net/files/clash-verge-rev/Clash.Verge.Mac.x64.dmg" target="_blank" rel="noopener noreferrer">Intel 芯片下载</a></td>
<td style="text-align:left">适用2020 年之前的 Intel Mac</td>
</tr>
</tbody>
</table>
<h3 id="linux" tabindex="-1"><a class="header-anchor" href="#linux"><span>Linux</span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:left">版本</th>
<th style="text-align:left">下载链接</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Linux x64 deb</td>
<td style="text-align:left"><a href="https://file.ermao.net/files/clash-verge-rev/Clash.Verge.Linux.x64.deb" target="_blank" rel="noopener noreferrer">下载</a></td>
<td style="text-align:left">适用Ubuntu / Debian 系发行版</td>
</tr>
<tr>
<td style="text-align:left">Linux ARM64 deb</td>
<td style="text-align:left"><a href="https://file.ermao.net/files/clash-verge-rev/Clash.Verge.Linux.arm64.deb" target="_blank" rel="noopener noreferrer">下载</a></td>
<td style="text-align:left">适用ARM 架构 Linux</td>
</tr>
</tbody>
</table>
<p>其他版本可前往 <a href="https://github.com/clash-verge-rev/clash-verge-rev/releases" target="_blank" rel="noopener noreferrer">GitHub Releases</a> 获取。</p>
<hr>
<h2 id="快速安装要" tabindex="-1"><a class="header-anchor" href="#快速安装要"><span>快速安装要</span></a></h2>
<table>
<thead>
<tr>
<th style="text-align:left">平台</th>
<th style="text-align:left">安装注意事项</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><strong>Windows</strong></td>
<td style="text-align:left">安装后启用「服务模式」和「TUN 模式」，并开启系统代</td>
</tr>
<tr>
<td style="text-align:left"><strong>macOS</strong></td>
<td style="text-align:left">拖到应用程序后，首次运行授予网络权限，开启系统代理与 TUN</td>
</tr>
<tr>
<td style="text-align:left"><strong>Linux</strong></td>
<td style="text-align:left">优先使用 deb 包，安装后按提示启动服务，参考发行版文档开TUN</td>
</tr>
</tbody>
</table>
<hr>
<h2 id="配置订阅" tabindex="-1"><a class="header-anchor" href="#配置订阅"><span>配置订阅</span></a></h2>
<p>完成安装后按以下步骤导入机场订阅。</p>
<h3 id="第一步-获取订阅链接" tabindex="-1"><a class="header-anchor" href="#第一步-获取订阅链接"><span>第一步：获取订阅链接</span></a></h3>
<p>登录您的机场官网，在用户面板找到&quot;订阅链接&quot;Clash 订阅&quot;，复制整URL。如果还没有机场，可以参<RouteLink to="/airport/">优质线路推荐</RouteLink> 选购。</p>
<h3 id="第二步-导入订阅" tabindex="-1"><a class="header-anchor" href="#第二步-导入订阅"><span>第二步：导入订阅</span></a></h3>
<ol>
<li>打开 Clash Verge Rev，点击左侧菜单中***「订阅** 选项。</li>
<li>将复制的订阅链接粘贴到输入框中。</li>
<li>点击 <strong>「导入</strong> 按钮。</li>
<li>导入成功后，订阅列表中会出现刚才导入的配置。</li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>订阅默认1440 分钟4 小时）自动更新一次。右键点击订编辑配置，可调整更新频率、名称等信息。</p>
</div>
<h3 id="第三步-启用服务模式tun" tabindex="-1"><a class="header-anchor" href="#第三步-启用服务模式tun"><span>第三步：启用服务模式TUN</span></a></h3>
<ol>
<li>进入 <strong>「设置</strong> 页面。</li>
<li>找到 <strong>「服务模式</strong>，点击右侧的&quot;安装&quot;按钮，安装成功后点击&quot;启动&quot;。</li>
<li>打开 <strong>「TUN 模式</strong> 开关。</li>
<li>打开 <strong>「系统代理</strong> 开关。</li>
</ol>
<h3 id="第四步-确认代理模式" tabindex="-1"><a class="header-anchor" href="#第四步-确认代理模式"><span>第四步：确认代理模式</span></a></h3>
<p>进入 <strong>「代理</strong> 页面，确认模式设置为 <strong>「规则</strong>。规则模式可以让国内流量直连、国外流量走代理，是最推荐的日常使用模式。</p>
<hr>
<h2 id="测试连接" tabindex="-1"><a class="header-anchor" href="#测试连接"><span>测试连接</span></a></h2>
<ol>
<li>Clash Verge Rev 中点***「测试** *<strong>「测试全部</strong>。</li>
<li>等待延迟测试完成，绿色表示节点可用。</li>
<li>打开浏览器访<a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Google</a> <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>，能正常加载说明配置成功。</li>
</ol>
<hr>
<h2 id="常见问题-faq" tabindex="-1"><a class="header-anchor" href="#常见问题-faq"><span>常见问题 (FAQ)</span></a></h2>
<h3 id="q-下载失败或速度很慢" tabindex="-1"><a class="header-anchor" href="#q-下载失败或速度很慢"><span>Q: 下载失败或速度很慢?</span></a></h3>
<p>优先使用上方&quot;国内加速下直链。如果仍然失败，尝试切换网络环境（如手机热点）或使用其他下载工具。</p>
<h3 id="q-订阅导入后没有节" tabindex="-1"><a class="header-anchor" href="#q-订阅导入后没有节"><span>Q: 订阅导入后没有节</span></a></h3>
<ol>
<li>确认订阅链接是否已过部分机场的订阅链接有有效期。</li>
<li>检查链接是否完整复制（不要遗漏开头的 <code v-pre>https://</code>）。</li>
<li>尝试点击订阅右侧更新&quot;按钮刷新。</li>
</ol>
<h3 id="q-tun-模式无法启动" tabindex="-1"><a class="header-anchor" href="#q-tun-模式无法启动"><span>Q: TUN 模式无法启动?</span></a></h3>
<ol>
<li>确保*<strong>管理员权</strong> 运行 Clash Verge Rev。</li>
<li>关闭其他 VPN 或代理软件（WireGuard、V2RayN 等），避免冲突。</li>
<li>Windows 用户检查是否已正确安装&quot;服务模式&quot;。</li>
</ol>
<h3 id="q-规则模式没有生效" tabindex="-1"><a class="header-anchor" href="#q-规则模式没有生效"><span>Q: 规则模式没有生效?</span></a></h3>
<p>进入「代理」页面，确认当前模式选择为「规则」而非「全局」或「直连」。切换后点击刷新订阅即可。</p>
<h3 id="q-clash-for-windows-还能用吗" tabindex="-1"><a class="header-anchor" href="#q-clash-for-windows-还能用吗"><span>Q: Clash for Windows 还能用吗?</span></a></h3>
<p>Clash for Windows (CfW) 原作者已2023 年停止维护。推荐迁移至 Clash Verge Rev，功能完全兼容且持续更新。如仍需使用 CfW，可下载 <a href="https://github.com/Z-Siqi/Clash-for-Windows_Chinese/releases/" target="_blank" rel="noopener noreferrer">汉化版</a>。</p>
<hr>
<ul>
<li><RouteLink to="/airport/">优质线路推荐</RouteLink></li>
<li><RouteLink to="/airport/choose-guide.html">机场选购避坑指南</RouteLink></li>
<li><RouteLink to="/airport/client-android.html">Android 客户端下载</RouteLink></li>
<li><RouteLink to="/airport/client-ios.html">iOS 客户端下载</RouteLink></li>
<li><RouteLink to="/">回到首页</RouteLink></li>
</ul>
</div></template>


