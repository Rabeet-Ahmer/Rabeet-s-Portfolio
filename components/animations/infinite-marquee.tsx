"use client";

import React, { useRef, ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

interface InfiniteMarqueeProps {
  children: ReactNode;
  speed?: number;
  direction?: "left" | "right";
  className?: string;
  gap?: number;
}

export function InfiniteMarquee({
  children,
  speed = 20,
  direction = "left",
  className,
  gap = 40,
}: InfiniteMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!marqueeRef.current) return;

      const marquee = marqueeRef.current;
      
      const updateAnimation = () => {
        const itemSets = Array.from(marquee.children) as HTMLElement[];
        if (itemSets.length < 2) return;

        const firstSet = itemSets[0];
        const moveAmount = firstSet.offsetWidth + gap;
        const dirOffset = direction === "left" ? -1 : 1;

        gsap.killTweensOf(marquee);
        
        if (direction === "left") {
          gsap.set(marquee, { x: 0 });
          gsap.to(marquee, {
            x: -moveAmount,
            duration: speed,
            ease: "none",
            repeat: -1,
          });
        } else {
          gsap.set(marquee, { x: -moveAmount });
          gsap.to(marquee, {
            x: 0,
            duration: speed,
            ease: "none",
            repeat: -1,
          });
        }
      };

      updateAnimation();

      window.addEventListener("resize", updateAnimation);
      return () => window.removeEventListener("resize", updateAnimation);
    },
    { scope: containerRef, dependencies: [speed, direction] }
  );

  return (
    <div
      ref={containerRef}
      className={cn("overflow-hidden whitespace-nowrap", className)}
    >
      <div
        ref={marqueeRef}
        className="flex w-max"
        style={{ gap: `${gap}px` }}
      >
        {/* Render children twice to ensure seamless loop */}
        <div className="flex shrink-0" style={{ gap: `${gap}px` }}>
          {children}
        </div>
        <div className="flex shrink-0" style={{ gap: `${gap}px` }} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
