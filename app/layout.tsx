import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { CookieBanner } from "@/components/shared/CookieBanner";
import { CalcomInit } from "@/components/shared/CalcomInit";
import { CursorGlow } from "@/components/shared/CursorGlow";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["300", "400", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WHYN | Audience Into Paying Clients",
  description:
    "WHYN builds funnels and automation systems for coaches and online sellers. Capture leads, follow up automatically, and fill your calendar.",
  keywords: [
    "conversion funnel", "coach marketing", "online seller", "lead generation",
    "email automation", "booking system", "landing page", "whyn",
    "WhatsApp automation", "lead capture system",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "WHYN — Turn attention into revenue.",
    description: "We build funnels and automated systems for coaches and online sellers. Capture. Nurture. Convert.",
    type: "website",
    url: "https://whyn.in",
  },
  twitter: {
    card: "summary_large_image",
    title: "WHYN — Turn attention into revenue.",
    description: "We build funnels and automated systems for coaches and online sellers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${dmSans.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground antialiased relative">
        <div className="fixed inset-0 bg-grid pointer-events-none z-[-1]" aria-hidden="true" />
        <div className="fixed inset-0 bg-background/20 pointer-events-none z-[-1]" aria-hidden="true" />
        
        {/* Scroll sentinel — first element, observed by Navbar's IntersectionObserver */}
        <div id="scroll-sentinel" className="absolute top-0 h-1 w-full pointer-events-none" aria-hidden="true" />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        <CalcomInit />
        <CursorGlow />
      </body>
    </html>
  );
}
