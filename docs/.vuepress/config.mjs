import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import theme from "./theme.mjs";

export default defineUserConfig({
    base: "/",
    lang: "zh-CN",
    title: "道一博客",
    description: "2026年科学上网机场推荐指南，精选翻墙机场评测、流媒体解锁教程、AI工具使用攻略与账号合租方案",
    head: [
        ["link", { rel: "icon", href: "/favicon.png" }],
        // Umami 实时统计 (自托管或 Umami Cloud)
        ["script", { defer: true, "data-website-id": "your-website-id", src: "https://cloud.umami.is/script.js" }],
        // Bing site verification
        ["meta", { name: "msvalidate.01", content: "35CCAB205AEAD2FDC8BEB03EB1519F89" }],
        // Google site verification
        ["meta", { name: "google-site-verification", content: "i49oHfS9JgaALfrt4GdHxUT4_XE0tAIKXPuSJNdp9F8" }],
    ],
    theme,
    bundler: viteBundler(),
});
