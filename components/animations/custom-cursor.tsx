"use client";

import { useRef, useEffect, useCallback } from "react";
import { gsap } from "@/lib/gsap";

/**
 * Custom cursor with context-aware states.
 *
 * Add data attributes to elements for different cursor states:
 * - data-cursor="view"  → Shows "View" text (for images, projects)
 * - data-cursor="drag"  → Shows "Drag" text (for sliders, galleries)
 * - data-cursor="link"  → Scales up ring (for links, buttons — auto-detected)
 */
export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
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
    const label = labelRef.current;
    if (!cursor || !dot || !label) return;

    window.addEventListener("mousemove", onMouseMove);

    // Smooth follow loop
    const tickerFn = () => {
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
    };
    gsap.ticker.add(tickerFn);

    // --- Context handlers ---
    const showLabel = (text: string) => {
      label.textContent = text;
      gsap.to(cursor, {
        width: 40,
        height: 40,
        scale: 3.5,
        borderRadius: "50%",
        backgroundColor: "transparent",
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(label, {
        opacity: 1,
        duration: 0.2,
      });
      gsap.to(dot, { opacity: 0, duration: 0.2 });
    };

    const hideLabel = () => {
      gsap.to(cursor, {
        scale: 1,
        borderRadius: "50%",
        backgroundColor: "transparent",
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(label, {
        opacity: 0,
        duration: 0.2,
      });
      gsap.to(dot, { opacity: 1, duration: 0.2 });
    };

    // Scale-only for links/buttons
    const handleLinkEnter = () => {
      gsap.to(cursor, { scale: 2.5, duration: 0.3, ease: "power2.out" });
    };
    const handleLinkLeave = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3, ease: "power2.out" });
    };

    // True Event Delegation for dynamic elements
    let currentContextEl: Element | null = null;
    let currentHoverEl: Element | null = null;

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check context labels
      const contextEl = target.closest("[data-cursor]");
      if (contextEl && contextEl !== currentContextEl) {
        currentContextEl = contextEl;
        const state = contextEl.getAttribute("data-cursor");
        if (state === "view") showLabel("View");
        else if (state === "drag") showLabel("Drag");
        return;
      }

      // Check generic interactive scale
      const hoverEl = target.closest("a, button, [role='button'], [data-cursor-hover]");
      if (hoverEl && hoverEl !== currentHoverEl && !contextEl) {
        currentHoverEl = hoverEl;
        handleLinkEnter();
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const related = e.relatedTarget as HTMLElement | null;

      // Only trigger leave if we actually exit the bounded element
      if (currentContextEl && !currentContextEl.contains(related)) {
        currentContextEl = null;
        hideLabel();
      }

      if (currentHoverEl && !currentHoverEl.contains(related)) {
        currentHoverEl = null;
        handleLinkLeave();
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      gsap.ticker.remove(tickerFn);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [onMouseMove]);

  return (
    <>
      {/* Outer ring — follows with lag */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-surface pointer-events-none mix-blend-difference z-9999 opacity-0 hidden lg:flex items-center justify-center"
      >
        {/* Context label */}
        <span
          ref={labelRef}
          className="font-label text-[6px] uppercase tracking-widest text-surface opacity-0 select-none"
        />
      </div>
      {/* Inner dot — instant */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-surface pointer-events-none mix-blend-difference z-9999 hidden lg:block"
      />
    </>
  );
}
