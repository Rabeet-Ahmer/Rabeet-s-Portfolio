import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  return (
    <section className="px-8 md:px-24 py-32 bg-surface-container-low rounded-t-xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
        {/* Left column */}
        <ScrollReveal animation="stagger" className="space-y-12">
          <SectionHeading size="section" color="primary-container" as="h3" className="uppercase">
            BUILDING THE
            <br />
            FUTURE.
          </SectionHeading>
          <div className="space-y-6">
            <p className="font-body text-2xl leading-relaxed text-on-surface">
              I&rsquo;m Rabeet — a full-stack developer and agentic AI engineer
              who turns complex ideas into production-ready systems.
            </p>
            <p className="font-body text-lg leading-relaxed text-on-surface-variant">
              I specialize in building scalable web applications with Next.js,
              React, and TypeScript, and architecting intelligent AI agent
              systems that automate workflows and solve real-world problems.
              Every project is an opportunity to push what&rsquo;s possible.
            </p>
          </div>
          <div className="pt-8 flex gap-4">
            <Button variant="primary">My Process</Button>
            <Button variant="secondary" className="border-on-surface-variant/20">
              Download CV
            </Button>
          </div>
        </ScrollReveal>

        {/* Right column — staggered image grid */}
        <ScrollReveal animation="stagger" staggerAmount={0.2}>
          <div className="grid grid-cols-2 gap-6 items-start">
            <div className="space-y-6 pt-12">
              {/* Image placeholder */}
              <div className="aspect-3/4 bg-surface-container rounded-lg overflow-hidden" />
              {/* Quote card */}
              <Card variant="surface" padding="default" rounding="default">
                <Badge variant="accent" className="block mb-2">
                  Philosophy
                </Badge>
                <p className="font-body text-sm italic">
                  &ldquo;Clean architecture, intelligent automation, scalable
                  solutions.&rdquo;
                </p>
              </Card>
            </div>
            <div className="space-y-6">
              {/* Stats card */}
              <Card variant="dark" padding="default" rounding="default" className="text-white">
                <span className="text-4xl font-headline font-extrabold block mb-4">
                  2+
                </span>
                <p className="font-label text-xs uppercase tracking-widest text-white/60">
                  Years Building &amp; Shipping
                </p>
              </Card>
              {/* Image placeholder */}
              <div className="aspect-square bg-surface-container rounded-lg overflow-hidden" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
