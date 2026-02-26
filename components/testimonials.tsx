"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Star, ExternalLink } from "lucide-react"

const allTestimonials = [
  {
    name: "DB Office",
    company: "DB Office",
    website: "dboffice.in",
    industry: "Office Supplies / E-Commerce",
    service: "Full-Stack Web Application + E-Commerce Platform",
    result: "Custom e-commerce platform built and deployed, streamlining online product catalog and order management.",
    division: "Favor Apps",
  },
  {
    name: "Crazy Crackers",
    company: "Crazy Crackers",
    website: "crazycrackers.in",
    industry: "Retail / Seasonal E-Commerce",
    service: "Google Ads + Meta Performance Marketing",
    result: "Seasonal campaign setup driving targeted traffic during peak festive season with optimized ad spend.",
    division: "Favor Digital Marketing",
  },
  {
    name: "Amanah Chem Pharm",
    company: "Amanah Chem Pharm",
    website: "amanahchempharm.com",
    industry: "Chemical & Pharmaceutical",
    service: "Corporate Website + SEO Foundation",
    result: "Professional web presence established with SEO-optimized pages for B2B lead generation.",
    division: "Favor Apps",
  },
  {
    name: "Bold Print Studio",
    company: "Bold Print Studio",
    website: "boldprintstudio.net",
    industry: "Printing / Creative Services",
    service: "Website Development + Local SEO",
    result: "Modern portfolio website launched with local search optimization for regional visibility.",
    division: "Favor Apps",
  },
  {
    name: "Karangal Institution",
    company: "Karangal Institution",
    website: "karangalinstitutioncbe.com",
    industry: "Education / Institution",
    service: "Institutional Website + Google Ads",
    result: "Digital presence built with admissions-focused landing pages and targeted Google campaigns.",
    division: "Favor Digital Marketing",
  },
  {
    name: "Skillful Learning",
    company: "Skillful Learning",
    website: "skillfullearning.in",
    industry: "EdTech / Online Learning",
    service: "Web Application + Performance Marketing",
    result: "Learning platform developed with integrated lead-gen funnels and Meta ad campaigns.",
    division: "Favor Apps",
  },
  {
    name: "Carage Car Care",
    company: "Carage Car Care",
    website: "caragecarcare.co.in",
    industry: "Automotive / Services",
    service: "Website + Local SEO + Google Ads",
    result: "Service booking website with local SEO setup driving walk-in and appointment inquiries.",
    division: "Favor Digital Marketing",
  },
  {
    name: "Pulse Celebrations",
    company: "Pulse Celebrations",
    website: "pulsecelebrations.com",
    industry: "Events / Celebrations",
    service: "Brand Website + Social Media Marketing",
    result: "Event showcase website with social media campaigns generating consistent booking inquiries.",
    division: "Favor Digital Marketing",
  },
  {
    name: "FoodLogixs",
    company: "FoodLogixs",
    website: "foodlogixs.in",
    industry: "Food & Logistics / Supply Chain",
    service: "Custom Web App + CRM Automation",
    result: "Operations web app with automated CRM workflows reducing manual coordination overhead.",
    division: "Favor Apps",
  },
  {
    name: "Educadd Rajajinagar",
    company: "Educadd Rajajinagar",
    website: "educaddrajajinagar.co.in",
    industry: "Education / Training Institute",
    service: "SEO + Content Marketing + Google Ads",
    result: "Enrollment-focused campaigns with content strategy driving qualified student inquiries.",
    division: "Favor Digital Marketing",
  },
  {
    name: "Sexologist in Tamil Nadu",
    company: "Dr. Clinic",
    website: "sexologistintamilnadu.com",
    industry: "Healthcare / Medical Practice",
    service: "Website + Local SEO + Google Ads",
    result: "HIPAA-aware medical website with appointment booking and local search dominance.",
    division: "Favor Digital Marketing",
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
    <section className="relative py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
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
                  <a
                    href={`https://${t.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-accent hover:underline"
                  >
                    {t.website}
                    <ExternalLink size={11} className="opacity-60" />
                  </a>
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
