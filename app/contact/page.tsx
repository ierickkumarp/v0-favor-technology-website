import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Contact } from "@/components/contact"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Favor. Reach out for app development, digital marketing, or media services. We respond within 2 hours.",
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        title={"Let's Build Something Great"}
        tagline="Ready to transform your business? Reach out and our team will craft a strategy tailored to your goals."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      <Contact />
    </>
  )
}
