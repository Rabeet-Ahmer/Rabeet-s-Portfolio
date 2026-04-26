"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "stagger";
  delay?: number;
  duration?: number;
  staggerAmount?: number;
};

export function ScrollReveal({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 0.8,
  staggerAmount = 0.15,
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const el = containerRef.current;

      if (animation === "stagger") {
        gsap.from(el.children, {
          y: 40,
          opacity: 0,
          duration,
          delay,
          stagger: staggerAmount,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      } else if (animation === "fade-in") {
        gsap.from(el, {
          opacity: 0,
          duration,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      } else {
        // fade-up (default)
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
