import comp from "C:/web/blog/docs/.vuepress/.temp/pages/links.html.vue"
const data = JSON.parse("{\"path\":\"/links.html\",\"title\":\"友情链接\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"友情链接\",\"description\":\"资源导航指南友情链接，收录优质的科学上网、流媒体、AI工具相关站点。\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"友情链接\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://your-domain.com/links.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"科学上网与机场推荐指南\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"友情链接\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"资源导航指南友情链接，收录优质的科学上网、流媒体、AI工具相关站点。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"name\":\"keywords\",\"content\":\"友情链接,友链,合作站点\"}]]},\"readingTime\":{\"minutes\":0.87,\"words\":261},\"filePathRelative\":\"links.md\",\"excerpt\":\"\\n<p>欢迎优质站点申请友链交换，请通过页面底部联系方式提交申请。</p>\\n<h2>科学上网</h2>\\n<table>\\n<thead>\\n<tr>\\n<th style=\\\"text-align:left\\\">站点名称</th>\\n<th style=\\\"text-align:left\\\">链接</th>\\n<th style=\\\"text-align:left\\\">说明</th>\\n</tr>\\n</thead>\\n</table>\\n<p>| Clash 教程 | <a href=\\\"https://clashmac.cn.com/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">clashmac.cn.com</a> | AI 及流媒体节点推荐 |\\n| Theo Docs | <a href=\\\"https://doc.theojs.cn/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">doc.theojs.cn</a> | 流媒体与科学上网文档 |</p>\"}")
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
