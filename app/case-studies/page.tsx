"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SORA = "var(--font-sora,'Sora',sans-serif)";
const DM = "var(--font-dm-sans,'DM Sans',sans-serif)";
const CALCOM_URL = process.env.NEXT_PUBLIC_CALCOM_URL || "https://cal.com/your-username/discovery-call";

const stories = [
  {
    tag: "Coaching",
    client: "Online Business Coach",
    pullQuote: "I was spending 15 hours a week just replying to DMs and chasing people down. Now I just wake up and check my calendar.",
    narrative: {
      origin: "She had successfully built an audience, pulling in consistent attention through Instagram Reels and Stories. But attention doesn't pay the bills. Every lead had to be manually qualified via DMs. Hours were spent going back and forth trying to find a time to meet. The result? Leads went cold, she was burning out, and revenue was stuck at a ceiling because she physically couldn't handle more manual volume.",
      shift: "We stripped away the manual labor. We built a high-conversion landing page with a compelling lead magnet. Instead of a 'link in bio' leading to a link tree, it went straight to a focused funnel. We implemented an automated 5-email nurture sequence that indoctrinated leads on autopilot, ending in a Cal.com booking link gated by a strict qualification form.",
      aftermath: "The bottleneck was destroyed. The system now filters out tire-kickers and automatically schedules qualified prospects. Without lifting a finger, her calendar began filling up while she slept.",
    },
    metrics: {
      before: { value: "2–3 calls/mo", label: "Manual & stressful" },
      after: { value: "11 calls/mo", label: "Automated & qualified" },
      bottomLine: "3× booking increase. 0 manual follow-ups.",
      timeline: "4 days to launch",
    }
  },
  {
    tag: "Creator",
    client: "Course Creator",
    pullQuote: "I had 40,000 subscribers and felt like I was screaming into a void. Now I have a predictable machine that prints sales.",
    narrative: {
      origin: "With over 40k subscribers on YouTube, the top of the funnel was massive. But conversions were abysmal—less than 0.1% of viewers were buying the $497 course. They were entirely dependent on the algorithm; if a video flopped, revenue plummeted. They had no email list, no follow-up mechanism, and no way to capture the traffic they were generating.",
      shift: "We engineered an 'attention trap'. We created a dedicated landing page offering a free mini-course in exchange for an email address. Once captured, the system triggered a highly-calibrated 7-day email sequence that provided immense value while slowly positioning the paid course as the ultimate solution.",
      aftermath: "They stopped renting their audience from YouTube and started owning it. By capturing emails, they could market to warm leads repeatedly. Revenue tripled almost overnight, entirely independent of their next video's performance.",
    },
    metrics: {
      before: { value: "~12 sales/mo", label: "Algorithm dependent" },
      after: { value: "38 sales/mo", label: "Predictable email revenue" },
      bottomLine: "3× revenue. Email list grew to 3,200 in 60 days.",
      timeline: "5 days to launch",
    }
  },
  {
    tag: "Agency",
    client: "Marketing Agency",
    pullQuote: "We were taking calls with people who had ₹10k budgets for a ₹1.5L service. The new system filters them out instantly.",
    narrative: {
      origin: "Their calendar was full, but their bank account wasn't. The agency had no lead qualification process, meaning their senior team was wasting up to 10 hours a week on discovery calls with 'tire-kickers' who could never afford their services. It was demoralizing and expensive.",
      shift: "We completely redesigned their booking architecture. Before anyone could see a calendar, they had to pass through a rigorous application funnel. We built automated disqualification logic based on budget and timeline questions, routing unqualified leads to a polite rejection email and a low-ticket downsell, while qualified leads were immediately pushed to book a call.",
      aftermath: "Call volume dropped, but revenue skyrocketed. The team got 8 hours of their week back, and because they were only speaking to highly-qualified, pre-sold prospects, their close rate jumped dramatically.",
    },
    metrics: {
      before: { value: "1 in 6 close rate", label: "High volume, low quality" },
      after: { value: "1 in 2 close rate", label: "Fewer calls, high quality" },
      bottomLine: "Saved 8+ hours/week. 3× close rate increase.",
      timeline: "3 days to launch",
    }
  }
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function CaseStudiesPage() {
  return (
    <div className="pt-28 pb-0 bg-background selection:bg-brand/20">
      {/* Header */}
      <section className="py-20 border-b border-white/[0.06] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(168,230,61,0.05),transparent)] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors duration-200 mb-8"
              style={{ fontFamily: DM }}
            >
              ← Back to home
            </Link>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A8E63D] mb-4" style={{ fontFamily: SORA }}>
              The Wall of Proof
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-6 max-w-4xl" style={{ fontFamily: SORA, letterSpacing: "-0.03em" }}>
              Stories of transformation.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-light" style={{ fontFamily: DM }}>
              We don't just build websites; we architect systems that change how businesses operate. Read the narratives behind the numbers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stories */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-32"
          >
            {stories.map((story, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-20 items-start relative"
              >
                {/* Left Column: The Narrative */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-3 mb-8">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#0F0F12] bg-[#A8E63D] px-3 py-1 rounded-sm" style={{ fontFamily: SORA }}>
                      {story.tag}
                    </span>
                    <span className="text-sm font-semibold text-white/80" style={{ fontFamily: SORA }}>{story.client}</span>
                  </div>

                  {/* Pull Quote */}
                  <div className="relative mb-12 pl-6 md:pl-8 border-l-2 border-[#A8E63D]/30 py-2">
                    <Quote className="absolute top-0 left-[-15px] h-8 w-8 text-[#A8E63D]/20 -translate-y-4 bg-background" />
                    <p className="text-2xl md:text-3xl text-white font-medium leading-snug tracking-tight" style={{ fontFamily: SORA }}>
                      "{story.pullQuote}"
                    </p>
                  </div>

                  {/* The Story */}
                  <div className="space-y-10 text-muted-foreground leading-relaxed text-base md:text-lg font-light" style={{ fontFamily: DM }}>
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-white/60 mb-4" style={{ fontFamily: SORA }}>1. The Origin</h3>
                      <p>{story.narrative.origin}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-white/60 mb-4" style={{ fontFamily: SORA }}>2. The Shift</h3>
                      <p>{story.narrative.shift}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-white/60 mb-4" style={{ fontFamily: SORA }}>3. The Aftermath</h3>
                      <p className="text-white/90 font-normal">{story.narrative.aftermath}</p>
                    </div>
                  </div>
                </div>

                {/* Right Column: Sticky Metrics Card */}
                <div className="lg:sticky lg:top-32 rounded-3xl border border-white/[0.05] bg-[rgba(255,255,255,0.015)] p-8 shadow-2xl backdrop-blur-md">
                  <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-8 border-b border-white/5 pb-4" style={{ fontFamily: SORA }}>
                    At a glance
                  </p>
                  
                  <div className="space-y-8">
                    {/* Before */}
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-red-400/60 mb-2 font-bold" style={{ fontFamily: SORA }}>The Before</p>
                      <p className="text-xl font-bold text-red-400/90 mb-1" style={{ fontFamily: SORA, letterSpacing: "-0.02em" }}>{story.metrics.before.value}</p>
                      <p className="text-xs text-muted-foreground" style={{ fontFamily: DM }}>{story.metrics.before.label}</p>
                    </div>

                    <ArrowRight className="h-5 w-5 text-white/20" />

                    {/* After */}
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-[#A8E63D]/60 mb-2 font-bold" style={{ fontFamily: SORA }}>The After</p>
                      <p className="text-2xl font-bold text-[#A8E63D] mb-1" style={{ fontFamily: SORA, letterSpacing: "-0.02em" }}>{story.metrics.after.value}</p>
                      <p className="text-xs text-muted-foreground" style={{ fontFamily: DM }}>{story.metrics.after.label}</p>
                    </div>

                    <hr className="border-white/5" />

                    {/* Bottom Line */}
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/40 mb-2 font-bold" style={{ fontFamily: SORA }}>Bottom Line</p>
                      <p className="text-sm font-semibold text-white leading-relaxed" style={{ fontFamily: DM }}>{story.metrics.bottomLine}</p>
                    </div>
                    
                    <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs text-muted-foreground/60" style={{ fontFamily: DM }}>
                      <span>Timeline:</span>
                      <span className="text-white/80">{story.metrics.timeline}</span>
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/[0.04] bg-[radial-gradient(ellipse_50%_50%_at_50%_100%,rgba(168,230,61,0.04),transparent)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6" style={{ fontFamily: SORA, letterSpacing: "-0.03em" }}>
              Ready to write your story?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 font-light" style={{ fontFamily: DM }}>
              Book a free 20-minute strategy call. We'll audit your current setup and map the exact system you need to scale.
            </p>
            <a href={CALCOM_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-[#A8E63D] hover:bg-[#8FCC22] text-[#0F0F12] font-bold rounded-xl px-10 py-7 text-base transition-all duration-200 hover:scale-[1.02] shadow-[0_0_40px_rgba(168,230,61,0.15)]"
                style={{ fontFamily: SORA }}
              >
                Book A Quick Call
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
