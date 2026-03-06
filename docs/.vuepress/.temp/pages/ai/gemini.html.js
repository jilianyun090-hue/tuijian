import comp from "C:/web/blog/docs/.vuepress/.temp/pages/ai/gemini.html.vue"
const data = JSON.parse("{\"path\":\"/ai/gemini.html\",\"title\":\"Google Gemini 教程\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Google Gemini 教程\",\"description\":\"Google 最强多模态 AI 模型 Gemini 使用全攻略。包含国内直连镜像版与海外官网版对比及使用建议。\"},\"readingTime\":{\"minutes\":1.99,\"words\":597},\"filePathRelative\":\"ai/gemini.md\",\"excerpt\":\"\\n<p>Google Gemini (原名 Bard) 是 Google 最强大的多模态 AI 模型，深度集成于整个 Google 生态链，并在逻辑分析、多媒体理解方面处于行业顶尖。</p>\\n<hr>\\n<h2>🌎 核心优势对比</h2>\\n<table>\\n<thead>\\n<tr>\\n<th style=\\\"text-align:left\\\">功能</th>\\n<th style=\\\"text-align:left\\\">优势特点</th>\\n<th style=\\\"text-align:left\\\">场景推荐</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td style=\\\"text-align:left\\\"><strong>多模态处理</strong></td>\\n<td style=\\\"text-align:left\\\">识别、生成图片、处理音频、视频的能力远超 GPT-4</td>\\n<td style=\\\"text-align:left\\\">多媒体创作者、内容策划</td>\\n</tr>\\n<tr>\\n<td style=\\\"text-align:left\\\"><strong>Workspace 联动</strong></td>\\n<td style=\\\"text-align:left\\\">极速总结 Docs、分析 Drive 内容、起草邮件</td>\\n<td style=\\\"text-align:left\\\">学生、白领、协同办公人员</td>\\n</tr>\\n<tr>\\n<td style=\\\"text-align:left\\\"><strong>实时联网</strong></td>\\n<td style=\\\"text-align:left\\\">直接连接 Google 搜索获取全球最新、实时的信息</td>\\n<td style=\\\"text-align:left\\\">新闻资讯跟进、实时数据查询</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
