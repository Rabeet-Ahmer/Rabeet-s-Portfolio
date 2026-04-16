import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const sectionHeadingVariants = cva("font-headline font-extrabold", {
  variants: {
    size: {
      display: "text-6xl md:text-8xl editorial-title leading-none",
      section: "text-5xl md:text-7xl tracking-tighter leading-none",
      subsection: "text-4xl md:text-5xl tracking-tight leading-tight",
      card: "text-2xl md:text-3xl tracking-tight",
    },
    color: {
      primary: "text-primary",
      "primary-container": "text-primary-container",
      surface: "text-surface",
      inherit: "",
    },
  },
  defaultVariants: {
    size: "section",
    color: "primary",
  },
})

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "p"

function SectionHeading({
  className,
  size,
  color,
  as: Tag = "h2",
  ...props
}: React.ComponentProps<"h2"> &
  VariantProps<typeof sectionHeadingVariants> & {
    as?: HeadingTag
  }) {
  return (
    <Tag
      data-slot="section-heading"
      className={cn(sectionHeadingVariants({ size, color, className }))}
      {...props}
    />
  )
}

export { SectionHeading, sectionHeadingVariants }
