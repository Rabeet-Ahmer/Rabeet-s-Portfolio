import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";

export function ContactHeader() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <ScrollReveal className="md:col-span-7" animation="stagger">
          <Badge variant="light" className="text-sm font-bold tracking-[0.2em] mb-6 block">
            Let&rsquo;s Connect
          </Badge>
          <SectionHeading size="display" color="primary" className="mb-8">
            Have a project in{" "}
            <br />
            <span className="italic font-body font-normal text-primary/80">
              mind?
            </span>
          </SectionHeading>
          <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-xl leading-relaxed">
            Open to full-time roles, freelance projects, and collaborations
            in web development and AI. Let&rsquo;s build something that matters.
          </p>
        </ScrollReveal>

        <ScrollReveal
          className="md:col-span-5 flex items-end justify-start md:justify-end"
          animation="fade-up"
          delay={0.3}
        >
          {/* Image placeholder with tilt */}
          <div className="w-full h-80 rounded-xl overflow-hidden rotate-2 hover:rotate-0 transition-transform duration-700 bg-surface-container" />
        </ScrollReveal>
      </div>
    </section>
  );
}
