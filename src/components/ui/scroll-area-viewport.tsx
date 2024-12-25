import * as React from "react"
import { cn } from "@/lib/utils"

interface ScrollAreaViewportProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function ScrollAreaViewport({ className, children, ...props }: ScrollAreaViewportProps) {
  return (
    <div className={cn("h-full w-full rounded-[inherit]", className)} {...props}>
      {children}
    </div>
  )
} 