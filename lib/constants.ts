/**
 * lib/constants.ts
 * Single source of truth for all WHYN copy.
 * Components import from here — never inline brand text.
 */

export const BRAND = {
  name:       "WHYN",
  tagline:    "Turn attention into revenue.",
  domain:     "whyn.in",
  calcomUrl:  process.env.NEXT_PUBLIC_CALCOM_URL || "https://cal.com/whyn/discovery",
  teamEmail:  "team@whyn.in",
};

export const NAV_LINKS = [
  { label: "Services",     href: "/#offer" },
  { label: "Packages",     href: "/#packages" },
  { label: "Process",      href: "/#process" },
  { label: "Case Studies", href: "/case-studies" },
];

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const HERO = {
  headline:       "High-converting websites and lead generation systems for coaches.",
  subheadline:    "WHYN builds conversion-focused websites and automation for leads. Capture visitors, follow up instantly, and fill your calendar.",
  primaryCta:     "Book a Call",
  secondaryCta:   "See How It Works",
  secondaryHref:  "/#what-we-do",
  proofBullets:   ["No leads go cold", "Automated WhatsApp + email follow-up", "Live in as little as 2 days"],
  marqueeLabel:   "Trusted by coaches, creators, and service businesses worldwide",
  marqueeItems:   ["Coaches", "Course Creators", "Consultants", "Service Businesses", "Agencies", "Online Sellers"],
};

// ─── Problem ──────────────────────────────────────────────────────────────────

export const PROBLEM = {
  headline: "Your website isn't the problem. Your lead generation is.",
  cards: [
    {
      icon:  "TrendingDown",
      title: "Visitors don't convert",
      desc:  "You're getting traffic. Nobody fills the form.",
    },
    {
      icon:  "Clock",
      title: "Leads go cold",
      desc:  "Someone showed interest. You forgot to follow up.",
    },
    {
      icon:  "GitBranch",
      title: "Everything is manual",
      desc:  "DMs, emails, spreadsheets. It doesn't scale.",
    },
  ],
};

// ─── What We Do ───────────────────────────────────────────────────────────────

export const WHAT_WE_DO = {
  headline:  "We don't build websites. We build systems.",
  subtext:   "An WHYN system has two main jobs: capture leads and follow up automatically.",
  steps: [
    { label: "Capture",  sub: "Lead generation website",        desc: "Every visitor gets captured with a conversion-engineered form and instant confirmation." },
    { label: "Nurture",  sub: "Website automation",     desc: "Automated sequences reach out the moment a lead comes in — no manual work." },
    { label: "Convert",  sub: "Async Booking",        desc: "Qualified leads book directly into your calendar. You show up to the Zoom call ready to close." },
  ],
  differentiators: [
    "No missed leads",
    "Responds within 60 seconds",
    "Works while you sleep",
    "No manual follow-up needed",
  ],
};

// ─── Services ─────────────────────────────────────────────────────────────────

export const SERVICES = {
  headline: "What WHYN builds",
  items: [
    {
      icon:  "Monitor",
      title: "High-Converting Websites",
      desc:  "Custom small business website development that ranks and converts. Not pretty brochures — working systems.",
    },
    {
      icon:  "Filter",
      title: "Lead Generation Websites",
      desc:  "Landing pages engineered to capture leads and grow your list.",
    },
    {
      icon:  "Zap",
      title: "Website Automation",
      desc:  "Automation for leads. WhatsApp and email sequences that follow up the moment a lead comes in. Hands-free.",
    },
  ],
};

// ─── Packages ─────────────────────────────────────────────────────────────────

export const PACKAGES = {
  headline: "Pick your system",
  subtext:  "All packages include strategy, build, and launch support.",
  tiers: [
    {
      id:       "starter",
      label:    "Starter",
      subtitle: "Business Website",
      price:    "$150 – $300",
      badge:    null,
      featured: false,
      timeline: "2-3 Days",
      bestFor:  "New businesses needing a professional online presence.",
      features: [
        { group: "Build", items: ["1–3 Page Website", "Mobile-First Responsive Design", "Premium Dark Mode Aesthetic"] },
        { group: "Systems", items: ["Basic Contact Form", "SEO Meta Setup", "Fast Global CDN Hosting"] },
        { group: "Support", items: ["7-Day Launch Support", "Analytics Integration"] },
      ],
      cta: "Get Started",
    },
    {
      id:       "growth",
      label:    "Growth",
      subtitle: "Website + Lead System",
      price:    "$300 – $800",
      badge:    "Most Popular",
      featured: true,
      timeline: "4-6 Days",
      bestFor:  "Coaches & creators driving active traffic.",
      features: [
        { group: "Build", items: ["Everything in Starter", "Dedicated Conversion Landing Page", "Custom WHYN Design Tokens"] },
        { group: "Systems", items: ["Supabase Lead Capture System", "Cal.com Booking Integration", "Spam Protection (Honeypot)"] },
        { group: "Support", items: ["14-Day Priority Support", "Basic Email Automations (Resend)"] },
      ],
      cta: "Schedule a Call",
    },
    {
      id:       "automation",
      label:    "Automation",
      subtitle: "Full System",
      price:    "$800 – $2000+",
      badge:    null,
      featured: false,
      timeline: "7-10 Days",
      bestFor:  "Established businesses scaling their operations.",
      features: [
        { group: "Build", items: ["Everything in Growth", "Advanced Lead Generation Websites", "Custom Domain Configurations"] },
        { group: "Systems", items: ["WhatsApp Business API Automation", "5-Step Drip Email Sequence", "CRM Integration (Airtable/Notion)"] },
        { group: "Support", items: ["30-Day Growth Partnership", "A/B Testing Setup", "Dedicated Slack Channel"] },
      ],
      cta: "Book a Call",
    },
  ],
};

