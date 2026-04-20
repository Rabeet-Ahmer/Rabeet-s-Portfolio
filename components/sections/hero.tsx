"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const entranceTl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const handlePreloader = () => {
      if (entranceTl.current) {
        entranceTl.current.play();
      }
    };

    window.addEventListener("preloaderDone", handlePreloader);
    return () => window.removeEventListener("preloaderDone", handlePreloader);
  }, []);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: "power4.out" },
      });
      entranceTl.current = tl;

      // Eyebrow badge
      tl.from(".hero-eyebrow", {
        y: 30,
        opacity: 0,
        duration: 0.8,
      });

      // Heading words reveal from below
      tl.from(
        ".hero-word",
        {
          yPercent: 150,
          stagger: 0.08,
          duration: 0.9,
          ease: "power4.out",
        },
        "-=0.4",
      );

      // Subtitle
      tl.from(
        ".hero-subtitle",
        {
          y: 40,
          opacity: 0,
          filter: "blur(10px)",
          duration: 0.8,
        },
        "-=0.5",
      );

      // Person image — scale + fade up
      tl.from(
        ".hero-person",
        {
          y: 100,
          opacity: 0,
          scale: 0.9,
          duration: 1.4,
          ease: "power2.out",
        },
        "-=0.8",
      );

      // Floating stat badges — pop in
      tl.from(
        ".hero-badge",
        {
          scale: 0,
          opacity: 0,
          stagger: 0.2,
          duration: 0.6,
          ease: "back.out(2)",
        },
        "-=0.5",
      );

      // --- Scroll-driven parallax ---
      gsap.to(".hero-person", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".hero-heading-wrapper", {
        yPercent: -50,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "40% top",
          scrub: true,
        },
      });

      // Floating badge bobbing (continuous)
      gsap.utils.toArray<HTMLElement>(".hero-badge").forEach((badge, i) => {
        gsap.to(badge, {
          y: "+=12",
          duration: 2.5 + i * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    },
    { scope: sectionRef },
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
        <Badge
          variant="light"
          className="hero-eyebrow tracking-[0.3em] md:text-sm text-on-primary-container/70 mb-6"
        >
          Rabeet Ahmer — Portfolio 2026
        </Badge>

        {/* Main heading */}
        <div className="hero-heading-wrapper">
          <h1 className="font-headline font-extrabold text-[clamp(2.5rem,8vw,5rem)] editorial-title text-surface max-w-4xl leading-[0.95]">
            {["Design,", "Develop"].map((word, i) => (
              <span
                key={i}
                className="inline-block overflow-hidden p-[0.2em] -m-[0.2em]"
              >
                <span className="hero-word inline-block mr-[0.2em]">
                  {word}
                </span>
              </span>
            ))}
            <br />
            {["&", "Deliver."].map((word, i) => (
              <span
                key={i}
                className="inline-block overflow-hidden p-[0.2em] -m-[0.2em] font-body italic font-normal text-primary-fixed-dim"
              >
                <span className="hero-word inline-block mr-[0.2em]">
                  {word}
                </span>
              </span>
            ))}
          </h1>
        </div>

        {/* Subtitle */}
        <p className="hero-subtitle font-body text-base md:text-lg text-on-primary-container/80 max-w-xl mt-6 leading-relaxed">
          Full-Stack Developer &amp; Agentic AI Developer &mdash; building
          scalable web solutions with Next.js &amp; pioneering intelligent AI
          systems.
        </p>

        {/* Person image area with floating badges */}
        <div className="hero-person relative mt-4 md:mt-6 w-full max-w-3xl mx-auto">
          {/* Green tinted atmospheric glow behind person */}
          <div className="absolute inset-x-0 top-1/4 bottom-0 bg-[radial-gradient(ellipse_at_center,rgba(70,101,86,0.3),transparent_70%)]" />

          {/* Person image */}
          <Image
            src="/portrait.png"
            alt="Rabeet Ahmer — Full-Stack & AI Developer"
            width={440}
            height={440}
            priority
            className="relative mx-auto w-[280px] md:w-[380px] lg:w-[440px] h-auto rounded-t-2xl"
          />

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
      <div className="absolute bottom-0 left-0 right-0 h-48 z-20 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-t from-surface via-surface/80 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-surface to-transparent opacity-80" />
      </div>
    </section>
  );
}
