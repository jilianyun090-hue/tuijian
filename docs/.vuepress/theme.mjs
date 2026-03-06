import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme({
    hostname: "https://clash-jichang.com",

    // 主题色：深蓝色
    themeColor: "#1565c0",

    // 网站 Logo
    logo: "/logo.png",
    
    // 右侧图标链接（使用 repo 及 repoIcon 模拟）
    repo: "http://t.me/JIAN6688",
    repoLabel: "Telegram",
    repoDisplay: true,
    
    docsDir: "docs",

    // 导航栏 (机场推荐突出放前面)
    navbar: [
        { text: "首页", link: "/" },
        { text: "机场推荐", link: "/airport/" },
        { text: "流媒体观影", link: "/streaming/" },
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
        }
    ],

    // 侧边栏 (移除小图标, 以纯净大方的文字目录为主)
    sidebar: {
        "/streaming/": [
            {
                text: "流媒体观影全指南",
                children: [
                    "",
                    "netflix-guide",
                    "disney-guide",
                    "spotify-guide",
                    "youtube-guide",
                    "hulu-hbo-guide",
                ],
            },
        ],
        "/account/": [
            {
                text: "账号合租与市场行情",
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
                text: "客户端软件指南",
                children: [
                    { text: "客户端下载指南", link: "software" },
                    { text: "Windows客户端下载", link: "client-windows" },
                    { text: "Android客户端下载", link: "client-android" },
                    { text: "IOS客户端下载", link: "client-ios" },
                ],
            },
        ],
        "/ai/": [
            {
                text: "AI 工具与应用实战",
                children: [
                    "",
                    "chatgpt",
                    "claude-guide",
                    "gemini",
                    "grok-guide",
                    "midjourney-guide",
                    "cursor-guide",
                ],
            },
        ],
        "/proxy/": [
            {
                text: "科学上网知识库",
                children: [
                    "",
                    "vpn-guide",
                    "fanqiang-guide",
                    "line-type-guide",
                    "gfw-websites",
                    "telegram-guide",
                    "telegram-bot",
                    { text: "接码平台推荐", link: "/ai/sms-guide.html" },
                ],
            },
        ],
    },

    footer: "优质资源共享 | 助你畅享全球互联网自由",
    displayFooter: true,

    // 关闭不必要的图标插件
    plugins: {
        blog: true,
        mdEnhance: {
            align: true,
            attrs: true,
            container: true,
            tabs: true,
            tasklist: true,
        },
    },

    markdown: {
        align: true,
        attrs: true,
        container: true,
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
    iconAssets: null, // 禁用图标库
});
