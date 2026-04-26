"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";

export function ContactHeader() {
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
      tl.from(".contact-badge", {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(2)",
      });

      // Heading line reveal
      tl.from(
        ".contact-heading-line",
        {
          yPercent: 120,
          duration: 0.9,
          ease: "power4.out",
          stagger: 0.1,
        },
        "-=0.2"
      );

      // Description
      tl.from(
        ".contact-desc",
        {
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.4"
      );

      // Image entrance with rotation
      tl.from(
        ".contact-image-wrapper",
        {
          y: 60,
          opacity: 0,
          rotate: 8,
          duration: 0.9,
          ease: "power3.out",
        },
        "-=0.6"
      );

      // Scroll-linked image tilt
      gsap.to(".contact-image-wrapper", {
        rotate: -2,
        yPercent: -10,
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
    <section
      id="contact"
      className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-16"
      ref={sectionRef}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-7">
          <Badge
            variant="light"
            className="contact-badge text-sm font-bold tracking-[0.2em] mb-6 block"
          >
            Let&rsquo;s Connect
          </Badge>
          <SectionHeading size="display" color="primary" className="mb-8">
            <div className="overflow-hidden p-[0.2em] -m-[0.2em]">
              <span className="contact-heading-line inline-block">
                Have a project in
              </span>
            </div>
            <div className="overflow-hidden p-[0.2em] -m-[0.2em]">
              <span className="contact-heading-line inline-block italic font-body font-normal text-primary/80">
                mind?
              </span>
            </div>
          </SectionHeading>
          <p className="contact-desc font-body text-xl md:text-2xl text-on-surface-variant max-w-xl leading-relaxed">
            Open to full-time roles, freelance projects, and collaborations in
            web development and AI. Let&rsquo;s build something that matters.
          </p>
        </div>

        <div className="md:col-span-5 flex items-end justify-start md:justify-end">
          <div className="contact-image-wrapper w-full h-80 rounded-xl overflow-hidden rotate-4">
            <Image
              src="/desk.jpg"
              alt="My workspace"
              width={600}
              height={320}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
