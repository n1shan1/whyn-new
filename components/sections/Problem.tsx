"use client";

import { motion } from "framer-motion";
import { XCircle, ArrowRight } from "lucide-react";

const SORA = "var(--font-sora,'Sora',sans-serif)";
const DM   = "var(--font-dm-sans,'DM Sans',sans-serif)";

const problems = [
  {
    title: "Leads going cold",
    description:
      "Your leads aren't going cold because of your offer. They're going cold because nothing follows up.",
  },
  {
    title: "No follow-up system",
    description:
      "Manual messages, forgotten leads, inconsistent outreach. Revenue slips through the cracks every week.",
  },
  {
    title: "Content not converting",
    description:
      "Thousands of views, dozens of comments — but your calendar stays empty. Attention without a system is wasted.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Problem() {
  return (
    <section id="problem" className="py-28 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <motion.p
              variants={itemVariants}
              className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
              style={{ color: "#A8E63D", fontFamily: SORA }}
            >
              The problem
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-6"
              style={{ fontFamily: SORA, fontWeight: 800, letterSpacing: "-0.02em" }}
            >
              The problem is the system,{" "}
              <span style={{ color: "rgba(255,255,255,0.35)" }}>not you.</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground leading-relaxed mb-10"
              style={{ fontFamily: DM, fontWeight: 300 }}
            >
              Most coaches have audience but no system. Leads go cold. DMs pile up. Nobody follows up. We build the infrastructure that does it for you.
            </motion.p>

            <motion.div variants={containerVariants} className="space-y-4">
              {problems.map((p) => (
                <motion.div
                  key={p.title}
                  variants={itemVariants}
                  className="flex gap-4 p-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-200"
                >
                  <XCircle className="h-5 w-5 text-red-400/70 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-white mb-1" style={{ fontFamily: SORA, fontWeight: 600 }}>
                      {p.title}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: DM }}>
                      {p.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: flow diagram */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8">
              <p
                className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-6"
                style={{ fontFamily: SORA, letterSpacing: "0.18em" }}
              >
                Without a system
              </p>
              {[
                { label: "Create content", sub: "Hours of effort" },
                { label: "Get attention", sub: "Views, DMs, comments" },
                { label: "… nothing", sub: "No capture. No follow-up.", red: true },
              ].map((node, i) => (
                <div key={i}>
                  <div
                    className={`flex items-center gap-4 p-4 rounded-xl ${
                      node.red
                        ? "bg-red-400/[0.05] border border-red-400/15"
                        : "bg-white/[0.03] border border-white/[0.07]"
                    }`}
                  >
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                        node.red ? "bg-red-400/20 text-red-400" : "bg-white/10 text-white"
                      }`}
                      style={{ fontFamily: SORA }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <p
                        className={`text-sm font-semibold ${node.red ? "text-red-400" : "text-white"}`}
                        style={{ fontFamily: SORA, fontWeight: 600 }}
                      >
                        {node.label}
                      </p>
                      <p className="text-xs text-muted-foreground" style={{ fontFamily: DM }}>
                        {node.sub}
                      </p>
                    </div>
                  </div>
                  {i < 2 && (
                    <div className="flex justify-center my-1">
                      <ArrowRight className="h-4 w-4 text-muted-foreground/30 rotate-90" />
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-6 pt-6 border-t border-white/[0.06]">
                <p className="text-sm text-muted-foreground" style={{ fontFamily: DM }}>
                  <span className="text-red-400 font-semibold">Result: </span>
                  Inconsistent revenue. Burning out. Starting over every month.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
