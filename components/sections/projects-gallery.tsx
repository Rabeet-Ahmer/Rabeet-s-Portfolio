"use client";

import { useRef } from "react";
import Image from "next/image";
import { Globe } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";

import { PROJECTS_DATA } from "@/lib/constants";

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
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="overflow-hidden">
      <div
        ref={trackRef}
        className="flex"
        style={{ width: `${PROJECTS_DATA.length * 100}vw` }}
      >
        {PROJECTS_DATA.map((project, index) => (
          <div
            key={project.title}
            data-cursor="view"
            onClick={() => window.open(project.liveLink, "_blank")}
            className="gallery-panel relative w-screen h-screen shrink-0 overflow-hidden group cursor-pointer"
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
              <div className="flex items-center gap-6 mt-8">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="block"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 font-label text-xs uppercase tracking-widest text-white/60 hover:text-white transition-all duration-300 group/icon"
                >
                  {/* Github Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    className="size-5 group-hover/icon:scale-110 transition-transform"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                    />
                  </svg>
                  
                  <span>Source</span>
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="block"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 font-label text-xs uppercase tracking-widest text-white/60 hover:text-white transition-all duration-300 group/icon"
                >
                  <Globe className="size-5 group-hover/icon:scale-110 transition-transform" />
                  <span>Live Site</span>
                </a>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
