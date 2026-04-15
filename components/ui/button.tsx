import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap select-none transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-container text-on-primary font-label text-sm uppercase tracking-widest rounded-full hover:scale-105 transition-transform duration-300",
        secondary:
          "bg-transparent text-primary font-label text-sm uppercase tracking-widest rounded-full border border-outline-variant/20 hover:bg-surface-container transition-colors duration-300",
        submit:
          "bg-surface text-primary-container font-headline font-extrabold uppercase tracking-widest rounded-lg hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-black/20",
        social:
          "rounded-full border border-white/5 text-on-primary hover:bg-white hover:text-primary-container font-headline font-bold uppercase tracking-tighter transition-all duration-500",
        ghost:
          "hover:bg-muted hover:text-foreground transition-colors",
        "link-serif":
          "font-body italic text-lg text-on-surface/60 hover:underline underline-offset-8 transition-all",
        "link-sans":
          "font-label uppercase tracking-widest text-sm text-on-surface/60 hover:underline underline-offset-8 transition-all",
      },
      size: {
        default: "px-10 py-5",
        sm: "px-6 py-3",
        lg: "px-12 py-6",
        social: "py-4 px-6",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
