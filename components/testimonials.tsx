"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Star, ExternalLink } from "lucide-react"

const allTestimonials = [
  {
    name: "Ramesh S.",
    company: "TechVentures",
    website: "techventures.in",
    industry: "SaaS / Technology",
    service: "Full-Stack Web Application",
    result: "Launched MVP in 8 weeks, onboarded 500+ users in month one.",
    division: "Favor Apps",
  },
  {
    name: "Meena J.",
    company: "RetailPro",
    website: "retailpro.co.in",
    industry: "E-Commerce / Retail",
    service: "Meta + Google Performance Marketing",
    result: "2X traffic and 3.8X ROAS within 60 days.",
    division: "Favor Digital Marketing",
  },
  {
    name: "Sundar K.",
    company: "GreenPath",
    website: "greenpath.org",
    industry: "Sustainability / NGO",
    service: "CRM + WhatsApp Automation",
    result: "Saved 20+ hours/week, 40% increase in donor engagement.",
    division: "Favor Digital Marketing",
  },
  {
    name: "Lavanya P.",
    company: "LogiFlow",
    website: "logiflow.in",
    industry: "Logistics / Operations",
    service: "Custom ERP Web App",
    result: "Reduced manual processes by 70%, live fleet tracking dashboard.",
    division: "Favor Apps",
  },
  {
    name: "Karthik V.",
    company: "FoodKart",
    website: "foodkart.com",
    industry: "Food & Beverage / D2C",
    service: "Google Ads + Shopping Campaigns",
    result: "8X ROI on ad spend, 150% increase in monthly orders.",
    division: "Favor Digital Marketing",
  },
  {
    name: "Rajeev D.",
    company: "IndustryMax",
    website: "industrymax.co",
    industry: "B2B / Manufacturing",
    service: "Full-Funnel Meta + Google + LinkedIn",
    result: "5X ROAS in 90 days, 300+ qualified leads per month.",
    division: "Favor Digital Marketing",
  },
  {
    name: "Vignesh M.",
    company: "NexGen Solutions",
    website: "nexgensolutions.io",
    industry: "AI / Deep Tech",
    service: "AI-Integrated Web Platform",
    result: "Production-ready in 10 weeks, processing 50K+ API calls/day.",
    division: "Favor Apps",
  },
  {
    name: "Priya A.",
    company: "StyleHouse",
    website: "stylehouse.in",
    industry: "Fashion / D2C",
    service: "SEO + Content Marketing",
    result: "Ranking for 15+ keywords, 200% organic traffic growth in 4 months.",
    division: "Favor Digital Marketing",
  },
  {
    name: "Anitha T.",
    company: "CraftBazaar",
    website: "craftbazaar.com",
    industry: "Marketplace / E-Commerce",
    service: "SaaS Admin Dashboard",
    result: "Handles 10K+ users daily, 99.9% uptime since launch.",
    division: "Favor Apps",
  },
]

interface TestimonialsProps {
  filter?: string
}

export function Testimonials({ filter }: TestimonialsProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })

  const testimonials = filter
    ? allTestimonials.filter((t) => t.division === filter)
    : allTestimonials

  return (
    <section className="relative py-32 md:py-40">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-accent/50" />
            <span className="text-xs font-semibold tracking-widest text-accent uppercase">
              Client Results
            </span>
            <div className="h-px w-12 bg-accent/50" />
          </div>
          <h2 className="mb-5 text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Real Clients. Measurable Results.
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground leading-relaxed">
            Every engagement is built around clear deliverables and measurable
            outcomes.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`glass-card glass-card-hover flex flex-col rounded-2xl p-7 transition-all duration-500 ${
                isInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Stars */}
              <div className="mb-5 flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Result highlight */}
              <p className="mb-5 text-sm font-semibold text-foreground leading-relaxed">
                {`"${t.result}"`}
              </p>

              {/* Structured details */}
              <div className="mb-5 flex flex-1 flex-col gap-2.5">
                <div className="flex items-start gap-2">
                  <span className="text-[11px] font-medium tracking-wide text-muted-foreground uppercase w-20 shrink-0 pt-0.5">
                    Industry
                  </span>
                  <span className="text-sm text-foreground/80">{t.industry}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[11px] font-medium tracking-wide text-muted-foreground uppercase w-20 shrink-0 pt-0.5">
                    Service
                  </span>
                  <span className="text-sm text-foreground/80">{t.service}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[11px] font-medium tracking-wide text-muted-foreground uppercase w-20 shrink-0 pt-0.5">
                    Website
                  </span>
                  <span className="flex items-center gap-1 text-sm text-accent">
                    {t.website}
                    <ExternalLink size={11} className="opacity-60" />
                  </span>
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-border/50 pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-sm font-bold text-accent">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.company}</p>
                </div>
              </div>

              {/* Division tag */}
              <div className="mt-4 rounded-lg bg-primary/10 px-3 py-1.5 text-center text-[10px] font-medium tracking-wide text-accent uppercase">
                {t.division}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
