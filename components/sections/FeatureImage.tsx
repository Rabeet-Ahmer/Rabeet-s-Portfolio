"use client";

import { useRef } from "react";
import Image from "next/image";
import { Globe } from "lucide-react";
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
          scale: 1.1,
          duration: 1.8,
          ease: "power2.out",
        },
        "-=1.0",
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
        "-=0.8",
      );

    },
    { scope: sectionRef },
  );

  return (
    <section className="px-8 md:px-24 py-12" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div
          data-cursor="view"
          onClick={() => window.open("https://read-buddy-nine.vercel.app/", "_blank", "noopener,noreferrer")}
          className="feature-container relative h-[500px] md:h-[716px] w-full overflow-hidden rounded-xl bg-surface-container group cursor-pointer"
        >
          {/* Zooming background image */}
          <div className="absolute inset-0">
            <Image
              src="/featured.jpeg"
              alt="Featured workspace"
              fill
              className="feature-image object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 1280px"
              priority
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-linear-to-t from-primary/80 via-primary/20 to-transparent" />
            <div className="absolute inset-0 bg-primary/10" />
          </div>

          {/* Glassmorphic overlay card */}
          <Card
            variant="glass"
            padding="default"
            rounding="default"
            className="feature-glass absolute bottom-8 left-8 md:bottom-12 md:left-12 md:p-8 max-w-md"
          >
            <Badge
              variant="light"
              className="text-[10px] text-white tracking-widest mb-2"
            >
              Featured Project
            </Badge>
            <SectionHeading
              as="h2"
              size="card"
              color="inherit"
              className="text-white tracking-tighter mb-4 uppercase"
            >
              Read Buddy — SaaS Platform
            </SectionHeading>
            <p className="text-white/80 font-body text-sm leading-relaxed mb-6">
              An AI-powered coaching platform helping Students and Teachers to talk to their books. Full-stack development from architecture
              to deployment.
            </p>

            {/* Action Links */}
            <div className="flex items-center gap-6 mt-4">
              <a
                href="https://github.com/Rabeet-Ahmer/ReadBuddy"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="block"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 font-label text-xs uppercase tracking-widest text-white/60 hover:text-white transition-all duration-300 group/icon"
              >
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
                href="https://read-buddy-nine.vercel.app/"
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
      </div>
    </section>
  );
}
