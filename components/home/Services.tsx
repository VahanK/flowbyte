"use client"

import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"
import { Container } from "@/components/layout/Container"
import { services, type Service } from "@/lib/site-config"
import { cn, whatsappLink } from "@/lib/utils"
import { ServicePreview } from "@/components/mockups/ServicePreview"

export function Services() {
  return (
    <section id="services" className="border-t border-edge">
      <Container className="py-20 md:py-28">
        <SectionHeading
          eyebrow="What we build"
          heading="Four core service lines."
          sub="Pick the one that fits — we'll scope the exact build on a free discovery call."
        />
      </Container>

      {services.map((service, idx) => (
        <ServiceBlock
          key={service.slug}
          service={service}
          tone={idx % 2 === 0 ? "surface" : "alt"}
          align={idx % 2 === 0 ? "left" : "right"}
        />
      ))}
    </section>
  )
}

function ServiceBlock({
  service,
  tone,
  align,
}: {
  service: Service
  tone: "surface" | "alt"
  align: "left" | "right"
}) {
  const Icon = service.icon

  return (
    <div
      className={cn(
        "border-t border-edge",
        tone === "alt" ? "bg-surface-alt" : "bg-surface"
      )}
    >
      <Container className="py-20 md:py-28">
        <div
          className={cn(
            "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start",
            align === "right" && "lg:[&>*:first-child]:order-2"
          )}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="font-display text-sm font-semibold text-accent tracking-wider">
                {service.number}
              </span>
              <div className="h-px flex-1 max-w-12 bg-edge" />
              <div className="size-9 rounded-lg bg-primary text-surface flex items-center justify-center">
                <Icon className="size-4" />
              </div>
            </div>

            <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-primary mb-4">
              {service.name}
            </h3>
            <p className="text-lg text-primary/80 leading-snug mb-5">
              {service.tagline}
            </p>
            <p className="text-base text-muted leading-relaxed mb-8">
              {service.description}
            </p>

            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted mb-4">
              What&apos;s included
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-primary/85 leading-relaxed">
                  <Check className="size-4 shrink-0 mt-0.5 text-accent-2" strokeWidth={2.5} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="rounded-xl bg-surface border border-edge p-5 mb-8">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                Built for
              </h4>
              <p className="text-sm text-primary/80 leading-relaxed">
                {service.builtFor}
              </p>
            </div>

            <a
              href={whatsappLink(service.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium text-base group"
            >
              Discuss {service.name.toLowerCase()}
              <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:sticky lg:top-28"
          >
            <ServicePreview slug={service.slug} />
          </motion.div>
        </div>
      </Container>
    </div>
  )
}

function SectionHeading({
  eyebrow,
  heading,
  sub,
}: {
  eyebrow: string
  heading: string
  sub: string
}) {
  return (
    <div className="max-w-[820px]">
      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent mb-5">
        <span className="size-1.5 rounded-full bg-accent" />
        {eyebrow}
      </span>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-primary leading-[1.05] mb-5">
        {heading}
      </h2>
      <p className="text-lg md:text-xl text-muted leading-relaxed max-w-[620px]">
        {sub}
      </p>
    </div>
  )
}
