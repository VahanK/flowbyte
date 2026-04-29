"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { Container } from "@/components/layout/Container"
import { Button } from "@/components/ui/Button"
import { mailtoLink, cn } from "@/lib/utils"

const navItems = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
]

const talkSubject = "FlowByte — interested in working together"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "bg-surface/85 backdrop-blur-md border-b border-edge"
          : "bg-transparent"
      )}
    >
      <Container className="flex items-center justify-between h-16 md:h-20">
        <Link
          href="/"
          className="font-display text-xl md:text-2xl font-semibold tracking-tight text-primary"
          aria-label="FlowByte home"
        >
          flowbyte
          <span className="text-accent">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-primary/80 hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href={mailtoLink(talkSubject)}>
            <Button variant="primary" size="md">
              Talk to us
            </Button>
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden inline-flex items-center justify-center size-10 rounded-lg hover:bg-surface-alt transition-colors"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      {open && (
        <div className="md:hidden fixed inset-0 top-16 bg-surface z-50 animate-in fade-in duration-200">
          <Container className="py-8">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl font-semibold py-3 border-b border-edge text-primary"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <a href={mailtoLink(talkSubject)} className="mt-8 block">
              <Button variant="primary" size="lg" className="w-full">
                Talk to us
              </Button>
            </a>
          </Container>
        </div>
      )}
    </header>
  )
}
