"use client"

import { cn } from "@/lib/utils"

interface ServicePreviewProps {
  slug: string
}

export function ServicePreview({ slug }: ServicePreviewProps) {
  switch (slug) {
    case "b2b-platforms":
      return <B2BPreview />
    case "booking-operations":
      return <BookingPreview />
    case "ecommerce":
      return <EcommercePreview />
    case "internal-systems":
      return <InternalPreview />
    default:
      return <PreviewFrame title="Preview" url="dashboard.flowbyte.studio">
        <div className="text-sm text-muted">Mockup coming soon.</div>
      </PreviewFrame>
  }
}

function PreviewFrame({
  url,
  title,
  children,
}: {
  url: string
  title?: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-2xl bg-surface border border-edge shadow-xl shadow-primary/5 overflow-hidden">
      <div className="px-4 py-3 border-b border-edge bg-surface-alt flex items-center gap-2.5">
        <div className="flex gap-1.5">
          <div className="size-2.5 rounded-full bg-edge" />
          <div className="size-2.5 rounded-full bg-edge" />
          <div className="size-2.5 rounded-full bg-edge" />
        </div>
        <div className="flex-1 mx-auto max-w-[340px] bg-surface rounded px-3 py-1 text-xs text-muted font-mono truncate text-center">
          {url}
        </div>
        {title && <span className="text-[10px] text-muted">{title}</span>}
      </div>
      <div className="p-5">{children}</div>
    </div>
  )
}

/* ─── B2B Production Board ─── */

