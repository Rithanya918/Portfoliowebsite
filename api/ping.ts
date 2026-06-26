// Minimal zero-dependency function to isolate whether Vercel can load /api functions at all.
export default function handler(_req: any, res: any) {
  res.status(200).json({ ok: true, ping: "pong" });
}
