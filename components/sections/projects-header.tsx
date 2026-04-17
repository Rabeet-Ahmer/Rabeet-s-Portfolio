"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProjectsHeader() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Badge pop
      tl.from(".proj-header-badge", {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(2)",
      });

      // Heading line reveal
      tl.from(
        ".proj-header-line",
        {
          yPercent: 150,
          duration: 0.9,
          ease: "power4.out",
          stagger: 0.1,
        },
        "-=0.2"
      );

      // Horizontal rule draw
      tl.from(
        ".proj-header-rule",
        {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 0.8,
          ease: "power3.inOut",
        },
        "-=0.5"
      );

      // Description fade
      tl.from(
        ".proj-header-desc",
        {
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.4"
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="archive"
      className="px-8 pt-32 pb-12 md:px-24"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <Badge
            variant="default"
            className="proj-header-badge tracking-[0.2em] mb-4 block"
          >
            Selected Work — 2024
          </Badge>
          <SectionHeading size="display" color="primary">
            <div className="overflow-hidden p-[0.2em] -m-[0.2em]">
              <span className="proj-header-line inline-block">Recent</span>
            </div>
            <div className="overflow-hidden p-[0.2em] -m-[0.2em]">
              <span className="proj-header-line inline-block">Projects.</span>
            </div>
          </SectionHeading>
        </div>
        <div className="max-w-md">
          <div className="proj-header-rule h-px w-full bg-on-surface-variant/20 mb-6" />
          <p className="proj-header-desc font-body italic text-xl text-on-surface-variant leading-relaxed">
            A curated selection of projects where design thinking meets
            technical execution. Each one tells a story of collaboration and
            craft.
          </p>
        </div>
      </div>
    </section>
  );
}
