/**
 * Serverless function: GET /api/visits?token=YOUR_ADMIN_TOKEN
 *
 * Returns all recorded visits. Defaults to a CSV download (opens in Excel);
 * add &format=json to view as JSON in the browser.
 *
 * Protected by the ADMIN_TOKEN env var so only you can read the data. If
 * ADMIN_TOKEN is not set, the endpoint refuses all requests.
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

function csvCell(value: unknown) {
  const s = String(value ?? "");
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

export default async function handler(req: any, res: any) {
  const adminToken = process.env.ADMIN_TOKEN;
  const provided = req.query?.token;

  if (!adminToken || provided !== adminToken) {
    res.status(403).send("Forbidden");
    return;
  }

  try {
    const out: any = await kvCommand(["LRANGE", "visits", 0, -1]);
    const raw: string[] = Array.isArray(out?.result) ? out.result : [];
    const rows = raw
      .map((s) => {
        try {
          return JSON.parse(s);
        } catch {
          return null;
        }
      })
      .filter(Boolean) as Array<{
      time: string;
      name: string;
      company: string;
      profile: string;
    }>;

    if (req.query?.format === "json") {
      res.status(200).json({ count: rows.length, visits: rows });
      return;
    }

    const lines = ["Timestamp,Name,Company,Profile"];
    for (const r0 of rows) {
      lines.push(
        [r0.time, r0.name, r0.company, r0.profile].map(csvCell).join(",")
      );
    }

    res.setHeader("Content-Type", "text/csv; charset=utf-8");
    res.setHeader("Content-Disposition", 'attachment; filename="visits.csv"');
    res.status(200).send(lines.join("\n"));
  } catch (err) {
    console.error("visits error", err);
    res.status(500).send("Error reading visits");
  }
}
