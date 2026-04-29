/**
 * Umami Analytics 同域代理 - Cloudflare Pages Function
 * 路径: /umami/* → 代理到 Umami Cloud
 *
 * 解决问题：
 * 1. cloud.umami.is 被 GFW 屏蔽 → 通过同域 clash-jichang.com 代理
 * 2. Worker 代理 IP 被 429 限速 → 传递访客真实 IP，Umami 按真实 IP 计数
 * 3. CORS 跨域问题 → 同域请求，无跨域
 */
export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);

  // 提取 /umami 后面的路径，例如 /script.js 或 /api/send
  const subPath = url.pathname.replace(/^\/umami/, '') || '/';

  // 根据路径决定转发到哪个上游
  let targetUrl;
  if (subPath === '/script.js') {
    targetUrl = 'https://cloud.umami.is/script.js';
  } else if (subPath.startsWith('/api/send')) {
    targetUrl = 'https://api-gateway.umami.dev/api/send' + url.search;
  } else {
    return new Response('Not Found', { status: 404 });
  }

  // 处理 OPTIONS 预检请求（CORS）
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, x-client-ip',
        'Access-Control-Max-Age': '86400',
      },
    });
  }

  // 获取访客真实 IP（Cloudflare 自动注入 CF-Connecting-IP）
  const clientIP =
    request.headers.get('CF-Connecting-IP') ||
    request.headers.get('X-Forwarded-For')?.split(',')[0]?.trim() ||
    '0.0.0.0';

  // 构造转发请求的 Header
  const proxyHeaders = new Headers();
  proxyHeaders.set('Content-Type', request.headers.get('Content-Type') || 'application/json');
  proxyHeaders.set('User-Agent', request.headers.get('User-Agent') || 'Mozilla/5.0');
  // 关键：把真实 IP 告诉 Umami，否则所有请求都来自同一个 Worker IP，触发 429
  proxyHeaders.set('X-Forwarded-For', clientIP);
  proxyHeaders.set('X-Real-IP', clientIP);
  proxyHeaders.set('x-client-ip', clientIP);

  // 转发请求到 Umami 上游
  let upstreamResponse;
  try {
    upstreamResponse = await fetch(targetUrl, {
      method: request.method,
      headers: proxyHeaders,
      body: request.method !== 'GET' && request.method !== 'HEAD' ? request.body : undefined,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: `代理请求失败: ${err.message}` }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // 构造响应，加上 CORS 允许头
  const responseHeaders = new Headers(upstreamResponse.headers);
  responseHeaders.set('Access-Control-Allow-Origin', '*');
  // 脚本文件缓存 1 小时，发送接口不缓存
  if (subPath === '/script.js') {
    responseHeaders.set('Cache-Control', 'public, max-age=3600');
  } else {
    responseHeaders.set('Cache-Control', 'no-store');
  }

  return new Response(upstreamResponse.body, {
    status: upstreamResponse.status,
    headers: responseHeaders,
  });
}
