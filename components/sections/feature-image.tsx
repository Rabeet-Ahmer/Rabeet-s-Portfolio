import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";

export function FeatureImage() {
  return (
    <section className="px-8 md:px-24 py-12">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal animation="fade-in">
          <div className="relative h-[500px] md:h-[716px] w-full overflow-hidden rounded-xl bg-surface-container">
            {/* Placeholder — swap for next/image later */}
            <div className="w-full h-full bg-surface-container-highest" />

            {/* Glassmorphic overlay card */}
            <Card
              variant="glass"
              padding="default"
              rounding="default"
              className="absolute bottom-8 left-8 md:bottom-12 md:left-12 md:p-8 max-w-md"
            >
              <Badge variant="light" className="text-[10px] text-white tracking-widest mb-2">
                Featured Work
              </Badge>
              <SectionHeading as="h2" size="card" color="inherit" className="text-white tracking-tighter mb-4 uppercase">
                Rhetorich — SaaS Platform
              </SectionHeading>
              <p className="text-white/80 font-body text-sm leading-relaxed">
                An AI-powered coaching platform helping lawyers become more
                impactful communicators. Full-stack development from architecture
                to deployment.
              </p>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
