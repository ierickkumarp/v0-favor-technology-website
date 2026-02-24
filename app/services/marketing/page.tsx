import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { MarketingContent } from "@/components/services/marketing-content"
import { CaseStudies } from "@/components/case-studies"
import { Testimonials } from "@/components/testimonials"
import { CtaBanner } from "@/components/cta-banner"

export const metadata: Metadata = {
  title: "Favor Digital Marketing — Your Digital Growth Partner",
  description:
    "SEO, Google & Meta Ads, Social Media Marketing, Content Marketing, Email Automation, and Analytics. Drive measurable growth with Favor.",
}

export default function MarketingPage() {
  return (
    <>
      <PageHero
        title="Favor Digital Marketing"
        tagline="Your Digital Growth Partner. We empower businesses of all sizes to thrive online through data-driven digital marketing."
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
        heading="Ready to Scale Your Growth?"
        description="Let our data-driven team craft a marketing strategy that delivers measurable ROI."
        ctaText="Get Free Consultation"
      />
    </>
  )
}
