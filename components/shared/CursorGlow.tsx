"use client";

import { useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      // Using CSS variables directly avoids React state re-renders on every mouse move
      glowRef.current.style.setProperty("--x", `${e.clientX}px`);
      glowRef.current.style.setProperty("--y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* 
        Windows 10 "Reveal" style cursor tracking.
        Renders a subtle 600px radial gradient that follows the mouse.
      */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed inset-0 z-[-1] opacity-70 mix-blend-screen"
        style={{
          background: "radial-gradient(600px circle at var(--x, 50vw) var(--y, 50vh), rgba(168,230,61,0.06), transparent 40%)",
        }}
      />
      
      {/* 
        Subtle static background animation.
        Slowly pulses and shifts a very faint gradient in the background.
      */}
      <div 
        className="pointer-events-none fixed inset-0 z-[-2] opacity-50"
        style={{
          background: "radial-gradient(circle at 50% 0%, rgba(168,230,61,0.03) 0%, transparent 50%)",
        }}
      />
    </>
  );
}
