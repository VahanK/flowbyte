/**
 * Single source of truth for site-wide content data:
 * services, industries, work, and process steps. Pages
 * import from here so copy can be tuned in one place.
 */

import {
  Building2,
  CalendarCheck,
  ShoppingBag,
  Workflow,
  type LucideIcon,
} from "lucide-react"

export interface Service {
  number: string
  slug: string
  name: string
  tagline: string
  description: string
  features: string[]
  builtFor: string
  icon: LucideIcon
  whatsappMessage: string
}

export const services: Service[] = [
  {
    number: "01",
    slug: "b2b-platforms",
    name: "Custom B2B Platforms",
    tagline:
      "Wholesale portals, distributor portals, and operations dashboards built around how your business actually runs.",
    description:
      "Replace WhatsApp catalogs, email orders, and Excel inventory with a single platform. Your clients log in, browse with their own pricing, and place orders. Your team sees everything in real time — production, stock, fulfillment, payments.",
    features: [
      "Client portal with per-client catalogs and custom pricing",
      "Order management — place, track, fulfill, history",
      "Production tracking with stages, worker assignments, due dates",
      "Real-time inventory for raw materials and finished goods",
      "Role-based access for owners, managers, sales reps, factory staff",
      "Reports and analytics (sales by client, inventory turns, throughput)",
      "Custom CMS — add and edit products, manage clients, no developer needed",
    ],
    builtFor:
      "Manufacturers, wholesalers, distributors, importers — businesses where clients order repeatedly and the operation behind the order is complex.",
    icon: Building2,
    whatsappMessage:
      "Hi FlowByte — I'd like to discuss a custom B2B platform for my business.",
  },
  {
    number: "02",
    slug: "booking-operations",
    name: "Booking & Service Operations",
    tagline:
      "Online booking, scheduling, and customer management for service businesses.",
    description:
      "Stop running your appointments through WhatsApp and a paper calendar. Customers book online, your staff sees their schedule, customer history is one click away, and confirmations send themselves.",
    features: [
      "Online booking — customers pick service, staff member, and time",
      "Staff schedule with shift management, availability, time off",
      "Customer profiles with visit history, notes, preferences, photos",
      "Inventory tracking for products used during services",
      "Packages and memberships with multi-session deals",
      "WhatsApp automation for confirmations, reminders, follow-ups",
      "Reports: revenue per staff, popular services, no-show rates",
      "Multi-location support with one backend",
    ],
    builtFor:
      "Beauty lounges, salons, spas, dental and medical clinics, gyms, tutors, repair shops, escape rooms — any business that books client time.",
    icon: CalendarCheck,
    whatsappMessage:
      "Hi FlowByte — I'd like to discuss a booking and operations system.",
  },
  {
    number: "03",
    slug: "ecommerce",
    name: "E-Commerce Stores",
    tagline:
      "Online stores with admin dashboards and WhatsApp ordering — live in a week.",
    description:
      "A real online store, not a Shopify clone. Storefront on your own domain, admin panel built around your workflow, orders delivered to your WhatsApp. No transaction fees, no app marketplace nightmare.",
    features: [
      "Storefront on your own domain with your branding",
      "Admin panel — add products, edit prices, update stock from any browser",
      "WhatsApp checkout — orders land in your WhatsApp instantly",
      "Cart with multi-product orders",
      "Custom categories built around how you actually sell",
      "Zero transaction fees (Shopify takes 2.9% per sale; we don't)",
      "Optional product photography, setup, and onboarding",
    ],
    builtFor:
      "D2C brands, retailers, small manufacturers — anyone selling online to consumers in Lebanon and the region.",
    icon: ShoppingBag,
    whatsappMessage:
      "Hi FlowByte — I'd like to discuss an e-commerce store.",
  },
  {
    number: "04",
    slug: "internal-systems",
    name: "Internal Systems & Automation",
    tagline:
      "Dashboards and automations that take repetitive operational work off your team.",
    description:
      "The work nobody wants to do — copying data between tools, generating weekly reports, chasing approvals, manual reconciliations — automated or replaced with a single internal dashboard. If it lives in Excel today, it can live in a system tomorrow.",
    features: [
      "Internal dashboards with real-time views of operations and sales",
      "Workflow automation — approvals, notifications, status changes",
      "API integrations (accounting software, WhatsApp, email, CRMs, payments)",
      "Scheduled reports delivered automatically",
      "Data analysis pipelines from multiple sources",
      "Customer support flows with automated routing",
    ],
    builtFor:
      "Any business with operational complexity — manufacturers, distributors, service companies, agencies. Anyone with team members spending hours on repetitive work.",
    icon: Workflow,
    whatsappMessage:
      "Hi FlowByte — I'd like to discuss internal systems and automation.",
  },
]

