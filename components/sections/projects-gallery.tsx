"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";

const projects = [
  {
    title: "Mentora",
    category: "SaaS Platform — AI Coaching",
    description:
      "An AI-powered coaching platform helping lawyers become more impactful communicators.",
    image: "/project1.jpeg",
  },
  {
    title: "AI Todo App",
    category: "Web App — AI Assistant",
    description:
      "An AI-powered todo app that helps you stay organized and focused.",
    image: "/project2.jpeg",
  },
  {
    title: "Deep Research Agent",
    category: "Web App — AI Assistant",
    description:
      "An AI-powered research agent for students and professionals deep research work.",
    image: "/project3.jpeg",
  },
];

export function ProjectsGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      const panels = gsap.utils.toArray<HTMLElement>(".gallery-panel");
      if (panels.length === 0) return;

      // Horizontal scroll with pin
      const scrollTween = gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: "none",
        invalidateOnRefresh: true,
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          end: () => `+=${Math.max(0, track.scrollWidth - window.innerWidth)}`,
          snap: {
            snapTo: panels.length > 1 ? 1 / (panels.length - 1) : 0,
            duration: 0.3,
            ease: "power1.inOut",
          },
        },
      });

      // Glass card entrance per panel
      panels.forEach((panel) => {
        const glass = panel.querySelector(".gallery-glass");
        const counter = panel.querySelector(".gallery-counter");

        if (glass) {
          gsap.from(glass, {
            y: 60,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: panel,
              start: "left 60%",
              containerAnimation: scrollTween,
            },
          });
        }

        if (counter) {
          gsap.from(counter, {
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: panel,
              start: "left 60%",
              containerAnimation: scrollTween,
            },
          });
        }
      });

      // Mousemove parallax on gallery images
      panels.forEach((panel) => {
        const img = panel.querySelector(".gallery-img") as HTMLElement;
        if (!img) return;

        const handleMove = (e: MouseEvent) => {
          const rect = panel.getBoundingClientRect();
          const xPercent = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
          const yPercent = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
          gsap.to(img, {
            x: xPercent * 20,
            y: yPercent * 15,
            duration: 0.8,
            ease: "power2.out",
          });
        };

        const handleLeave = () => {
          gsap.to(img, { x: 0, y: 0, duration: 0.6, ease: "power2.out" });
        };

        panel.addEventListener("mousemove", handleMove);
        panel.addEventListener("mouseleave", handleLeave);
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="overflow-hidden">
      <div ref={trackRef} className="flex" style={{ width: `${projects.length * 100}vw` }}>
        {projects.map((project, index) => (
          <div
            key={project.title}
            data-cursor="view"
            className="gallery-panel relative w-screen h-screen shrink-0 overflow-hidden group"
          >
            {/* Full-screen background image */}
            <div className="absolute inset-0">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="gallery-img object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="100vw"
              />
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-linear-to-t from-primary/80 via-primary/30 to-transparent" />
              <div className="absolute inset-0 bg-primary/20" />
            </div>

            {/* Card counter — top right */}
            <div className="gallery-counter absolute top-8 right-8 md:top-12 md:right-12 z-10">
              <span className="font-headline text-6xl md:text-8xl font-extrabold text-white/20">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Glassmorphic overlay card — bottom left */}
            <Card
              variant="glass"
              padding="default"
              rounding="default"
              className="gallery-glass absolute bottom-8 left-8 md:bottom-16 md:left-16 md:p-10 max-w-lg z-10"
            >
              <Badge
                variant="light"
                className="text-[10px] text-white tracking-widest mb-3"
              >
                {project.category}
              </Badge>
              <SectionHeading
                as="h3"
                size="card"
                color="inherit"
                className="text-white tracking-tighter mb-3 uppercase text-3xl md:text-5xl"
              >
                {project.title}
              </SectionHeading>
              <p className="text-white/80 font-body text-sm md:text-base leading-relaxed mb-6">
                {project.description}
              </p>
              <span className="inline-block font-label text-xs uppercase tracking-widest text-white/60 border-b border-white/20 pb-1 group-hover:text-white group-hover:border-white/60 transition-all duration-300">
                View Case Study
              </span>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
