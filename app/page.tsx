import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/home/Hero"
import { Services } from "@/components/home/Services"
import { Process } from "@/components/home/Process"
import { ContactCTA } from "@/components/home/ContactCTA"

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Process />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
