"use client";

import { useState, useEffect } from "react";
import { LayoutGrid, Sparkles, Archive, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "curated", icon: LayoutGrid, label: "Curated" },
  { id: "process", icon: Sparkles, label: "Process" },
  { id: "archive", icon: Archive, label: "Archive" },
  { id: "contact", icon: Mail, label: "Contact" },
];

export function SideNav() {
  const [activeSection, setActiveSection] = useState("curated");

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

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed right-4 top-1/2 -translate-y-1/2 w-12 rounded-full py-4 bg-emerald-950/60 backdrop-blur-3xl shadow-2xl shadow-emerald-950/20 flex flex-col items-center gap-4 z-50 hidden lg:flex">
      <div className="text-xs font-black text-white font-headline tracking-tighter uppercase">
        RA
      </div>
      <div className="flex flex-col items-center gap-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={cn(
                "p-2 transition-all duration-500 group relative",
                isActive
                  ? "bg-white text-emerald-950 rounded-full scale-110"
                  : "text-white/60 hover:text-white hover:scale-105"
              )}
            >
              <Icon className="size-4" />
              <span className="absolute right-full mr-3 px-2 py-1 bg-primary-container text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity font-label whitespace-nowrap">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
