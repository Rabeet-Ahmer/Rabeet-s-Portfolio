import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProjectsHeader() {
  return (
    <section id="archive" className="px-8 pt-32 pb-12 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
        <ScrollReveal animation="stagger">
          <Badge variant="default" className="tracking-[0.2em] mb-4 block">
            Selected Work — 2024
          </Badge>
          <SectionHeading size="display" color="primary">
            Recent
            <br />
            Projects.
          </SectionHeading>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={0.2} className="max-w-md">
          <p className="font-body italic text-xl text-on-surface-variant leading-relaxed">
            A curated selection of projects where design thinking meets
            technical execution. Each one tells a story of collaboration and
            craft.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
