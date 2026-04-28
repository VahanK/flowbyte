import { MessageCircle } from "lucide-react"
import { Button, type ButtonProps } from "@/components/ui/Button"
import { whatsappLink } from "@/lib/utils"

interface WhatsAppButtonProps
  extends Omit<ButtonProps, "asChild"> {
  message?: string
  label?: string
}

export function WhatsAppButton({
  message = "Hi, I came across FlowByte — interested in working together.",
  label = "Message on WhatsApp",
  variant = "whatsapp",
  size = "md",
  className,
  ...rest
}: WhatsAppButtonProps) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      <Button variant={variant} size={size} className={className} {...rest}>
        <MessageCircle className="size-4" />
        {label}
      </Button>
    </a>
  )
}
