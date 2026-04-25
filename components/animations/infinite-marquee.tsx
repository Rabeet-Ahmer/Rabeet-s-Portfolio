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
        const items = Array.from(marquee.children) as HTMLElement[];
        if (items.length === 0) return;

        // Force a recalculation of layout
        const totalWidth = marquee.scrollWidth / 2;
        const dirOffset = direction === "left" ? -1 : 1;

        gsap.killTweensOf(marquee);
        gsap.set(marquee, { x: 0 });

        gsap.to(marquee, {
          x: dirOffset * totalWidth,
          duration: speed,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize((x: number) => {
              const val = parseFloat(x.toString());
              return direction === "left" 
                ? (val % totalWidth) 
                : ((val % totalWidth) - totalWidth) % totalWidth;
            }),
          },
        });
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
