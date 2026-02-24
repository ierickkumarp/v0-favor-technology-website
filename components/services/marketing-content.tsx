"use client"

import { useRef, useEffect, useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import {
  Search,
  Megaphone,
  Share2,
  ShoppingCart,
  Mail,
  MessageSquare,
  BarChart3,
  Bot,
  Globe,
  Target,
  RefreshCcw,
  Briefcase,
  CheckCircle2,
} from "lucide-react"

const services = [
  {
    icon: Megaphone,
    title: "Meta Ads (Facebook + Instagram)",
    desc: "Full-funnel campaigns with creative testing, audience segmentation, and dynamic retargeting.",
  },
  {
    icon: Search,
    title: "Google Search & Display Ads",
    desc: "High-intent search campaigns and display network reach for maximum visibility and conversions.",
  },
  {
    icon: ShoppingCart,
    title: "Google Shopping",
    desc: "Product feed optimization, shopping campaign management, and dynamic remarketing for e-commerce.",
  },
  {
    icon: Briefcase,
    title: "LinkedIn Ads",
    desc: "B2B lead generation with InMail campaigns, ABM targeting, and decision-maker outreach.",
  },
  {
    icon: Globe,
    title: "Bing Ads",
    desc: "Untapped search audiences on Microsoft Bing with lower CPCs and high-quality traffic.",
  },
  {
    icon: Search,
    title: "SEO (Full-Service)",
    desc: "Technical SEO, on-page optimization, content strategy, link building, and local SEO.",
  },
  {
    icon: Mail,
    title: "Email Marketing & Automation",
    desc: "Drip sequences, newsletters, segmentation, and automated nurture funnels that convert.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Automation",
    desc: "Automated WhatsApp flows for lead follow-up, cart recovery, appointment reminders, and support.",
  },
  {
    icon: Bot,
    title: "AI & CRM Automation",
    desc: "Zapier, Make, n8n workflows connecting your CRM, ads, email, and WhatsApp into one system.",
  },
  {
    icon: Target,
    title: "Conversion Rate Optimization",
    desc: "A/B testing, heatmap analysis, funnel optimization, and landing page experimentation.",
  },
  {
    icon: RefreshCcw,
    title: "Retargeting & Remarketing",
    desc: "Cross-platform retargeting to bring back visitors and convert them into paying customers.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    desc: "Custom GA4 setups, server-side tracking, live dashboards, and weekly strategy reports.",
  },
]

const stats = [
  { value: 200, suffix: "+", label: "Campaigns Managed" },
  { value: 13, suffix: "+", label: "Platforms Covered" },
  { value: 6, suffix: "X", label: "Avg ROAS" },
  { value: 50, suffix: "+", label: "Active Clients" },
]

const platforms = [
  "Meta Ads",
  "Google Search",
  "Google Display",
  "Google Shopping",
  "LinkedIn Ads",
  "Bing Ads",
  "SEO",
  "Email Marketing",
  "WhatsApp Automation",
  "CRM Automation",
  "Retargeting",
  "CRO",
  "AI Workflows",
]

const whyChoose = [
  "Full-funnel strategy across 13+ platforms -- not just one channel",
  "ROAS-first approach: every rupee is tracked and optimized",
  "Complete automation stack: CRM, email, WhatsApp, and AI workflows",
  "Transparent reporting with full ad account access",
  "Dedicated account manager + weekly strategy calls",
  "No long-term lock-in after minimum contract period",
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
      <section className="py-32 md:py-40">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-20 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-accent/50" />
              <span className="text-xs font-semibold tracking-widest text-accent uppercase">
                Our Platforms
              </span>
              <div className="h-px w-12 bg-accent/50" />
            </div>
            <h2 className="mb-5 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              Omnichannel Performance Marketing
            </h2>
            <p className="mx-auto max-w-2xl text-base text-muted-foreground leading-relaxed">
              From paid ads to automation pipelines, we cover every channel that
              drives revenue -- managed by a dedicated team obsessed with ROAS.
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
                style={{ transitionDelay: `${i * 70}ms` }}
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

      {/* Platform Tags */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {platforms.map((p) => (
              <span
                key={p}
                className="rounded-full border border-border bg-secondary/40 px-4 py-2 text-xs font-medium text-foreground"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 md:py-32">
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
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-accent/50" />
              <span className="text-xs font-semibold tracking-widest text-accent uppercase">
                Why Favor Digital
              </span>
              <div className="h-px w-12 bg-accent/50" />
            </div>
            <h2 className="mb-5 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
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
