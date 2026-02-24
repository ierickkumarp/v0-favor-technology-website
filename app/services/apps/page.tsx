import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { AppsContent } from "@/components/services/apps-content"
import { Testimonials } from "@/components/testimonials"
import { CtaBanner } from "@/components/cta-banner"

export const metadata: Metadata = {
  title: "Favor Apps — Smart Apps. Smarter Business.",
  description:
    "Custom mobile app development, web apps, SaaS platforms, AI integrations, and secure scalable architecture. Build your app with Favor.",
}

export default function AppsPage() {
  return (
    <>
      <PageHero
        title="Favor Apps"
        tagline="Smart Apps. Smarter Business. We design and develop custom mobile and web applications that help businesses automate, engage, and grow."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services/apps" },
          { label: "Favor Apps" },
        ]}
      />
      <AppsContent />
      <Testimonials filter="Favor Apps" />
      <CtaBanner
        heading="Ready to Build Your App?"
        description="From concept to launch, our expert team delivers scalable, secure, and user-friendly applications."
        ctaText="Build Your App Today"
      />
    </>
  )
}
