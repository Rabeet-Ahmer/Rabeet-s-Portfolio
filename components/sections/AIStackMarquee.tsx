"use client";

import { ReactNode } from "react";
import { Sparkles } from "lucide-react";
import { InfiniteMarquee } from "@/components/animations/InfiniteMarquee";

// Brand logos are full-color marks with baked-in fills/gradients, so they are
// rendered from /public/assets via <img> to preserve their colors.
// Stitch 2.0 has no brand SVG yet, so it keeps the temporary <Sparkles />
// placeholder until one is added.
const brandLogo = (src: string, name: string): ReactNode => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src={src}
    alt={`${name} logo`}
    className="size-8 object-contain"
  />
);

const aiTools: { name: string; logo: ReactNode }[] = [
  {
    name: "Claude Code",
    logo: brandLogo("/assets/claudecode-logo.svg", "Claude Code"),
  },
  {
    name: "Antigravity",
    logo: brandLogo("/assets/antigravity-logo.svg", "Antigravity"),
  },
  { name: "Cursor", logo: brandLogo("/assets/cursor-logo.svg", "Cursor") },
  {
    name: "Gemini CLI",
    logo: brandLogo("/assets/geminicli-logo.svg", "Gemini CLI"),
  },
  {
    name: "Stitch 2.0",
    logo: <Sparkles className="size-8" strokeWidth={1.5} />,
  },
  { name: "Gordon", logo: brandLogo("/assets/gordon-logo.svg", "Gordon") },
  { name: "Jules", logo: brandLogo("/assets/jules-logo.svg", "Jules") },
  {
    name: "CodeRabbit",
    logo: brandLogo("/assets/coderabbit-logo.svg", "CodeRabbit"),
  },
  { name: "n8n", logo: brandLogo("/assets/n8n-logo.svg", "n8n") },
];

export function AIStackMarquee() {
  return (
    <section className="pt-0 pb-24 bg-surface-container-lowest overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 mb-12">
        <h3 className="font-label text-xs uppercase tracking-[0.3em] text-on-surface/40 text-center mb-8">
          AI-Native Toolkit
        </h3>
      </div>

      <div className="relative">
        {/* Gradient overlays for smooth edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-surface-container-lowest to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-surface-container-lowest to-transparent z-10 pointer-events-none" />

        <InfiniteMarquee speed={40} gap={80} direction="right" className="py-8">
          {aiTools.map((tool) => (
            <div key={tool.name} className="flex items-center gap-4 px-8 py-4">
              <div className="size-10 flex items-center justify-center">
                {tool.logo}
              </div>
              <span className="font-headline font-extrabold text-2xl uppercase tracking-tighter text-on-surface/30">
                {tool.name}
              </span>
            </div>
          ))}
        </InfiniteMarquee>
      </div>
    </section>
  );
}
