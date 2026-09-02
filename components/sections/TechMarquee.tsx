"use client";

import { InfiniteMarquee } from "@/components/animations/InfiniteMarquee";

const brandLogo = (src: string, name: string) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src={src}
    alt={`${name} logo`}
    className="size-8 object-contain"
  />
);

const technologies = [
  { name: "Next.js", logo: brandLogo("/assets/nextjs-logo.svg", "Next.js") },
  { name: "React", logo: brandLogo("/assets/react-logo.svg", "React") },
  {
    name: "TypeScript",
    logo: brandLogo("/assets/typescript-logo.svg", "TypeScript"),
  },
  {
    name: "Tailwind",
    logo: brandLogo("/assets/tailwind-logo.svg", "Tailwind"),
  },
  { name: "Node.js", logo: brandLogo("/assets/nodejs-logo.svg", "Node.js") },
  { name: "Python", logo: brandLogo("/assets/python-logo.svg", "Python") },
  {
    name: "MongoDB",
    logo: brandLogo("/assets/mongodb-logo.svg", "MongoDB"),
  },
  { name: "SQL", logo: brandLogo("/assets/sql-logo.svg", "SQL") },
  {
    name: "OpenAI Agents SDK",
    logo: brandLogo("/assets/openai-logo.svg", "OpenAI Agents SDK"),
  },
  {
    name: "FastAPI",
    logo: brandLogo("/assets/fastapi-logo.svg", "FastAPI"),
  },
  { name: "Docker", logo: brandLogo("/assets/docker-logo.svg", "Docker") },
];

export function TechMarquee() {
  return (
    <section className="py-24 bg-surface-container-lowest overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 mb-12">
        <h3 className="font-label text-xs uppercase tracking-[0.3em] text-on-surface/40 text-center mb-8">
          Professional Tech Stack
        </h3>
      </div>

      <div className="relative">
        {/* Gradient overlays for smooth edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-surface-container-lowest to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-surface-container-lowest to-transparent z-10 pointer-events-none" />

        <InfiniteMarquee speed={40} gap={80} className="py-8">
          {technologies.map((tech) => (
            <div key={tech.name} className="flex items-center gap-4 px-8 py-4">
              <div className="size-10 flex items-center justify-center">
                {tech.logo}
              </div>
              <span className="font-headline font-extrabold text-2xl uppercase tracking-tighter text-on-surface/30">
                {tech.name}
              </span>
            </div>
          ))}
        </InfiniteMarquee>
      </div>
    </section>
  );
}
