import { SideNav } from "@/components/layout/SideNav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { FeatureImage } from "@/components/sections/FeatureImage";
import { About } from "@/components/sections/About";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { BentoServices } from "@/components/sections/BentoServices";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { ProjectsHeader } from "@/components/sections/ProjectsHeader";
import { ProjectsGallery } from "@/components/sections/ProjectsGallery";
import { ProjectsPhilosophy } from "@/components/sections/ProjectsPhilosophy";
import { ContactHeader } from "@/components/sections/ContactHeader";
import { ContactForm } from "@/components/sections/ContactForm";

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
