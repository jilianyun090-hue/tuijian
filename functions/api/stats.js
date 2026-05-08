export async function onRequest(context) {
  const { searchParams } = new URL(context.request.url);
  const websiteId = '8f79ee64-6e73-47d2-b7f6-25cbe82aae0f';
  const apiKey    = 'api_aPuIk5kPilvvlBNh6CgIDbN3sevpbhqT';
  const startAt   = searchParams.get('startAt');
  const endAt     = searchParams.get('endAt');

  try {
    const res = await fetch(
      `https://api.umami.is/v1/websites/${websiteId}/stats?startAt=${startAt}&endAt=${endAt}&compare=prev`,
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
