"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Zap } from "lucide-react";
import Link from "next/link";

const SORA = "var(--font-sora,'Sora',sans-serif)";
const DM = "var(--font-dm-sans,'DM Sans',sans-serif)";

const posts = [
  {
    slug: "website-liabilities-vs-assets",
    title: "Why Most Websites are Liabilities, Not Assets",
    outcome: "Learn how to turn your digital presence into a 24/7 sales machine that qualifies leads while you sleep.",
    tag: "Strategy",
    date: "May 2026"
  },
  {
    slug: "frictionless-funnel-optimization",
    title: "The Frictionless Funnel: Reducing Drop-offs by 40%",
    outcome: "A breakdown of the exact psychological triggers we use to keep users moving toward the 'Book Call' button.",
    tag: "Optimization",
    date: "April 2026"
  },
  {
    slug: "automation-is-the-new-scale",
    title: "Automation is the New Scale",
    outcome: "How a coaching business removed 20 hours of manual labor per week using simple logic-based systems.",
    tag: "Automation",
    date: "March 2026"
  }
];

export default function BlogPage() {
  return (
    <div className="pt-32 pb-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-20">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A8E63D] mb-4" style={{ fontFamily: SORA }}>
            Insights & Strategy
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6" style={{ fontFamily: SORA, letterSpacing: "-0.04em" }}>
            Profit over <span className="text-[#A8E63D]">Pixels.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl font-light" style={{ fontFamily: DM }}>
            We write about systems, conversion psychology, and the automation frameworks that drive real revenue.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <Link key={i} href={`/blog/${post.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:border-[#A8E63D]/30 transition-all duration-500 flex flex-col h-full cursor-pointer"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#A8E63D]/80" style={{ fontFamily: SORA }}>{post.tag}</span>
                  <span className="text-[10px] uppercase tracking-widest text-white/20" style={{ fontFamily: SORA }}>{post.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#A8E63D] transition-colors duration-300" style={{ fontFamily: SORA }}>
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-8 flex-1 font-light leading-relaxed" style={{ fontFamily: DM }}>
                  {post.outcome}
                </p>
                <div className="pt-6 border-t border-white/5 flex items-center gap-2 text-[#A8E63D] font-bold text-sm" style={{ fontFamily: SORA }}>
                  Read Thesis <ArrowUpRight className="h-4 w-4" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
