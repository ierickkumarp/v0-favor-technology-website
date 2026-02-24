import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { AboutContent } from "@/components/about-content"
import { WhyChoose } from "@/components/why-choose"
import { CaseStudies } from "@/components/case-studies"
import { CtaBanner } from "@/components/cta-banner"

export const metadata: Metadata = {
  title: "About Favor",
  description:
    "Favor is a technology-powered growth ecosystem. Learn about our mission to help businesses thrive through apps, digital marketing, and media.",
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Favor"
        tagline="A technology-powered growth ecosystem helping businesses thrive through innovation, strategy, and creativity."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />
      <AboutContent />
      <WhyChoose />
      <CaseStudies />
      <CtaBanner
        heading="Partner With Us"
        description="Ready to transform your business with a full-stack growth partner? Let us craft a strategy tailored to your goals."
      />
    </>
  )
}
