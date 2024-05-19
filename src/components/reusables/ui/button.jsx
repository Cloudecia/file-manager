import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/utils/shadcn-helper"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-[4px] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-zinc-300",
  {
    variants: {
      variant: {
        default:
          "bg-brand-500 text-brand-50 shadow hover:bg-brand-500/90 dark:bg-brand-50 dark:text-brand-900 dark:hover:bg-brand-50/90",
        destructive:
          "bg-red-500 text-brand-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-brand-50 dark:hover:bg-red-900/90",
        outline:
          "border border-brand-500 bg-transparent shadow-sm hover:bg-brand-100 hover:text-brand-900 dark:border-brand-800 dark:hover:bg-brand-800 dark:hover:text-brand-50 border-2",
        secondary:
          "bg-brand-100 text-brand-900 shadow-sm hover:bg-brand-100/80 dark:bg-brand-800 dark:text-brand-50 dark:hover:bg-brand-800/80",
        ghost: "hover:bg-brand-100 hover:text-brand-900 dark:hover:bg-brand-800 dark:hover:text-brand-50",
        link: "text-brand-900 underline-offset-4 hover:underline dark:text-brand-50",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-[4px] px-3 text-xs",
        lg: "h-10 rounded-[8px] px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
