import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies — WHYN",
  description:
    "Real results from real conversion systems. See how coaches, creators, and agencies went from inconsistent leads to predictable client pipelines with WHYN.",
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
