import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Divisions } from "@/components/divisions"
import { Testimonials } from "@/components/testimonials"
import { CtaBanner } from "@/components/cta-banner"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Divisions />
      <Testimonials />
      <CtaBanner />
    </>
  )
}
