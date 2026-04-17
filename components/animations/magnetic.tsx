"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";

type MagneticProps = {
  children: React.ReactElement;
  strength?: number;
};

export function Magnetic({ children, strength = 0.3 }: MagneticProps) {
  const ref = useRef<HTMLElement>(null);
  const xTo = useRef<gsap.QuickToFunc | null>(null);
  const yTo = useRef<gsap.QuickToFunc | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    xTo.current = gsap.quickTo(ref.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    yTo.current = gsap.quickTo(ref.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || !xTo.current || !yTo.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - (left + width / 2)) * strength;
    const y = (e.clientY - (top + height / 2)) * strength;
    xTo.current(x);
    yTo.current(y);
  };

  const handleMouseLeave = () => {
    if (!xTo.current || !yTo.current) return;
    xTo.current(0);
    yTo.current(0);
  };

  return React.cloneElement(children as any, {
    ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  });
}
