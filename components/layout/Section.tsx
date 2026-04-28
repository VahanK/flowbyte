import { cn } from "@/lib/utils"
import type { HTMLAttributes } from "react"

interface SectionProps extends HTMLAttributes<HTMLElement> {
  tone?: "surface" | "alt" | "ink"
  pad?: "default" | "compact" | "loose"
}

const padMap = {
  compact: "py-12 md:py-16",
  default: "py-16 md:py-24",
  loose: "py-20 md:py-32",
}

const toneMap = {
  surface: "bg-surface text-primary",
  alt: "bg-surface-alt text-primary",
  ink: "bg-primary text-surface",
}

export function Section({
  tone = "surface",
  pad = "default",
  className,
  children,
  ...rest
}: SectionProps) {
  return (
    <section
      className={cn(toneMap[tone], padMap[pad], "relative", className)}
      {...rest}
    >
      {children}
    </section>
  )
}
