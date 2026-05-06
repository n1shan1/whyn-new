"use client";

import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { PACKAGES, BRAND } from "@/lib/constants";

const SORA = "var(--font-sora,'Sora',sans-serif)";
const DM   = "var(--font-dm-sans,'DM Sans',sans-serif)";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function Packages() {
  return (
    <section id="packages" className="py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
            style={{ color: "#A8E63D", fontFamily: SORA }}
          >
            Pricing
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: SORA, fontWeight: 800, letterSpacing: "-0.03em" }}
          >
            {PACKAGES.headline}
          </h2>
          <p className="text-muted-foreground" style={{ fontFamily: DM, fontWeight: 300 }}>
            {PACKAGES.subtext}
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-3 gap-4 items-stretch"
        >
          {PACKAGES.tiers.map((tier) => (
            <motion.div
              key={tier.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative flex flex-col h-full rounded-2xl p-7"
              style={{
                background:  tier.featured ? "rgba(168,230,61,0.04)" : "rgba(255,255,255,0.02)",
                border:      tier.featured ? "1px solid rgba(168,230,61,0.35)" : "1px solid rgba(255,255,255,0.07)",
                boxShadow:   tier.featured ? "0 0 40px rgba(168,230,61,0.07)" : "none",
              }}
            >
              {/* Featured badge */}
              {tier.badge && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold"
                  style={{
                    background: "#A8E63D",
                    color: "#0F0F12",
                    fontFamily: SORA,
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {tier.badge}
                </div>
              )}

              {/* Tier header */}
              <div className="mb-6">
                <p
                  className="text-xs font-semibold uppercase tracking-[0.18em] mb-1"
                  style={{ color: tier.featured ? "#A8E63D" : "rgba(255,255,255,0.4)", fontFamily: SORA }}
                >
                  {tier.label}
                </p>
                <p className="text-sm text-muted-foreground mb-4" style={{ fontFamily: DM }}>
                  {tier.subtitle}
                </p>
                <div className="flex items-end gap-2 mb-4">
                  <p
                    className="text-4xl font-bold text-white"
                    style={{ fontFamily: SORA, fontWeight: 800, letterSpacing: "-0.02em" }}
                  >
                    {tier.price}
                  </p>
                  <p className="text-xs text-muted-foreground pb-1 uppercase tracking-wider" style={{ fontFamily: DM }}>
                    / project
                  </p>
                </div>
                
                {/* Meta details */}
                <div className="space-y-2 py-4 border-y border-white/5 mb-6">
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-bold text-white/70 w-16" style={{ fontFamily: SORA }}>Ideal for:</span>
                    <span className="text-xs text-muted-foreground leading-relaxed" style={{ fontFamily: DM }}>{tier.bestFor}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-white/70 w-16" style={{ fontFamily: SORA }}>Timeline:</span>
                    <span className="text-xs text-[#A8E63D]" style={{ fontFamily: DM, fontWeight: 500 }}>{tier.timeline}</span>
                  </div>
                </div>
              </div>

              {/* Grouped Feature list */}
              <div className="flex flex-col gap-6 mb-8 flex-1">
                {tier.features.map((groupData: any, idx: number) => (
                  <div key={idx}>
                    <p className="text-[11px] uppercase tracking-widest text-white/30 mb-3 font-semibold" style={{ fontFamily: SORA }}>
                      {groupData.group}
                    </p>
                    <ul className="flex flex-col gap-2.5">
                      {groupData.items.map((f: string) => (
                        <li key={f} className="flex items-start gap-2.5">
                          <Check
                            className="h-3.5 w-3.5 flex-shrink-0 mt-0.5"
                            style={{ color: tier.featured ? "#A8E63D" : "rgba(168,230,61,0.5)" }}
                          />
                          <span
                            className="text-[13px] leading-snug"
                            style={{
                              fontFamily: DM,
                              color: tier.featured ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.55)",
                            }}
                          >
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                data-cal-namespace="30min"
                data-cal-link="niishantdev/30min"
                className="mt-auto flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={
                  tier.featured
                    ? { background: "#A8E63D", color: "#0F0F12", fontFamily: SORA, fontWeight: 700 }
                    : {
                        background: "rgba(255,255,255,0.04)",
                        color: "rgba(255,255,255,0.7)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        fontFamily: SORA,
                        fontWeight: 600,
                      }
                }
              >
                {tier.cta}
                {tier.featured && <Zap className="h-3.5 w-3.5" />}
              </button>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-xs text-muted-foreground/50 mt-8"
          style={{ fontFamily: DM }}
        >
          All prices in INR. Final quote provided after strategy call. No hidden fees.
        </motion.p>
      </div>
    </section>
  );
}
