import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { PricingCards } from "@/components/pricing-cards"
import { PlanComparison } from "@/components/plan-comparison"
import { GrowthPlanBuilder } from "@/components/growth-plan-builder"
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
      <PlanComparison />
      <GrowthPlanBuilder />
      <CtaBanner
        heading="Not Sure Which Plan Fits?"
        description="Book a free strategy call. We will audit your current setup, understand your goals, and recommend the right plan for your business."
        ctaText="Book Strategy Call"
      />
    </>
  )
}
