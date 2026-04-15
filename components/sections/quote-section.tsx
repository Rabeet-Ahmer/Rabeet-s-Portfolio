import { Quote } from "lucide-react";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

export function QuoteSection() {
  return (
    <section className="py-32 bg-primary-container text-white overflow-hidden relative">
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent,transparent)]" />
      </div>

      <ScrollReveal
        animation="fade-in"
        className="max-w-5xl mx-auto px-8 text-center relative z-10"
      >
        <Quote className="size-16 mb-12 opacity-40 mx-auto" fill="currentColor" strokeWidth={0} />
        <blockquote className="font-body text-3xl md:text-5xl lg:text-6xl italic leading-tight mb-12">
          &ldquo;I don&rsquo;t just write code — I architect systems that
          think, scale, and solve real problems.&rdquo;
        </blockquote>
        <cite className="font-label text-sm uppercase tracking-[0.4em] text-white/50 not-italic">
          — Rabeet Ahmer
        </cite>
      </ScrollReveal>
    </section>
  );
}