// ─── Process ──────────────────────────────────────────────────────────────────

export const PROCESS = {
  headline:  "How it works",
  timeline:  "2–10 business days depending on system complexity",
  steps: [
    { num: "01", label: "Strategy", desc: "1-hour Zoom call. Map your remote funnel and business goals." },
    { num: "02", label: "Build",    desc: "We build and connect your automated system." },
    { num: "03", label: "Launch",   desc: "Go live. We monitor and optimise week 1." },
  ],
};

// ─── Proof (Before / After) ───────────────────────────────────────────────────

export const PROOF = {
  headline: "What the system changes",
  note:     "Common client transformations",
  cards: [
    {
      before: "Getting traffic, zero enquiries",
      after:  "Landing page converting at 18%+ with instant follow-up",
      label:  "Fitness Coach",
    },
    {
      before: "Manually DMing every lead on Instagram",
      after:  "Automated WhatsApp sequence books calls overnight",
      label:  "Business Consultant",
    },
    {
      before: "Booking link buried in bio, rarely clicked",
      after:  "Booking flow embedded in funnel — 3x more calls",
      label:  "Course Creator",
    },
  ],
};

// ─── Testimonials ─────────────────────────────────────────────────────────────

export const TESTIMONIALS = [
  {
    quote: "WHYN completely changed how I handle leads. The automation means I never lose a prospect, and my calendar is packed without me lifting a finger.",
    author: "Sarah M.",
    role: "Founder",
    company: "GrowthX Academy",
    rating: 5,
  },
  {
    quote: "I thought my website was fine, but it wasn't converting. Since the rebuild, we've seen a 3x increase in booked calls. It's an actual machine now.",
    author: "David R.",
    role: "Creator",
    company: "The Content School",
    rating: 5,
  },
];

// ─── Portfolio ────────────────────────────────────────────────────────────────

export const PORTFOLIO_PROJECTS = [
  {
    title: "Velocity SaaS",
    category: "B2B Lead Generation",
    description: "A high-conversion landing page and CRM integration that doubled demo bookings.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
  },
  {
    title: "Elevate Coaching",
    category: "Automated Booking Funnel",
    description: "Replaced manual DMs with an automated WhatsApp-to-Cal.com flow.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2348&auto=format&fit=crop",
  },
  {
    title: "Apex Media",
    category: "Agency Landing Page",
    description: "Clean, dark-mode agency site focused on capturing high-ticket clients.",
    image: "https://images.unsplash.com/photo-1481481102818-215201c13ba3?q=80&w=2340&auto=format&fit=crop",
  },
  {
    title: "Zenith Info-Products",
    category: "Course Sales Funnel",
    description: "A 3-step funnel for a $997 course, leading to a 14% conversion rate increase.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop",
  },
  {
    title: "Lumina Creators",
    category: "Link-in-bio System",
    description: "A premium creator funnel that instantly segments and nurtures followers.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2344&auto=format&fit=crop",
  },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export const FAQ_ITEMS = [
  {
    q: "How long does it take?",
    a: "Strategy to launch: 2–5 business days for most packages. Complex automation builds may take 7–10 days.",
  },
  {
    q: "What's the investment?",
    a: "Starter packages range from $150 – $300. Our most popular Growth system is $300 – $800, and full Automation builds run $800 – $2000+.",
  },
  {
    q: "Do I need to provide content?",
    a: "We provide a simple intake form. You fill it in 20 minutes. We handle the rest.",
  },
  {
    q: "What platforms do you use?",
    a: "Next.js, Tailwind, Supabase, Resend, Cal.com, and WhatsApp Business API / Zapier for automation.",
  },
  {
    q: "Who is this for?",
    a: "Coaches, creators, and online sellers who want high-converting websites and automation to handle their leads without manual work.",
  },
  {
    q: "What if I already have a website?",
    a: "We audit it free on the strategy call. If it's fixable, we fix it. If not, we rebuild what actually matters.",
  },
];

// ─── Final CTA ────────────────────────────────────────────────────────────────

export const FINAL_CTA = {
  headline:  "If you're serious about turning attention into revenue —",
  subtext:   "Schedule a free 20-minute strategy call. We'll audit your current setup and show exactly what's missing.",
  cta:       "Schedule a Call",
  microCopy: "No pitch. No pressure. Just a system audit.",
};
