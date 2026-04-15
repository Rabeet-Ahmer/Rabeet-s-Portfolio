import { Code, Bot, Server, Workflow } from "lucide-react";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

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
      "Architecting robust REST and GraphQL APIs, databases, and server infrastructure that scales.",
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
  return (
    <section id="process" className="px-8 md:px-24 py-32 bg-surface">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal animation="fade-up" className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <SectionHeading size="section" color="primary-container">
            WHAT
            <br />
            I DO.
          </SectionHeading>
          <p className="font-body text-xl max-w-sm italic text-on-surface-variant">
            Turning ideas into scalable, production-ready software and
            intelligent AI systems.
          </p>
        </ScrollReveal>

        <ScrollReveal animation="stagger">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  variant={service.variant}
                  interactive={service.interactive}
                  padding="lg"
                  rounding="xl"
                  className={`${service.span} flex-col justify-between min-h-[280px]`}
                >
                  <Icon className="size-10 mb-12" strokeWidth={1.5} />
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
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
