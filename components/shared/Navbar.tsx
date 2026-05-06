"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X, Zap } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const CALCOM_URL =
  process.env.NEXT_PUBLIC_CALCOM_URL ||
  "https://cal.com/your-username/discovery-call";

const SORA = "var(--font-sora,'Sora',sans-serif)";
const DM   = "var(--font-dm-sans,'DM Sans',sans-serif)";

const navLinks = [
  { label: "Services",     href: "/#offer" },
  { label: "Process",      href: "/#process" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "FAQ",          href: "/#faq" },
];

/** 4-grid WHYN logo mark */
function WhynMark({ size = 20 }: { size?: number }) {
  return (
    <div
      className="rounded-lg flex items-center justify-center flex-shrink-0"
      style={{
        width:  size * 1.8,
        height: size * 1.8,
        background: "rgba(168,230,61,0.1)",
        border: "1px solid rgba(168,230,61,0.18)",
      }}
    >
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
        <path d="M4 4h5v5H4V4z"       fill="#A8E63D" />
        <path d="M4 11h5v5H4v-5z"     fill="rgba(168,230,61,0.3)" />
        <path d="M11 4h5v5h-5V4z"     fill="rgba(168,230,61,0.5)" />
        <path d="M11 11h5v5h-5v-5z"   fill="#A8E63D" />
      </svg>
    </div>
  );
}

/** Overlay + stagger animation variants for mobile menu links */
const overlayVariants = {
  closed: { opacity: 0 },
  open:   { opacity: 1, transition: { duration: 0.2 } },
};

const listVariants = {
  closed: {},
  open:   { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const itemVariants = {
  closed: { opacity: 0, y: 28, filter: "blur(4px)" },
  open:   {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Navbar() {
  const [scrolled, setScrolled]         = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const pathname                        = usePathname();
  const isMobile                        = useIsMobile();

  // IntersectionObserver on layout-level sentinel — zero scroll-event overhead
  useEffect(() => {
    const sentinel = document.getElementById("scroll-sentinel");
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  function isActive(href: string) {
    // Hash links (#section) are all on the same page — never highlight them
    if (href.includes("#")) return false;
    if (href === "/") return pathname === "/";
    return pathname === href;
  }

  const floatingNav = scrolled || mobileOpen;

  return (
    <>
      {/* ── Header shell ────────────────────────────────────────────────── */}
      <header
        className={`fixed z-50 transition-all duration-500 ${
          floatingNav ? "top-3 left-3 right-3" : "top-0 left-0 right-0"
        }`}
      >
        <nav
          aria-label="Main"
          className={`relative mx-auto transition-all duration-500 ${
            floatingNav
              ? `bg-background/85 ${isMobile ? "backdrop-blur-sm" : "backdrop-blur-2xl"} border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] max-w-5xl rounded-2xl`
              : "bg-transparent max-w-6xl"
          }`}
        >
          <div
            className={`flex items-center justify-between px-5 lg:px-7 transition-all duration-500 ${
              floatingNav ? "h-14" : "h-20"
            }`}
          >

            {/* ── Logo ──────────────────────────────────────────────────── */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <WhynMark size={floatingNav ? 14 : 16} />
              <span
                className="font-bold tracking-[-0.04em] text-white transition-all duration-300"
                style={{
                  fontFamily: SORA,
                  fontWeight: 800,
                  fontSize: floatingNav ? "17px" : "20px",
                }}
              >
                WHYN
                <span style={{ color: "#A8E63D" }}>.</span>
              </span>
            </Link>

            {/* ── Desktop links ─────────────────────────────────────────── */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`relative text-sm px-4 py-2 rounded-full transition-all duration-200 overflow-hidden ${
                      active
                        ? "text-white font-medium"
                        : "text-muted-foreground hover:text-white hover:bg-white/[0.05]"
                    }`}
                    style={{ fontFamily: DM }}
                  >
                    {active && (
                      <span className="absolute inset-0 rounded-full bg-white/[0.06]" />
                    )}
                    {link.label}
                    {active && (
                      <span
                        className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                        style={{ background: "#A8E63D" }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* ── Desktop CTA ───────────────────────────────────────────── */}
            <div className="hidden md:flex items-center">
              <button data-cal-namespace="30min" data-cal-link="niishantdev/30min">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`group flex items-center gap-1.5 font-bold rounded-xl transition-all duration-200 ${
                    floatingNav ? "px-4 py-2 text-xs" : "px-5 py-2.5 text-sm"
                  }`}
                  style={{
                    background: "#A8E63D",
                    color: "#0F0F12",
                    fontFamily: SORA,
                    fontWeight: 700,
                    letterSpacing: "0.01em",
                  }}
                >
                  Book A Call
                  <Zap className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </motion.div>
              </button>
            </div>

            {/* ── Mobile hamburger ──────────────────────────────────────── */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden relative z-[60] p-2 text-muted-foreground hover:text-white transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0,   opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0,  opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>

        {/* ── Mobile full-screen overlay ───────────────────────────────── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden fixed inset-0 z-40 overflow-y-auto"
              style={{ background: "#0F0F12" }}
            >
              {/* Top gradient fade */}
              <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
                style={{ background: "linear-gradient(to bottom, rgba(168,230,61,0.04), transparent)" }}
              />

              <div className="flex flex-col min-h-screen px-8 pt-28 pb-10">
                {/* Nav links — staggered */}
                <motion.nav
                  variants={listVariants}
                  initial="closed"
                  animate="open"
                  className="flex-1 flex flex-col justify-center gap-2"
                >
                  {navLinks.map((link) => {
                    const active = isActive(link.href);
                    return (
                      <motion.div key={link.label} variants={itemVariants}>
                        <Link
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className={`group flex items-center justify-between py-5 border-b transition-colors duration-200 ${
                            active ? "border-white/20" : "border-white/[0.06]"
                          }`}
                        >
                          <span
                            className="text-4xl font-bold tracking-tight transition-colors duration-200"
                            style={{
                              fontFamily: SORA,
                              fontWeight: 800,
                              letterSpacing: "-0.03em",
                              color: active ? "#A8E63D" : "rgba(255,255,255,0.85)",
                            }}
                          >
                            {link.label}
                          </span>
                          <ArrowUpRight
                            className="h-6 w-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                            style={{ color: "#A8E63D" }}
                          />
                        </Link>
                      </motion.div>
                    );
                  })}
                </motion.nav>

                {/* Bottom CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.38, duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
                  className="pt-8 space-y-3"
                >
                  <button
                    data-cal-namespace="30min"
                    data-cal-link="niishantdev/30min"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl text-base font-bold transition-all duration-200 active:scale-[0.98]"
                    style={{
                      background: "#A8E63D",
                      color: "#0F0F12",
                      fontFamily: SORA,
                      fontWeight: 700,
                    }}
                  >
                    Book a quick call
                    <Zap className="h-4 w-4" />
                  </button>

                  {/* Footer strip */}
                  <div className="flex items-center justify-center gap-4 pt-2">
                    {[
                      { label: "Privacy", href: "/privacy-policy" },
                      { label: "Terms",   href: "/terms" },
                    ].map((l) => (
                      <Link
                        key={l.label}
                        href={l.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors"
                        style={{ fontFamily: DM }}
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
