"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"
import { Container } from "@/components/layout/Container"
import { cn } from "@/lib/utils"

interface FaqItem {
  q: string
  a: string
}

const faqs: FaqItem[] = [
  {
    q: "How much does it cost?",
    a: "Project-based, with a one-time setup fee plus a monthly subscription that covers hosting and ongoing support. E-commerce stores start around $150 setup + $25/month. Custom B2B platforms and internal systems are scoped on a discovery call — typically $500–$5,000 setup with $75–$500/month recurring depending on complexity.",
  },
  {
    q: "How long does a build take?",
    a: "E-commerce stores go live in about a week. Booking systems take 1–2 weeks. Custom B2B platforms run 2–4 weeks depending on scope. Internal dashboards and automations land in 1–3 weeks. We give you a firm timeline in the proposal — no rolling deadlines.",
  },
  {
    q: "Why not just use Shopify, WordPress, or foreign software?",
    a: "Templates work until they don't. They charge per transaction, force your workflow to match theirs, and the app marketplace gets expensive fast. We build around how your business actually runs, your data stays yours, and the monthly cost is predictable. For specialized verticals — clinics, distributors, manufacturers — local-built means Arabic support, WhatsApp ordering, and Lebanese payment realities baked in.",
  },
  {
    q: "Do I pay everything upfront?",
    a: "No. Half on signing to start the build, half on launch. For longer engagements we milestone the payments so you only pay for what's been delivered.",
  },
  {
    q: "What happens after launch?",
    a: "We don't disappear. Training for your team, then ongoing support via WhatsApp. Monthly check-ins to see what else you need. Small tweaks are usually included; bigger features get scoped separately.",
  },
  {
    q: "Will I be locked into working with you?",
    a: "No. The code is yours. The data is yours. If we ever stop working together, you get full handoff and documentation. We earn the relationship every month.",
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-surface-alt border-t border-edge">
      <Container className="py-20 md:py-28">
        <div className="mb-12 max-w-[820px]">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent mb-5">
            <span className="size-1.5 rounded-full bg-accent" />
            Common questions
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-primary leading-[1.05]">
            Things business owners usually ask first.
          </h2>
        </div>

        <div className="max-w-[820px] divide-y divide-edge border-y border-edge">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div key={faq.q} className="bg-surface">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-start justify-between gap-6 text-left py-5 md:py-6 px-5 md:px-6 hover:bg-surface-alt transition-colors group"
                >
                  <span className="font-display text-lg md:text-xl font-semibold text-primary leading-snug">
                    {faq.q}
                  </span>
                  <Plus
                    className={cn(
                      "size-5 shrink-0 mt-0.5 text-muted transition-transform duration-300",
                      isOpen && "rotate-45 text-accent"
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 md:px-6 pb-6 text-base text-muted leading-relaxed max-w-[680px]">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
