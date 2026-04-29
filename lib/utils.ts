import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const CONTACT_EMAIL = "contact@flow-byte.com"

export function mailtoLink(subject?: string, body?: string) {
  const params = new URLSearchParams()
  if (subject) params.set("subject", subject)
  if (body) params.set("body", body)
  const qs = params.toString()
  return `mailto:${CONTACT_EMAIL}${qs ? `?${qs}` : ""}`
}
