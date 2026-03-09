export async function onRequest(context) {
  const { searchParams } = new URL(context.request.url);
  const shareId = 'uP64pEjWUtGCCMS3';
  const startAt = searchParams.get('startAt');
  const endAt = searchParams.get('endAt');

  try {
    // 1. Get token and websiteId
    const shareRes = await fetch(`https://cloud.umami.is/analytics/us/api/share/${shareId}`);
    if (!shareRes.ok) throw new Error('Failed to fetch share token');
    const { token, websiteId } = await shareRes.json();

    // 2. Fetch stats
    const statsRes = await fetch(`https://cloud.umami.is/analytics/us/api/websites/${websiteId}/stats?startAt=${startAt}&endAt=${endAt}`, {
      headers: { 'x-umami-share-token': token }
    });
    const data = await statsRes.json();

    return new Response(JSON.stringify(data), {
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*' 
      }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
