import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { MarketingContent } from "@/components/services/marketing-content"
import { CaseStudies } from "@/components/case-studies"
import { Testimonials } from "@/components/testimonials"
import { CtaBanner } from "@/components/cta-banner"

export const metadata: Metadata = {
  title: "Favor Digital Marketing — Omnichannel Performance Marketing",
  description:
    "Full-funnel performance marketing across Meta, Google, LinkedIn, Bing, SEO, Email & WhatsApp Automation, CRM, and AI workflows. Measurable ROI guaranteed.",
}

export default function MarketingPage() {
  return (
    <>
      <PageHero
        title="Favor Digital Marketing"
        tagline="Omnichannel performance marketing. We run full-funnel campaigns across every platform that drives revenue -- from Meta Ads to WhatsApp Automation."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services/marketing" },
          { label: "Digital Marketing" },
        ]}
      />
      <MarketingContent />
      <CaseStudies filter="Digital Marketing" />
      <Testimonials filter="Favor Digital Marketing" />
      <CtaBanner
        heading="Ready to Scale Your Revenue?"
        description="Get a free performance audit and a custom growth strategy tailored to your budget and goals."
        ctaText="Get Free Audit"
        ctaHref="/pricing"
      />
    </>
  )
}
