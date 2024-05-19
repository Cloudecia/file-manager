import * as React from "react"

import { cn } from "@/utils/shadcn-helper"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex h-12 w-full rounded-[4px] border border-zinc-200 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 placeholder:text-zinc-900/40 dark:placeholder:text-zinc-50 dark:focus-visible:ring-zinc-300 dark:placeholder:opacity-20",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
