"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

const projects = [
  {
    title: "Rhetorich",
    category: "SaaS Platform — AI Coaching",
  },
  {
    title: "Portfolio V2",
    category: "Personal Branding — Web Design",
  },
  {
    title: "Project Three",
    category: "Coming Soon",
  },
];

export function ProjectsGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="mt-12 overflow-x-auto hide-scrollbar snap-x snap-mandatory flex gap-12 px-8 md:px-24 pb-24" ref={scrollRef}>
      {projects.map((project) => (
        <div
          key={project.title}
          className="snap-center shrink-0 w-[85vw] md:w-[70vw] lg:w-[60vw]"
        >
          {/* Image area */}
          <div className="group relative aspect-16/10 overflow-hidden rounded-lg bg-surface-container transition-all duration-700 hover:shadow-2xl hover:shadow-primary/5">
            {/* Placeholder — swap for next/image later */}
            <div className="w-full h-full bg-surface-container-highest transition-transform duration-2000 ease-out group-hover:scale-110" />
            <div className="absolute inset-0 bg-linear-to-t from-primary-container/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Info */}
          <div className="mt-8 flex flex-col md:flex-row justify-between gap-6">
            <div>
              <SectionHeading as="h3" size="card" color="primary" className="text-3xl md:text-4xl">
                {project.title}
              </SectionHeading>
              <p className="font-body italic text-lg text-on-surface-variant mt-2">
                {project.category}
              </p>
            </div>
            <Button variant="primary" size="sm" className="self-start px-8 py-4">
              View Study
            </Button>
          </div>
        </div>
      ))}
      {/* Spacer for scroll ending */}
      <div className="shrink-0 w-8 md:w-24" />
    </section>
  );
}
