"use client";

import { motion } from "framer-motion";
import { Globe, Mail, CalendarCheck } from "lucide-react";

const SORA = "var(--font-sora,'Sora',sans-serif)";
const DM   = "var(--font-dm-sans,'DM Sans',sans-serif)";

const steps = [
  {
    icon: Globe,
    step: "01",
    title: "Capture",
    subtitle: "Landing page that converts",
    description:
      "A high-converting page built for one goal: turn visitors into leads. Clear copy, zero friction, one call to action.",
    points: ["Conversion-optimised copy", "Mobile-first design", "Fast load, no fluff"],
  },
  {
    icon: Mail,
    step: "02",
    title: "Nurture",
    subtitle: "Email & WhatsApp automation",
    description:
      "Automated sequences that follow up, educate, and warm your leads — so by the time they book, they already trust you.",
    points: ["Automated email sequences", "WhatsApp follow-ups", "Segmented by intent"],
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "Convert",
    subtitle: "Booking + qualification",
    description:
      "A booking flow that qualifies leads before they hit your calendar. No wasted calls — only serious prospects.",
    points: ["Cal.com integration", "Pre-call qualification", "Reminder sequences"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export function Offer() {
  return (
    <section id="offer" className="py-28 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
            className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-4"
            style={{ fontFamily: SORA, fontWeight: 800, letterSpacing: "-0.02em" }}
          >
            We build the full funnel in 2–5 days.
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-md mx-auto"
            style={{ fontFamily: DM, fontWeight: 300 }}
          >
            Landing page, automation, booking flow — connected and live.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-6"
        >
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                variants={cardVariants}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="group relative rounded-2xl border border-white/[0.07] bg-white/[0.02] p-7 hover:bg-white/[0.04] transition-all duration-300"
                style={{ borderColor: "rgba(255,255,255,0.07)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(168,230,61,0.2)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                }}
              >
                <p
                  className="absolute top-7 right-7 text-5xl font-bold select-none"
                  style={{ color: "rgba(255,255,255,0.04)", fontFamily: SORA, fontWeight: 800 }}
                >
                  {step.step}
                </p>

                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: "rgba(168,230,61,0.08)", border: "1px solid rgba(168,230,61,0.18)" }}
                >
                  <Icon className="h-5 w-5" style={{ color: "#A8E63D" }} />
                </div>

                <p
                  className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-2"
                  style={{ fontFamily: SORA, letterSpacing: "0.18em" }}
                >
                  {step.subtitle}
                </p>
                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: SORA, fontWeight: 700 }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm text-muted-foreground leading-relaxed mb-6"
                  style={{ fontFamily: DM, fontWeight: 300 }}
                >
                  {step.description}
                </p>

                <ul className="space-y-2">
                  {step.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-muted-foreground" style={{ fontFamily: DM }}>
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#A8E63D" }} />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
