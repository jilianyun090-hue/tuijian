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
        // Umami 实时统计 - 通过同域 Pages Function 代理，绕过 GFW 封锁和 429 限速
        // 代理路径: /umami/* → cloud.umami.is (脚本) / api-gateway.umami.dev (数据上报)
        ["script", { defer: true, "data-website-id": "8f79ee64-6e73-47d2-b7f6-25cbe82aae0f", "data-host-url": "https://clash-jichang.com/umami", src: "https://clash-jichang.com/umami/script.js" }],
        // Bing site verification
        ["meta", { name: "msvalidate.01", content: "35CCAB205AEAD2FDC8BEB03EB1519F89" }],
        // Google site verification
        ["meta", { name: "google-site-verification", content: "i49oHfS9JgaALfrt4GdHxUT4_XE0tAIKXPuSJNdp9F8" }],
        // Geo Tags for SEO
        ["meta", { name: "geo.region", content: "CN" }],
        ["meta", { name: "geo.placename", content: "China" }],
        ["meta", { name: "geo.position", content: "39.9042;116.4074" }],
        ["meta", { name: "ICBM", content: "39.9042, 116.4074" }],
        ["meta", { name: "content-language", content: "zh-CN" }],
    ],
    theme,
    bundler: viteBundler(),
});
