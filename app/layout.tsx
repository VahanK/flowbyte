import type { Metadata } from "next"
import { Manrope, Inter } from "next/font/google"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://flow-byte.com"),
  title: {
    default: "FlowByte — Custom platforms for Lebanese businesses",
    template: "%s · FlowByte",
  },
  description:
    "Wholesale portals, booking systems, e-commerce stores, internal dashboards — designed around your workflow, shipped in weeks. Beirut-based.",
  keywords: [
    "FlowByte",
    "Lebanon web platform",
    "Beirut software studio",
    "B2B portal Lebanon",
    "wholesale platform",
    "booking system",
    "e-commerce Lebanon",
    "custom dashboards",
    "Next.js development",
  ],
  authors: [{ name: "FlowByte" }],
  openGraph: {
    title: "FlowByte — Custom platforms for Lebanese businesses",
    description:
      "Wholesale portals, booking systems, e-commerce, internal dashboards — designed around your workflow, shipped in weeks.",
    url: "https://flow-byte.com",
    siteName: "FlowByte",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FlowByte — Custom platforms for Lebanese businesses",
    description:
      "Wholesale portals, booking systems, e-commerce, internal dashboards — designed around your workflow.",
  },
  robots: { index: true, follow: true },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FlowByte",
  url: "https://flow-byte.com",
  logo: "https://flow-byte.com/logo.png",
  description:
    "Wholesale portals, booking systems, e-commerce, internal dashboards — designed around your workflow, shipped in weeks.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "contact@flow-byte.com",
    contactType: "customer support",
    areaServed: "LB",
    availableLanguage: ["English", "Arabic"],
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "LB",
    addressLocality: "Beirut",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-surface text-primary">
        <Script
          id="ld-organization"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify(organizationSchema)}
        </Script>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
