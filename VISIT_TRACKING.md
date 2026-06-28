# Visit Tracking → Google Sheet

Visitor details captured by the intro form (name, company, profile, timestamp)
are recorded into a Google Sheet.

**Flow:** intro form → `POST /api/track` (serverless) → Google Apps Script
web app → appends a row to your Google Sheet.

The Apps Script URL is stored in the `SHEET_WEBHOOK_URL` environment variable
so it is never exposed in the public repo or the browser.

---

## One-time setup (≈5 minutes)

### 1. Create the sheet
1. Go to <https://sheets.google.com> and create a new blank spreadsheet.
2. Name it e.g. **Portfolio Visits**.
3. (Optional) Add headers in row 1: `Timestamp | Name | Company | Profile`.
   The script will add them automatically if the sheet is empty.

### 2. Add the Apps Script
1. In the sheet, go to **Extensions → Apps Script**.
2. Delete any boilerplate and paste the code below.
3. Click the **Save** (disk) icon.

```javascript
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Add a header row the first time.
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Company', 'Profile']);
    }

    sheet.appendRow([
      data.time || new Date().toLocaleString(),
      data.name || '',
      data.company || '',
      data.profile || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### 3. Deploy as a web app
1. Click **Deploy → New deployment**.
2. Click the gear next to "Select type" → choose **Web app**.
3. Set:
   - **Description:** anything (e.g. "Portfolio visit logger")
   - **Execute as:** **Me**
   - **Who has access:** **Anyone**
4. Click **Deploy**, then **Authorize access** and approve the Google
   permission prompt (it's your own script).
5. Copy the **Web app URL** — it looks like
   `https://script.google.com/macros/s/AKfyc..../exec`.

### 4. Add the URL to Vercel
1. Go to your Vercel project → **Settings → Environment Variables**.
2. Add:
   - **Name:** `SHEET_WEBHOOK_URL`
   - **Value:** the Web app URL from step 3
   - **Environments:** Production (and Preview if you want)
3. **Redeploy** the project (Deployments → ⋯ → Redeploy) so the new env var
   takes effect.

Done. New visits will append rows to the sheet in real time.

---

## Notes
- **Export to Excel:** in the sheet, **File → Download → Microsoft Excel (.xlsx)**.
- If you redeploy the Apps Script as a *new* deployment, the URL changes —
  update `SHEET_WEBHOOK_URL` accordingly. To keep the same URL, use
  **Deploy → Manage deployments → edit (pencil) → New version**.
- Local dev (`npm run dev`) does **not** run the `/api` functions, so tracking
  only works on the deployed Vercel site. To test locally you can use
  `vercel dev` instead.
- The name field is required; company is optional. The profile value is `hr`
  or `visitor`.
