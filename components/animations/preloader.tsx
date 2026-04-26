"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";


export function Preloader() {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useGSAP(
    () => {
      if (!preloaderRef.current) return;

      const tl = gsap.timeline({
        onComplete: () => {
          setDone(true);
          window.dispatchEvent(new CustomEvent("preloaderDone"));
        },
      });

      // 1. Counter Phase
      tl.to(".preloader-counter", {
        textContent: 100,
        duration: 2,
        ease: "power2.inOut",
        snap: { textContent: 1 },
      });

      tl.to(
        ".preloader-initials",
        {
          scale: 1.1,
          duration: 2,
          ease: "power2.inOut",
        },
        0
      );

      // 2. The Squash
      // Initials squash horizontally into a vertical "spine"
      tl.to(".preloader-initials", {
        scaleX: 0,
        duration: 0.4,
        ease: "power2.in",
      });

      tl.to(
        ".preloader-counter-wrapper",
        {
          opacity: 0,
          y: 20,
          duration: 0.3,
          ease: "power2.in",
        },
        "<"
      );

      // 3. The Slice Line (Transitions perfectly from the squashed initials)
      tl.fromTo(
        ".preloader-slice-line",
        { scaleY: 0, opacity: 1 },
        {
          scaleY: 1,
          duration: 0.4,
          ease: "power4.out",
        },
        "-=0.05"
      );

      // Explicitly hide initials to avoid any glitch/overlap during expansion
      tl.set(".preloader-initials", { opacity: 0 }, "<");

      // 4. The Reveal
      tl.to(
        ".preloader-curtain-left",
        {
          xPercent: -100,
          duration: 1,
          ease: "expo.inOut",
        },
        "+=0.1"
      );

      tl.to(
        ".preloader-curtain-right",
        {
          xPercent: 100,
          duration: 1,
          ease: "expo.inOut",
        },
        "<"
      );

      // Slice line fades or follows the reveal
      tl.to(
        ".preloader-slice-line",
        {
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        "<+=0.2"
      );
    },
    { scope: preloaderRef }
  );

  if (done) return null;

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-10000 pointer-events-auto overflow-hidden bg-transparent"
    >
      {/* Left Curtain */}
      <div className="preloader-curtain-left absolute top-0 left-0 w-1/2 h-full bg-(--color-surface-container)" />
      
      {/* Right Curtain */}
      <div className="preloader-curtain-right absolute top-0 right-0 w-1/2 h-full bg-(--color-surface-container)" />

      {/* Slice Line */}
      <div className="preloader-slice-line absolute top-0 left-1/2 w-[3px] -ml-[1.5px] h-full bg-primary origin-center z-20 opacity-0" />

      {/* Center content overlay */}
      <div className="preloader-content absolute inset-0 flex flex-col items-center justify-center z-10">
        {/* Initials */}
        <div className="preloader-initials font-headline font-extrabold text-6xl md:text-8xl text-primary tracking-tighter">
          RA
        </div>

        {/* Counter */}
        <div className="preloader-counter-wrapper mt-6 flex items-baseline gap-1">
          <span className="preloader-counter font-label text-sm text-primary/60 tabular-nums tracking-widest">
            0
          </span>
          <span className="font-label text-sm text-primary/60 tracking-widest">
            %
          </span>
        </div>
      </div>
    </div>
  );
}
