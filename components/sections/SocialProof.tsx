"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Days to Launch", value: "5-7" },
  { label: "Custom Design", value: "100%" },
  { label: "Direct Support", value: "24/7" },
  { label: "Hidden Fees", value: "Zero" },
];

const trustedBy = [
  "B2B Companies",
  "Service Businesses",
  "SaaS Startups",
  "Sales Teams",
  "Solution Providers",
  "Consultancies",
  "Marketing Agencies",
  "Real Estate Firms",
  "B2B Companies",
  "Service Businesses",
  "SaaS Startups",
  "Sales Teams",
  "Solution Providers",
  "Consultancies",
  "Marketing Agencies",
  "Real Estate Firms",
];

const SORA = "var(--font-sora,'Sora',sans-serif)";
const DM   = "var(--font-dm-sans,'DM Sans',sans-serif)";

export function SocialProof() {
  return (
    <section className="py-16 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-3xl md:text-4xl font-bold text-white tracking-tight"
                style={{ fontFamily: SORA, fontWeight: 800, color: "#A8E63D" }}
              >
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground mt-1" style={{ fontFamily: DM }}>
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Trusted by */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/60 mb-8"
          style={{ fontFamily: SORA }}
        >
          Trusted by coaches, creators, and agencies
        </motion.p>

        {/* Marquee */}
        <div className="overflow-hidden marquee-container relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />
          <div className="animate-marquee flex gap-0 whitespace-nowrap w-max">
            {trustedBy.map((item, i) => (
              <div
                key={i}
                className="mx-3 px-5 py-2 rounded-full border text-sm text-muted-foreground font-medium"
                style={{
                  borderColor: "rgba(255,255,255,0.07)",
                  background: "rgba(255,255,255,0.03)",
                  fontFamily: DM,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
