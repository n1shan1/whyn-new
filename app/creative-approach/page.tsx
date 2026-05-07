"use client";

import { motion } from "framer-motion";
import { Zap, Target, BarChart3, Repeat } from "lucide-react";

const SORA = "var(--font-sora,'Sora',sans-serif)";
const DM = "var(--font-dm-sans,'DM Sans',sans-serif)";

const principles = [
  {
    icon: Target,
    title: "Precision Targeting",
    outcome: "We don't build for 'everyone'. We build systems that attract your highest-value clients and ignores the noise.",
    description: "Every pixel is placed with intent. If it doesn't contribute to a conversion, it doesn't belong on the page."
  },
  {
    icon: Zap,
    title: "Frictionless Flow",
    outcome: "Minimal clicks to conversion. We audit the user journey to remove every cognitive hurdle between them and your offer.",
    description: "Speed isn't just about loading times; it's about how quickly a user understands your value."
  },
  {
    icon: BarChart3,
    title: "Data-Led Evolution",
    outcome: "A system that gets smarter. We implement deep tracking to see exactly where leads are dropping off.",
    description: "Design is a hypothesis. Testing is the proof. We optimize based on actual user behavior."
  },
  {
    icon: Repeat,
    title: "Automated Continuity",
    outcome: "Relationship building at scale. We build systems that nurture leads even when you're offline.",
    description: "Your business shouldn't stop when you do. Automation ensures consistent growth."
  }
];

export default function CreativeApproachPage() {
  return (
    <div className="pt-32 pb-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-24 text-center max-w-4xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A8E63D] mb-4" style={{ fontFamily: SORA }}>
            The WHYN Method
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1] mb-8" style={{ fontFamily: SORA, letterSpacing: "-0.05em" }}>
            Design for <span className="text-[#A8E63D]">ROI.</span>
          </h1>
          <p className="text-xl text-muted-foreground font-light leading-relaxed" style={{ fontFamily: DM }}>
            We've replaced 'pretty design' with 'profitable architecture'. Here's the creative philosophy that drives our systems.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12">
          {principles.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-10 rounded-[2.5rem] border border-white/5 bg-white/[0.01] overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <p.icon className="h-24 w-24 text-[#A8E63D]" />
              </div>
              
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-2xl bg-[#A8E63D]/10 flex items-center justify-center mb-8 border border-[#A8E63D]/20">
                  <p.icon className="h-6 w-6 text-[#A8E63D]" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: SORA }}>{p.title}</h2>
                <p className="text-[#A8E63D] font-bold text-sm mb-4 leading-relaxed" style={{ fontFamily: SORA }}>{p.outcome}</p>
                <p className="text-muted-foreground font-light leading-relaxed" style={{ fontFamily: DM }}>{p.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
