"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Container } from "@/components/layout/Container"
import { work } from "@/lib/site-config"

export function Work() {
  return (
    <section id="work" className="border-t border-edge">
      <Container className="py-20 md:py-28">
        <div className="mb-12 max-w-[820px]">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent mb-5">
            <span className="size-1.5 rounded-full bg-accent" />
            Selected work
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-primary leading-[1.05]">
            A look at what we&apos;ve built.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {work.map((w, i) => (
            <motion.div
              key={w.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl bg-surface border border-edge p-7 md:p-8 hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="aspect-[16/10] rounded-xl bg-surface-alt border border-edge mb-6 relative overflow-hidden">
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-60"
                  style={{
                    backgroundImage: `linear-gradient(135deg, rgba(59,130,246,0.06) 0%, transparent 60%), repeating-linear-gradient(90deg, transparent 0, transparent 40px, rgba(15,15,20,0.04) 40px, rgba(15,15,20,0.04) 41px)`,
                  }}
                />
                <div className="absolute inset-x-6 inset-y-8 rounded-md bg-surface border border-edge shadow-sm" />
              </div>

              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent/10 px-2 py-1 rounded">
                    {w.type}
                  </span>
                  {w.isReal && (
                    <span className="text-[10px] font-medium text-muted">Live client work</span>
                  )}
                </div>
                <ArrowUpRight className="size-4 text-muted group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>

              <h3 className="font-display text-xl md:text-2xl font-semibold text-primary mb-2">
                {w.name}
              </h3>
              <p className="text-sm md:text-base text-muted leading-relaxed mb-5">
                {w.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {w.stack.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] font-medium text-primary/70 bg-surface-alt border border-edge px-2 py-0.5 rounded"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="text-sm text-muted hover:text-primary transition-colors"
          >
            See concept builds and showcase designs →
          </a>
        </div>
      </Container>
    </section>
  )
}
