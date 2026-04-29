"use client"

import { cn } from "@/lib/utils"

type ConceptType = "website" | "wholesale" | "booking" | "clinic"

export function ConceptThumbnail({ type }: { type: ConceptType }) {
  switch (type) {
    case "website":
      return <WebsiteThumb />
    case "wholesale":
      return <WholesaleThumb />
    case "booking":
      return <BookingThumb />
    case "clinic":
      return <ClinicThumb />
  }
}

function ThumbFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute inset-3 rounded-lg bg-surface border border-edge shadow-sm overflow-hidden flex flex-col">
      <div className="px-3 py-2 border-b border-edge bg-surface-alt flex items-center gap-1.5 shrink-0">
        <div className="size-1.5 rounded-full bg-edge" />
        <div className="size-1.5 rounded-full bg-edge" />
        <div className="size-1.5 rounded-full bg-edge" />
      </div>
      <div className="flex-1 p-2.5 min-h-0 overflow-hidden">{children}</div>
    </div>
  )
}

/* ─── Website: brand site landing ─── */
function WebsiteThumb() {
  return (
    <ThumbFrame>
      <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-edge">
        <div className="flex items-center gap-1">
          <div className="size-2.5 rounded bg-primary" />
          <span className="text-[7px] font-semibold text-primary">YourBrand</span>
        </div>
        <div className="flex items-center gap-1.5 text-[6px] text-muted">
          <span>About</span>
          <span>Work</span>
          <span className="px-1 py-0.5 rounded bg-primary text-surface text-[5px] font-medium">
            Quote
          </span>
        </div>
      </div>
      <div className="mb-2">
        <span className="text-[6px] font-semibold uppercase tracking-wider text-accent">
          Architecture
        </span>
        <h5 className="font-display text-[10px] font-semibold text-primary leading-[1.05] mt-0.5 mb-1.5 tracking-tight">
          Spaces that tell <span className="text-accent">your story</span>.
        </h5>
        <div className="flex items-center gap-1">
          <span className="text-[6px] px-1.5 py-0.5 rounded bg-primary text-surface font-medium">
            View
          </span>
          <span className="text-[6px] px-1.5 py-0.5 rounded border border-edge text-primary font-medium">
            Contact
          </span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-0.5">
        <div className="aspect-[4/3] rounded-sm bg-warning/15 border border-edge" />
        <div className="aspect-[4/3] rounded-sm bg-accent/12 border border-edge" />
        <div className="aspect-[4/3] rounded-sm bg-accent-2/12 border border-edge" />
      </div>
    </ThumbFrame>
  )
}

/* ─── Wholesale: stages + active orders ─── */
function WholesaleThumb() {
  const stages = [
    { name: "Casting", count: 8, dot: "bg-warning" },
    { name: "Polishing", count: 5, dot: "bg-accent" },
    { name: "QA", count: 3, dot: "bg-accent-2" },
  ]
  const orders = [
    { id: "ORD-1042", item: "18k Hoops", stage: "Polishing" },
    { id: "ORD-1041", item: "Pendant", stage: "QA" },
    { id: "ORD-1040", item: "Bracelet", stage: "Casting" },
  ]

  return (
    <ThumbFrame>
      <div className="flex items-center justify-between mb-2">
        <span className="text-[9px] font-semibold text-primary">Production · Today</span>
        <span className="text-[8px] font-mono text-muted">16 active</span>
      </div>
      <div className="grid grid-cols-3 gap-1 mb-2">
        {stages.map((s) => (
          <div key={s.name} className="rounded border border-edge bg-surface-alt px-1.5 py-1">
            <div className="flex items-center gap-1 mb-0.5">
              <span className={cn("size-1.5 rounded-full", s.dot)} />
              <span className="text-[7px] uppercase tracking-wider text-muted truncate">{s.name}</span>
            </div>
            <span className="font-display text-sm font-semibold text-primary leading-none">{s.count}</span>
          </div>
        ))}
      </div>
      <div className="space-y-1">
        {orders.map((o) => (
          <div
            key={o.id}
            className="flex items-center gap-1.5 bg-surface rounded px-1.5 py-1 border border-edge text-[8px]"
          >
            <span className="font-mono text-muted">{o.id}</span>
            <span className="text-primary truncate">{o.item}</span>
            <span className="ml-auto text-muted">{o.stage}</span>
          </div>
        ))}
      </div>
    </ThumbFrame>
  )
}

