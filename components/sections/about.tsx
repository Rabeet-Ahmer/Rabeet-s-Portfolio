"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
        gsap.from(statsEl, {
          textContent: 0,
          duration: 2,
          ease: "power1.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: statsEl,
            start: "top 90%",
          },
        });
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
    { scope: sectionRef }
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
                <span className="about-heading-line inline-block">
                  FUTURE.
                </span>
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
            <Button className="about-cta bg-primary-container text-on-primary font-label text-sm uppercase tracking-widest px-10 py-5 rounded-full hover:scale-105 transition-transform duration-300">
              My Process
            </Button>
            <Button className="about-cta bg-transparent text-primary font-label text-sm uppercase tracking-widest px-10 py-5 rounded-full border border-on-surface-variant/20 hover:bg-surface-container transition-colors duration-300">
              Download CV
            </Button>
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
                Years Building &amp; Shipping
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
