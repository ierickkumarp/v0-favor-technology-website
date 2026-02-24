"use client"

import { useRef, useEffect, useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import {
  Search,
  Megaphone,
  Share2,
  FileText,
  Mail,
  BarChart3,
  CheckCircle2,
} from "lucide-react"

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Dominate search results with data-driven SEO strategies that boost organic traffic and visibility.",
  },
  {
    icon: Megaphone,
    title: "Google & Meta Ads",
    desc: "High-performance paid campaigns across Google, Facebook, and Instagram for maximum ROI.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    desc: "Strategic social media management that builds communities and drives brand awareness.",
  },
  {
    icon: FileText,
    title: "Content Marketing",
    desc: "Compelling content strategies that educate, engage, and convert your target audience.",
  },
  {
    icon: Mail,
    title: "Email Marketing Automation",
    desc: "Automated email funnels that nurture leads and drive repeat business with personalization.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    desc: "Transparent reporting with actionable insights to continuously optimize your campaigns.",
  },
]

const stats = [
  { value: 200, suffix: "+", label: "Campaigns Delivered" },
  { value: 150, suffix: "%", label: "Avg ROI Growth" },
  { value: 15, suffix: "+", label: "Keywords Ranked" },
  { value: 50, suffix: "+", label: "Happy Clients" },
]

const whyChoose = [
  "Data-driven strategies backed by real analytics",
  "Affordable pricing with transparent reporting",
  "Experienced team across all digital channels",
  "Result-focused approach tied to business metrics",
  "Dedicated account manager for every client",
]

function AnimatedCounter({
  value,
  suffix,
  inView,
}: {
  value: number
  suffix: string
  inView: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const increment = value / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <span className="text-4xl font-bold text-accent md:text-5xl">
      {count}
      {suffix}
    </span>
  )
}

export function MarketingContent() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })
  const statsRef = useRef<HTMLDivElement>(null)
  const statsInView = useInView(statsRef, { threshold: 0.3 })

  return (
    <div ref={ref} className="relative">
      {/* Services */}
      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-accent/50" />
              <span className="text-xs font-semibold tracking-widest text-accent uppercase">
                Our Services
              </span>
              <div className="h-px w-12 bg-accent/50" />
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              End-to-End Digital Marketing
            </h2>
            <p className="mx-auto max-w-2xl text-base text-muted-foreground leading-relaxed">
              From SEO and social media to performance marketing and content
              creation, we offer comprehensive digital marketing solutions.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`glass-card glass-card-hover flex flex-col rounded-2xl p-7 transition-all duration-500 ${
                  isInView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
                  <service.icon size={24} className="text-accent" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 md:py-28">
        <div ref={statsRef} className="mx-auto max-w-5xl px-6">
          <div className="glass-card rounded-2xl p-10">
            <div className="grid gap-8 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    inView={statsInView}
                  />
                  <p className="mt-2 text-xs tracking-wide text-muted-foreground uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-accent/50" />
              <span className="text-xs font-semibold tracking-widest text-accent uppercase">
                Why Favor Digital
              </span>
              <div className="h-px w-12 bg-accent/50" />
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              Why Choose Us
            </h2>
          </div>

          <div className="glass-card rounded-2xl p-8">
            <div className="flex flex-col gap-4">
              {whyChoose.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-accent"
                  />
                  <p className="text-base text-foreground leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
