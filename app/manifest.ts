import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "FlowByte — Custom platforms for Lebanese businesses",
    short_name: "FlowByte",
    description:
      "Wholesale portals, booking systems, e-commerce, internal dashboards — designed around your workflow.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#0F0F14",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  }
}