/* ─── Booking: today's appointments ─── */
function BookingThumb() {
  const slots = [
    { time: "10:00", name: "Rana A.", svc: "Manicure", staff: "Sara", color: "border-accent/40 bg-accent/10" },
    { time: "11:30", name: "Layla H.", svc: "Hair Color", staff: "Mira", color: "border-warning/40 bg-warning/10" },
    { time: "13:00", name: "Rita G.", svc: "Facial", staff: "Lina", color: "border-accent-2/40 bg-accent-2/10" },
    { time: "14:30", name: "Maya N.", svc: "Brows", staff: "Yara", color: "border-edge bg-surface-alt" },
  ]
  return (
    <ThumbFrame>
      <div className="flex items-center justify-between mb-2">
        <div>
          <span className="text-[9px] font-semibold text-primary block leading-tight">Today · Apr 28</span>
          <span className="text-[8px] text-muted">14 appointments</span>
        </div>
        <span className="text-[7px] px-1.5 py-0.5 rounded-full bg-accent-2/15 text-accent-2 font-semibold flex items-center gap-1">
          <span className="size-1 rounded-full bg-accent-2 animate-pulse" />
          Live
        </span>
      </div>
      <div className="space-y-1">
        {slots.map((s) => (
          <div
            key={s.time}
            className={cn("flex items-center gap-2 rounded px-1.5 py-1 border text-[8px]", s.color)}
          >
            <span className="font-mono text-muted shrink-0 w-8">{s.time}</span>
            <span className="font-semibold text-primary truncate">{s.name}</span>
            <span className="text-muted truncate">{s.svc}</span>
            <span className="ml-auto text-[7px] text-muted shrink-0">{s.staff}</span>
          </div>
        ))}
      </div>
    </ThumbFrame>
  )
}

/* ─── Clinic: today's schedule ─── */
function ClinicThumb() {
  const visits = [
    { time: "09:00", patient: "R. Akl", treatment: "Cleaning", doc: "Dr. M", status: "done" as const },
    { time: "10:30", patient: "T. Saad", treatment: "Filling", doc: "Dr. K", status: "active" as const },
    { time: "11:30", patient: "L. Nasr", treatment: "Crown · Phase 2", doc: "Dr. M", status: "next" as const },
    { time: "14:00", patient: "M. Hage", treatment: "6-mo recall", doc: "Dr. K", status: "next" as const },
  ]
  const statusStyle: Record<typeof visits[number]["status"], string> = {
    done: "bg-edge text-muted",
    active: "bg-accent text-surface",
    next: "bg-surface border border-edge text-muted",
  }
  const statusLabel: Record<typeof visits[number]["status"], string> = {
    done: "✓",
    active: "●",
    next: "○",
  }

  return (
    <ThumbFrame>
      <div className="flex items-center justify-between mb-2">
        <div>
          <span className="text-[9px] font-semibold text-primary block leading-tight">Today · 3 doctors</span>
          <span className="text-[8px] text-muted">12 patients · 4 treatments</span>
        </div>
      </div>
      <div className="space-y-1">
        {visits.map((v) => (
          <div
            key={v.time}
            className="flex items-center gap-1.5 bg-surface rounded px-1.5 py-1 border border-edge text-[8px]"
          >
            <span
              className={cn(
                "size-3.5 rounded-full flex items-center justify-center text-[7px] shrink-0",
                statusStyle[v.status]
              )}
            >
              {statusLabel[v.status]}
            </span>
            <span className="font-mono text-muted shrink-0">{v.time}</span>
            <span className="font-semibold text-primary truncate">{v.patient}</span>
            <span className="text-muted truncate">{v.treatment}</span>
            <span className="ml-auto text-[7px] text-muted shrink-0">{v.doc}</span>
          </div>
        ))}
      </div>
    </ThumbFrame>
  )
}
