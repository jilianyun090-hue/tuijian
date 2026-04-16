export async function onRequest(context) {
  const { searchParams } = new URL(context.request.url);
  const websiteId = context.env.UMAMI_WEBSITE_ID;
  const apiKey    = context.env.UMAMI_API_KEY;
  const startAt   = searchParams.get('startAt');
  const endAt     = searchParams.get('endAt');

  if (!websiteId || !apiKey) {
    return new Response(JSON.stringify({ error: 'Missing env: UMAMI_WEBSITE_ID or UMAMI_API_KEY' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const res = await fetch(
      `https://api.umami.is/v1/websites/${websiteId}/stats?startAt=${startAt}&endAt=${endAt}`,
      { headers: { 'Authorization': `Bearer ${apiKey}` } }
    );

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Umami API ${res.status}: ${errText}`);
    }

    const data = await res.json();

    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 's-maxage=60, stale-while-revalidate=30'
      }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
