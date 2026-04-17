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

      // Counter 0 → 100
      tl.to(".preloader-counter", {
        textContent: 100,
        duration: 2,
        ease: "power2.inOut",
        snap: { textContent: 1 },
      });

      // Initials scale up slightly
      tl.to(
        ".preloader-initials",
        {
          scale: 1.1,
          duration: 2,
          ease: "power2.inOut",
        },
        0
      );

      // After counting — brief pause then reveal
      tl.to(".preloader-initials", {
        y: -30,
        opacity: 0,
        duration: 0.4,
        ease: "power3.in",
      });

      tl.to(
        ".preloader-counter-wrapper",
        {
          y: 20,
          opacity: 0,
          duration: 0.3,
          ease: "power3.in",
        },
        "-=0.3"
      );

      // Curtain wipe — split top/bottom
      tl.to(".preloader-curtain-top", {
        yPercent: -100,
        duration: 0.8,
        ease: "power4.inOut",
      });

      tl.to(
        ".preloader-curtain-bottom",
        {
          yPercent: 100,
          duration: 0.8,
          ease: "power4.inOut",
        },
        "-=0.8"
      );
    },
    { scope: preloaderRef }
  );

  if (done) return null;

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-10000 pointer-events-auto"
    >
      {/* Top curtain */}
      <div className="preloader-curtain-top absolute top-0 left-0 right-0 h-1/2 bg-primary-container" />
      {/* Bottom curtain */}
      <div className="preloader-curtain-bottom absolute bottom-0 left-0 right-0 h-1/2 bg-primary-container" />

      {/* Center content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        {/* Initials */}
        <div className="preloader-initials font-headline font-extrabold text-6xl md:text-8xl text-surface tracking-tighter">
          RA
        </div>

        {/* Counter */}
        <div className="preloader-counter-wrapper mt-6 flex items-baseline gap-1">
          <span className="preloader-counter font-label text-sm text-surface/50 tabular-nums tracking-widest">
            0
          </span>
          <span className="font-label text-sm text-surface/50 tracking-widest">
            %
          </span>
        </div>
      </div>
    </div>
  );
}
