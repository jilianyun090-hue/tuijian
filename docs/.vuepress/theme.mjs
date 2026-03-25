import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme({
    hostname: "https://clash-jichang.com",

    // 主题色：深蓝色
    themeColor: "#1565c0",

    // 网站 Logo
    logo: "/globe.png",
    
    docsDir: "docs",

    footer: '<a href="/airport/">机场推荐</a> | <a href="/ai/">AI指南</a> | <a href="/streaming/">流媒体</a> | <a href="/proxy/">知识库</a> | <a href="/links">友链</a><br/>📧 联系我们：haozevpn@gmail.com<br/>优质资源共享 · 助你畅享全球互联网自由',
    displayFooter: true,
    copyright: "Copyright © 2026 clash-jichang.com · All Rights Reserved",

    // 导航栏 (机场推荐突出放前面)
    navbar: [
        { text: "首页", link: "/" },
        { text: "机场推荐", link: "/airport/" },
        { text: "流媒体账号", link: "/streaming/" },
        { text: "合租平台", link: "/account/platforms.html" },
        { text: "AI使用指南", link: "/ai/" },
        { text: "科学上网知识库", link: "/proxy/" },
        {
            text: "更多",
            children: [
                { text: "友链", link: "/links" },
                { text: "标签", link: "/tag/" },
                { text: "统计", link: "/stats" },
            ],
        },
        {
            text: "",
            icon: "/tg-plane.svg",
            link: "http://t.me/JIAN6688"
        }
    ],

    // 侧边栏 (移除小图标, 以纯净大方的文字目录为主)
    sidebar: {
        "/streaming/": [
            {
                text: "流媒体指南",
                children: [
                    "",
                    "sms-guide",
                    "netflix-guide",
                    "disney-guide",
                    "spotify-guide",
                    "youtube-guide",
                    "hbo-max-guide",
                    "hulu-hbo-guide",
                ],
            },
        ],
        "/account/": [
            {
                text: "账号合租",
                children: [
                    "platforms",
                    "price",
                    "how-to-share",
                ],
            },
        ],
        "/airport/": [
            {
                text: "机场推荐",
                children: [
                    "",
                    "choose-guide",
                ],
            },
            {
                text: "客户端下载",
                children: [
                    { text: "全平台下载", link: "software" },
                    { text: "Windows", link: "client-windows" },
                    { text: "Android", link: "client-android" },
                    { text: "iOS", link: "client-ios" },
                ],
            },
        ],
        "/ai/": [
            {
                text: "AI 工具实战",
                children: [
                    "",
                    "chatgpt",
                    "claude-guide",
                    "gemini",
                    "grok-guide",
                    "midjourney-guide",
                    "cursor-guide",
                    "openclaw-guide",
                ],
            },
        ],
        "/proxy/": [
            {
                text: "知识库",
                children: [
                    "",
                    "vpn-guide",
                    "fanqiang-guide",
                    "line-type-guide",
                    "streaming-unlock-guide",
                    "router-vpn-guide",
                    "apple-id-guide",
                    "gfw-websites",
                    "telegram-guide",
                    "telegram-bot",
                    "clients",
                ],
            },
        ],
        "/tools/": [
            {
                text: "合租中心",
                children: [
                    "",
                ],
            },
        ],
        // 博客自动生成页面，不需要侧边栏
        "/tag/": false,
        "/category/": false,
        "/article/": false,
        "/star/": false,
        "/timeline/": false,
        "/links.html": false,
        "/stats.html": false,
    },



    // 关闭不必要的图标插件
    plugins: {
        blog: true,
        mdEnhance: {
            container: true,
        },
        icon: {
            assets: null,
        },
    },

    markdown: {
        align: true,
        attrs: true,
        tabs: true,
        tasklist: true,
    },

    // 隐藏作者和阅读时间
    pageInfo: ["Date", "Category", "Tag"],

    // 界面风格：极致纯净
    headerDepth: 2,
    darkmode: "toggle",
    fullscreen: false,
    backToTop: true,
    pure: true,
});
