# Visit Tracking (no Google required)

Visitor details captured by the intro form (name, company, profile, timestamp)
are stored in a Vercel-hosted Redis store (Upstash) and can be downloaded as a
CSV that opens directly in Excel.

**Flow:** intro form → `POST /api/track` → Redis list `visits`.
**View/download:** `GET /api/visits?token=YOUR_ADMIN_TOKEN` → `visits.csv`.

Everything is configured inside the Vercel dashboard — no Google account, no
Apps Script, no third-party signup.

---

## One-time setup (≈3 minutes)

### 1. Create the storage
1. In Vercel, open your project → **Storage** tab → **Create Database**.
2. Choose **Upstash for Redis** (listed as the KV / Redis option) → **Continue**.
3. Pick a name and region, accept the free plan, and **Connect it to this
   project**. Vercel automatically adds the connection env vars
   (`KV_REST_API_URL` and `KV_REST_API_TOKEN`) to the project.

### 2. Add an admin token (so only you can read the data)
1. Project → **Settings → Environment Variables**.
2. Add:
   - **Name:** `ADMIN_TOKEN`
   - **Value:** any long random string you choose (this is your password — keep
     it private). Example: `rs-9f3k2p7q-visits`
   - **Environments:** Production (and Preview if you like).

### 3. Redeploy
Deployments → ⋯ → **Redeploy** so the new env vars take effect.

Done. New form submissions now append to the store in real time.

---

## Viewing / downloading visits

Open in your browser (replace with your domain and your admin token):

- **Download CSV (opens in Excel):**
  `https://portfoliowebsite-ten-lovat.vercel.app/api/visits?token=YOUR_ADMIN_TOKEN`
- **View as JSON in the browser:**
  `https://portfoliowebsite-ten-lovat.vercel.app/api/visits?token=YOUR_ADMIN_TOKEN&format=json`

The CSV has columns: `Timestamp, Name, Company, Profile`. Open it in Excel, or
in Excel use **Data → Get Data → From Text/CSV** to pull it in directly.

---

## Notes
- **Security:** the data endpoint is locked behind `ADMIN_TOKEN`. Anyone without
  the token gets `403 Forbidden`. Don't share the token or the full URL
  publicly. (You can rotate it anytime by changing the env var and redeploying.)
- **Local dev:** `npm run dev` does not run the `/api` functions, and the KV env
  vars only exist on Vercel, so tracking works on the deployed site. To test
  locally, use `vercel dev` with the env vars pulled via `vercel env pull`.
- **Env var names:** the code accepts either `KV_REST_API_URL` /
  `KV_REST_API_TOKEN` or `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN`,
  depending on how the store was created — no code change needed.
- **Profile values:** `hr` or `visitor`. Name is required; company is optional.
