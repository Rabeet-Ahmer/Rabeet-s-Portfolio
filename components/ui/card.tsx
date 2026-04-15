import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const cardVariants = cva("flex flex-col overflow-hidden", {
  variants: {
    variant: {
      surface: "bg-surface-container-lowest",
      muted: "bg-surface-container",
      dark: "bg-primary-container text-on-primary",
      glass: "backdrop-blur-md bg-white/10",
    },
    padding: {
      default: "p-6",
      lg: "p-12",
      none: "",
    },
    rounding: {
      default: "rounded-lg",
      xl: "rounded-xl",
      none: "",
    },
    interactive: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      variant: "surface",
      interactive: true,
      className:
        "group transition-all duration-500 hover:bg-primary-container hover:text-white",
    },
    {
      variant: "muted",
      interactive: true,
      className: "hover:scale-[1.02] transition-transform",
    },
  ],
  defaultVariants: {
    variant: "surface",
    padding: "default",
    rounding: "default",
    interactive: false,
  },
})

function Card({
  className,
  variant,
  padding,
  rounding,
  interactive,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof cardVariants>) {
  return (
    <div
      data-slot="card"
      className={cn(
        cardVariants({ variant, padding, rounding, interactive, className })
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn("flex flex-col gap-1.5", className)}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("font-heading font-medium", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="card-content" className={cn(className)} {...props} />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  cardVariants,
}
