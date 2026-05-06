import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  Company: [
    { label: "About", href: "#" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "FAQ", href: "#faq" },
  ],
  Services: [
    { label: "Landing Pages", href: "#offer" },
    { label: "Email Automation", href: "#offer" },
    { label: "Booking Systems", href: "#offer" },
  ],
  Connect: [
    { label: "Book A Call", href: process.env.NEXT_PUBLIC_CALCOM_URL || "#" },
    { label: "Twitter / X", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <div
                className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(168,230,61,0.12)" }}
              >
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path d="M4 4h5v5H4V4z" fill="#A8E63D" />
                  <path d="M4 11h5v5H4v-5z" fill="rgba(168,230,61,0.3)" />
                  <path d="M11 4h5v5h-5V4z" fill="rgba(168,230,61,0.5)" />
                  <path d="M11 11h5v5h-5v-5z" fill="#A8E63D" />
                </svg>
              </div>
              <span
                className="text-lg font-bold tracking-[-0.04em] text-white"
                style={{ fontFamily: "var(--font-sora,'Sora',sans-serif)", fontWeight: 800 }}
              >
                WHYN<span style={{ color: "#A8E63D" }}>.</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Conversion systems for coaches and online sellers.
            </p>
          </div>

          {/* Link groups */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p
                className="text-xs font-semibold uppercase mb-4 text-muted-foreground"
                style={{ fontFamily: "var(--font-sora,'Sora',sans-serif)", letterSpacing: "0.18em" }}
              >
                {group}
              </p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-white/[0.06] mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} WHYN. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
            <span>·</span>
            <span>Turn attention into revenue.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
