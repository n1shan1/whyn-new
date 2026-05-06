"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";

const SORA = "var(--font-sora,'Sora',sans-serif)";
const DM   = "var(--font-dm-sans,'DM Sans',sans-serif)";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
            style={{ color: "#A8E63D", fontFamily: SORA }}
          >
            FAQ
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-white"
            style={{ fontFamily: SORA, fontWeight: 800, letterSpacing: "-0.03em" }}
          >
            Common questions
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="flex flex-col divide-y" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between py-5 text-left gap-4 group"
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-base font-semibold text-white group-hover:opacity-80 transition-opacity leading-snug"
                    style={{ fontFamily: SORA, fontWeight: 600 }}
                  >
                    {item.q}
                  </span>
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200"
                    style={{
                      background: isOpen ? "rgba(168,230,61,0.12)" : "rgba(255,255,255,0.05)",
                      border: isOpen ? "1px solid rgba(168,230,61,0.25)" : "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {isOpen
                      ? <Minus className="h-3.5 w-3.5" style={{ color: "#A8E63D" }} />
                      : <Plus  className="h-3.5 w-3.5 text-muted-foreground" />
                    }
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p
                        className="pb-5 text-sm text-muted-foreground leading-relaxed"
                        style={{ fontFamily: DM }}
                      >
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
