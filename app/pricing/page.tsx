import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { PricingCards } from "@/components/pricing-cards"
import { CtaBanner } from "@/components/cta-banner"

export const metadata: Metadata = {
  title: "Pricing Plans — Performance Marketing Packages",
  description:
    "Transparent pricing for omnichannel performance marketing. Plans from INR 45K/month. Growth Starter, Scale Pro, Dominate, and E-Commerce Performance.",
}

export default function PricingPage() {
  return (
    <>
      <PageHero
        title="Pricing Plans"
        tagline="Transparent, outcome-driven pricing. Choose a plan that matches your growth stage -- then customize it with add-ons."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Pricing" },
        ]}
      />
      <PricingCards />
      <CtaBanner
        heading="Need a Custom Plan?"
        description="Every business is different. Talk to our team and we will build a custom strategy and pricing proposal."
        ctaText="Book Strategy Call"
      />
    </>
  )
}
