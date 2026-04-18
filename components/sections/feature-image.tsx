"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";

export function FeatureImage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Clip-path reveal — wipe from bottom
      tl.from(".feature-container", {
        clipPath: "inset(100% 0% 0% 0%)",
        duration: 1.4,
        ease: "power4.inOut",
      });

      // Inner image scale-down
      tl.from(
        ".feature-image",
        {
          scale: 1.4,
          duration: 1.8,
          ease: "power2.out",
        },
        "-=1.0"
      );

      // Glass card slide-in from bottom
      tl.from(
        ".feature-glass",
        {
          y: 80,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.8"
      );

      // Parallax — image moves slower than scroll
      gsap.to(".feature-image", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section className="px-8 md:px-24 py-12" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="feature-container relative h-[500px] md:h-[716px] w-full overflow-hidden rounded-xl bg-surface-container">
          <Image
            src="/featured.jpeg"
            alt="Featured workspace"
            fill
            className="feature-image object-cover"
            sizes="(max-width: 768px) 100vw, 1280px"
            priority
          />

          {/* Glassmorphic overlay card */}
          <Card
            variant="glass"
            padding="default"
            rounding="default"
            className="feature-glass absolute bottom-8 left-8 md:bottom-12 md:left-12 md:p-8 max-w-md"
          >
            <Badge
              variant="light"
              className="text-[10px] text-tertiary tracking-widest mb-2"
            >
              Featured Work
            </Badge>
            <SectionHeading
              as="h2"
              size="card"
              color="inherit"
              className="text-tertiary tracking-tighter mb-4 uppercase"
            >
              Rhetorich — SaaS Platform
            </SectionHeading>
            <p className="text-tertiary/80 font-body text-sm leading-relaxed">
              An AI-powered coaching platform helping lawyers become more
              impactful communicators. Full-stack development from architecture
              to deployment.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
