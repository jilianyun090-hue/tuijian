import comp from "C:/web/blog/docs/.vuepress/.temp/pages/airport/software.html.vue"
const data = JSON.parse("{\"path\":\"/airport/software.html\",\"title\":\"客户端下载指南\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"客户端下载指南\",\"description\":\"2026年全平台科学上网客户端推荐与下载指南。涵盖 Windows, Android, iOS, macOS 及 Linux 主流代理工具，提供详细对比与下载建议。\"},\"readingTime\":{\"minutes\":2.4,\"words\":719},\"filePathRelative\":\"airport/software.md\",\"excerpt\":\"\\n<p>在科学上网的过程中，选择一个稳定、好用的客户端与选择优质的机场节点同样重要。本页面为您汇总了 2026 年各平台主流、安全且维护频繁的客户端工具。</p>\\n<br>\\n<hr>\\n<h2>💻 桌面端 (Windows / macOS / Linux)</h2>\\n<p>桌面端推荐使用基于 <strong>Clash</strong> 内核的 UI 客户端，它们支持强大的分流规则和漂亮的用户界面。目前由于 Clash for Windows 停更，强烈推荐迁移至 <strong>Clash Verge Rev</strong>。</p>\\n<br>\\n<h3>Windows</h3>\\n<table>\\n<thead>\\n<tr>\\n<th style=\\\"text-align:left\\\">版本</th>\\n<th style=\\\"text-align:left\\\">下载链接</th>\\n<th style=\\\"text-align:left\\\">说明</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td style=\\\"text-align:left\\\"><strong>Windows x64</strong> (推荐)</td>\\n<td style=\\\"text-align:left\\\"><a href=\\\"https://file.ermao.net/files/clash-verge-rev/Clash.Verge.Windows.x64.exe\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">国内加速下载 ↗</a></td>\\n<td style=\\\"text-align:left\\\">适用于绝大多 Windows 电脑</td>\\n</tr>\\n<tr>\\n<td style=\\\"text-align:left\\\">Windows ARM64</td>\\n<td style=\\\"text-align:left\\\"><a href=\\\"https://file.ermao.net/files/clash-verge-rev/Clash.Verge.Windows.arm64.exe\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">ARM 版本下载 ↗</a></td>\\n<td style=\\\"text-align:left\\\">适用 ARM 架构设备 (Surface Pro X)</td>\\n</tr>\\n</tbody>\\n</table>\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
