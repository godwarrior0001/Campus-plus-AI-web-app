// Place this file at: api/notify.js in your GitHub repository.
// Vercel automatically deploys any file inside /api as a Serverless Function.
// Zero npm packages required (uses native Node.js 18+ fetch).
//
// Add these Environment Variables in Vercel Project Settings -> Environment Variables:
//   RESEND_API_KEY      = re_xxxxxxxxx        (from resend.com - free tier)
//   RESEND_FROM_EMAIL   = onboarding@resend.dev (or your verified domain)
//   WHATSAPP_TOKEN      = EAAxxxxxxxxx        (from Meta WhatsApp Cloud API)
//   WHATSAPP_PHONE_ID   = 123456789012345     (from Meta WhatsApp Cloud API)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { toEmail, toPhone, subject, message, sendEmail, sendWhatsApp } = req.body || {};

    if (!message) {
      return res.status(400).json({ error: 'Missing message body' });
    }

    const results = { email: 'skipped', whatsapp: 'skipped' };

    // 1. Send Automated Email via Resend REST API
    if (sendEmail && toEmail && process.env.RESEND_API_KEY) {
      const fromAddr = process.env.RESEND_FROM_EMAIL || 'CampusPulse AI <onboarding@resend.dev>';
      const emailResp = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: fromAddr,
          to: [toEmail],
          subject: subject || 'CampusPulse AI — Remaining Deadline Reminder',
          text: message
        })
      });
      const emailData = await emailResp.json();
      results.email = emailResp.ok ? 'sent' : `error: ${emailData.message || emailResp.status}`;
    }

    // 2. Send Automated WhatsApp Message via Meta WhatsApp Cloud API
    if (sendWhatsApp && toPhone && process.env.WHATSAPP_TOKEN && process.env.WHATSAPP_PHONE_ID) {
      const cleanPhone = String(toPhone).replace(/[^0-9]/g, '');
      const waResp = await fetch(
        `https://graph.facebook.com/v20.0/${process.env.WHATSAPP_PHONE_ID}/messages`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.WHATSAPP_TOKEN}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            messaging_product: 'whatsapp',
            to: cleanPhone,
            type: 'text',
            text: { body: message }
          })
        }
      );
      const waData = await waResp.json();
      results.whatsapp = waResp.ok ? 'sent' : `error: ${waData.error?.message || waResp.status}`;
    }

    return res.status(200).json({ ok: true, results });
  } catch (err) {
    return res.status(500).json({ error: err.message || 'Internal server error' });
  }
}
