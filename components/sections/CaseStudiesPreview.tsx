"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BRAND } from "@/lib/constants";

const SORA = "var(--font-sora,'Sora',sans-serif)";
const DM   = "var(--font-dm-sans,'DM Sans',sans-serif)";

const cases = [
  {
    tag: "Services",
    client: "B2B Consultancy",
    before: "Losing leads in emails",
    after: "Structured booking funnel",
    result: "3× more sales meetings in 30 days",
  },
  {
    tag: "SaaS",
    client: "AI Startup",
    before: "Manual demo follow-ups",
    after: "Automated nurture sequence",
    result: "Saved 15+ hours per week",
  },
  {
    tag: "Agency",
    client: "Design Agency",
    before: "No qualifying process",
    after: "Pre-call qualification system",
    result: "90% fewer unqualified calls",
  },
  {
    tag: "Real Estate",
    client: "Property Group",
    before: "Static website, zero leads",
    after: "Lead capture + automation",
    result: "45 targeted inquiries in first month",
  },
];

export function CaseStudiesPreview() {
  return (
    <section id="case-studies" className="py-28 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
              style={{ color: "#A8E63D", fontFamily: SORA }}
            >
              Results
            </p>
            <h2
              className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]"
              style={{ fontFamily: SORA, fontWeight: 800, letterSpacing: "-0.02em" }}
            >
              Before &amp; after
            </h2>
            <p
              className="text-lg text-muted-foreground mt-4 max-w-md"
              style={{ fontFamily: DM, fontWeight: 300 }}
            >
              Real outcomes from real systems. No vanity metrics.
            </p>
          </div>
          <Link href="/case-studies">
            <Button
              variant="ghost"
              className="border border-white/10 hover:border-white/20 text-muted-foreground hover:text-white rounded-xl transition-all duration-200"
              style={{ fontFamily: SORA, fontWeight: 600 }}
            >
              View all case studies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -3 }}
              className="group rounded-2xl p-7 transition-all duration-300 cursor-default"
              style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(168,230,61,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
              }}
            >
              <div className="flex items-center justify-between mb-6">
                <span
                  className="text-xs font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full"
                  style={{
                    color: "#A8E63D",
                    background: "rgba(168,230,61,0.1)",
                    border: "1px solid rgba(168,230,61,0.2)",
                    fontFamily: SORA,
                    letterSpacing: "0.1em",
                  }}
                >
                  {c.tag}
                </span>
                <span className="text-xs text-muted-foreground" style={{ fontFamily: DM }}>{c.client}</span>
              </div>

              <div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center mb-6">
                <div
                  className="rounded-xl p-4"
                  style={{ background: "rgba(220,50,50,0.05)", border: "1px solid rgba(220,50,50,0.12)" }}
                >
                  <p className="text-xs text-muted-foreground/60 mb-1 uppercase tracking-widest" style={{ fontFamily: SORA }}>Before</p>
                  <p className="text-sm font-medium" style={{ color: "rgba(220,100,100,0.9)", fontFamily: DM }}>{c.before}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground/30 flex-shrink-0" />
                <div
                  className="rounded-xl p-4"
                  style={{ background: "rgba(168,230,61,0.05)", border: "1px solid rgba(168,230,61,0.15)" }}
                >
                  <p className="text-xs text-muted-foreground/60 mb-1 uppercase tracking-widest" style={{ fontFamily: SORA }}>After</p>
                  <p className="text-sm font-medium" style={{ color: "#A8E63D", fontFamily: DM }}>{c.after}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06]">
                <p className="text-sm font-semibold text-white" style={{ fontFamily: SORA, fontWeight: 600 }}>{c.result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
