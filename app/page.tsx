import { SideNav } from "@/components/layout/side-nav";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { FeatureImage } from "@/components/sections/feature-image";
import { About } from "@/components/sections/about";
import { TechMarquee } from "@/components/sections/tech-marquee";
import { BentoServices } from "@/components/sections/bento-services";
import { QuoteSection } from "@/components/sections/quote-section";
import { ProjectsHeader } from "@/components/sections/projects-header";
import { ProjectsGallery } from "@/components/sections/projects-gallery";
import { ProjectsPhilosophy } from "@/components/sections/projects-philosophy";
import { ContactHeader } from "@/components/sections/contact-header";
import { ContactForm } from "@/components/sections/contact-form";

export default function Home() {
  return (
    <>
      <SideNav />
      <main className="min-h-screen">
        <Hero />
        <FeatureImage />
        <About />
        <TechMarquee />
        <BentoServices />
        <QuoteSection />
        <ProjectsHeader />
        <ProjectsGallery />
        <ProjectsPhilosophy />
        <ContactHeader />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
