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
    id: "coaching-system",
    tag: "Coaching",
    client: "Online Business Coach",
    title: "15 Hours Saved. Zero Manual DMs.",
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
    id: "course-creator-machine",
    tag: "Creator",
    client: "Course Creator",
    title: "From Void to Value: The Sales Machine",
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
    id: "agency-friction-filter",
    tag: "Agency",
    client: "Marketing Agency",
    title: "The Friction Filter",
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
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[0.9] mb-8 max-w-4xl" style={{ fontFamily: SORA, letterSpacing: "-0.05em" }}>
              Systems we<br />
              <span className="text-[#A8E63D]">built.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground/80 max-w-2xl leading-relaxed font-light" style={{ fontFamily: DM }}>
              We don't just build websites; we architect systems that change how businesses operate. Real numbers, real transformation.
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
                className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-24 items-start relative group"
              >
                {/* Left Column: The Narrative */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0F0F12] bg-[#A8E63D] px-2.5 py-1 rounded-sm" style={{ fontFamily: SORA }}>
                      {story.tag}
                    </span>
                    <div className="h-px w-8 bg-white/10" />
                    <span className="text-xs font-semibold text-white/40 tracking-wider" style={{ fontFamily: SORA }}>{story.client}</span>
                  </div>

                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 leading-[1.1] tracking-tight" style={{ fontFamily: SORA, letterSpacing: "-0.04em" }}>
                    {story.title}
                  </h2>

                  {/* Visual Element Placeholder */}
                  <Link href={`/case-studies/${story.id || 'coaching-system'}`}>
                    <div className="mb-12 aspect-[16/9] rounded-2xl bg-white/[0.03] border border-white/[0.08] overflow-hidden relative group/image cursor-pointer">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#A8E63D]/5 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-700" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white/5 font-bold text-6xl select-none" style={{ fontFamily: SORA }}>{story.tag} SYSTEM</div>
                      </div>
                      {/* Animated Glow */}
                      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#A8E63D]/10 blur-[100px] rounded-full pointer-events-none" />
                      <div className="absolute top-6 right-6 opacity-0 group-hover/image:opacity-100 transition-all duration-300 translate-x-4 group-hover/image:translate-x-0">
                        <div className="bg-[#A8E63D] text-[#0F0F12] p-3 rounded-full">
                          <ArrowUpRight className="h-6 w-6" />
                        </div>
                      </div>
                    </div>
                  </Link>

                  {/* Pull Quote */}
                  <div className="relative mb-16 pl-8 md:pl-10 border-l border-[#A8E63D] py-2">
                    <Quote className="absolute top-0 left-[-12px] h-6 w-6 text-[#A8E63D] bg-background" />
                    <p className="text-xl md:text-2xl text-white/90 font-medium italic leading-relaxed" style={{ fontFamily: DM }}>
                      "{story.pullQuote}"
                    </p>
                  </div>

                  {/* The Story */}
                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 text-muted-foreground leading-relaxed text-base font-light" style={{ fontFamily: DM }}>
                    <div className="col-span-2">
                      <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A8E63D] mb-4" style={{ fontFamily: SORA }}>1. The Origin</h3>
                      <p className="text-lg text-white/70">{story.narrative.origin}</p>
                    </div>
                    <div>
                      <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A8E63D] mb-4" style={{ fontFamily: SORA }}>2. The Shift</h3>
                      <p>{story.narrative.shift}</p>
                    </div>
                    <div>
                      <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A8E63D] mb-4" style={{ fontFamily: SORA }}>3. The Aftermath</h3>
                      <p className="text-white/90 font-normal">{story.narrative.aftermath}</p>
                    </div>
                  </div>
                </div>

                {/* Right Column: Sticky Metrics Card */}
                <div className="lg:sticky lg:top-32 rounded-[2rem] border border-white/[0.08] bg-white/[0.02] p-10 shadow-3xl backdrop-blur-xl group-hover:border-[#A8E63D]/20 transition-colors duration-500">
                  <div className="flex items-center justify-between mb-10 border-b border-white/5 pb-6">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40" style={{ fontFamily: SORA }}>
                      The Proof
                    </p>
                    <div className="h-2 w-2 rounded-full bg-[#A8E63D] animate-pulse" />
                  </div>
                  
                  <div className="space-y-10">
                    {/* Before */}
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-red-400/50 mb-3 font-bold" style={{ fontFamily: SORA }}>The Friction</p>
                      <p className="text-2xl font-bold text-red-400/90 mb-1" style={{ fontFamily: SORA, letterSpacing: "-0.02em" }}>{story.metrics.before.value}</p>
                      <p className="text-sm text-muted-foreground/60" style={{ fontFamily: DM }}>{story.metrics.before.label}</p>
                    </div>

                    <div className="flex justify-center py-2">
                      <div className="w-px h-12 bg-gradient-to-b from-red-400/20 via-[#A8E63D]/20 to-[#A8E63D]" />
                    </div>

                    {/* After */}
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#A8E63D]/50 mb-3 font-bold" style={{ fontFamily: SORA }}>The Freedom</p>
                      <p className="text-4xl font-extrabold text-[#A8E63D] mb-1" style={{ fontFamily: SORA, letterSpacing: "-0.04em" }}>{story.metrics.after.value}</p>
                      <p className="text-sm text-muted-foreground/80 font-medium" style={{ fontFamily: DM }}>{story.metrics.after.label}</p>
                    </div>

                    <div className="pt-8 border-t border-white/5 space-y-6">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-2 font-bold" style={{ fontFamily: SORA }}>Performance</p>
                        <p className="text-base font-semibold text-white/90 leading-relaxed" style={{ fontFamily: DM }}>{story.metrics.bottomLine}</p>
                      </div>
                      
                      <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white/20" style={{ fontFamily: SORA }}>
                        <span>Build Time</span>
                        <span className="text-[#A8E63D]/60 font-bold">{story.metrics.timeline}</span>
                      </div>
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
