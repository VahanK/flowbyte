import Link from "next/link"
import { Container } from "@/components/layout/Container"
import { CONTACT_EMAIL, whatsappLink } from "@/lib/utils"

const navColumns = [
  {
    heading: "Navigate",
    links: [
      { href: "#services", label: "Services" },
      { href: "#industries", label: "Industries" },
      { href: "#work", label: "Work" },
      { href: "#process", label: "Process" },
      { href: "#contact", label: "Contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-edge bg-surface">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link
              href="/"
              className="inline-block font-display text-2xl font-semibold tracking-tight text-primary"
            >
              flowbyte<span className="text-accent">.</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted leading-relaxed">
              Custom platforms for Lebanese businesses. Wholesale portals,
              booking systems, e-commerce, internal dashboards.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="block text-primary hover:text-accent transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
              <a
                href={whatsappLink(
                  "Hi, I came across FlowByte — interested in working together."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-primary hover:text-accent transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {navColumns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted mb-4">
                {col.heading}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-primary/80 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-edge flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-sm text-muted">
          <span>© {new Date().getFullYear()} FlowByte. Built in Lebanon.</span>
          <span>We reply within 4 hours, Mon–Sat.</span>
        </div>
      </Container>
    </footer>
  )
}
