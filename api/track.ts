/**
 * Serverless function: POST /api/track
 *
 * Records a visit (captured by the intro form) into a Vercel-hosted Redis
 * store (Upstash) by appending a JSON entry to the "visits" list.
 *
 * Reads connection details from the env vars that Vercel's Storage tab adds
 * automatically when you create a KV / Upstash Redis store and link it to the
 * project. Both common naming conventions are supported.
 *
 * View/download the data via GET /api/visits (see VISIT_TRACKING.md).
 */

async function kvCommand(command: (string | number)[]) {
  const url =
    process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token =
    process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return { ok: false, reason: "KV not configured" };

  const r = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(command),
  });
  return r.json();
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    const entry = {
      time: String(body?.time ?? new Date().toLocaleString()).slice(0, 100),
      name: String(body?.name ?? "").slice(0, 200),
      email: String(body?.email ?? "").slice(0, 200),
      company: String(body?.company ?? "").slice(0, 200),
      profile: String(body?.profile ?? "").slice(0, 50),
    };

    await kvCommand(["RPUSH", "visits", JSON.stringify(entry)]);
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("track error", err);
    // Fire-and-forget from the client; never surface failures to visitors.
    res.status(200).json({ ok: false });
  }
}
