export default async function handler(req, res) {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
        return res.status(500).json({ error: "Missing Supabase credentials in Vercel." });
    }

    try {
        // SupabaseのAPIの入り口に軽くアクセスして「活動中」であることをアピールします
        const response = await fetch(`${supabaseUrl}/rest/v1/`, {
            method: 'GET',
            headers: {
                'apikey': supabaseKey,
                'Authorization': `Bearer ${supabaseKey}`
            }
        });

        if (response.ok) {
            res.status(200).json({ status: "success", message: "Supabase is awake!" });
        } else {
            res.status(response.status).json({ error: "Failed to ping Supabase." });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
