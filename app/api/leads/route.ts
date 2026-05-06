import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { supabase } from "@/lib/supabase";
import { sendLeadNotification, sendLeadConfirmation } from "@/lib/resend";
import { rateLimit } from "@/lib/rate-limit";

// ─── Zod schema ───────────────────────────────────────────────────────────────

const leadSchema = z.object({
  name:      z.string().min(2, "Name must be at least 2 characters").max(100).trim(),
  email:     z.string().email("Invalid email address").max(254).toLowerCase().trim(),
  phone:     z.string().max(20).trim().optional().default(""),
  business:  z.string().max(200).trim().optional().default(""),
  package:   z.string().max(100).trim().optional().default(""),
  source:    z.string().max(100).trim().optional().default("landing-page"),
  consent:   z.literal(true, { message: "Consent is required." }),
  // Honeypot — must be empty string if submitted by a human
  website:   z.string().max(0, "Bot detected").optional(),
});

type LeadInput = z.infer<typeof leadSchema>;

// ─── Sanitize strings against XSS ────────────────────────────────────────────

function sanitize(input: string): string {
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

function sanitizeLead(lead: LeadInput) {
  return {
    name:     sanitize(lead.name),
    email:    lead.email, // already validated by Zod
    phone:    lead.phone  ? sanitize(lead.phone)    : null,
    business: lead.business ? sanitize(lead.business) : null,
    package:  lead.package  ? sanitize(lead.package)  : null,
    source:   sanitize(lead.source ?? "landing-page"),
    consent:  true,
    created_at: new Date().toISOString(),
  };
}

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  // 1. Rate limit by IP
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  const { success: rateLimitOk } = rateLimit(ip, { limit: 5, windowMs: 60_000 });

  if (!rateLimitOk) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a moment and try again." },
      { status: 429, headers: { "Retry-After": "60" } }
    );
  }

  // 2. Parse body
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // 3. Validate with Zod
  const result = leadSchema.safeParse(body);

  if (!result.success) {
    const firstError = result.error.issues[0]?.message ?? "Validation failed.";
    return NextResponse.json(
      { error: firstError, issues: result.error.issues },
      { status: 422 }
    );
  }

  // 4. Honeypot check (Zod already rejects non-empty, but double-check)
  if (result.data.website) {
    // Silently return success to fool bots — don't store anything
    return NextResponse.json({ success: true }, { status: 200 });
  }

  // 5. Sanitize and persist
  const cleanLead = sanitizeLead(result.data);

  const { error: dbError } = await supabase.from("leads").insert([cleanLead]);

  if (dbError) {
    // Log server-side only — never expose DB errors to clients
    console.error("[leads] Supabase insert error:", dbError.message);
    // Don't block UX if DB isn't wired yet
  }

  // 6. Send emails (non-blocking)
  Promise.allSettled([
    sendLeadNotification({
      name:     cleanLead.name,
      email:    cleanLead.email,
      phone:    cleanLead.phone ?? undefined,
      source:   `${cleanLead.source}${cleanLead.package ? ` / ${cleanLead.package}` : ""}`,
    }),
    sendLeadConfirmation({ name: cleanLead.name, email: cleanLead.email }),
  ]).then((results) => {
    results.forEach((r) => {
      if (r.status === "rejected") console.error("[leads] Email error:", r.reason);
    });
  });

  return NextResponse.json(
    { success: true, message: "Thanks! We'll be in touch within 1 business day." },
    { status: 200 }
  );
}
