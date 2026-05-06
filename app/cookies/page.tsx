import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy — WHYN",
  description: "How WHYN uses cookies on its website.",
};

const SORA = { fontFamily: "var(--font-sora,'Sora',sans-serif)" };
const DM   = { fontFamily: "var(--font-dm-sans,'DM Sans',sans-serif)" };

const LAST_UPDATED = "30 April 2025";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-white mb-4" style={{ ...SORA, letterSpacing: "-0.02em" }}>
        {title}
      </h2>
      <div className="text-muted-foreground leading-relaxed space-y-3 text-sm" style={DM}>
        {children}
      </div>
    </section>
  );
}

const cookieTable = [
  {
    name: "__session",
    type: "Essential",
    purpose: "Session management (if logged in to any WHYN tool)",
    expiry: "Session",
  },
  {
    name: "whyn_cookie_consent",
    type: "Functional",
    purpose: "Remembers your cookie preference so we don't ask again",
    expiry: "1 year (localStorage)",
  },
  {
    name: "Analytics (optional)",
    type: "Analytics",
    purpose: "Usage statistics — only set if you Accept cookies",
    expiry: "Varies",
  },
];

export default function CookiesPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-2xl mx-auto px-6">

        <div className="mb-12">
          <Link href="/" className="text-sm text-muted-foreground hover:text-white transition-colors duration-200 inline-block mb-8">
            ← Back to home
          </Link>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "#A8E63D", ...SORA }}>
            Legal
          </p>
          <h1 className="text-4xl font-bold text-white mb-4" style={{ ...SORA, fontWeight: 800, letterSpacing: "-0.03em" }}>
            Cookie Policy
          </h1>
          <p className="text-sm text-muted-foreground" style={DM}>Last updated: {LAST_UPDATED}</p>
        </div>

        <Section title="What are cookies?">
          <p>
            Cookies are small text files stored on your device when you visit a website. They help
            websites remember your preferences and understand how you use the site.
          </p>
        </Section>

        <Section title="What cookies does WHYN use?">
          <p>We use as few cookies as possible. Here&apos;s the complete list:</p>
          <div className="space-y-3 mt-4">
            {cookieTable.map((cookie) => (
              <div
                key={cookie.name}
                className="rounded-xl p-4"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div className="flex items-center justify-between gap-3 mb-2">
                  <p className="text-sm font-semibold text-white" style={SORA}>{cookie.name}</p>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{
                      background: cookie.type === "Essential"
                        ? "rgba(168,230,61,0.1)"
                        : "rgba(255,255,255,0.07)",
                      color: cookie.type === "Essential" ? "#A8E63D" : "#7A7A88",
                      fontFamily: SORA.fontFamily,
                      fontWeight: 600,
                    }}
                  >
                    {cookie.type}
                  </span>
                </div>
                <p className="text-xs">{cookie.purpose}</p>
                <p className="text-xs mt-1 opacity-60">Expiry: {cookie.expiry}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Essential vs non-essential cookies">
          <p>
            <strong className="text-white">Essential cookies</strong> are required for the website to
            function. They cannot be switched off and do not require your consent.
          </p>
          <p>
            <strong className="text-white">Non-essential cookies</strong> (analytics, personalisation)
            are only set after you click &quot;Accept&quot; in our cookie banner. If you click
            &quot;Reject&quot;, only essential cookies are used.
          </p>
        </Section>

        <Section title="How to control cookies">
          <p>You have several options to control cookies:</p>
          <ul className="space-y-1 pl-4 list-disc">
            <li>Use our cookie banner to accept or reject non-essential cookies</li>
            <li>Clear your browser cookies and localStorage at any time</li>
            <li>Configure your browser to block all cookies (note: this may break some website features)</li>
          </ul>
          <p>
            For browser-specific instructions, see your browser&apos;s help documentation.
          </p>
        </Section>

        <Section title="Third-party cookies">
          <p>
            Third-party services we use (Vercel, Cal.com) may set their own cookies. We have no
            control over these. Please refer to their respective cookie policies for details.
          </p>
        </Section>

        <Section title="Changes to this policy">
          <p>
            We&apos;ll update this page if our cookie usage changes. The date at the top shows when
            it was last revised.
          </p>
        </Section>

        <Section title="Questions?">
          <p>
            Email us at{" "}
            <a href="mailto:privacy@whyn.com" className="text-white underline underline-offset-2">
              privacy@whyn.com
            </a>
          </p>
        </Section>

        <div className="mt-12 pt-8 flex flex-wrap gap-4 text-xs text-muted-foreground" style={{ borderTop: "1px solid rgba(255,255,255,0.07)", ...DM }}>
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
        </div>
      </div>
    </div>
  );
}
