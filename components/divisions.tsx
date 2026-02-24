"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import Link from "next/link"
import {
  Smartphone,
  BarChart3,
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
  MessageSquare,
} from "lucide-react"

const divisions = [
  {
    icon: Smartphone,
    title: "Favor Apps",
    tagline: "High-Performance Web Engineering",
    description:
      "We build production-grade web applications, SaaS platforms, admin dashboards, and custom CRM systems using modern high-code frameworks.",
    services: [
      { icon: Code2, label: "Business Websites & Web Apps" },
      { icon: Cloud, label: "SaaS Development" },
      { icon: Globe, label: "Admin Dashboards & CRMs" },
      { icon: Cpu, label: "API Integrations & Automation" },
      { icon: ShieldCheck, label: "Secure & Scalable Architecture" },
    ],
    cta: "Explore Apps",
    href: "/services/apps",
    accent: "#1565C0",
  },
  {
    icon: BarChart3,
    title: "Favor Digital Marketing",
    tagline: "Omnichannel Performance Marketing",
    description:
      "From Meta Ads to Google Shopping, LinkedIn to WhatsApp Automation -- we run full-funnel campaigns across every platform that drives revenue.",
    services: [
      { icon: Search, label: "SEO & Google Ads" },
      { icon: Megaphone, label: "Meta, LinkedIn & Bing Ads" },
      { icon: Share2, label: "Google Shopping & Display" },
      { icon: Bot, label: "AI & CRM Automation" },
      { icon: MessageSquare, label: "Email & WhatsApp Automation" },
      { icon: LineChart, label: "CRO & Analytics" },
    ],
    stats: [
      { value: "200+", label: "Campaigns" },
      { value: "3-6X", label: "Avg ROAS" },
      { value: "13+", label: "Platforms" },
    ],
    cta: "Explore Marketing",
    href: "/services/marketing",
    accent: "#2196F3",
  },
]

export function Divisions() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })

  return (
    <section id="services" className="relative py-32 md:py-40">
      <div className="animate-glow-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[150px]" />

      <div ref={ref} className="relative mx-auto max-w-6xl px-6">
        <div className="mb-20 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-accent/50" />
            <span className="text-xs font-semibold tracking-widest text-accent uppercase">
              Our Divisions
            </span>
            <div className="h-px w-12 bg-accent/50" />
          </div>
          <h2 className="mb-5 text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Two Divisions, One Growth System
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground leading-relaxed">
            Favor Apps builds the technology. Favor Digital Marketing drives the
            traffic. Together, they create a complete growth engine.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
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
              <div className="mb-4">
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${div.accent}20` }}
                >
                  <div.icon size={24} style={{ color: div.accent }} />
                </div>
                <h3 className="mb-1 text-xl font-bold text-foreground">
                  {div.title}
                </h3>
                <p className="text-sm font-medium text-accent">
                  {div.tagline}
                </p>
              </div>

              <p className="mb-5 text-sm text-muted-foreground leading-relaxed">
                {div.description}
              </p>

              {/* Services */}
              <div className="mb-6 flex flex-1 flex-col gap-3">
                {div.services.map((service) => (
                  <div
                    key={service.label}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <service.icon
                      size={14}
                      className="shrink-0 text-accent/70"
                    />
                    {service.label}
                  </div>
                ))}
              </div>

              {/* Stats */}
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
