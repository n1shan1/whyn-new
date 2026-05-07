"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Zap, CheckCircle2, BarChart3, Clock, Layout, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";

const SORA = "var(--font-sora,'Sora',sans-serif)";
const DM = "var(--font-dm-sans,'DM Sans',sans-serif)";

// This would typically come from a CMS or local data file
const projectDetails: Record<string, any> = {
  "coaching-system": {
    tag: "Coaching",
    title: "15 Hours Saved. Zero Manual DMs.",
    client: "Online Business Coach",
    metrics: [
      { label: "Bookings", value: "3.5x", icon: BarChart3 },
      { label: "Manual Work", value: "0 hrs", icon: Clock },
      { label: "Launch Time", value: "4 Days", icon: Zap },
    ],
    overview: "Built a fully automated qualification engine for an Instagram-based coach struggling with manual lead management.",
    outcomes: [
      "Automated lead qualification via custom gated forms",
      "Dynamic email nurture sequence with 62% open rate",
      "Direct integration with Cal.com for friction-less booking",
      "Centralized CRM dashboard for lead tracking"
    ],
    technical: "Next.js 14, Resend, Supabase, Cal.com API",
  },
  "course-creator-machine": {
    tag: "Creator",
    title: "From Void to Value: The Sales Machine",
    client: "Course Creator",
    metrics: [
      { label: "Revenue", value: "3x", icon: BarChart3 },
      { label: "Email List", value: "3.2k", icon: Users },
      { label: "Launch Time", value: "5 Days", icon: Zap },
    ],
    overview: "Engineered an 'attention trap' that converted algorithm-dependent YouTube traffic into a predictable email-driven sales machine.",
    outcomes: [
      "High-conversion 'Free Mini-Course' landing page",
      "7-day value-first automated email sequence",
      "Strict exclusion logic for non-buyers",
      "Automated checkout and onboarding flow"
    ],
    technical: "Next.js 14, Resend, Stripe, Framer Motion",
  },
  "agency-friction-filter": {
    tag: "Agency",
    title: "The Friction Filter",
    client: "Marketing Agency",
    metrics: [
      { label: "Close Rate", value: "3x", icon: BarChart3 },
      { label: "Time Saved", value: "8h/wk", icon: Clock },
      { label: "Launch Time", value: "3 Days", icon: Zap },
    ],
    overview: "Redesigned a high-ticket agency's booking architecture to eliminate 'tire-kickers' and only book high-budget clients.",
    outcomes: [
      "Multi-step application funnel with budget gating",
      "Automated 'Polite Rejection' for unqualified leads",
      "Immediate routing to low-ticket downsell for rejected leads",
      "Priority VIP booking for high-budget leads"
    ],
    technical: "Next.js 14, Typeform API, Cal.com, Resend",
  }
};

export default function ProjectDetailsPage() {
  const params = useParams();
  const project = projectDetails[params.id as string] || projectDetails["coaching-system"];

  return (
    <div className="pt-32 pb-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <Link href="/case-studies" className="text-sm text-[#A8E63D] mb-12 inline-flex items-center gap-2 hover:gap-3 transition-all duration-300" style={{ fontFamily: SORA }}>
          ← Back to systems
        </Link>

        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0F0F12] bg-[#A8E63D] px-2.5 py-1 rounded-sm mb-6 inline-block" style={{ fontFamily: SORA }}>
              {project.tag}
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1] mb-8" style={{ fontFamily: SORA, letterSpacing: "-0.05em" }}>
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed mb-10" style={{ fontFamily: DM }}>
              {project.overview}
            </p>
            <div className="flex flex-wrap gap-4">
               {project.metrics.map((m: any, i: number) => (
                 <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex-1 min-w-[120px]">
                    <m.icon className="h-5 w-5 text-[#A8E63D] mb-3" />
                    <p className="text-2xl font-bold text-white mb-1" style={{ fontFamily: SORA }}>{m.value}</p>
                    <p className="text-[10px] uppercase tracking-widest text-white/40" style={{ fontFamily: SORA }}>{m.label}</p>
                 </div>
               ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-square rounded-[3rem] bg-white/[0.03] border border-white/10 flex items-center justify-center relative overflow-hidden"
          >
            <Layout className="h-32 w-32 text-white/5" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#A8E63D]/10 to-transparent pointer-events-none" />
          </motion.div>
        </div>

        {/* Outcomes */}
        <div className="grid md:grid-cols-[1fr_300px] gap-20">
          <div>
            <h2 className="text-3xl font-bold text-white mb-12" style={{ fontFamily: SORA }}>The Outcomes</h2>
            <div className="space-y-6">
              {project.outcomes.map((item: string, i: number) => (
                <div key={i} className="flex gap-4 p-6 rounded-2xl border border-white/5 bg-white/[0.01]">
                  <CheckCircle2 className="h-6 w-6 text-[#A8E63D] shrink-0" />
                  <p className="text-lg text-white/80 font-light" style={{ fontFamily: DM }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-6" style={{ fontFamily: SORA }}>Tech Stack</h3>
              <p className="text-lg text-white/90 font-medium leading-relaxed" style={{ fontFamily: DM }}>{project.technical}</p>
            </div>
            <div className="pt-8 border-t border-white/5">
              <Button className="w-full bg-[#A8E63D] text-[#0F0F12] font-bold py-6 hover:bg-[#A8E63D]/90" style={{ fontFamily: SORA }}>
                Build Your System <Zap className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
