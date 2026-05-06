import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
const TO_EMAIL   = process.env.RESEND_TO_EMAIL   || "your-email@example.com";
const SITE_URL   = process.env.NEXT_PUBLIC_SITE_URL || "https://whyn.com";

/**
 * Internal notification to the WHYN team when a new lead submits the form.
 */
export async function sendLeadNotification(lead: {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  source?: string;
}) {
  return resend.emails.send({
    from: `WHYN <${FROM_EMAIL}>`,
    to: [TO_EMAIL],
    subject: `New lead: ${lead.name}`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#1a1a1a">
        <div style="background:#0F0F12;padding:24px 32px;border-radius:8px 8px 0 0">
          <span style="font-weight:800;font-size:20px;color:#fff;letter-spacing:-0.03em">
            WHYN<span style="color:#A8E63D">.</span>
          </span>
        </div>
        <div style="border:1px solid #e5e7eb;border-top:none;padding:28px 32px;border-radius:0 0 8px 8px">
          <h2 style="margin:0 0 20px;font-size:18px">New lead</h2>
          <table style="width:100%;font-size:14px;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#6b7280;border-bottom:1px solid #f3f4f6">Name</td><td style="padding:8px 0;border-bottom:1px solid #f3f4f6;font-weight:500">${lead.name}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;border-bottom:1px solid #f3f4f6">Email</td><td style="padding:8px 0;border-bottom:1px solid #f3f4f6">${lead.email}</td></tr>
            ${lead.phone ? `<tr><td style="padding:8px 0;color:#6b7280;border-bottom:1px solid #f3f4f6">Phone</td><td style="padding:8px 0;border-bottom:1px solid #f3f4f6">${lead.phone}</td></tr>` : ""}
            ${lead.source ? `<tr><td style="padding:8px 0;color:#6b7280;border-bottom:1px solid #f3f4f6">Source</td><td style="padding:8px 0;border-bottom:1px solid #f3f4f6">${lead.source}</td></tr>` : ""}
            ${lead.message ? `<tr><td style="padding:8px 0;color:#6b7280" valign="top">Message</td><td style="padding:8px 0">${lead.message}</td></tr>` : ""}
          </table>
        </div>
        <p style="font-size:11px;color:#9ca3af;margin-top:16px;text-align:center">
          Sent from whyn.com · <a href="mailto:${TO_EMAIL}" style="color:#9ca3af">${TO_EMAIL}</a>
        </p>
      </div>
    `,
  });
}

/**
 * Confirmation email to the lead.
 * Includes unsubscribe link — required for CAN-SPAM / GDPR compliance.
 */
export async function sendLeadConfirmation(lead: { name: string; email: string }) {
  const unsubscribeUrl = `${SITE_URL}/unsubscribe?email=${encodeURIComponent(lead.email)}`;

  return resend.emails.send({
    from: `WHYN <${FROM_EMAIL}>`,
    to: [lead.email],
    subject: "We got your message — here's what happens next",
    headers: {
      "List-Unsubscribe": `<${unsubscribeUrl}>`,
      "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
    },
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#1a1a1a">
        <div style="background:#0F0F12;padding:24px 32px;border-radius:8px 8px 0 0">
          <span style="font-weight:800;font-size:20px;color:#fff;letter-spacing:-0.03em">
            WHYN<span style="color:#A8E63D">.</span>
          </span>
        </div>
        <div style="border:1px solid #e5e7eb;border-top:none;padding:32px;border-radius:0 0 8px 8px">
          <p style="margin:0 0 12px;font-size:16px">Hi ${lead.name},</p>
          <p style="margin:0 0 20px;font-size:14px;color:#374151;line-height:1.6">
            Thanks for reaching out. We've received your message and will be in touch within 1 business day.
          </p>
          <p style="margin:0 0 20px;font-size:14px;color:#374151;line-height:1.6">
            In the meantime, if you'd like to jump straight to a call, you can book a slot here:
          </p>
          <a href="${SITE_URL}" style="display:inline-block;background:#A8E63D;color:#0F0F12;font-weight:700;font-size:14px;padding:12px 24px;border-radius:6px;text-decoration:none">
            Book a call →
          </a>
        </div>

        <!-- Compliance footer — required -->
        <div style="padding:20px 32px;border-top:1px solid #f3f4f6;margin-top:4px">
          <p style="font-size:11px;color:#9ca3af;margin:0 0 6px">
            WHYN · ${TO_EMAIL}
          </p>
          <p style="font-size:11px;color:#9ca3af;margin:0">
            You're receiving this because you submitted a form at whyn.com and consented to be contacted. ·
            <a href="${unsubscribeUrl}" style="color:#9ca3af">Unsubscribe</a> ·
            <a href="${SITE_URL}/privacy-policy" style="color:#9ca3af">Privacy Policy</a>
          </p>
        </div>
      </div>
    `,
  });
}
