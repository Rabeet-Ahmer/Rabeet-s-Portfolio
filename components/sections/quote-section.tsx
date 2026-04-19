"use client";

import { useRef } from "react";
import { Quote } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";

const quoteText =
  "I don\u2019t just write code \u2014 I architect systems that think, scale, and solve real problems.";

export function QuoteSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // Quote icon entrance
      gsap.from(".quote-icon", {
        scale: 0,
        opacity: 0,
        rotate: -20,
        duration: 0.8,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // Word-by-word reveal — scrubbed to scroll
      const words = gsap.utils.toArray<HTMLElement>(".quote-word");
      gsap.set(words, { opacity: 0.15 });

      gsap.to(words, {
        opacity: 1,
        stagger: 0.05,
        ease: "none",
        scrollTrigger: {
          trigger: ".quote-text",
          start: "top 70%",
          end: "bottom 40%",
          scrub: true,
        },
      });

      // Cite fade-in
      gsap.from(".quote-cite", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".quote-cite",
          start: "top 90%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      className="py-32 bg-primary-container text-white overflow-hidden relative"
      ref={sectionRef}
    >
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent,transparent)]" />
      </div>

      <div className="max-w-5xl mx-auto px-8 text-center relative z-10">
        <Quote
          className="quote-icon size-16 mb-12 opacity-40 mx-auto"
          fill="currentColor"
          strokeWidth={0}
        />
        <blockquote className="quote-text font-body text-3xl md:text-5xl lg:text-6xl italic leading-tight mb-12">
          &ldquo;
          {quoteText.split(" ").map((word, i) => (
            <span key={i} className="quote-word inline-block mr-[0.3em]">
              {word}
            </span>
          ))}
          &rdquo;
        </blockquote>
        <cite className="quote-cite font-label text-sm uppercase tracking-[0.4em] text-white/50 not-italic">
          — Rabeet Ahmer
        </cite>
      </div>
    </section>
  );
}
