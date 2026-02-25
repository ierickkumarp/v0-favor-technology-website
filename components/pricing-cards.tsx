"use client"

import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Check, Star } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { plans, formatINR } from "@/lib/plans-data"

export function PricingCards() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative py-32 md:py-40">
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-glow-pulse absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[150px]" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <h2 className="mb-5 text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground leading-relaxed">
            Choose a plan that scales with your business. All plans include strategy, execution, and monthly reporting.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {plans.map((plan, i) => {
            const isPopular = plan.slug === "scale"
            return (
              <div
                key={plan.slug}
                className={`glass-card glass-card-hover group relative flex flex-col rounded-2xl p-8 transition-all duration-500 ${
                  isPopular ? "border-accent/30 ring-1 ring-accent/20" : ""
                } ${
                  isInView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {isPopular && (
                  <div className="absolute -top-3 left-8 flex items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-accent-foreground">
                    <Star size={12} className="fill-current" />
                    Most Popular
                  </div>
                )}

                {/* Header */}
                <div className="mb-6">
                  <h3 className="mb-1 text-xl font-bold text-foreground">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-accent font-medium">
                    {plan.tagline}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-foreground md:text-4xl">
                      {mounted ? formatINR(plan.startingPrice) : <span className="inline-block h-8 w-28 animate-pulse rounded bg-muted" />}
                    </span>
                    <span className="text-sm text-muted-foreground">/month</span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Min contract: {plan.minContract}
                  </p>
                </div>

                {/* Best For */}
                <div className="mb-6 rounded-lg bg-primary/[0.08] px-4 py-3">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                    Best For
                  </p>
                  <p className="text-sm text-foreground leading-relaxed">
                    {plan.bestFor}
                  </p>
                </div>

                {/* Highlights */}
                <div className="mb-8 flex flex-1 flex-col gap-3">
                  {plan.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2.5">
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-accent"
                      />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {h}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={`/pricing/${plan.slug}`}
                  className={`flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold transition-all ${
                    isPopular
                      ? "bg-primary text-primary-foreground hover:bg-accent hover:shadow-[0_0_30px_rgba(33,150,243,0.4)]"
                      : "border border-border bg-secondary/40 text-foreground hover:border-accent/40 hover:bg-primary/20"
                  }`}
                >
                  View Full Breakdown
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            )
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            All plans include dedicated account manager, campaign setup, creative
            direction, and performance reporting.
          </p>
          <p className="mt-2 text-xs text-muted-foreground/70">
            Prices are in INR. Ad spend budget is separate and billed directly by
            platforms.
          </p>
        </div>
      </div>
    </section>
  )
}
