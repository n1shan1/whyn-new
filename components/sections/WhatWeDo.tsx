"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WHAT_WE_DO } from "@/lib/constants";

const SORA = "var(--font-sora,'Sora',sans-serif)";
const DM   = "var(--font-dm-sans,'DM Sans',sans-serif)";

const STEP_COLORS = ["#A8E63D", "rgba(168,230,61,0.6)", "rgba(168,230,61,0.35)"];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden:   { opacity: 0, y: 20 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
            style={{ color: "#A8E63D", fontFamily: SORA }}
          >
            The system
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight"
            style={{ fontFamily: SORA, fontWeight: 800, letterSpacing: "-0.03em" }}
          >
            {WHAT_WE_DO.headline}
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: DM, fontWeight: 300 }}
          >
            {WHAT_WE_DO.subtext}
          </p>
        </motion.div>

        {/* Flow diagram */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-4 mb-16 relative"
        >
          {WHAT_WE_DO.steps.map((step, i) => (
            <motion.div key={step.label} variants={itemVariants} className="relative flex flex-col">
              {/* Arrow connector */}
              {i < WHAT_WE_DO.steps.length - 1 && (
                <div className="hidden md:flex absolute top-8 -right-2 z-10 items-center">
                  <ArrowRight className="h-4 w-4" style={{ color: "#A8E63D", opacity: 0.5 }} />
                </div>
              )}

              <div
                className="flex-1 rounded-2xl p-6 flex flex-col gap-4"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {/* Step label */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{
                      background: `rgba(168,230,61,0.12)`,
                      color: STEP_COLORS[i],
                      fontFamily: SORA,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <p
                      className="text-lg font-bold text-white leading-none"
                      style={{ fontFamily: SORA, fontWeight: 800 }}
                    >
                      {step.label}
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: STEP_COLORS[i], fontFamily: DM }}
                    >
                      {step.sub}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: DM }}>
                  {step.desc}
                </p>

                {/* Bottom accent line */}
                <div
                  className="h-0.5 rounded-full mt-auto"
                  style={{ background: `linear-gradient(to right, ${STEP_COLORS[i]}, transparent)` }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Differentiators 2-col grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl p-8"
          style={{ border: "1px solid rgba(168,230,61,0.15)", background: "rgba(168,230,61,0.03)" }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] mb-6"
            style={{ color: "#A8E63D", fontFamily: SORA }}
          >
            Every system includes
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {WHAT_WE_DO.differentiators.map((d) => (
              <div key={d} className="flex items-center gap-3">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(168,230,61,0.12)" }}
                >
                  <svg width="8" height="7" viewBox="0 0 8 7" fill="none">
                    <path d="M1 3.5L3 5.5L7 1" stroke="#A8E63D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-sm text-muted-foreground" style={{ fontFamily: DM }}>{d}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
