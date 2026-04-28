"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/layout/Container"
import { WhatsAppButton } from "@/components/shared/WhatsAppButton"
import { processSteps } from "@/lib/site-config"

export function Process() {
  return (
    <section id="process" className="bg-surface-alt border-t border-edge">
      <Container className="py-20 md:py-28">
        <div className="mb-12 max-w-[820px]">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent mb-5">
            <span className="size-1.5 rounded-full bg-accent" />
            How we work
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-primary leading-[1.05]">
            Four steps from first conversation to live platform.
          </h2>
        </div>

        <ol className="grid md:grid-cols-4 gap-6">
          {processSteps.map((step, i) => (
            <motion.li
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl bg-surface border border-edge p-6 relative"
            >
              <div className="flex items-baseline justify-between mb-4">
                <span className="font-display text-3xl font-semibold text-accent">
                  {step.number}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-muted font-medium">
                  {step.duration}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold text-primary mb-2">
                {step.name}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{step.summary}</p>
            </motion.li>
          ))}
        </ol>

        <div className="mt-12 flex justify-center">
          <WhatsAppButton
            message="Hi FlowByte — I'd like to book a free discovery call."
            label="Book a free discovery call"
            size="lg"
          />
        </div>
      </Container>
    </section>
  )
}
