import comp from "C:/web/blog/docs/.vuepress/.temp/pages/ai/chatgpt.html.vue"
const data = JSON.parse("{\"path\":\"/ai/chatgpt.html\",\"title\":\"ChatGPT 深度使用指南\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"ChatGPT 深度使用指南\",\"description\":\"2026年最新ChatGPT国内使用教程，涵盖官网漫游指南与国内镜像站推荐，附详细Prompt提问技巧。\"},\"readingTime\":{\"minutes\":2.26,\"words\":678},\"filePathRelative\":\"ai/chatgpt.md\",\"excerpt\":\"\\n<p>ChatGPT 是由 OpenAI 开发的大型语言模型，它通过对话方式与用户交互，能够执行从简单问答到复杂代码编写的各种任务。</p>\\n<hr>\\n<h2>🌏 国内使用方案对比</h2>\\n<table>\\n<thead>\\n<tr>\\n<th style=\\\"text-align:left\\\">方案</th>\\n<th style=\\\"text-align:left\\\">网络要求</th>\\n<th style=\\\"text-align:left\\\">账号难度</th>\\n<th style=\\\"text-align:left\\\">核心优势</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td style=\\\"text-align:left\\\"><strong>官网方案</strong></td>\\n<td style=\\\"text-align:left\\\">需魔法上网</td>\\n<td style=\\\"text-align:left\\\">高（需海外手机号）</td>\\n<td style=\\\"text-align:left\\\">原汁原味，支持最新模型</td>\\n</tr>\\n<tr>\\n<td style=\\\"text-align:left\\\"><strong>镜像方案</strong></td>\\n<td style=\\\"text-align:left\\\"><strong>国内直连</strong></td>\\n<td style=\\\"text-align:left\\\"><strong>极低（即开即用）</strong></td>\\n<td style=\\\"text-align:left\\\"><strong>无需翻墙，相应迅速</strong></td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
