"use client";

import { useRef, useEffect, useCallback } from "react";
import { gsap } from "@/lib/gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const isVisible = useRef(false);

  const onMouseMove = useCallback((e: MouseEvent) => {
    pos.current.x = e.clientX;
    pos.current.y = e.clientY;

    if (!isVisible.current && cursorRef.current) {
      gsap.to(cursorRef.current, { opacity: 1, duration: 0.3 });
      isVisible.current = true;
    }
  }, []);

  useEffect(() => {
    // Only on desktop
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    window.addEventListener("mousemove", onMouseMove);

    // Smooth follow loop
    gsap.ticker.add(() => {
      gsap.set(dot, {
        x: pos.current.x,
        y: pos.current.y,
      });
      gsap.to(cursor, {
        x: pos.current.x,
        y: pos.current.y,
        duration: 0.6,
        ease: "power3.out",
      });
    });

    // Scale on hoverable elements
    const handleEnter = () => {
      gsap.to(cursor, { scale: 2.5, duration: 0.3, ease: "power2.out" });
    };
    const handleLeave = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3, ease: "power2.out" });
    };

    const hoverTargets = document.querySelectorAll(
      'a, button, [role="button"], [data-cursor-hover]'
    );
    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, [onMouseMove]);

  return (
    <>
      {/* Outer ring — follows with lag */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-surface pointer-events-none mix-blend-difference z-9999 opacity-0 hidden lg:block"
      />
      {/* Inner dot — instant */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-surface pointer-events-none mix-blend-difference z-9999 hidden lg:block"
      />
    </>
  );
}
