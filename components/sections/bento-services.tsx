"use client";

import { useRef } from "react";
import { Code, Bot, Server, Workflow } from "lucide-react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { TiltCard } from "@/components/animations/tilt-card";

const services = [
  {
    title: "Web Development",
    description:
      "Building performant, scalable web applications with Next.js, React, TypeScript, and modern tooling.",
    icon: Code,
    span: "md:col-span-2",
    textSize: "lg",
    variant: "surface" as const,
    interactive: true,
  },
  {
    title: "Agentic AI Systems",
    description:
      "Designing autonomous AI agents that reason, plan, and execute complex workflows intelligently.",
    icon: Bot,
    span: "",
    textSize: "sm",
    variant: "muted" as const,
    interactive: true,
  },
  {
    title: "API & Backend",
    description:
      "Architecting robust REST APIs, databases, and server infrastructure that scales.",
    icon: Server,
    span: "",
    textSize: "sm",
    variant: "muted" as const,
    interactive: true,
  },
  {
    title: "Full-Stack Solutions",
    description:
      "From database architecture to polished frontends — end-to-end development with AI integration baked in.",
    icon: Workflow,
    span: "md:col-span-2",
    textSize: "lg",
    variant: "dark" as const,
    interactive: false,
  },
];

export function BentoServices() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // Prevent FOUC — hidden setup
      gsap.set(".bento-title", { y: 60, opacity: 0 });
      gsap.set(".bento-subtitle", { y: 30, opacity: 0 });
      gsap.set(".bento-card", { opacity: 0, y: 80, rotateY: 8, transformOrigin: "left center" });
      gsap.set(".bento-icon", { rotate: -15, scale: 0.8, opacity: 0 });

      // Heading & subtitle entrance
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".bento-header",
          start: "top 85%",
          once: true,
        },
      });

      headerTl
        .to(".bento-title", {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power4.out",
        })
        .to(
          ".bento-subtitle",
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        );

      // Card staggered entrance with 3D perspective
      ScrollTrigger.batch(".bento-card", {
        start: "top 88%",
        once: true,
        onEnter: (elements) => {
          gsap.to(elements, {
            opacity: 1,
            y: 0,
            rotateY: 0,
            transformOrigin: "center center",
            duration: 0.9,
            stagger: 0.12,
            ease: "power3.out",
            overwrite: true,
            clearProps: "transformOrigin",
          });
        },
      });

      // Icon micro-animation on scroll
      gsap.utils.toArray<HTMLElement>(".bento-icon").forEach((icon) => {
        gsap.to(icon, {
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: icon,
            start: "top 90%",
            once: true,
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="process" className="px-8 md:px-24 py-32 bg-surface" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="bento-header mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <SectionHeading size="section" color="primary-container" className="bento-title">
            WHAT
            <br />
            I DO.
          </SectionHeading>
          <p className="bento-subtitle font-body text-xl max-w-sm italic text-on-surface-variant">
            Turning ideas into scalable, production-ready software and
            intelligent AI systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ perspective: "1200px" }}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <TiltCard
                key={service.title}
                className={`bento-card ${service.span}`}
                maxTilt={3}
              >
                <Card
                  variant={service.variant}
                  interactive={service.interactive}
                  padding="lg"
                  rounding="xl"
                  className="flex-col justify-between min-h-[280px] h-full"
                >
                  <Icon className="bento-icon size-10 mb-12" strokeWidth={1.5} />
                  <div>
                    <h4
                      className={`font-headline font-extrabold uppercase mb-4 ${service.textSize === "lg" ? "text-3xl" : "text-2xl"}`}
                    >
                      {service.title}
                    </h4>
                    <p
                      className={`font-body opacity-80 group-hover:opacity-100 transition-opacity ${service.textSize === "lg" ? "text-lg" : "text-base"}`}
                    >
                      {service.description}
                    </p>
                  </div>
                </Card>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
