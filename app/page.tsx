import dynamic from "next/dynamic";
import { Hero }              from "@/components/sections/Hero";
import { SocialProof }       from "@/components/sections/SocialProof";
import { Problem }           from "@/components/sections/Problem";

// Lazy load heavy components below the fold to reduce initial bundle size
const WhatWeDo     = dynamic(() => import("@/components/sections/WhatWeDo").then(mod => mod.WhatWeDo));
const Offer        = dynamic(() => import("@/components/sections/Offer").then(mod => mod.Offer));
const Packages     = dynamic(() => import("@/components/sections/Packages").then(mod => mod.Packages));
const Process      = dynamic(() => import("@/components/sections/Process").then(mod => mod.Process));
const Proof        = dynamic(() => import("@/components/sections/Proof").then(mod => mod.Proof));
const Portfolio    = dynamic(() => import("@/components/sections/Portfolio").then(mod => mod.Portfolio));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then(mod => mod.Testimonials));
const FAQ          = dynamic(() => import("@/components/sections/FAQ").then(mod => mod.FAQ));
const FinalCTA     = dynamic(() => import("@/components/sections/FinalCTA").then(mod => mod.FinalCTA));

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Problem />
      <WhatWeDo />
      <Offer />
      <Packages />
      <Process />
      <Proof />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
