"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/layout/Container"
import { ConceptThumbnail } from "@/components/mockups/ConceptThumbnail"
import { cn } from "@/lib/utils"

interface ConceptBuild {
  name: string
  type: string
  stack: string[]
  description: string
  accent: "neutral" | "blue" | "amber" | "green"
  thumb: "website" | "wholesale" | "booking" | "clinic"
}

const concepts: ConceptBuild[] = [
  {
    name: "Architecture Studio Site",
    type: "Brand Website",
    stack: ["Next.js", "Vercel"],
    description:
      "Editorial brand site for a boutique architecture studio — typographic hero, project portfolio with case studies, simple CMS for the team to add new work without a developer.",
    accent: "neutral",
    thumb: "website",
  },
  {
    name: "Wholesale Operations Portal",
    type: "B2B Platform",
    stack: ["Next.js", "Postgres"],
    description:
      "Per-client catalogs with custom pricing, real-time inventory, sales-rep tools, and a production board with stages and worker assignments.",
    accent: "blue",
    thumb: "wholesale",
  },
  {
    name: "Beauty Lounge Operations",
    type: "Booking System",
    stack: ["Next.js", "Postgres"],
    description:
      "Multi-staff booking calendar, customer profiles with visit history, packages and memberships, WhatsApp confirmations and reminders.",
    accent: "amber",
    thumb: "booking",
  },
  {
    name: "Clinic Management",
    type: "Internal System",
    stack: ["Next.js", "Postgres"],
    description:
      "Patient records with treatment timelines, multi-doctor calendar, treatment plans with insurance coverage, recall reminders, and consumables inventory.",
    accent: "green",
    thumb: "clinic",
  },
]

const accentMap = {
  neutral: "from-edge/30 to-transparent",
  blue: "from-accent/8 to-transparent",
  amber: "from-warning/8 to-transparent",
  green: "from-accent-2/10 to-transparent",
}

const dotMap = {
  neutral: "bg-primary",
  blue: "bg-accent",
  amber: "bg-warning",
  green: "bg-accent-2",
}

export function Work() {
  return (
    <section id="work" className="border-t border-edge bg-surface">
      <Container className="py-20 md:py-28">
        <div className="mb-12 max-w-[820px]">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent mb-5">
            <span className="size-1.5 rounded-full bg-accent" />
            Concept showcases
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-primary leading-[1.05] mb-4">
            What a finished build looks like.
          </h2>
          <p className="italic text-muted text-base md:text-lg leading-relaxed max-w-[640px]">
            Concept builds we&apos;ve designed to demonstrate what we deliver
            in these spaces. Adapt to your brand and workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {concepts.map((concept, i) => (
            <motion.article
              key={concept.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl bg-surface border border-edge overflow-hidden hover:border-primary/30 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div
                className={cn(
                  "aspect-[16/10] relative overflow-hidden bg-gradient-to-br",
                  accentMap[concept.accent]
                )}
              >
                <ConceptThumbnail type={concept.thumb} />
                <div className="absolute top-2 right-2 flex items-center gap-1 z-10">
                  <span className={cn("size-1.5 rounded-full", dotMap[concept.accent])} />
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-muted bg-surface/80 backdrop-blur-sm px-1.5 py-0.5 rounded">
                    Concept
                  </span>
                </div>
              </div>

              <div className="p-6">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent/10 px-2 py-1 rounded">
                  {concept.type}
                </span>
                <h3 className="font-display text-xl font-semibold text-primary mt-3 mb-2">
                  {concept.name}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-5">
                  {concept.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {concept.stack.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] font-medium text-primary/70 bg-surface-alt border border-edge px-2 py-0.5 rounded"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  )
}
