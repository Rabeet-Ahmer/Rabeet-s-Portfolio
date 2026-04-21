"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { Download, ArrowDownRight } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useLenis } from "lenis/react";

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // Heading line-by-line reveal
      gsap.from(".about-heading-line", {
        yPercent: 120,
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".about-heading",
          start: "top 85%",
        },
      });

      // Paragraphs fade in
      gsap.from(".about-text", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-text-block",
          start: "top 85%",
        },
      });

      // CTA buttons
      gsap.from(".about-cta", {
        y: 20,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-cta-wrapper",
          start: "top 90%",
        },
      });

      // Image grid — clip-path reveals
      gsap.from(".about-img-1", {
        clipPath: "inset(100% 0% 0% 0%)",
        duration: 1.2,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: ".about-img-1",
          start: "top 85%",
        },
      });

      gsap.from(".about-img-2", {
        clipPath: "inset(0% 100% 0% 0%)",
        duration: 1.2,
        ease: "power4.inOut",
        delay: 0.2,
        scrollTrigger: {
          trigger: ".about-img-2",
          start: "top 85%",
        },
      });

      // Quote card — blur to sharp
      gsap.from(".about-quote", {
        opacity: 0,
        filter: "blur(10px)",
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-quote",
          start: "top 90%",
        },
      });

      // Stats counter
      const statsEl = sectionRef.current.querySelector(".about-stat-number");
      if (statsEl) {
        gsap.to(
          { value: 0 },
          {
            value: 2,
            duration: 2,
            ease: "power1.out",
            snap: { value: 1 },
            onUpdate: function () {
              statsEl.textContent = `+${Math.round(this.targets()[0].value)}`;
            },
            scrollTrigger: {
              trigger: statsEl,
              start: "top 90%",
            },
          },
        );
      }

      // Stats card entrance
      gsap.from(".about-stats-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-stats-card",
          start: "top 90%",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="about"
      className="px-8 md:px-24 py-32 bg-surface-container-low rounded-t-xl"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
        {/* Left column */}
        <div className="space-y-12">
          <div className="about-heading overflow-hidden">
            <SectionHeading
              size="section"
              color="primary-container"
              as="h3"
              className="uppercase"
            >
              <div className="overflow-hidden p-[0.2em] -m-[0.2em]">
                <span className="about-heading-line inline-block">
                  BUILDING THE
                </span>
              </div>
              <div className="overflow-hidden p-[0.2em] -m-[0.2em]">
                <span className="about-heading-line inline-block">FUTURE.</span>
              </div>
            </SectionHeading>
          </div>
          <div className="about-text-block space-y-6">
            <p className="about-text font-body text-2xl leading-relaxed text-on-surface">
              I&rsquo;m Rabeet — a full-stack developer and agentic AI engineer
              who turns complex ideas into production-ready systems.
            </p>
            <p className="about-text font-body text-lg leading-relaxed text-on-surface-variant">
              I specialize in building scalable web applications with Next.js,
              React, and TypeScript, and architecting intelligent AI agent
              systems that automate workflows and solve real-world problems.
              Every project is an opportunity to push what&rsquo;s possible.
            </p>
          </div>
          <div className="about-cta-wrapper pt-8 flex gap-4">
            <a
              href="#process"
              onClick={(e) => {
                e.preventDefault();
                lenis?.scrollTo("#process");
              }}
              data-cursor="shrink"
              className={cn(
                buttonVariants({ variant: "default" }),
                "about-cta group/process relative overflow-hidden bg-primary-container text-on-primary font-label text-sm uppercase tracking-widest px-10 py-5 rounded-full hover:scale-105 transition-all duration-500 h-auto border-none"
              )}
            >
              <div className="relative flex items-center justify-center gap-2">
                <span className="inline-block transition-transform duration-500 group-hover/process:-translate-y-full group-hover/process:opacity-0">
                  My Process
                </span>
                <span className="absolute inset-0 flex items-center justify-center translate-y-full opacity-0 transition-all duration-500 group-hover/process:translate-y-0 group-hover/process:opacity-100">
                  <ArrowDownRight className="size-4" />
                </span>
              </div>
            </a>
            <a
              href={SOCIAL_LINKS.cv}
              download="Rabeet_Ahmer_CV.pdf"
              data-cursor="shrink"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "about-cta group/cv relative overflow-hidden bg-transparent text-primary font-label text-sm uppercase tracking-widest px-10 py-5 rounded-full border border-on-surface-variant/20 hover:bg-surface-container transition-all duration-500 h-auto"
              )}
            >
              <div className="relative flex items-center justify-center gap-2">
                <span className="inline-block transition-transform duration-500 group-hover/cv:-translate-y-full group-hover/cv:opacity-0">
                  Download CV
                </span>
                <span className="absolute inset-0 flex items-center justify-center translate-y-full opacity-0 transition-all duration-500 group-hover/cv:translate-y-0 group-hover/cv:opacity-100">
                  <Download className="size-4" />
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Right column — staggered image grid */}
        <div className="grid grid-cols-2 gap-6 items-start">
          <div className="space-y-6 pt-12">
            {/* Sketch image */}
            <div className="about-img-1 aspect-5/6 bg-surface-container rounded-lg overflow-hidden">
              <Image
                src="/sketch.png"
                alt="Sketch illustration"
                width={400}
                height={480}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Quote card */}
            <Card
              variant="surface"
              padding="default"
              rounding="default"
              className="about-quote"
            >
              <Badge variant="accent" className="block mb-2">
                Philosophy
              </Badge>
              <p className="font-body text-sm italic">
                &ldquo;Clean architecture, intelligent automation, scalable
                solutions.&rdquo;
              </p>
            </Card>
          </div>
          <div className="space-y-6">
            {/* Stats card */}
            <Card
              variant="dark"
              padding="default"
              rounding="default"
              className="about-stats-card text-white"
            >
              <span className="about-stat-number text-4xl font-headline font-extrabold block mb-4">
                2
              </span>
              <p className="font-label text-xs uppercase tracking-widest text-white/60">
                Years Building AI &amp; Web Apps
              </p>
            </Card>
            {/* Cube image */}
            <div className="about-img-2 aspect-square bg-surface-container rounded-lg overflow-hidden">
              <Image
                src="/cube.jpg"
                alt="Abstract cube"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
