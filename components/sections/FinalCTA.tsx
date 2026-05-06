"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { LeadForm } from "@/components/shared/LeadForm";
import { BRAND, FINAL_CTA } from "@/lib/constants";

const SORA = "var(--font-sora,'Sora',sans-serif)";
const DM   = "var(--font-dm-sans,'DM Sans',sans-serif)";

export function FinalCTA() {
  return (
    <section id="contact" className="py-28 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
              style={{ color: "#A8E63D", fontFamily: SORA }}
            >
              Get started
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.08] mb-6"
              style={{ fontFamily: SORA, fontWeight: 800, letterSpacing: "-0.03em" }}
            >
              {FINAL_CTA.headline}
            </h2>
            <p
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
              style={{ fontFamily: DM, fontWeight: 300 }}
            >
              {FINAL_CTA.subtext}
            </p>

            {/* Proof points */}
            <div className="space-y-3 mb-10">
              {["Live in 2–5 business days", "You own everything we build", "No long-term contracts"].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(168,230,61,0.12)", border: "1px solid rgba(168,230,61,0.25)" }}
                  >
                    <svg width="8" height="7" viewBox="0 0 8 7" fill="none">
                      <path d="M1 3.5L3 5.5L7 1" stroke="#A8E63D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-sm text-muted-foreground" style={{ fontFamily: DM }}>{point}</span>
                </div>
              ))}
            </div>

            {/* Direct booking link */}
            <div className="pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              <button
                data-cal-namespace="30min"
                data-cal-link="niishantdev/30min"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: "#A8E63D",
                  color: "#0F0F12",
                  fontFamily: SORA,
                  fontWeight: 700,
                }}
              >
                {FINAL_CTA.cta}
                <Zap className="h-4 w-4" />
              </button>
              <p
                className="text-xs text-muted-foreground/50 mt-3"
                style={{ fontFamily: DM }}
              >
                {FINAL_CTA.microCopy}
              </p>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl p-8"
            style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}
          >
            <p
              className="text-base font-bold text-white mb-1"
              style={{ fontFamily: SORA, fontWeight: 700 }}
            >
              Send us a message
            </p>
            <p className="text-sm text-muted-foreground mb-6" style={{ fontFamily: DM }}>
              We'll reply within 1 business day.
            </p>
            <LeadForm source="landing-page-cta" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
