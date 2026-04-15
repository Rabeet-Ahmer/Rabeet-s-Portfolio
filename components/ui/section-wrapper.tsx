import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  bg?: "surface" | "surface-container" | "surface-container-low" | "primary-container" | "surface-container-lowest";
  roundedTop?: boolean;
  roundedBottom?: boolean;
  padding?: "default" | "large" | "none";
};

export function SectionWrapper({
  id,
  children,
  className,
  bg = "surface",
  roundedTop = false,
  roundedBottom = false,
  padding = "default",
}: SectionWrapperProps) {
  const bgMap = {
    surface: "bg-surface",
    "surface-container": "bg-surface-container",
    "surface-container-low": "bg-surface-container-low",
    "primary-container": "bg-primary-container text-on-primary",
    "surface-container-lowest": "bg-surface-container-lowest",
  };

  const paddingMap = {
    default: "px-8 md:px-24 py-16 md:py-32",
    large: "px-8 md:px-24 py-24 md:py-40",
    none: "",
  };

  return (
    <section
      id={id}
      className={cn(
        bgMap[bg],
        paddingMap[padding],
        roundedTop && "rounded-t-xl",
        roundedBottom && "rounded-b-xl",
        className
      )}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
