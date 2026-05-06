"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import Link from "next/link";

const SORA = "var(--font-sora,'Sora',sans-serif)";
const DM   = "var(--font-dm-sans,'DM Sans',sans-serif)";

interface FormState {
  status: "idle" | "loading" | "success" | "error";
  message: string;
}

interface LeadFormProps {
  source?: string;
}

export function LeadForm({ source = "landing-page" }: LeadFormProps) {
  const [formState, setFormState] = useState<FormState>({
    status: "idle",
    message: "",
  });
  const [consent, setConsent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Client-side consent gate
    if (!consent) {
      setFormState({ status: "error", message: "Please tick the consent checkbox to continue." });
      return;
    }

    setFormState({ status: "loading", message: "" });

    const data = new FormData(e.currentTarget);
    const payload = {
      name:    (data.get("name")  as string).trim(),
      email:   (data.get("email") as string).trim(),
      phone:   (data.get("phone") as string).trim(),
      source,
      consent: true,
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json();

      if (!res.ok) {
        setFormState({
          status: "error",
          message: json.error || "Something went wrong. Please try again.",
        });
        return;
      }

      setFormState({
        status: "success",
        message: json.message || "Thanks! We'll be in touch within 1 business day.",
      });
      formRef.current?.reset();
      setConsent(false);
    } catch {
      setFormState({
        status: "error",
        message: "Network error. Please check your connection and try again.",
      });
    }
  }

  if (formState.status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl p-8 text-center"
        style={{ border: "1px solid rgba(168,230,61,0.25)", background: "rgba(168,230,61,0.05)" }}
      >
        <CheckCircle className="h-10 w-10 mx-auto mb-4" style={{ color: "#A8E63D" }} />
        <p className="text-base font-semibold text-white mb-1" style={{ fontFamily: SORA }}>
          Message received
        </p>
        <p className="text-sm text-muted-foreground" style={{ fontFamily: DM }}>
          {formState.message}
        </p>
      </motion.div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="space-y-4"
    >
      {/* Name */}
      <div>
        <label
          htmlFor="lead-name"
          className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-widest"
          style={{ fontFamily: SORA }}
        >
          Name <span className="text-red-400">*</span>
        </label>
        <input
          id="lead-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          maxLength={100}
          placeholder="Your name"
          className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted-foreground/40 outline-none transition-all duration-200 focus:ring-1"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            fontFamily: DM,
          }}
          onFocus={(e) => (e.target.style.borderColor = "rgba(168,230,61,0.4)")}
          onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="lead-email"
          className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-widest"
          style={{ fontFamily: SORA }}
        >
          Email <span className="text-red-400">*</span>
        </label>
        <input
          id="lead-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          maxLength={254}
          placeholder="you@example.com"
          className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted-foreground/40 outline-none transition-all duration-200"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            fontFamily: DM,
          }}
          onFocus={(e) => (e.target.style.borderColor = "rgba(168,230,61,0.4)")}
          onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
        />
      </div>

      {/* Phone (optional) */}
      <div>
        <label
          htmlFor="lead-phone"
          className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-widest"
          style={{ fontFamily: SORA }}
        >
          Phone <span className="text-muted-foreground/40 normal-case font-normal tracking-normal ml-1" style={{ fontFamily: DM, fontSize: "11px" }}>optional</span>
        </label>
        <input
          id="lead-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          maxLength={20}
          placeholder="+1 234 567 8900"
          className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted-foreground/40 outline-none transition-all duration-200"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            fontFamily: DM,
          }}
          onFocus={(e) => (e.target.style.borderColor = "rgba(168,230,61,0.4)")}
          onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
        />
      </div>

      {/* Consent — GDPR required, must NOT be pre-checked */}
      <div
        className="flex gap-3 items-start p-4 rounded-xl"
        style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}
      >
        <div className="relative flex-shrink-0 mt-0.5">
          <input
            id="lead-consent"
            name="consent"
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="sr-only"
          />
          <button
            type="button"
            role="checkbox"
            aria-checked={consent}
            aria-label="Consent to being contacted"
            onClick={() => setConsent(!consent)}
            className="w-5 h-5 rounded-md border flex items-center justify-center transition-all duration-150 flex-shrink-0"
            style={{
              background: consent ? "#A8E63D" : "rgba(255,255,255,0.05)",
              borderColor: consent ? "#A8E63D" : "rgba(255,255,255,0.2)",
            }}
          >
            {consent && (
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                <path d="M1 4L3.5 6.5L9 1" stroke="#0F0F12" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
        </div>
        <label
          htmlFor="lead-consent"
          className="text-xs text-muted-foreground leading-relaxed cursor-pointer select-none"
          style={{ fontFamily: DM }}
          onClick={() => setConsent(!consent)}
        >
          I agree to be contacted by WHYN via email (and optionally WhatsApp) regarding my enquiry.
          I have read and accept the{" "}
          <Link href="/privacy-policy" className="underline underline-offset-2 hover:text-white transition-colors">
            Privacy Policy
          </Link>
          .
        </label>
      </div>

      {/* Error message */}
      <AnimatePresence>
        {formState.status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="flex items-start gap-2 text-sm text-red-400 px-1"
            style={{ fontFamily: DM }}
          >
            <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
            {formState.message}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit */}
      <button
        type="submit"
        disabled={formState.status === "loading"}
        className="w-full rounded-xl py-3.5 text-sm font-bold transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99]"
        style={{
          background: "#A8E63D",
          color: "#0F0F12",
          fontFamily: SORA,
          fontWeight: 700,
          letterSpacing: "0.01em",
        }}
      >
        {formState.status === "loading" ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending…
          </span>
        ) : (
          "Send message →"
        )}
      </button>

      <p
        className="text-xs text-center text-muted-foreground/50 leading-relaxed"
        style={{ fontFamily: DM }}
      >
        We only collect what we need. No spam.{" "}
        <Link href="/privacy-policy" className="underline underline-offset-2 hover:text-muted-foreground transition-colors">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}
