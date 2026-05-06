import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — WHYN",
  description: "WHYN terms of service — what we deliver, what we don't, and how we work together.",
};

const SORA = { fontFamily: "var(--font-sora,'Sora',sans-serif)" };
const DM   = { fontFamily: "var(--font-dm-sans,'DM Sans',sans-serif)" };

const LAST_UPDATED = "30 April 2025";
const CONTACT_EMAIL = "legal@whyn.com";

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

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="text-sm text-muted-foreground" style={DM}>Last updated: {LAST_UPDATED}</p>
        </div>

        <div className="divide-y" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
          <div className="pb-10">
            <p className="text-muted-foreground text-sm leading-relaxed" style={DM}>
              By engaging WHYN&apos;s services or submitting an enquiry, you agree to these terms.
              Please read them before proceeding.
            </p>
          </div>

          <div className="pt-10">
            <Section title="1. Services">
              <p>
                WHYN provides conversion system builds including landing pages, email automation
                sequences, and booking flows for coaches and online sellers.
              </p>
              <p>
                The specific scope, deliverables, and timeline for each engagement are agreed upon
                during the discovery call and confirmed in writing before work begins.
              </p>
            </Section>

            <Section title="2. No guaranteed results">
              <p>
                We build systems optimised for conversion based on industry best practices and our
                experience. However, we cannot and do not guarantee specific revenue outcomes, booking
                numbers, or lead volumes.
              </p>
              <p>
                Results depend on factors outside our control including your offer quality, audience
                size, market conditions, and your follow-through.
              </p>
            </Section>

            <Section title="3. Payment">
              <p>
                Payment terms are agreed individually for each engagement. Generally:
              </p>
              <ul className="space-y-1 pl-4 list-disc">
                <li>A deposit (typically 50%) is required before work begins</li>
                <li>The remaining balance is due upon delivery</li>
                <li>All fees are stated in writing before work begins</li>
                <li>Payments are non-refundable once work has commenced, unless we fail to deliver the agreed scope</li>
              </ul>
            </Section>

            <Section title="4. Intellectual property">
              <p>
                Upon full payment, you own all deliverables we produce for you — including the landing
                page code, copy, and automation sequences.
              </p>
              <p>
                We retain the right to describe the project in our portfolio and case studies (without
                disclosing confidential business details) unless you request otherwise in writing.
              </p>
            </Section>

            <Section title="5. Your responsibilities">
              <p>You are responsible for:</p>
              <ul className="space-y-1 pl-4 list-disc">
                <li>Providing accurate information about your business and goals</li>
                <li>Timely feedback and approvals during the build process</li>
                <li>Ensuring your offer and claims comply with applicable advertising laws</li>
                <li>Maintaining the platforms and tools we integrate (Cal.com, email provider, etc.)</li>
              </ul>
            </Section>

            <Section title="6. Limitation of liability">
              <p>
                To the maximum extent permitted by law, WHYN&apos;s total liability for any claim
                arising from our services shall not exceed the fees paid by you in the 3 months
                preceding the claim.
              </p>
              <p>
                We are not liable for indirect, consequential, or incidental losses including lost
                profit, lost revenue, or loss of data.
              </p>
            </Section>

            <Section title="7. Confidentiality">
              <p>
                Both parties agree to keep confidential any non-public information shared during
                the engagement. This obligation survives termination of the agreement.
              </p>
            </Section>

            <Section title="8. Termination">
              <p>
                Either party may terminate an engagement with 7 days written notice. Work completed
                up to the termination date is billable. We will deliver all completed work in its
                current state.
              </p>
            </Section>

            <Section title="9. Governing law">
              <p>
                These terms are governed by the laws of the jurisdiction in which WHYN is registered.
                Any disputes will be resolved by negotiation in good faith before any legal action is
                taken.
              </p>
            </Section>

            <Section title="10. Contact">
              <p>
                Questions about these terms:{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-white underline underline-offset-2">
                  {CONTACT_EMAIL}
                </a>
              </p>
            </Section>
          </div>
        </div>

        <div className="mt-12 pt-8 flex flex-wrap gap-4 text-xs text-muted-foreground" style={{ borderTop: "1px solid rgba(255,255,255,0.07)", ...DM }}>
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
        </div>
      </div>
    </div>
  );
}
