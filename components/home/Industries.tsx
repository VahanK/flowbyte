"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Container } from "@/components/layout/Container"
import { industries } from "@/lib/site-config"
import { cn } from "@/lib/utils"

export function Industries() {
  const [active, setActive] = useState("distribution")

  return (
    <section id="industries" className="bg-surface-alt border-t border-edge">
      <Container className="py-20 md:py-28">
        <div className="mb-10 max-w-[820px]">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent mb-5">
            <span className="size-1.5 rounded-full bg-accent" />
            Industries we&apos;ve built for
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-primary leading-[1.05]">
            Pick yours to see what a solution might look like.
          </h2>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {industries.map((ind) => (
            <button
              key={ind.slug}
              onClick={() => setActive(ind.slug)}
              className={cn(
                "px-4 py-2 rounded-full border text-sm font-medium transition-all",
                active === ind.slug
                  ? "bg-primary text-surface border-primary"
                  : "bg-surface text-primary border-edge hover:border-primary/40"
              )}
            >
              {ind.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {industries
            .filter((ind) => ind.slug === active)
            .map((ind) => (
              <motion.div
                key={ind.slug}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl bg-surface border border-edge p-6 md:p-10"
              >
                <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl font-semibold text-primary mb-3">
                      {ind.name}
                    </h3>
                    <p className="text-base md:text-lg text-muted leading-relaxed mb-5">
                      {ind.blurb}
                    </p>
                    <a
                      href={`#contact`}
                      className="inline-flex items-center gap-1.5 text-accent hover:text-accent/80 font-medium text-sm"
                    >
                      Discuss a build for {ind.name.toLowerCase()} →
                    </a>
                  </div>
                  <div className="hidden md:block w-[280px] aspect-[4/3] rounded-xl bg-surface-alt border border-edge relative overflow-hidden">
                    <div
                      aria-hidden
                      className="absolute inset-0 opacity-50"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 30% 30%, rgba(59,130,246,0.12), transparent 60%)",
                      }}
                    />
                    <div className="absolute inset-0 grid grid-cols-3 gap-1.5 p-4">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <div
                          key={i}
                          className="rounded bg-surface border border-edge"
                          style={{ animationDelay: `${i * 60}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </Container>
    </section>
  )
}
