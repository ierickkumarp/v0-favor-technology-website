import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { PlanDetail } from "@/components/plan-detail"
import { plans, getPlanBySlug } from "@/lib/plans-data"

interface PlanPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return plans.map((plan) => ({ slug: plan.slug }))
}

export async function generateMetadata({
  params,
}: PlanPageProps): Promise<Metadata> {
  const { slug } = await params
  const plan = getPlanBySlug(slug)
  if (!plan) {
    return {
      title: "Plan Not Found",
    }
  }
  return {
    title: `${plan.name} — ${plan.tagline}`,
    description: plan.description,
  }
}

export default async function PlanPage({ params }: PlanPageProps) {
  const { slug } = await params

  if (!slug || typeof slug !== "string") {
    notFound()
  }

  const plan = getPlanBySlug(slug)

  if (!plan) {
    notFound()
  }

  return (
    <>
      <PageHero
        title={plan.name}
        tagline={plan.tagline}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Pricing", href: "/pricing" },
          { label: plan.name },
        ]}
      />
      <PlanDetail plan={plan} />
    </>
  )
}
