"use client";

import { useRef, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  /** Maximum tilt angle in degrees */
  maxTilt?: number;
  /** Whether to show spotlight effect */
  spotlight?: boolean;
};

/**
 * 3D Tilt card with optional spotlight gradient that follows the cursor.
 * Uses GSAP for 60fps performance on mousemove.
 */
export function TiltCard({
  children,
  className,
  maxTilt = 8,
  spotlight = true,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    if (
      typeof window !== "undefined" &&
     (window.matchMedia("(pointer: coarse)").matches ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    ) {
      return;
    }

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    gsap.to(card, {
      rotateX,
      rotateY,
      duration: 0.4,
      ease: "power2.out",
      overwrite: "auto",
      transformPerspective: 800,
    });

    if (spotlight && spotlightRef.current) {
      // background snaps — only opacity tweens
      spotlightRef.current.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.08) 0%, transparent 60%)`;
      gsap.to(spotlightRef.current, { opacity: 1, duration: 0.3, overwrite: "auto" });
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: "power2.out",
    });

    if (spotlight && spotlightRef.current) {
      gsap.to(spotlightRef.current, { opacity: 0, duration: 0.4 });
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative ${className ?? ""}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {spotlight && (
        <div
          ref={spotlightRef}
          className="absolute inset-0 rounded-[inherit] pointer-events-none opacity-0 z-10"
          aria-hidden
        />
      )}
      {children}
    </div>
  );
}
