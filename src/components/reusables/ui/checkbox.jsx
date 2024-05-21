import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/utils/shadcn-helper"
import { Minus } from "lucide-react"

const Checkbox = React.forwardRef(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "group peer h-5 w-5 shrink-0 rounded-[4px] border border-brand-500 shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-white-500 data-[state=checked]:text-zinc-50  dark:border-zinc-50 dark:focus-visible:ring-zinc-300 dark:data-[state=checked]:bg-zinc-50 dark:data-[state=checked]:text-brand-500 data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground",
      className
    )}
    {...props}>
    <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center text-current")}>
      <CheckIcon className="h-4 w-4 hidden group-data-[state=checked]:block text-white group-data-[state=checked]:stroke-white group-data-[state=checked]:bg-brand-500 rounded-[4px]" />
      <Minus className="h-4 w-4 hidden group-data-[state=indeterminate]:block group-data-[state=indeterminate]:stroke-white group-data-[state=indeterminate]:bg-brand-500 rounded-[4px]" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
