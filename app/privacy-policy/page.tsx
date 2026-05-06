import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — WHYN",
  description: "How WHYN collects, uses, and protects your personal data.",
};

const SORA = { fontFamily: "var(--font-sora,'Sora',sans-serif)" };
const DM   = { fontFamily: "var(--font-dm-sans,'DM Sans',sans-serif)" };

const LAST_UPDATED = "30 April 2025";
const CONTACT_EMAIL = "privacy@whyn.com";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2
        className="text-xl font-bold text-white mb-4"
        style={{ ...SORA, letterSpacing: "-0.02em" }}
      >
        {title}
      </h2>
      <div className="text-muted-foreground leading-relaxed space-y-3 text-sm" style={DM}>
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-2xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-white transition-colors duration-200 inline-block mb-8"
          >
            ← Back to home
          </Link>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "#A8E63D", ...SORA }}>
            Legal
          </p>
          <h1
            className="text-4xl font-bold text-white mb-4"
            style={{ ...SORA, fontWeight: 800, letterSpacing: "-0.03em" }}
          >
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground" style={DM}>
            Last updated: {LAST_UPDATED}
          </p>
        </div>

        <div
          className="prose-container divide-y"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}
        >
          <div className="pb-10">
            <p className="text-muted-foreground text-sm leading-relaxed" style={DM}>
              WHYN (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your personal data.
              This policy explains what we collect, why, and what rights you have over your information.
            </p>
          </div>

          <div className="pt-10">
            <Section title="1. Who we are">
              <p>
                WHYN is a conversion systems studio. We build landing pages, automation flows, and booking
                systems for coaches and online sellers.
              </p>
              <p>
                For data protection enquiries, contact us at:{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-white underline underline-offset-2">
                  {CONTACT_EMAIL}
                </a>
              </p>
            </Section>

            <Section title="2. What data we collect">
              <p>We only collect what is strictly necessary:</p>
              <ul className="list-none space-y-2 pl-0">
                {[
                  ["Name", "To address you personally"],
                  ["Email address", "To respond to your enquiry and send follow-ups you consented to"],
                  ["Phone number", "Optional — only if you choose to provide it, for WhatsApp contact"],
                  ["Source", "Which page or campaign you came from — for internal analysis only"],
                  ["Consent timestamp", "Record that you agreed to be contacted — required by GDPR"],
                ].map(([field, reason]) => (
                  <li key={field} className="flex gap-3">
                    <span style={{ color: "#A8E63D", flexShrink: 0 }}>→</span>
                    <span><strong className="text-white">{field}</strong> — {reason}</span>
                  </li>
                ))}
              </ul>
              <p>We do not collect sensitive data, payment card details, or government IDs.</p>
            </Section>

            <Section title="3. How we use your data">
              <p>Your data is used solely to:</p>
              <ul className="space-y-1 pl-4 list-disc">
                <li>Respond to your enquiry</li>
                <li>Send follow-up emails you have consented to</li>
                <li>Book a call via Cal.com (if you proceed to booking)</li>
                <li>Improve our services through aggregate (non-personal) analysis</li>
              </ul>
              <p>We do not sell, rent, or trade your data with third parties for marketing purposes.</p>
            </Section>

            <Section title="4. Legal basis (GDPR)">
              <p>We process your data under the following legal bases:</p>
              <ul className="space-y-1 pl-4 list-disc">
                <li><strong className="text-white">Consent</strong> — you explicitly tick the consent checkbox before submitting the form.</li>
                <li><strong className="text-white">Legitimate interest</strong> — responding to a direct enquiry you initiated.</li>
              </ul>
              <p>You can withdraw consent at any time by emailing <a href={`mailto:${CONTACT_EMAIL}`} className="text-white underline underline-offset-2">{CONTACT_EMAIL}</a>.</p>
            </Section>

            <Section title="5. Third-party services">
              <p>We use the following third parties who may process your data:</p>
              <div className="space-y-3">
                {[
                  {
                    name: "Supabase",
                    purpose: "Database hosting (form submissions stored here)",
                    privacy: "https://supabase.com/privacy",
                    location: "EU / US (with appropriate safeguards)",
                  },
                  {
                    name: "Resend",
                    purpose: "Transactional email delivery",
                    privacy: "https://resend.com/privacy",
                    location: "US",
                  },
                  {
                    name: "Cal.com",
                    purpose: "Meeting booking (if you book a call)",
                    privacy: "https://cal.com/privacy",
                    location: "US",
                  },
                  {
                    name: "Vercel",
                    purpose: "Website hosting",
                    privacy: "https://vercel.com/legal/privacy-policy",
                    location: "Global CDN",
                  },
                ].map((s) => (
                  <div
                    key={s.name}
                    className="rounded-xl p-4"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    <p className="font-semibold text-white text-sm mb-1" style={SORA}>{s.name}</p>
                    <p className="text-xs">{s.purpose} · {s.location}</p>
                    <a href={s.privacy} target="_blank" rel="noopener noreferrer" className="text-xs text-white underline underline-offset-2 mt-1 inline-block">
                      Privacy policy ↗
                    </a>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="6. Data retention">
              <p>
                We retain your data for a maximum of 2 years from your last interaction, unless you
                request earlier deletion. After this period, data is permanently deleted from our systems.
              </p>
            </Section>

            <Section title="7. Your rights">
              <p>Under GDPR, you have the right to:</p>
              <ul className="space-y-1 pl-4 list-disc">
                <li><strong className="text-white">Access</strong> — request a copy of the data we hold on you</li>
                <li><strong className="text-white">Rectification</strong> — ask us to correct inaccurate data</li>
                <li><strong className="text-white">Erasure</strong> — ask us to delete your data ("right to be forgotten")</li>
                <li><strong className="text-white">Restriction</strong> — ask us to limit processing while a dispute is resolved</li>
                <li><strong className="text-white">Portability</strong> — receive your data in a machine-readable format</li>
                <li><strong className="text-white">Object</strong> — object to processing based on legitimate interest</li>
                <li><strong className="text-white">Withdraw consent</strong> — at any time, without affecting the lawfulness of prior processing</li>
              </ul>
              <p>
                To exercise any of these rights, email{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-white underline underline-offset-2">{CONTACT_EMAIL}</a>.
                We will respond within 30 days.
              </p>
            </Section>

            <Section title="8. Cookies">
              <p>
                We use essential cookies only (session management, security). We do not use advertising or
                tracking cookies without your explicit consent. See our{" "}
                <Link href="/cookies" className="text-white underline underline-offset-2">Cookie Policy</Link>.
              </p>
            </Section>

            <Section title="9. Security">
              <p>
                Your data is stored in Supabase with row-level security. All transmissions use HTTPS.
                API keys are stored as server-side environment variables and never exposed to the client.
              </p>
            </Section>

            <Section title="10. Changes to this policy">
              <p>
                We may update this policy periodically. Material changes will be communicated via email
                if you are on our contact list. The &quot;last updated&quot; date at the top of this page
                reflects the most recent revision.
              </p>
            </Section>

            <Section title="11. Contact">
              <p>
                For any privacy-related questions:{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-white underline underline-offset-2">
                  {CONTACT_EMAIL}
                </a>
              </p>
            </Section>
          </div>
        </div>

        {/* Footer nav */}
        <div
          className="mt-12 pt-8 flex flex-wrap gap-4 text-xs text-muted-foreground"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)", ...DM }}
        >
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
        </div>
      </div>
    </div>
  );
}
