"use client"

import { useRef } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

interface CtaBannerProps {
  heading?: string
  description?: string
  ctaText?: string
  ctaHref?: string
}

export function CtaBanner({
  heading = "Ready to Grow Your Business?",
  description = "Let our team craft a strategy tailored to your goals. Get a free consultation today.",
  ctaText = "Get Free Strategy Call",
  ctaHref = "/contact",
}: CtaBannerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.3 })

  return (
    <section className="relative py-14 md:py-20">
      <div className="animate-glow-pulse absolute inset-0 -z-10 mx-auto h-[250px] w-[400px] rounded-full bg-primary/4 blur-[100px]" />

      <div
        ref={ref}
        className={`mx-auto max-w-4xl px-6 text-center transition-all duration-700 ${
          isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <h2 className="mb-5 text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
          {heading}
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-base text-muted-foreground leading-relaxed md:text-lg">
          {description}
        </p>
        <Link
          href={ctaHref}
          className="group inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:bg-accent hover:shadow-lg"
        >
          {ctaText}
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </section>
  )
}
