import { ImageResponse } from "next/og"

export const alt = "FlowByte — Custom platforms for Lebanese businesses"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#0F0F14",
          color: "#FFFFFF",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: "-0.05em",
          }}
        >
          flowbyte<span style={{ color: "#3B82F6" }}>.</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              maxWidth: 980,
            }}
          >
            Custom platforms for Lebanese businesses.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "#9CA3AF",
              fontWeight: 400,
              letterSpacing: "-0.005em",
            }}
          >
            Websites · E-commerce · Booking · B2B portals · Internal dashboards
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#6B7280",
          }}
        >
          <div style={{ display: "flex" }}>flow-byte.com</div>
          <div style={{ display: "flex" }}>Beirut · Shipped in weeks</div>
        </div>
      </div>
    ),
    size,
  )
}
