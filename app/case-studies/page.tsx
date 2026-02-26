import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { GrowthPartners } from "@/components/growth-partners"
import { Testimonials } from "@/components/testimonials"
import { CtaBanner } from "@/components/cta-banner"

export const metadata: Metadata = {
  title: "Case Studies — Client Success Stories",
  description:
    "See how Favor has helped 11+ brands scale through web apps and performance marketing. Real results from real clients across 10+ industries.",
}

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        title="Case Studies"
        tagline="Real brands. Real results. Real growth through technology and performance marketing."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Case Studies" },
        ]}
      />
      <GrowthPartners />
      <Testimonials />
      <CtaBanner
        heading="Ready to Be Our Next Case Study?"
        description="Join 11+ brands scaling with Favor. Book a free strategy call to discuss your growth plan."
        ctaText="Book Strategy Call"
      />
    </>
  )
}
