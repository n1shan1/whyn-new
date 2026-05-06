"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PROOF } from "@/lib/constants";

const SORA = "var(--font-sora,'Sora',sans-serif)";
const DM   = "var(--font-dm-sans,'DM Sans',sans-serif)";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function Proof() {
  return (
    <section id="proof" className="py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
            style={{ color: "#A8E63D", fontFamily: SORA }}
          >
            {PROOF.note}
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: SORA, fontWeight: 800, letterSpacing: "-0.03em" }}
          >
            {PROOF.headline}
          </h2>
        </motion.div>

        {/* Before / After cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-3 gap-4"
        >
          {PROOF.cards.map((card) => (
            <motion.div
              key={card.label}
              variants={cardVariants}
              className="rounded-2xl overflow-hidden flex flex-col"
              style={{ border: "1px solid rgba(255,255,255,0.07)" }}
            >
              {/* Before */}
              <div
                className="px-6 py-5 flex-1"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-[0.18em] mb-3 opacity-40"
                  style={{ fontFamily: SORA }}
                >
                  Before
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: DM }}>
                  {card.before}
                </p>
              </div>

              {/* Arrow divider */}
              <div
                className="flex items-center gap-3 px-6 py-3"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(168,230,61,0.03)" }}
              >
                <div className="h-px flex-1" style={{ background: "rgba(168,230,61,0.2)" }} />
                <ArrowRight className="h-3.5 w-3.5 flex-shrink-0" style={{ color: "#A8E63D" }} />
                <div className="h-px flex-1" style={{ background: "rgba(168,230,61,0.2)" }} />
              </div>

              {/* After */}
              <div
                className="px-6 py-5 flex-1"
                style={{ background: "rgba(168,230,61,0.03)" }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-[0.18em] mb-3"
                  style={{ color: "#A8E63D", fontFamily: SORA }}
                >
                  After
                </p>
                <p className="text-sm text-white leading-relaxed font-medium" style={{ fontFamily: DM }}>
                  {card.after}
                </p>
              </div>

              {/* Label */}
              <div
                className="px-6 py-3"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.01)" }}
              >
                <p
                  className="text-xs text-muted-foreground/50"
                  style={{ fontFamily: DM }}
                >
                  {card.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
