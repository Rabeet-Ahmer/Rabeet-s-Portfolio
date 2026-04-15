import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center font-label uppercase tracking-widest",
  {
    variants: {
      variant: {
        default: "text-xs text-on-surface-variant",
        light: "text-xs text-on-primary-container",
        muted: "text-xs text-primary/60",
        accent: "text-[10px] text-primary-container font-bold",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  withLine = false,
  render,
  ...props
}: useRender.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & {
    withLine?: boolean
  }) {
  const rendered = useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  })

  if (withLine) {
    return (
      <div className="flex items-center gap-4">
        <div className="h-px w-12 bg-current opacity-40" />
        {rendered}
      </div>
    )
  }

  return rendered
}

export { Badge, badgeVariants }
