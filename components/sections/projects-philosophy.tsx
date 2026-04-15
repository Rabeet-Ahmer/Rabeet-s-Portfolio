import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProjectsPhilosophy() {
  return (
    <section className="px-8 md:px-24 py-24 bg-surface-container rounded-t-xl">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal animation="stagger">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Large text block */}
            <Card
              variant="surface"
              padding="lg"
              rounding="default"
              className="md:col-span-8 justify-between min-h-[360px]"
            >
              <Badge variant="muted">My Approach</Badge>
              <div>
                <SectionHeading as="h3" size="subsection" color="primary" className="mb-8">
                  Engineering with purpose, not just patterns.
                </SectionHeading>
                <p className="font-body text-xl text-on-surface-variant max-w-xl leading-relaxed">
                  The best software comes from understanding both the problem
                  and the technology deeply. Every architectural decision — from
                  data flow to AI agent orchestration — should serve the end
                  user.
                </p>
              </div>
            </Card>

            {/* Image placeholder */}
            <div className="md:col-span-4 aspect-square rounded-lg overflow-hidden group bg-surface-container-highest">
              <div className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 bg-surface-container-highest" />
            </div>

            {/* Image placeholder */}
            <div className="md:col-span-4 aspect-square rounded-lg overflow-hidden group bg-surface-container-highest order-last md:order-none">
              <div className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 bg-surface-container-highest" />
            </div>

            {/* Dark quote card */}
            <Card
              variant="dark"
              padding="lg"
              rounding="default"
              className="md:col-span-8 justify-center min-h-[240px]"
            >
              <Badge variant="light" withLine className="mb-6">
                Engineering Philosophy
              </Badge>
              <SectionHeading as="p" size="card" color="inherit">
                &ldquo;Great engineering is invisible. The user only sees
                something that just works.&rdquo;
              </SectionHeading>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
