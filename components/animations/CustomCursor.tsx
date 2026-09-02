"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";

/**
 * Custom cursor with context-aware states.
 *
 * Add data attributes to elements for different cursor states:
 * - data-cursor="view"  → Shows "View" text (for images, projects)
 * - data-cursor="link"  → Scales up ring (for links, buttons — auto-detected)
 * - data-cursor="block" → Reverts to default state (hides text)
 */
export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const isVisible = useRef(false);

  const lastX = useRef(-1);
  const lastY = useRef(-1);
  const lastTarget = useRef<Element | null>(null);

  useEffect(() => {
    // Only on desktop
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    const label = labelRef.current;
    if (!cursor || !dot || !label) return;

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

    const syncState = (target: Element | null) => {
      const contextEl = target ? target.closest("[data-cursor]") : null;
      const hoverEl = target ? target.closest("a, button, [role='button'], [data-cursor-hover]") : null;

      // Handle contextEl changes
      if (contextEl) {
        if (contextEl !== currentContextEl) {
          currentContextEl = contextEl;
          const state = contextEl.getAttribute("data-cursor");
          if (state === "view") showLabel("View");
          else if (state === "block") hideLabel();
        }
      } else {
        if (currentContextEl) {
          currentContextEl = null;
          hideLabel();
        }
      }

      // Handle hoverEl changes
      if (hoverEl && !contextEl) {
        if (hoverEl !== currentHoverEl) {
          currentHoverEl = hoverEl;
          handleLinkEnter();
        }
      } else {
        if (currentHoverEl) {
          currentHoverEl = null;
          handleLinkLeave();
        }
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!e.isTrusted) return;

      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      lastX.current = e.clientX;
      lastY.current = e.clientY;
      lastTarget.current = e.target as Element;

      if (!isVisible.current && cursor) {
        gsap.to(cursor, { opacity: 1, duration: 0.3 });
        isVisible.current = true;
      }

      syncState(e.target as Element);
    };

    let scrollTimeout: ReturnType<typeof window.setTimeout> | undefined;

    const onScroll = () => {
      // Temporarily restore pointer-events to perform accurate hit-testing for custom cursor
      document.body.style.pointerEvents = "";

      if (isVisible.current && lastX.current >= 0) {
        const el = document.elementFromPoint(lastX.current, lastY.current);
        syncState(el);

        if (el) {
          const oldTarget = lastTarget.current;
          
          if (el !== oldTarget) {
            if (oldTarget) {
              oldTarget.dispatchEvent(new MouseEvent("mouseout", {
                bubbles: true,
                cancelable: true,
                clientX: lastX.current,
                clientY: lastY.current,
              }));
              oldTarget.dispatchEvent(new MouseEvent("mouseleave", {
                bubbles: false,
                cancelable: true,
                clientX: lastX.current,
                clientY: lastY.current,
              }));
            }

            el.dispatchEvent(new MouseEvent("mouseover", {
              bubbles: true,
              cancelable: true,
              clientX: lastX.current,
              clientY: lastY.current,
            }));
            el.dispatchEvent(new MouseEvent("mouseenter", {
              bubbles: false,
              cancelable: true,
              clientX: lastX.current,
              clientY: lastY.current,
            }));

            lastTarget.current = el;
          }

          el.dispatchEvent(new MouseEvent("mousemove", {
            bubbles: true,
            cancelable: true,
            clientX: lastX.current,
            clientY: lastY.current,
          }));
        } else {
          const oldTarget = lastTarget.current;
          if (oldTarget) {
            oldTarget.dispatchEvent(new MouseEvent("mouseout", {
              bubbles: true,
              cancelable: true,
              clientX: lastX.current,
              clientY: lastY.current,
            }));
            oldTarget.dispatchEvent(new MouseEvent("mouseleave", {
              bubbles: false,
              cancelable: true,
              clientX: lastX.current,
              clientY: lastY.current,
            }));
            lastTarget.current = null;
          }
        }
      }

      // Disable pointer-events during scroll to force browser CSS hover recalculation and optimize performance
      document.body.style.pointerEvents = "none";

      window.clearTimeout(scrollTimeout as unknown as number);
      scrollTimeout = window.setTimeout(() => {
        document.body.style.pointerEvents = "";
        
        // Perform a final sync once hover states are restored
        if (isVisible.current && lastX.current >= 0) {
          const el = document.elementFromPoint(lastX.current, lastY.current);
          syncState(el);
        }
      }, 100) as unknown as ReturnType<typeof window.setTimeout>;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("scroll", onScroll, { passive: true });

    // Only hide native cursor if we have a fine pointer (mouse)
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (isFinePointer) {
      document.documentElement.classList.add("cursor-hidden");
    }

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(scrollTimeout as unknown as number);
      document.body.style.pointerEvents = "";
      gsap.ticker.remove(tickerFn);
      if (isFinePointer) {
        document.documentElement.classList.remove("cursor-hidden");
      }
    };
  }, []);

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
