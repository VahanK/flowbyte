"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/layout/Container"
import { Button } from "@/components/ui/Button"
import { mailtoLink } from "@/lib/utils"

export function Hero() {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative overflow-hidden">
      <BackgroundField />

      <Container className="relative z-10 pt-24 pb-24 md:pt-36 md:pb-36">
        <div className="max-w-[820px]">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-semibold leading-[1.02] tracking-tight text-primary"
          >
            Custom platforms for{" "}
            <span className="text-accent">Lebanese businesses.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-[600px] text-lg md:text-xl text-muted leading-relaxed"
          >
            Wholesale portals, booking systems, e-commerce, internal dashboards
            — designed around your workflow, shipped in weeks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col sm:flex-row gap-3"
          >
            <Button variant="primary" size="xl" onClick={scrollToServices}>
              Explore services
              <ArrowRight className="size-4" />
            </Button>
            <a href={mailtoLink("FlowByte — interested in working together")}>
              <Button variant="secondary" size="xl">
                Get in touch
              </Button>
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-sm text-muted"
          >
            We reply within 4 hours, Monday to Saturday.
          </motion.p>
        </div>
      </Container>
    </section>
  )
}

function BackgroundField() {
  return (
    <>
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.6]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 0%, rgba(59,130,246,0.08), transparent 45%), radial-gradient(circle at 90% 30%, rgba(16,185,129,0.05), transparent 50%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0F0F14 1px, transparent 1px), linear-gradient(to bottom, #0F0F14 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
    </>
  )
}
