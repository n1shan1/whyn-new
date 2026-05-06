"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const CALCOM_URL =
  process.env.NEXT_PUBLIC_CALCOM_URL ||
  "https://cal.com/your-username/discovery-call";

const marqueeItems = [
  "B2B Companies",
  "Service Businesses",
  "SaaS Startups",
  "Sales Teams",
  "Solution Providers",
  "Consultancies",
  "Marketing Agencies",
  "Real Estate Firms",
  "Financial Services",
  "Professional Services",
  "B2B Companies",
  "Service Businesses",
  "SaaS Startups",
  "Sales Teams",
  "Solution Providers",
  "Consultancies",
  "Marketing Agencies",
  "Real Estate Firms",
  "Financial Services",
  "Professional Services",
];

const SORA = "var(--font-sora,'Sora',sans-serif)";
const DM = "var(--font-dm-sans,'DM Sans',sans-serif)";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(168,230,61,0.04),transparent)] pointer-events-none" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-8 flex flex-col items-center text-center">

        {/* Eyebrow */}
        <motion.div
          initial={{ y: 16 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 text-xs font-semibold mb-8"
          style={{
            borderColor: "rgba(168,230,61,0.25)",
            background: "rgba(168,230,61,0.08)",
            color: "#A8E63D",
            fontFamily: SORA,
            letterSpacing: "0.1em",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#A8E63D" }} />
          WHYN — Conversion Systems
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.07] max-w-4xl"
          style={{ fontFamily: SORA, fontWeight: 800, letterSpacing: "-0.03em" }}
        >
          Turn your audience into{" "}
          <em style={{ fontStyle: "normal", color: "#A8E63D" }}>booked calls</em>{" "}
          and paying clients.
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-6 text-lg md:text-xl max-w-xl leading-relaxed"
          style={{ color: "rgba(255,255,255,0.45)", fontFamily: DM, fontWeight: 300 }}
        >
          Most businesses are one solid system away from scaling. The problem isn&apos;t your traffic — it&apos;s the infrastructure that converts it.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-3 items-center"
        >
          <div data-cal-namespace="30min" data-cal-link="niishantdev/30min">
            <Button
              size="lg"
              className="rounded-xl px-8 py-6 text-base font-bold transition-all duration-200 hover:scale-[1.02]"
              style={{
                background: "#A8E63D",
                color: "#0F0F12",
                fontFamily: SORA,
                fontWeight: 700,
                letterSpacing: "0.01em",
                boxShadow: "0 0 28px rgba(168,230,61,0.2)",
              }}
            >
              Book a quick call →
            </Button>
          </div>
          <Link href="/case-studies">
            <Button
              variant="ghost"
              size="lg"
              className="text-muted-foreground hover:text-white border border-white/10 hover:border-white/20 rounded-xl px-8 py-6 text-base transition-all duration-200"
              style={{ fontFamily: SORA, fontWeight: 600 }}
            >
              See how it works
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>

        {/* Proof pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-8 flex flex-wrap gap-2 justify-center"
        >
          {["No missed leads", "Automated follow-ups", "Live in 2–5 days"].map((pill) => (
            <span
              key={pill}
              className="text-xs px-3 py-1.5 rounded-full"
              style={{
                background: "rgba(255,255,255,0.05)",
                color: "rgba(255,255,255,0.45)",
                fontFamily: SORA,
                fontWeight: 500,
                letterSpacing: "0.03em",
              }}
            >
              {pill}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Marquee banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative w-full mt-10"
      >
        <div className="border-t border-b border-white/[0.06] py-4 overflow-hidden marquee-container relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />
          <div className="animate-marquee flex gap-0 whitespace-nowrap w-max">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="flex items-center">
                <span
                  className="px-6 text-sm font-medium text-muted-foreground"
                  style={{ fontFamily: DM }}
                >
                  {item}
                </span>
                <span style={{ color: "rgba(168,230,61,0.5)", fontSize: "10px" }}>✦</span>
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
