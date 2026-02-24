import { Hero } from "@/components/hero"
import { TrustedBy } from "@/components/trusted-by"
import { About } from "@/components/about"
import { Divisions } from "@/components/divisions"
import { WhyFavor } from "@/components/why-favor"
import { ExecutionFramework } from "@/components/execution-framework"
import { GrowthPartners } from "@/components/growth-partners"
import { AutomationTools } from "@/components/automation-tools"
import { Testimonials } from "@/components/testimonials"
import { CtaBanner } from "@/components/cta-banner"

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <About />
      <Divisions />
      <WhyFavor />
      <ExecutionFramework />
      <GrowthPartners />
      <AutomationTools />
      <Testimonials />
      <CtaBanner
        heading="Ready to Engineer Your Growth?"
        description="Book a free strategy call. We will audit your current setup and map out a performance plan tailored to your business."
        ctaText="Book Strategy Call"
      />
    </>
  )
}