function B2BPreview() {
  const stages = [
    { name: "Order received", count: 12, accent: "bg-edge" },
    { name: "Casting", count: 8, accent: "bg-warning/30" },
    { name: "Polishing", count: 5, accent: "bg-accent/30" },
    { name: "QA", count: 3, accent: "bg-accent-2/30" },
  ]

  const orders = [
    { id: "GJ-1042", client: "Mira Atelier", item: "18k Hoop Earrings", stage: "Polishing", due: "Apr 30", urgent: false },
    { id: "GJ-1041", client: "Beirut Gold Co.", item: "Diamond Pendant", stage: "QA", due: "Apr 29", urgent: true },
    { id: "GJ-1040", client: "Saifi Jewelers", item: "Tennis Bracelet", stage: "Casting", due: "May 02", urgent: false },
    { id: "GJ-1039", client: "Mira Atelier", item: "Signet Ring (×6)", stage: "Casting", due: "May 04", urgent: false },
  ]

  return (
    <PreviewFrame url="portal.gjstyle.com/admin">
      <div className="space-y-4">
        <div>
          <h4 className="font-display text-base font-semibold text-primary mb-3">Production board</h4>
          <div className="grid grid-cols-4 gap-2">
            {stages.map((s) => (
              <div
                key={s.name}
                className={cn(
                  "rounded-lg p-3 border border-edge bg-surface-alt"
                )}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className={cn("size-2 rounded-full", s.accent)} />
                  <span className="text-[10px] uppercase tracking-wider text-muted truncate">{s.name}</span>
                </div>
                <span className="font-display text-2xl font-semibold text-primary">{s.count}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted">Active orders</h4>
            <span className="text-[10px] text-accent">View all</span>
          </div>
          <div className="rounded-lg border border-edge overflow-hidden">
            {orders.map((o, i) => (
              <div
                key={o.id}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 text-xs",
                  i !== orders.length - 1 && "border-b border-edge"
                )}
              >
                <span className="font-mono text-muted shrink-0">{o.id}</span>
                <span className="font-medium text-primary truncate">{o.client}</span>
                <span className="text-muted truncate hidden sm:inline">{o.item}</span>
                <span className="ml-auto flex items-center gap-2 shrink-0">
                  <span className="text-muted">{o.stage}</span>
                  <span
                    className={cn(
                      "px-1.5 py-0.5 rounded text-[10px] font-medium",
                      o.urgent
                        ? "bg-warning/15 text-warning"
                        : "bg-surface-alt text-muted"
                    )}
                  >
                    {o.due}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PreviewFrame>
  )
}

/* ─── Booking Calendar ─── */

function BookingPreview() {
  const staff = ["Sara", "Mira", "Lina", "Yara"]
  const slots = [
    { row: 0, col: 0, name: "Rana A.", service: "Manicure", color: "bg-accent/15 text-accent border-accent/30" },
    { row: 0, col: 2, name: "Layla H.", service: "Hair Color", color: "bg-warning/15 text-warning border-warning/40" },
    { row: 1, col: 1, name: "Rita G.", service: "Facial", color: "bg-accent-2/15 text-accent-2 border-accent-2/40" },
    { row: 2, col: 0, name: "Maya N.", service: "Brows", color: "bg-primary/8 text-primary border-edge" },
    { row: 2, col: 3, name: "Joelle K.", service: "Pedicure", color: "bg-accent/15 text-accent border-accent/30" },
    { row: 3, col: 1, name: "Tala B.", service: "Massage", color: "bg-accent-2/15 text-accent-2 border-accent-2/40" },
  ]
  const times = ["10:00", "11:30", "13:00", "14:30"]

  return (
    <PreviewFrame url="book.mistika.lb/admin">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div>
            <h4 className="font-display text-base font-semibold text-primary">Today · Apr 28</h4>
            <p className="text-xs text-muted">14 appointments · $1,840 booked</p>
          </div>
          <span className="text-[10px] px-2 py-1 rounded-full bg-accent-2/15 text-accent-2 font-semibold">Live</span>
        </div>

        <div className="grid grid-cols-[64px_repeat(4,1fr)] gap-1">
          <div />
          {staff.map((s) => (
            <div key={s} className="text-center text-[11px] font-semibold text-muted py-1.5 border-b border-edge">
              {s}
            </div>
          ))}

          {times.map((time, row) => (
            <div key={time} className="contents">
              <div className="text-[10px] text-muted font-mono pt-2">{time}</div>
              {staff.map((_, col) => {
                const slot = slots.find((s) => s.row === row && s.col === col)
                return (
                  <div
                    key={col}
                    className="min-h-12 border border-edge rounded-md p-1 text-[10px]"
                  >
                    {slot && (
                      <div className={cn("rounded-md px-1.5 py-1 border", slot.color)}>
                        <div className="font-semibold leading-tight">{slot.name}</div>
                        <div className="opacity-80 leading-tight">{slot.service}</div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </PreviewFrame>
  )
}

/* ─── E-Commerce Storefront + Admin Split ─── */

function EcommercePreview() {
  const products = [
    { name: "Linen Shirt", price: "$48", stock: 24 },
    { name: "Canvas Tote", price: "$22", stock: 12 },
    { name: "Olive Oil 1L", price: "$15", stock: 56 },
    { name: "Ceramic Mug", price: "$14", stock: 8 },
  ]

  return (
    <PreviewFrame url="shop.byline.lb">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="font-display text-base font-semibold text-primary">Storefront</h4>
          <span className="text-[10px] text-muted">12 orders today</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {products.map((p) => (
            <div key={p.name} className="rounded-lg border border-edge p-3 bg-surface-alt">
              <div className="aspect-[4/3] rounded-md bg-gradient-to-br from-edge to-surface mb-2.5" />
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold text-primary truncate">{p.name}</span>
                <span className="text-xs font-mono text-primary shrink-0">{p.price}</span>
              </div>
              <span className="text-[10px] text-muted">{p.stock} in stock</span>
            </div>
          ))}
        </div>
        <div className="rounded-lg bg-whatsapp/10 border border-whatsapp/30 px-3 py-2.5 flex items-center gap-2">
          <span className="size-2 rounded-full bg-whatsapp animate-pulse" />
          <span className="text-xs text-primary">
            New order from <strong>Ahmad N.</strong> · $84 · waiting in WhatsApp
          </span>
        </div>
      </div>
    </PreviewFrame>
  )
}

/* ─── Internal Dashboard ─── */

function InternalPreview() {
  const kpis = [
    { label: "Revenue today", value: "$4,820", trend: "+18%" },
    { label: "Orders open", value: "47", trend: "+3" },
    { label: "On-time rate", value: "94%", trend: "+2pp" },
  ]

  return (
    <PreviewFrame url="ops.flowbyte.internal">
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-2">
          {kpis.map((kpi) => (
            <div key={kpi.label} className="rounded-lg border border-edge p-3">
              <div className="text-[10px] uppercase tracking-wider text-muted mb-1">{kpi.label}</div>
              <div className="font-display text-xl font-semibold text-primary leading-none mb-1">{kpi.value}</div>
              <div className="text-[10px] text-accent-2 font-mono">{kpi.trend}</div>
            </div>
          ))}
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-wider text-muted mb-2">Throughput · last 14 days</div>
          <div className="flex items-end gap-1 h-16">
            {[20, 32, 28, 44, 38, 52, 46, 58, 62, 54, 66, 70, 64, 78].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-accent/30"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-edge p-3 text-xs space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-muted">Auto-approval ran</span>
            <span className="text-muted font-mono">2m ago</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted">Weekly report sent · 14 recipients</span>
            <span className="text-muted font-mono">1h ago</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted">Synced with accounting</span>
            <span className="text-muted font-mono">3h ago</span>
          </div>
        </div>
      </div>
    </PreviewFrame>
  )
}
