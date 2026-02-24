"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import Link from "next/link"
import {
  Smartphone,
  BarChart3,
  Film,
  ArrowRight,
  Code2,
  Globe,
  Cpu,
  ShieldCheck,
  Cloud,
  Search,
  Megaphone,
  Share2,
  Bot,
  LineChart,
  Palette,
  Camera,
  Video,
  Calendar,
  MessageSquare,
} from "lucide-react"

const divisions = [
  {
    icon: Smartphone,
    title: "Favor Apps",
    tagline: "Smart Apps. Smarter Business.",
    services: [
      { icon: Code2, label: "Custom Mobile Apps" },
      { icon: Globe, label: "Web App Development" },
      { icon: Cloud, label: "SaaS Platforms" },
      { icon: Cpu, label: "AI Integrations" },
      { icon: ShieldCheck, label: "Secure & Scalable Architecture" },
    ],
    cta: "Learn More",
    href: "/services/apps",
    accent: "#0f4c75",
  },
  {
    icon: BarChart3,
    title: "Favor Digital Marketing",
    tagline: "Your Digital Growth Partner",
    services: [
      { icon: Search, label: "SEO Optimization" },
      { icon: Megaphone, label: "Google & Meta Ads" },
      { icon: Share2, label: "Social Media Marketing" },
      { icon: Bot, label: "Automation Funnels" },
      { icon: LineChart, label: "Analytics & Reporting" },
    ],
    stats: [
      { value: "200+", label: "Campaigns" },
      { value: "150%", label: "Avg ROI" },
      { value: "15+", label: "Keywords Ranked" },
    ],
    cta: "Learn More",
    href: "/services/marketing",
    accent: "#1b8ecf",
  },
  {
    icon: Film,
    title: "Favor Media",
    tagline: "Crafting Stories That Stick",
    services: [
      { icon: Palette, label: "Brand Identity" },
      { icon: Video, label: "Ad Films" },
      { icon: Camera, label: "Photography" },
      { icon: Calendar, label: "Event Coverage" },
      { icon: MessageSquare, label: "Social Content" },
    ],
    cta: "Learn More",
    href: "/services/media",
    accent: "#56b5e6",
  },
]

export function Divisions() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })

  return (
    <section id="services" className="relative py-28 md:py-36">
      {/* Background glow */}
      <div className="animate-glow-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[150px]" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-accent/50" />
            <span className="text-xs font-semibold tracking-widest text-accent uppercase">
              Our Divisions
            </span>
            <div className="h-px w-12 bg-accent/50" />
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Three Divisions, One Vision
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground leading-relaxed">
            Each arm of Favor is built to deliver excellence. Together, they
            create an unmatched growth ecosystem.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {divisions.map((div, i) => (
            <div
              key={div.title}
              className={`glass-card glass-card-hover group flex flex-col rounded-2xl p-8 transition-all duration-500 ${
                isInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Header */}
              <div className="mb-6">
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${div.accent}20` }}
                >
                  <div.icon size={24} style={{ color: div.accent }} />
                </div>
                <h3 className="mb-1 text-xl font-bold text-foreground">
                  {div.title}
                </h3>
                <p className="text-sm text-accent">{div.tagline}</p>
              </div>

              {/* Services */}
              <div className="mb-6 flex flex-1 flex-col gap-3">
                {div.services.map((service) => (
                  <div
                    key={service.label}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <service.icon size={14} className="shrink-0 text-accent/70" />
                    {service.label}
                  </div>
                ))}
              </div>

              {/* Stats (only for digital marketing) */}
              {"stats" in div && div.stats && (
                <div className="mb-6 grid grid-cols-3 gap-3">
                  {div.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-lg bg-primary/10 p-3 text-center"
                    >
                      <p className="text-lg font-bold text-accent">
                        {stat.value}
                      </p>
                      <p className="text-[10px] tracking-wide text-muted-foreground uppercase">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* CTA */}
              <Link
                href={div.href}
                className="flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary/40 px-6 py-3 text-sm font-medium text-foreground transition-all group-hover:border-accent/40 group-hover:bg-primary/20"
              >
                {div.cta}
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
