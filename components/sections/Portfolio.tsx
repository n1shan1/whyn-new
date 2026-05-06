"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO_PROJECTS } from "@/lib/constants";

const SORA = "var(--font-sora,'Sora',sans-serif)";
const DM = "var(--font-dm-sans,'DM Sans',sans-serif)";

export function Portfolio() {
  return (
    <section id="portfolio" className="py-28 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
            style={{ color: "#A8E63D", fontFamily: SORA }}
          >
            Proof of Work
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6"
            style={{ fontFamily: SORA, fontWeight: 800, letterSpacing: "-0.03em" }}
          >
            Systems we've built.
          </h2>
        </div>

        {/* Dense Grid View (Bento/Fisheye Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[320px]">
          {PORTFOLIO_PROJECTS.map((project, index) => {
            // Make the first and fourth items span 2 columns on large screens for a masonry/bento effect
            const isLarge = index === 0 || index === 3;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-3xl ${
                  isLarge ? "lg:col-span-2" : "col-span-1"
                }`}
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                {/* Background Image with Zoom Effect */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 group-hover:opacity-60 transition-all duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                
                {/* Gradient Overlay for Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F12] via-[#0F0F12]/60 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                    <p 
                      className="text-[#A8E63D] text-xs font-bold uppercase tracking-wider mb-2"
                      style={{ fontFamily: SORA }}
                    >
                      {project.category}
                    </p>
                    <h3 
                      className="text-2xl font-bold text-white mb-2 flex items-center gap-2"
                      style={{ fontFamily: SORA }}
                    >
                      {project.title}
                      <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                    </h3>
                    <p 
                      className="text-muted-foreground text-sm max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"
                      style={{ fontFamily: DM }}
                    >
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
