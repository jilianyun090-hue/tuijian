import comp from "C:/web/blog/docs/.vuepress/.temp/pages/stats.html.vue"
const data = JSON.parse("{\"path\":\"/stats.html\",\"title\":\"网站数据统计\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"网站数据统计\",\"description\":\"资源导航指南网站数据统计面板，包含页面访问量、访客来源、内容分布等核心数据指标。\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"网站数据统计\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://your-domain.com/stats.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"科学上网与机场推荐指南\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"网站数据统计\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"资源导航指南网站数据统计面板，包含页面访问量、访客来源、内容分布等核心数据指标。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"name\":\"keywords\",\"content\":\"网站统计,流量数据,访问统计,站点数据\"}]]},\"readingTime\":{\"minutes\":5.94,\"words\":1783},\"filePathRelative\":\"stats.md\",\"excerpt\":\"\\n<p>本站使用 <a href=\\\"https://umami.is/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Umami</a> 进行实时访客统计，数据公开透明。</p>\\n<div style=\\\"background:#f9f9f9;border:1px solid #e8e8e8;border-radius:8px;padding:16px 20px;margin:16px 0;font-size:14px;color:#666;\\\">\\n  <strong>实时统计面板：</strong>部署完成后请将下方的 iframe src 替换为您的 Umami 分享链接br/&gt;\\n  注册 <a href=\\\"https://cloud.umami.is/\\\" target=\\\"_blank\\\">Umami Cloud</a>（免费），添加网站 设置 开启分享链接，复制链接填入下方代码。\\n</div>\"}")
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
