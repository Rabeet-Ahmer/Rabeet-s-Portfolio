"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/animations/magnetic";

const footerLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Dribbble", href: "#" },
  { label: "Email", href: "#" },
];

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!footerRef.current) return;

      // Brand name character stagger
      gsap.from(".footer-char", {
        yPercent: 120,
        opacity: 0,
        stagger: 0.04,
        duration: 0.6,
        ease: "power4.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
      });

      // Links fade-in stagger
      gsap.set(".footer-link", { opacity: 0, y: 20 });
      gsap.to(".footer-link", {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".footer-nav",
          start: "top 90%",
        },
      });

      // Divider draw
      gsap.from(".footer-divider", {
        scaleX: 0,
        transformOrigin: "center",
        duration: 0.8,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".footer-divider",
          start: "top 95%",
        },
      });

      // Copyright fade
      gsap.from(".footer-copyright", {
        opacity: 0,
        duration: 0.6,
        delay: 0.3,
        scrollTrigger: {
          trigger: ".footer-copyright",
          start: "top 95%",
        },
      });

      // Infinite marquee
      const marquee = footerRef.current.querySelector(".footer-marquee");
      if (marquee) {
        const items = marquee.querySelectorAll(".footer-marquee-item");
        if (items.length > 0) {
          const itemWidth = (items[0] as HTMLElement).offsetWidth;
          gsap.set(marquee, { x: 0 });
          gsap.to(marquee, {
            x: -itemWidth * 2,
            duration: 20,
            ease: "none",
            repeat: -1,
            modifiers: {
              x: gsap.utils.unitize((x: number) => x % (itemWidth * 2)),
            },
          });
        }
      }
    },
    { scope: footerRef }
  );

  return (
    <footer
      ref={footerRef}
      className="w-full rounded-t-xl mt-24 bg-surface-container-lowest text-on-surface overflow-hidden"
    >
      {/* Infinite marquee */}
      <div className="footer-marquee-wrapper py-12 border-b border-on-surface/5 overflow-hidden">
        <div className="footer-marquee flex whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="footer-marquee-item font-headline font-extrabold text-[8vw] md:text-[6vw] tracking-tighter uppercase text-on-surface/5 px-8 shrink-0 select-none"
              aria-hidden={i > 0}
            >
              RABEET AHMER — DESIGN, DEVELOP & DELIVER •
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-12 py-24 flex flex-col items-center text-center">
        <div className="font-headline font-extrabold text-4xl tracking-tighter mb-8 overflow-hidden p-[0.2em] -m-[0.2em]">
          {"RABEET".split("").map((char, i) => (
            <span key={i} className="footer-char inline-block">
              {char}
            </span>
          ))}
        </div>
        <nav className="footer-nav flex flex-wrap justify-center gap-12 mb-16">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="footer-link inline-flex items-center font-body italic text-lg text-on-surface/60 hover:underline underline-offset-8 transition-all px-4 py-2"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="footer-divider h-px w-24 bg-on-surface/10 mb-8" />
        <p className="footer-copyright font-label text-xs uppercase tracking-widest opacity-50">
          &copy; 2026 Rabeet Ahmer. Crafted with Intent.
        </p>
      </div>
    </footer>
  );
}
