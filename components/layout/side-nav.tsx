"use client";

import { useState, useEffect, useRef } from "react";
import { LayoutGrid, Sparkles, Archive, Mail } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "about", icon: LayoutGrid, label: "About" },
  { id: "process", icon: Sparkles, label: "Services" },
  { id: "archive", icon: Archive, label: "Archive" },
  { id: "contact", icon: Mail, label: "Contact" },
];

export function SideNav() {
  const [activeSection, setActiveSection] = useState("about");
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    for (const item of navItems) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  useGSAP(
    () => {
      if (!navRef.current) return;

      // Container entrance
      gsap.fromTo(navRef.current,
        { x: 60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, delay: 4, ease: "power3.out" }
      );

      // Stagger nav items
      const items = gsap.utils.toArray(".sidenav-item", navRef.current);
      if (items.length > 0) {
        gsap.fromTo(items,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            stagger: 0.08,
            duration: 0.4,
            delay: 4,
            ease: "back.out(2)"
          }
        );
      }
    },
    { scope: navRef }
  );

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      ref={navRef}
      className="fixed right-4 top-1/2 -translate-y-1/2 w-12 rounded-full py-4 bg-emerald-950/60 backdrop-blur-3xl shadow-2xl shadow-emerald-950/20 flex-col items-center gap-4 z-50 hidden lg:flex"
    >
      <button
        onClick={() => scrollTo("curated")}
        className="text-xs font-black text-white hover:text-white/80 transition-colors font-headline tracking-tighter uppercase cursor-pointer"
      >
        RA
      </button>
      <div className="flex flex-col items-center gap-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={cn(
                  "sidenav-item p-2 flex items-center justify-center transition-all duration-500 group relative",
                  isActive
                    ? "bg-white text-emerald-950 rounded-full scale-110"
                    : "text-white/60 hover:text-white hover:scale-105"
                )}
              >
                <Icon className="size-4" />
                {/* Spring tooltip */}
                <span className="absolute top-1/2 -translate-y-1/2 right-full mr-3 px-3 py-1.5 bg-primary-container text-white text-[10px] rounded-lg opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 ease-out font-label whitespace-nowrap pointer-events-none">
                  {item.label}
                </span>
              </button>
          );
        })}
      </div>
    </nav>
  );
}
