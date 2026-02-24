"use client"

import { useInViewRef } from "@/hooks/use-in-view"
import { Building2, Store, Briefcase, ShoppingBag } from "lucide-react"

const partners = [
  {
    name: "Seyal Crackers",
    industry: "E-Commerce / Retail",
    icon: ShoppingBag,
  },
  {
    name: "Kadambam Cultural Hub",
    industry: "Events / Cultural",
    icon: Building2,
  },
  {
    name: "LocalBiz D2C Brand",
    industry: "Direct-to-Consumer",
    icon: Store,
  },
  {
    name: "B2B SaaS Client",
    industry: "Technology / SaaS",
    icon: Briefcase,
  },
]

export function GrowthPartners() {
  const { ref, isInView } = useInViewRef()

  return (
    <section className="relative py-32 md:py-40">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/3 top-1/4 h-80 w-80 rounded-full bg-accent/3 blur-[100px]" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-6xl px-6">
        <div
          className={`mb-20 text-center transition-all duration-700 ${
            isInView ? "animate-fade-in-up" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-accent/50" />
            <span className="text-xs font-semibold tracking-widest text-accent uppercase">
              Growth Partners
            </span>
            <div className="h-px w-12 bg-accent/50" />
          </div>
          <h2 className="mb-5 text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Brands We Scale
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground leading-relaxed">
            We work with ambitious brands across industries, driving measurable
            growth through performance marketing and custom technology.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner, i) => {
            const Icon = partner.icon
            return (
              <div
                key={partner.name}
                className={`glass-card glass-card-hover group rounded-2xl p-8 text-center transition-all duration-500 ${
                  isInView
                    ? "animate-fade-in-up"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/15 transition-colors group-hover:bg-primary/25">
                  <Icon size={26} className="text-accent" />
                </div>
                <h3 className="mb-1 text-base font-semibold text-foreground">
                  {partner.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {partner.industry}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
