"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-eyebrow", { y: 20, opacity: 0, duration: 0.6 })
        .from(".hero-heading", { y: 60, opacity: 0, duration: 0.9 }, "-=0.3")
        .from(".hero-subtitle", { y: 30, opacity: 0, duration: 0.7 }, "-=0.5")
        .from(".hero-cta", { y: 20, opacity: 0, stagger: 0.15, duration: 0.6 }, "-=0.3")
        .from(".hero-person", { y: 80, opacity: 0, scale: 0.95, duration: 1.2, ease: "power2.out" }, "-=0.6")
        .from(".hero-badge", { scale: 0, opacity: 0, stagger: 0.2, duration: 0.5, ease: "back.out(1.7)" }, "-=0.4");
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="curated"
      ref={sectionRef}
      className="relative min-h-screen bg-primary-container overflow-hidden"
    >
      {/* Radial gradient overlays for depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_top,rgba(172,206,188,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_bottom,rgba(0,19,11,0.6),transparent_60%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center pt-20 md:pt-28 px-6">
        {/* Eyebrow */}
        <Badge variant="light" className="hero-eyebrow tracking-[0.3em] md:text-sm text-on-primary-container/70 mb-6">
          Rabeet Ahmer — Portfolio 2026
        </Badge>

        {/* Main heading */}
        <h1 className="hero-heading font-headline font-extrabold text-[clamp(2.5rem,8vw,5rem)] editorial-title text-surface max-w-4xl leading-[0.95]">
          Design, Develop
          <br />
          <span className="font-body italic font-normal text-primary-fixed-dim">
            &amp; Deliver.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle font-body text-base md:text-lg text-on-primary-container/80 max-w-xl mt-6 leading-relaxed">
          Full-Stack Developer &amp; Agentic AI Developer — building scalable
          web solutions with Next.js &amp; pioneering intelligent AI systems.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <Button variant="primary" size="sm" className="hero-cta bg-surface text-primary px-8 py-4">
            View Projects
            <svg
              className="size-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Button>
          <Button variant="secondary" size="sm" className="hero-cta text-surface border-surface/20 hover:bg-surface/10 px-8 py-4">
            Get in Touch
          </Button>
        </div>

        {/* Person image area with floating badges */}
        <div className="hero-person relative mt-12 md:mt-16 w-full max-w-3xl mx-auto">
          {/* Green tinted atmospheric glow behind person */}
          <div className="absolute inset-x-0 top-1/4 bottom-0 bg-[radial-gradient(ellipse_at_center,rgba(70,101,86,0.3),transparent_70%)]" />

          {/* Person image placeholder */}
          <div className="relative mx-auto w-[280px] md:w-[380px] lg:w-[440px] aspect-3/4 rounded-t-2xl overflow-hidden">
            <div className="w-full h-full bg-linear-to-b from-primary-container via-surface-tint/30 to-primary" />
            {/* Silhouette overlay — placeholder for actual person image */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_60%,transparent_30%,rgba(10,42,30,0.8)_100%)]" />
          </div>

          {/* Floating stat badges */}
          <div className="hero-badge absolute top-[35%] left-[5%] md:left-[10%] flex items-center gap-2 px-4 py-2.5 rounded-full bg-surface/90 backdrop-blur-sm shadow-lg shadow-primary/10">
            <span className="size-2.5 rounded-full bg-surface-tint" />
            <span className="font-label text-xs text-on-surface tracking-wide">
              AI Apps
            </span>
            <span className="font-headline text-sm font-extrabold text-primary-container">
              5+ Projects
            </span>
          </div>

          <div className="hero-badge absolute top-[55%] right-[3%] md:right-[8%] flex items-center gap-2 px-4 py-2.5 rounded-full bg-surface/90 backdrop-blur-sm shadow-lg shadow-primary/10">
            <span className="size-2.5 rounded-full bg-surface-tint" />
            <span className="font-label text-xs text-on-surface tracking-wide">
              Full-Stack Dev
            </span>
            <span className="font-headline text-sm font-extrabold text-primary-container">
              2+ Years
            </span>
          </div>
        </div>
      </div>

      {/* Bottom fade to surface */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-surface to-transparent z-20" />
    </section>
  );
}
