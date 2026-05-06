"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";

const STORAGE_KEY = "whyn_cookie_consent";

type ConsentStatus = "accepted" | "rejected" | null;

export function CookieBanner() {
  const [status, setStatus] = useState<ConsentStatus | "pending">("pending");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as ConsentStatus | null;
      setStatus(stored ?? null);
    } catch {
      setStatus(null);
    }
  }, []);

  function accept() {
    try { localStorage.setItem(STORAGE_KEY, "accepted"); } catch {}
    setStatus("accepted");
  }

  function reject() {
    try { localStorage.setItem(STORAGE_KEY, "rejected"); } catch {}
    setStatus("rejected");
  }

  // Don't flash during SSR
  if (status === "pending") return null;
  // Already decided
  if (status === "accepted" || status === "rejected") return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 80, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" as const }}
        className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-6 md:max-w-sm"
        role="dialog"
        aria-label="Cookie consent"
      >
        <div
          className="rounded-2xl p-5 shadow-2xl"
          style={{
            background: "#16161A",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
          }}
        >
          <div className="flex items-start justify-between gap-3 mb-3">
            <p
              className="text-sm font-semibold text-white"
              style={{ fontFamily: "var(--font-sora,'Sora',sans-serif)" }}
            >
              Cookies
            </p>
            <button
              onClick={reject}
              aria-label="Dismiss"
              className="text-muted-foreground hover:text-white transition-colors flex-shrink-0"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <p
            className="text-xs text-muted-foreground leading-relaxed mb-4"
            style={{ fontFamily: "var(--font-dm-sans,'DM Sans',sans-serif)" }}
          >
            We use essential cookies only. No tracking or advertising cookies without your consent.{" "}
            <Link
              href="/cookies"
              className="underline underline-offset-2 hover:text-white transition-colors"
            >
              Cookie policy
            </Link>
            .
          </p>

          <div className="flex gap-2">
            <button
              onClick={accept}
              className="flex-1 py-2 rounded-lg text-xs font-bold transition-all duration-150 hover:scale-[1.02]"
              style={{
                background: "#A8E63D",
                color: "#0F0F12",
                fontFamily: "var(--font-sora,'Sora',sans-serif)",
              }}
            >
              Accept
            </button>
            <button
              onClick={reject}
              className="flex-1 py-2 rounded-lg text-xs font-semibold transition-all duration-150 text-muted-foreground hover:text-white"
              style={{
                border: "1px solid rgba(255,255,255,0.1)",
                fontFamily: "var(--font-sora,'Sora',sans-serif)",
              }}
            >
              Reject
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

/**
 * Hook to check if analytics consent was given.
 * Usage: const { analyticsAllowed } = useCookieConsent()
 * Only load analytics scripts when analyticsAllowed === true.
 */
export function useCookieConsent() {
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);

  useEffect(() => {
    try {
      setAnalyticsAllowed(localStorage.getItem(STORAGE_KEY) === "accepted");
    } catch {}
  }, []);

  return { analyticsAllowed };
}
