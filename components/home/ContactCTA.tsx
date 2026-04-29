"use client"

import { motion } from "framer-motion"
import { Mail } from "lucide-react"
import { Container } from "@/components/layout/Container"
import { Button } from "@/components/ui/Button"
import { CONTACT_EMAIL, mailtoLink } from "@/lib/utils"

export function ContactCTA() {
  return (
    <section id="contact" className="bg-primary text-surface border-t border-primary/50 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(59,130,246,0.4), transparent 50%), radial-gradient(circle at 20% 80%, rgba(16,185,129,0.2), transparent 50%)",
        }}
      />
      <Container className="py-24 md:py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[760px]"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] mb-5">
            Tell us what you have in mind.
          </h2>
          <p className="text-lg md:text-xl text-surface/70 leading-relaxed mb-10 max-w-[560px]">
            We reply within 4 hours, Monday to Saturday. Free 30-minute
            discovery call to see if we&apos;re a fit — no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 items-start">
            <a
              href={mailtoLink(
                "FlowByte — interested in working together",
              )}
            >
              <Button
                variant="primary"
                size="xl"
                className="bg-surface text-primary hover:bg-surface/90"
              >
                <Mail className="size-4" />
                Email us
              </Button>
            </a>
            <span className="text-sm text-surface/60 sm:ml-2 sm:self-center">
              {CONTACT_EMAIL}
            </span>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
