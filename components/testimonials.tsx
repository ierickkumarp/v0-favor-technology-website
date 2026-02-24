"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Star } from "lucide-react"

const allTestimonials = [
  {
    quote:
      "From wireframe to launch, Favor Apps made the process smooth and delivered on time.",
    name: "Ramesh S.",
    role: "CEO, TechVentures",
    division: "Favor Apps",
  },
  {
    quote:
      "Traffic & leads doubled in 60 days! Their strategy was data-driven and results-focused.",
    name: "Meena J.",
    role: "Marketing Head, RetailPro",
    division: "Favor Digital Marketing",
  },
  {
    quote:
      "Brand video won investor trust. Their storytelling approach is truly world-class.",
    name: "Sundar K.",
    role: "Founder, GreenPath",
    division: "Favor Media",
  },
  {
    quote:
      "They delivered a robust ERP tailored for our operations. Exceptional attention to detail.",
    name: "Lavanya P.",
    role: "COO, LogiFlow",
    division: "Favor Apps",
  },
  {
    quote:
      "Google Ads gave 8X ROI. We have never seen this kind of return from any agency before.",
    name: "Karthik V.",
    role: "Director, FoodKart",
    division: "Favor Digital Marketing",
  },
  {
    quote:
      "Corporate film wowed the expo crowd. Professional, creative, and impactful work.",
    name: "Rajeev D.",
    role: "VP, IndustryMax",
    division: "Favor Media",
  },
  {
    quote:
      "AI-integrated app delivered fast and clean. Truly innovative team.",
    name: "Vignesh M.",
    role: "CTO, NexGen Solutions",
    division: "Favor Apps",
  },
  {
    quote:
      "Now ranking for 15+ keywords. Our organic visibility skyrocketed.",
    name: "Priya A.",
    role: "Founder, StyleHouse",
    division: "Favor Digital Marketing",
  },
  {
    quote:
      "Photos boosted product sales. Their visual content is top-notch quality.",
    name: "Anitha T.",
    role: "Owner, CraftBazaar",
    division: "Favor Media",
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
    <section className="relative py-28 md:py-36">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-accent/50" />
            <span className="text-xs font-semibold tracking-widest text-accent uppercase">
              Testimonials
            </span>
            <div className="h-px w-12 bg-accent/50" />
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            What Our Clients Say
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground leading-relaxed">
            Trusted by businesses across industries to deliver results that
            matter.
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
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="mb-6 flex-1 text-sm text-foreground/90 leading-relaxed">
                {`"${t.quote}"`}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-sm font-bold text-accent">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
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
