export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"科学上网与机场推荐指南\",\"description\":\"2026年科学上网机场推荐指南，精选翻墙机场评测、流媒体解锁教程、AI工具使用攻略与账号合租方案\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/favicon.png\"}],[\"script\",{\"defer\":true,\"data-website-id\":\"your-website-id\",\"src\":\"https://cloud.umami.is/script.js\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
