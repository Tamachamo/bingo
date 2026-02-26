export default async function handler(req, res) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;

  try {
    const response = await fetch(`${url}/rest/v1/`, {
      headers: { 'apikey': key, 'Authorization': `Bearer ${key}` }
    });
    res.status(200).json({ status: 'Supabase is alive', code: response.status });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
