import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { MediaContent } from "@/components/services/media-content"
import { Testimonials } from "@/components/testimonials"
import { CtaBanner } from "@/components/cta-banner"

export const metadata: Metadata = {
  title: "Favor Media — Crafting Stories That Stick",
  description:
    "Brand identity, video production, photography, ad campaigns, social content, and event coverage. Bring your brand to life with Favor Media.",
}

export default function MediaPage() {
  return (
    <>
      <PageHero
        title="Favor Media"
        tagline="Crafting Stories That Stick. We bring brands to life through visual storytelling, branding, and media production."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services/media" },
          { label: "Favor Media" },
        ]}
      />
      <MediaContent />
      <Testimonials filter="Favor Media" />
      <CtaBanner
        heading="Ready to Tell Your Story?"
        description="Our creative team crafts memorable experiences that connect with your audience and elevate your brand."
        ctaText="Get Creative Proposal"
      />
    </>
  )
}
