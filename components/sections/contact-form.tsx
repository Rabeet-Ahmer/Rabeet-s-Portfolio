"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";

const socials = ["LinkedIn", "GitHub", "Instagram"];

export function ContactForm() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // Section clip-path reveal — circle wipe from center
      gsap.from(sectionRef.current, {
        clipPath: "inset(10% 10% 10% 10% round 3rem)",
        duration: 1.2,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // Form heading entrance
      const formTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".contact-form-content",
          start: "top 80%",
        },
      });

      formTl
        .from(".contact-form-title", {
          y: 40,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
        })
        .from(
          ".contact-form-desc",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.3"
        );

      // Input fields stagger
      ScrollTrigger.batch(".contact-input", {
        start: "top 90%",
        onEnter: (elements) => {
          gsap.from(elements, {
            y: 30,
            opacity: 0,
            stagger: 0.1,
            duration: 0.6,
            ease: "power3.out",
          });
        },
      });

      // Submit button entrance
      gsap.from(".contact-submit", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-submit",
          start: "top 95%",
        },
      });

      // Details section stagger
      gsap.from(".contact-detail", {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-details",
          start: "top 80%",
        },
      });

      // Social links stagger
      gsap.from(".contact-social", {
        x: -30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-socials",
          start: "top 85%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      className="bg-primary-container text-surface px-6 md:px-12 py-24 md:py-32 rounded-t-xl md:rounded-t-3xl"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Form */}
          <div className="contact-form-content space-y-12">
            <div className="space-y-6">
              <SectionHeading
                as="h3"
                size="subsection"
                color="surface"
                className="contact-form-title uppercase tracking-tighter"
              >
                Start a Conversation
              </SectionHeading>
              <p className="contact-form-desc font-body italic text-surface/70 text-lg">
                Tell me about your project and let&rsquo;s explore how we can
                work together.
              </p>
            </div>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="contact-input space-y-2">
                  <label className="font-label text-xs uppercase tracking-widest text-surface/50 font-bold ml-4">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Julianne Smith"
                    className="w-full bg-white/5 border-none rounded-lg p-6 text-surface placeholder:text-surface/20 focus:ring-1 focus:ring-surface/30 transition-all outline-none"
                  />
                </div>
                <div className="contact-input space-y-2">
                  <label className="font-label text-xs uppercase tracking-widest text-surface/50 font-bold ml-4">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="julianne@studio.com"
                    className="w-full bg-white/5 border-none rounded-lg p-6 text-surface placeholder:text-surface/20 focus:ring-1 focus:ring-surface/30 transition-all outline-none"
                  />
                </div>
              </div>

              <div className="contact-input space-y-2">
                <label className="font-label text-xs uppercase tracking-widest text-surface/50 font-bold ml-4">
                  Tell me about your project
                </label>
                <textarea
                  placeholder="Share your story..."
                  rows={4}
                  className="w-full bg-white/5 border-none rounded-lg p-6 text-surface placeholder:text-surface/20 focus:ring-1 focus:ring-surface/30 transition-all outline-none resize-none"
                />
              </div>

              <Button
                type="submit"
                className="contact-submit w-full md:w-auto px-12 py-6 bg-surface text-primary-container font-headline font-extrabold uppercase tracking-widest rounded-lg hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-black/20"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Details & socials */}
          <div className="contact-details flex flex-col justify-between h-full space-y-16 lg:pl-12">
            <div className="space-y-12">
              <div className="contact-detail group cursor-pointer">
                <Badge variant="light" className="font-bold mb-4 block">
                  Location
                </Badge>
                <h4 className="font-body text-3xl italic text-surface group-hover:translate-x-2 transition-transform duration-500">
                  Based in Pakistan
                  <span className="text-surface/40 not-italic font-label text-base uppercase mt-2 block">
                    Working Worldwide
                  </span>
                </h4>
              </div>
              <div className="contact-detail group cursor-pointer">
                <Badge variant="light" className="font-bold mb-4 block">
                  Direct Email
                </Badge>
                <h4 className="font-body text-3xl italic text-surface group-hover:translate-x-2 transition-transform duration-500 border-b border-surface/10 pb-4">
                  rabeet@email.com
                </h4>
              </div>
            </div>

            {/* Social links */}
            <div className="contact-socials space-y-8">
              <Badge variant="light" className="font-bold">
                Social Connection
              </Badge>
              <div className="grid grid-cols-1 gap-4">
                {socials.map((name) => (
                  <Button
                    key={name}
                    nativeButton={false}
                    className="contact-social flex items-center justify-between group py-4 px-6 rounded-full border border-white/5 text-on-primary hover:bg-white hover:text-primary-container transition-all duration-500"
                    render={<a href="#" />}
                  >
                    <span className="font-headline text-lg font-bold uppercase tracking-tighter">
                      {name}
                    </span>
                    <ArrowUpRight className="size-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