export interface Industry {
  slug: string
  name: string
  blurb: string
  priority: boolean
}

export const industries: Industry[] = [
  { slug: "distribution", name: "Distribution / FMCG", blurb: "Per-client pricing, sales rep tools, route management.", priority: true },
  { slug: "beauty-wellness", name: "Beauty & Wellness", blurb: "Booking, customer history, staff schedules, packages.", priority: true },
  { slug: "dental-clinics", name: "Dental & Medical Clinics", blurb: "Patient records, appointments, treatment plans, recalls.", priority: true },
  { slug: "diversified-groups", name: "Diversified Groups", blurb: "Holding-level brand with subsidiary identities, unified back-end.", priority: true },
  { slug: "jewelry", name: "Jewelry", blurb: "Production tracking, stone inventory, B2B portals.", priority: false },
  { slug: "hospitality", name: "Hospitality", blurb: "Reservations, ordering, F&B operations.", priority: false },
  { slug: "food-beverage", name: "Food & Beverage", blurb: "Production, distribution, retail and HORECA channels.", priority: false },
  { slug: "logistics", name: "Logistics", blurb: "Dispatch, tracking, driver tools, customer portals.", priority: false },
  { slug: "real-estate", name: "Real Estate", blurb: "Listings, leads, agent dashboards, document workflow.", priority: false },
  { slug: "education-training", name: "Education & Training", blurb: "Course management, enrollment, scheduling, certifications.", priority: false },
  { slug: "field-services", name: "Field Services", blurb: "Job dispatch, technician routing, mobile-first tools.", priority: false },
  { slug: "auto-parts", name: "Auto Parts", blurb: "Catalogs by make/model, B2B portals, inventory ops.", priority: false },
]

export interface Work {
  name: string
  type: string
  stack: string[]
  description: string
  isReal: boolean
  href?: string
}

export const work: Work[] = [
  {
    name: "Wholesale Operations Platform",
    type: "B2B Platform",
    stack: ["Next.js", "Supabase"],
    description:
      "End-to-end wholesale portal for a MENA jewelry manufacturer. Per-client catalogs, real-time inventory, production tracking, custom CMS.",
    isReal: false,
  },
  {
    name: "Cross-Region Corporate Site",
    type: "Corporate Site",
    stack: ["Next.js"],
    description:
      "Multi-page corporate site for a regional training and consultancy firm operating across MENA.",
    isReal: false,
  },
]

export interface ProcessStep {
  number: string
  name: string
  duration: string
  summary: string
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    name: "Discovery",
    duration: "Free 30-min call",
    summary:
      "We map your workflow, understand your operation, and identify what to build.",
  },
  {
    number: "02",
    name: "Scope",
    duration: "3–5 days",
    summary:
      "Detailed proposal with timeline, milestones, and price. No surprises later.",
  },
  {
    number: "03",
    name: "Build",
    duration: "1–4 weeks",
    summary:
      "Design, code, deploy. You see weekly progress, give feedback, course-correct as we go.",
  },
  {
    number: "04",
    name: "Launch & Support",
    duration: "Ongoing",
    summary:
      "Training, handover, and ongoing support. Your platform grows with your business.",
  },
]
