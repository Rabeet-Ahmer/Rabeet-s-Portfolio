"use client";

import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";

const socials = ["LinkedIn", "GitHub", "Instagram"];

export function ContactForm() {
  return (
    <section className="bg-primary-container text-surface px-6 md:px-12 py-24 md:py-32 rounded-t-xl md:rounded-t-3xl">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Form */}
          <div className="space-y-12">
            <div className="space-y-6">
              <SectionHeading as="h3" size="subsection" color="surface" className="uppercase tracking-tighter">
                Start a Conversation
              </SectionHeading>
              <p className="font-body italic text-surface/70 text-lg">
                Tell me about your project and let&rsquo;s explore how we can
                work together.
              </p>
            </div>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-label text-xs uppercase tracking-widest text-surface/50 font-bold ml-4">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Julianne Smith"
                    className="w-full bg-white/5 border-none rounded-lg p-6 text-surface placeholder:text-surface/20 focus:ring-1 focus:ring-surface/30 transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
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

              <div className="space-y-2">
                <label className="font-label text-xs uppercase tracking-widest text-surface/50 font-bold ml-4">
                  Tell me about your project
                </label>
                <textarea
                  placeholder="Share your story..."
                  rows={4}
                  className="w-full bg-white/5 border-none rounded-lg p-6 text-surface placeholder:text-surface/20 focus:ring-1 focus:ring-surface/30 transition-all outline-none resize-none"
                />
              </div>

              <Button variant="submit" size="lg" type="submit" className="w-full md:w-auto">
                Send Message
              </Button>
            </form>
          </div>

          {/* Details & socials */}
          <div className="flex flex-col justify-between h-full space-y-16 lg:pl-12">
            <div className="space-y-12">
              <div className="group cursor-pointer">
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
              <div className="group cursor-pointer">
                <Badge variant="light" className="font-bold mb-4 block">
                  Direct Email
                </Badge>
                <h4 className="font-body text-3xl italic text-surface group-hover:translate-x-2 transition-transform duration-500 border-b border-surface/10 pb-4">
                  rabeet@email.com
                </h4>
              </div>
            </div>

            {/* Social links */}
            <div className="space-y-8">
              <Badge variant="light" className="font-bold">
                Social Connection
              </Badge>
              <div className="grid grid-cols-1 gap-4">
                {socials.map((name) => (
                  <Button
                    key={name}
                    variant="social"
                    size="social"
                    nativeButton={false}
                    className="flex items-center justify-between group"
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
