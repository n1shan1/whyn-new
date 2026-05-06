"use client";

import { motion } from "framer-motion";
import { Lightbulb, Wrench, Rocket } from "lucide-react";

const SORA = "var(--font-sora,'Sora',sans-serif)";
const DM   = "var(--font-dm-sans,'DM Sans',sans-serif)";

const steps = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Strategy call",
    description:
      "We map your funnel — where leads come in, where they drop, what to automate. One focused call, a clear plan.",
  },
  {
    icon: Wrench,
    number: "02",
    title: "Build",
    description:
      "Landing page + automation + booking flow. Built and connected in 2–5 business days. No back-and-forth.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Launch & optimise",
    description:
      "We go live. Monitor, adjust, and improve based on real conversion data. You own everything.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-28 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
            style={{ color: "#A8E63D", fontFamily: SORA }}
          >
            How it works
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]"
            style={{ fontFamily: SORA, fontWeight: 800, letterSpacing: "-0.02em" }}
          >
            From zero to live in days
          </h2>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-[3.25rem] left-[16.67%] right-[16.67%] h-[1px] step-connector opacity-25" />
          <div className="grid md:grid-cols-3 gap-10 md:gap-6 relative">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="flex flex-col items-center text-center"
                >
                  <div
                    className="relative w-[6.5rem] h-[6.5rem] rounded-full flex flex-col items-center justify-center mb-6 z-10"
                    style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}
                  >
                    <Icon className="h-6 w-6 mb-1" style={{ color: "#A8E63D" }} />
                    <span
                      className="text-xs font-bold"
                      style={{ color: "#A8E63D", fontFamily: SORA }}
                    >
                      {step.number}
                    </span>
                  </div>
                  <h3
                    className="text-xl font-bold text-white mb-3"
                    style={{ fontFamily: SORA, fontWeight: 700 }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm text-muted-foreground leading-relaxed max-w-[260px]"
                    style={{ fontFamily: DM, fontWeight: 300 }}
                  >
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
