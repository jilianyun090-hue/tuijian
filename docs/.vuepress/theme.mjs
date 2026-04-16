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
                    { text: "2026 最新翻墙机场推荐评测：便宜好用、稳定高速梯子与科学上网VPN指南 (长期更新)", link: "" },
                    { text: "2026 机场避坑指南：购买前必须看的 3 个硬指标", link: "choose-guide" },
                ],
            },
            {
                text: "客户端下载",
                children: [
                    { text: "2026 全平台科学上网客户端下载指南：Clash、Shadowrocket 等代理软件", link: "software" },
                    { text: "2026 Windows电脑端 Clash Verge Rev 科学上网客户端下载与配置教程", link: "client-windows" },
                    { text: "2026 Android安卓手机端 Clash Meta 科学上网客户端下载与配置教程", link: "client-android" },
                    { text: "2026 iOS苹果手机端 Shadowrocket 小火箭科学上网客户端下载与配置教程", link: "client-ios" },
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
                    { text: "2026最全 MetaCubeX 核心客户端维护清单", link: "clients" },
                    { text: "SSR、VLESS 与 Trojan 协议速度对比", link: "protocol-comparison" },
                    { text: "Hysteria 协议全面解析", link: "hysteria-guide" },
                    { text: "翻墙后必逛的海外热门网站", link: "after-fanqiang-guide" },
                    { text: "2026年4月中转拔线潮：机场行业进入无IP时代", link: "relay-crackdown-2026" },
                    { text: "国内中转机场的至暗时刻：系统性打击下如何突围", link: "relay-darkest-hour" },
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
