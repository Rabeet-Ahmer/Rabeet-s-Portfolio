import { Button } from "@/components/ui/button";

const footerLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Dribbble", href: "#" },
  { label: "Email", href: "#" },
];

export function Footer() {
  return (
    <footer className="w-full rounded-t-[3rem] mt-24 bg-surface-container-lowest text-on-surface">
      <div className="max-w-7xl mx-auto px-12 py-24 flex flex-col items-center text-center">
        <div className="font-headline font-extrabold text-4xl tracking-tighter mb-8">
          RABEET
        </div>
        <nav className="flex flex-wrap justify-center gap-12 mb-16">
          {footerLinks.map((link) => (
            <Button
              key={link.label}
              variant="link-serif"
              size="sm"
              nativeButton={false}
              className="px-0 py-0"
              render={<a href={link.href} />}
            >
              {link.label}
            </Button>
          ))}
        </nav>
        <p className="font-label text-xs uppercase tracking-widest opacity-50">
          &copy; 2024 Rabeet Ahmer. Crafted with Intent.
        </p>
      </div>
    </footer>
  );
}
