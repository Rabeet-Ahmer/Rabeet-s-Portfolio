"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProjectsPhilosophy() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // Prevent FOUC
      gsap.set(".phil-item", { y: 60, opacity: 0 });

      // Staggered grid entrance
      ScrollTrigger.batch(".phil-item", {
        start: "top 88%",
        once: true,
        onEnter: (elements) => {
          gsap.to(elements, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            overwrite: true,
          });
        },
      });

      // Scroll-linked grayscale to color on images
      gsap.utils.toArray<HTMLElement>(".phil-image").forEach((img) => {
        gsap.fromTo(
          img,
          { filter: "grayscale(100%)" },
          {
            filter: "grayscale(0%)",
            ease: "none",
            scrollTrigger: {
              trigger: img,
              start: "top 80%",
              end: "top 30%",
              scrub: true,
            },
          }
        );
      });

      // Badge line draw
      gsap.from(".phil-badge-line", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.8,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".phil-badge-line",
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      className="px-8 md:px-24 py-24 bg-surface-container rounded-t-xl"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Large text block */}
          <Card
            variant="surface"
            padding="lg"
            rounding="default"
            className="phil-item md:col-span-8 justify-between min-h-[360px]"
          >
            <Badge variant="muted">My Approach</Badge>
            <div>
              <SectionHeading
                as="h3"
                size="subsection"
                color="primary"
                className="mb-8"
              >
                Engineering with purpose, not just patterns.
              </SectionHeading>
              <p className="font-body text-xl text-on-surface-variant max-w-xl leading-relaxed">
                The best software comes from understanding both the problem and
                the technology deeply. Every architectural decision — from data
                flow to AI agent orchestration — should serve the end user.
              </p>
            </div>
          </Card>

          {/* Contemplative image */}
          <div className="phil-item md:col-span-4 aspect-square rounded-lg overflow-hidden">
            <Image
              src="/person.jpeg"
              alt="Silhouette of a person at a window"
              width={500}
              height={500}
              className="phil-image w-full h-full object-cover"
            />
          </div>

          {/* Dynamic image */}
          <div className="phil-item md:col-span-4 aspect-square rounded-lg overflow-hidden order-last md:order-0">
            <Image
              src="/prism.jpeg"
              alt="Light refracting through glass prism"
              width={500}
              height={500}
              className="phil-image w-full h-full object-cover"
            />
          </div>

          {/* Dark quote card */}
          <Card
            variant="dark"
            padding="lg"
            rounding="default"
            className="phil-item md:col-span-8 justify-center min-h-[240px]"
          >
            <Badge variant="light" withLine className="phil-badge-line mb-6">
              Engineering Philosophy
            </Badge>
            <SectionHeading as="p" size="card" color="inherit">
              &ldquo;Great engineering is invisible. The user only sees something
              that just works.&rdquo;
            </SectionHeading>
          </Card>
        </div>
      </div>
    </section>
  );
}
