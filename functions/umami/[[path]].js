/**
 * Umami Analytics 同域代理 - Cloudflare Pages Function
 * 路径: /umami/* → 代理到 Umami Cloud
 *
 * 解决问题：
 * 1. cloud.umami.is 被部分地区 GFW 屏蔽 → /api/send 通过同域代理
 * 2. CF Pages 出站 IP 被 429 限速 → 传递访客真实 IP + 完整 UA
 * 3. 脚本本身从 cloud.umami.is 直接加载（翻墙用户能访问）
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
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400',
      },
    });
  }

  // 获取访客真实 IP（CF-Connecting-IP 是 Cloudflare 最可靠的真实 IP 注入头）
  const clientIP =
    request.headers.get('CF-Connecting-IP') ||
    request.headers.get('X-Forwarded-For')?.split(',')[0]?.trim() ||
    '127.0.0.1';

  // 构造转发请求的 Header
  const proxyHeaders = new Headers();

  // 对于 /api/send，完整转发 UA 和语言等浏览器特征，让 Umami 正确识别用户环境
  if (subPath.startsWith('/api/send')) {
    const ua = request.headers.get('User-Agent');
    if (ua) proxyHeaders.set('User-Agent', ua);

    const lang = request.headers.get('Accept-Language');
    if (lang) proxyHeaders.set('Accept-Language', lang);

    const ct = request.headers.get('Content-Type');
    if (ct) proxyHeaders.set('Content-Type', ct);

    // 关键：传递真实 IP，让 Umami 按访客 IP 去重计数，避免 429
    proxyHeaders.set('X-Forwarded-For', clientIP);
    proxyHeaders.set('X-Real-IP', clientIP);
  }

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

  // 脚本文件缓存 24 小时；发送接口不缓存
  if (subPath === '/script.js') {
    responseHeaders.set('Cache-Control', 'public, max-age=86400');
  } else {
    responseHeaders.set('Cache-Control', 'no-store');
  }

  return new Response(upstreamResponse.body, {
    status: upstreamResponse.status,
    headers: responseHeaders,
  });
}
