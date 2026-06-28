/**
 * Serverless function: POST /api/track
 *
 * Receives visitor details captured by the intro form and appends them to a
 * Google Sheet by forwarding the payload to a Google Apps Script web app.
 *
 * The Apps Script web-app URL is read from the SHEET_WEBHOOK_URL environment
 * variable so it is NEVER shipped to the browser or committed to the repo.
 * Set it in Vercel: Project > Settings > Environment Variables.
 *
 * See VISIT_TRACKING.md for the Apps Script code and deployment steps.
 */

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const webhookUrl = process.env.SHEET_WEBHOOK_URL;
  if (!webhookUrl) {
    // Not configured yet — accept the request so the UI never breaks.
    res.status(200).json({ ok: false, reason: "SHEET_WEBHOOK_URL not set" });
    return;
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    const payload = {
      name: String(body?.name ?? "").slice(0, 200),
      company: String(body?.company ?? "").slice(0, 200),
      profile: String(body?.profile ?? "").slice(0, 50),
      time: String(body?.time ?? "").slice(0, 100),
    };

    // Server-to-server call — no browser CORS involved.
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("track error", err);
    // Fire-and-forget from the client; don't surface failures to visitors.
    res.status(200).json({ ok: false });
  }
}
