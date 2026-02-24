import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Divisions } from "@/components/divisions"
import { WhyFavor } from "@/components/why-favor"
import { GrowthPartners } from "@/components/growth-partners"
import { AutomationTools } from "@/components/automation-tools"
import { Testimonials } from "@/components/testimonials"
import { CtaBanner } from "@/components/cta-banner"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Divisions />
      <WhyFavor />
      <GrowthPartners />
      <AutomationTools />
      <Testimonials />
      <CtaBanner
        heading="Ready to Engineer Your Growth?"
        description="Book a free strategy call. We will audit your current setup and map out a performance plan."
        ctaText="Book Strategy Call"
      />
    </>
  )
}
