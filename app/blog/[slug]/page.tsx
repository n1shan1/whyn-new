"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, User, Share2 } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const SORA = "var(--font-sora,'Sora',sans-serif)";
const DM = "var(--font-dm-sans,'DM Sans',sans-serif)";

const blogPosts: Record<string, any> = {
  "website-liabilities-vs-assets": {
    title: "Why Most Websites are Liabilities, Not Assets",
    tag: "Strategy",
    date: "May 12, 2026",
    author: "WHYN Team",
    readTime: "6 min read",
    content: [
      {
        type: "h2",
        text: "The 'Pretty Website' Trap"
      },
      {
        type: "p",
        text: "Most business owners treat their website like a digital brochure. They obsess over colors, fonts, and the 'About' page. But a brochure doesn't sell. A brochure doesn't qualify leads. In most cases, a website that just 'looks good' is actually a liability—it costs money to maintain but delivers zero ROI."
      },
      {
        type: "h3",
        text: "Turning the Tide: The Asset Framework"
      },
      {
        type: "p",
        text: "An asset-based website is built around a single goal: Conversion. It uses psychology to move a user from curiosity to commitment. It filters out the wrong people so you only spend time talking to the right ones."
      },
      {
        type: "quote",
        text: "If your website doesn't make you money while you sleep, it's just an expensive decoration."
      }
    ]
  },
  "frictionless-funnel-optimization": {
    title: "The Frictionless Funnel: Reducing Drop-offs by 40%",
    tag: "Optimization",
    date: "April 28, 2026",
    author: "WHYN Team",
    readTime: "8 min read",
    content: [
      {
        type: "h2",
        text: "Where is your revenue leaking?"
      },
      {
        type: "p",
        text: "Every extra field in a form, every slow-loading image, and every confusing headline is a leak. We analyze the cognitive load of a user Journey and strip everything that isn't essential."
      }
    ]
  },
  "automation-is-the-new-scale": {
    title: "Automation is the New Scale",
    tag: "Automation",
    date: "March 15, 2026",
    author: "WHYN Team",
    readTime: "5 min read",
    content: [
      {
        type: "h2",
        text: "The Myth of More Staff"
      },
      {
        type: "p",
        text: "You don't need a bigger team to scale; you need better systems. We show you how to replace 20 hours of manual tasks with 10 lines of code."
      }
    ]
  }
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts[slug] || blogPosts["website-liabilities-vs-assets"];

  return (
    <div className="pt-32 pb-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <Link href="/blog" className="text-sm text-[#A8E63D] mb-12 inline-flex items-center gap-2 hover:gap-3 transition-all duration-300" style={{ fontFamily: SORA }}>
          <ArrowLeft className="h-4 w-4" /> Back to blog
        </Link>

        {/* Header */}
        <header className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0F0F12] bg-[#A8E63D] px-2.5 py-1 rounded-sm" style={{ fontFamily: SORA }}>
              {post.tag}
            </span>
            <div className="flex items-center gap-4 text-white/40 text-xs" style={{ fontFamily: SORA }}>
              <div className="flex items-center gap-1.5"><Calendar className="h-3 w-3" /> {post.date}</div>
              <div className="flex items-center gap-1.5"><Clock className="h-3 w-3" /> {post.readTime}</div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] mb-8" style={{ fontFamily: SORA, letterSpacing: "-0.04em" }}>
            {post.title}
          </h1>

          <div className="flex items-center justify-between py-8 border-y border-white/5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                <User className="h-5 w-5 text-white/50" />
              </div>
              <div>
                <p className="text-sm font-bold text-white" style={{ fontFamily: SORA }}>{post.author}</p>
                <p className="text-[10px] uppercase tracking-widest text-white/40" style={{ fontFamily: SORA }}>System Architect</p>
              </div>
            </div>
            <button className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#A8E63D] hover:border-[#A8E63D]/20 transition-all">
              <Share2 className="h-4 w-4" />
            </button>
          </div>
        </header>

        {/* Content */}
        <article className="space-y-12">
          {post.content.map((block: any, i: number) => {
            if (block.type === "h2") return <h2 key={i} className="text-3xl font-bold text-white pt-4" style={{ fontFamily: SORA }}>{block.text}</h2>;
            if (block.type === "h3") return <h3 key={i} className="text-2xl font-bold text-white pt-2" style={{ fontFamily: SORA }}>{block.text}</h3>;
            if (block.type === "p") return <p key={i} className="text-lg text-muted-foreground leading-relaxed font-light" style={{ fontFamily: DM }}>{block.text}</p>;
            if (block.type === "quote") return (
              <div key={i} className="p-8 md:p-12 rounded-[2rem] bg-[#A8E63D]/5 border-l-4 border-[#A8E63D] my-12">
                <p className="text-2xl md:text-3xl text-white font-medium italic leading-snug" style={{ fontFamily: SORA }}>"{block.text}"</p>
              </div>
            );
            return null;
          })}
        </article>

        {/* Bottom CTA */}
        <div className="mt-24 p-12 rounded-[3rem] bg-white/[0.02] border border-white/5 text-center">
          <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: SORA }}>Ready for an asset that builds itself?</h3>
          <p className="text-muted-foreground mb-10 max-w-lg mx-auto font-light" style={{ fontFamily: DM }}>We don't do 'pretty'. We do 'profitable'. Let's audit your current setup and see where you're leaking revenue.</p>
          <Link href="/#contact">
            <button className="bg-[#A8E63D] text-[#0F0F12] font-bold px-8 py-4 rounded-xl hover:scale-[1.02] transition-all" style={{ fontFamily: SORA }}>
              Book Free Audit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
