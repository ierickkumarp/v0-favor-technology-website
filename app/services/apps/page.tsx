import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { AppsContent } from "@/components/services/apps-content"
import { Testimonials } from "@/components/testimonials"
import { CtaBanner } from "@/components/cta-banner"

export const metadata: Metadata = {
  title: "Favor Apps — High-Performance Web Engineering",
  description:
    "Production-grade web applications, SaaS platforms, admin dashboards, CRM systems, and API integrations built with modern high-code frameworks.",
}

export default function AppsPage() {
  return (
    <>
      <PageHero
        title="Favor Apps"
        tagline="High-performance web engineering. We build production-grade web applications, SaaS platforms, and custom business systems using modern frameworks."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services/apps" },
          { label: "Favor Apps" },
        ]}
      />
      <AppsContent />
      <Testimonials filter="Favor Apps" />
      <CtaBanner
        heading="Ready to Build Your Platform?"
        description="From concept to production, our engineering team delivers scalable, secure, and high-performance web applications."
        ctaText="Start Your Project"
      />
    </>
  )
}
