import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { AboutContent } from "@/components/about-content"
import { Policies } from "@/components/policies"
import { CtaBanner } from "@/components/cta-banner"

export const metadata: Metadata = {
  title: "About Favor",
  description:
    "Favor is a technology-powered growth partner. Learn about our mission to build scalable web applications and drive performance marketing results.",
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Favor"
        tagline="We engineer growth through systems, not shortcuts. High-code web applications combined with omnichannel performance marketing."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />
      <AboutContent />
      <Policies />
      <CtaBanner
        heading="Partner With Us"
        description="Ready to scale with a technology-powered growth partner? Book a strategy call today."
      />
    </>
  )
}
