import comp from "C:/web/blog/docs/.vuepress/.temp/pages/proxy/line-type-guide.html.vue"
const data = JSON.parse("{\"path\":\"/proxy/line-type-guide.html\",\"title\":\"如何判断机场线路类型\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"如何判断机场线路类型\",\"description\":\"详细教程：如何判断一个机场使用的线路类型（IPLC/IEPL专线、CN2 GIA、BGP中转等），涵盖Traceroute路由追踪、IP归属分析、ASN验证、性能测试与AI辅助判断。\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"如何判断机场线路类型\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://your-domain.com/proxy/line-type-guide.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"科学上网与机场推荐指南\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"如何判断机场线路类型\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"详细教程：如何判断一个机场使用的线路类型（IPLC/IEPL专线、CN2 GIA、BGP中转等），涵盖Traceroute路由追踪、IP归属分析、ASN验证、性能测试与AI辅助判断。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"技术教。\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"CN2\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"IPLC专线\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"线路类型\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"科学上网\"}],[\"meta\",{\"name\":\"keywords\",\"content\":\"机场线路类型,IPLC专线,IEPL专线,CN2 GIA,BGP中转,Traceroute,路由追踪,IP分析,ASN验证,机场测线路判断\"}]],\"tag\":[\"科学上网\",\"线路类型\",\"IPLC专线\",\"CN2\",\"技术教。\"]},\"readingTime\":{\"minutes\":5.39,\"words\":1618},\"filePathRelative\":\"proxy/line-type-guide.md\",\"excerpt\":\"\\n<p>选购机场时，主要看线路质量，其次才是节点数量。但很多机场的宣传含糊不清，如何<strong>自己动手验证</strong>一个机场到底用的是什么线路？本文从基础到高级，手把手教你辨IPLC/IEPL 专线、CN2 GIA、BGP 中转等常见线路。</p>\\n<blockquote>\\n<p><strong>总体线路质量排名</strong> 华为云内网专&gt; IEPL 内网专线 &gt; IPLC 内网专线 &gt; CN2 GIA &gt; BGP 中转 &gt; 普通公网中。</p>\\n</blockquote>\\n<h2>一、基础判断：官方信息与用户反馈</h2>\\n<h3>1. 查看机场宣传</h3>\"}")
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
