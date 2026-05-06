"use client";

import { TESTIMONIALS } from "@/lib/constants";

const SORA = "var(--font-sora,'Sora',sans-serif)";
const DM = "var(--font-dm-sans,'DM Sans',sans-serif)";

export function Testimonials() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Diffused background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(168,230,61,0.02),transparent)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 mb-12 text-center relative z-10">
        <p
          className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
          style={{ color: "#A8E63D", fontFamily: SORA }}
        >
          Wall of Love
        </p>
        <h2
          className="text-3xl md:text-4xl font-bold tracking-tight text-white"
          style={{ fontFamily: SORA, fontWeight: 800, letterSpacing: "-0.03em" }}
        >
          Don't just take our word for it.
        </h2>
      </div>

      {/* Marquee Container with Diffused Edges */}
      <div className="relative w-full overflow-hidden marquee-container pb-8 pt-4">
        {/* Edge gradient masks for the diffused merger effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

        {/* Scrolling Track */}
        <div className="flex gap-6 w-max animate-marquee" style={{ animationDuration: "35s" }}>
          {/* We duplicate the array 3 times to ensure smooth infinite scrolling for various screen sizes */}
          {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ quote, author, role, company, rating }: { quote: string; author: string; role: string; company: string; rating: number }) {
  return (
    <div
      className="w-[320px] md:w-[420px] p-8 rounded-2xl flex flex-col gap-6 relative group transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "rgba(255,255,255,0.015)",
        border: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      {/* Inner Hover Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#A8E63D]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Star Rating */}
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? "text-[#A8E63D]" : "text-white/10"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <p className="text-[15px] md:text-base text-muted-foreground leading-relaxed relative z-10" style={{ fontFamily: DM, fontWeight: 300 }}>
        "{quote}"
      </p>
      
      <div className="mt-auto pt-4 flex items-center gap-4 relative z-10 border-t" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
        <div 
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0" 
          style={{ 
            background: "rgba(168,230,61,0.08)", 
            color: "#A8E63D",
            border: "1px solid rgba(168,230,61,0.2)",
            fontFamily: SORA 
          }}
        >
          {author.charAt(0)}
        </div>
        <div className="min-w-0">
          <p className="text-sm font-bold text-white leading-tight truncate" style={{ fontFamily: SORA }}>{author}</p>
          <p className="text-xs text-muted-foreground mt-0.5 truncate" style={{ fontFamily: DM }}>
            {role} <span className="opacity-50 mx-1">•</span> {company}
          </p>
        </div>
      </div>
    </div>
  );
}
