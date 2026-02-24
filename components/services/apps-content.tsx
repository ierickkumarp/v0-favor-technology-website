"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import {
  Globe,
  Layers,
  Cloud,
  Plug,
  Wrench,
  ShieldCheck,
  Database,
  Cpu,
  BarChart3,
  CheckCircle2,
} from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "High-Code Business Websites",
    desc: "Custom-built websites with Next.js, React, and modern SSR/ISR for blazing performance and SEO.",
  },
  {
    icon: Layers,
    title: "Advanced Web Applications",
    desc: "Complex web apps with real-time features, role-based access, and integrations built from the ground up.",
  },
  {
    icon: Cloud,
    title: "SaaS Development",
    desc: "End-to-end SaaS platform development -- multi-tenancy, billing, dashboards, and API infrastructure.",
  },
  {
    icon: Database,
    title: "Admin Dashboards & CRM Systems",
    desc: "Custom admin panels and CRM solutions tailored to your workflows, not off-the-shelf limitations.",
  },
  {
    icon: Plug,
    title: "API Integrations & Automation",
    desc: "Seamless integrations with payment gateways, CRMs, analytics, ERPs, and third-party services.",
  },
  {
    icon: Cpu,
    title: "AI-Powered Automation Systems",
    desc: "Custom AI workflows using n8n, Make, and Zapier to automate repetitive tasks and data flows.",
  },
  {
    icon: BarChart3,
    title: "Performance Optimization",
    desc: "Core Web Vitals optimization, caching strategies, and infrastructure tuning for peak performance.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Architecture",
    desc: "Authentication, encryption, RBAC, and compliance-ready architecture baked in from day one.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    desc: "Ongoing support, bug fixes, feature updates, and 24/7 monitoring for production systems.",
  },
]

const techStack = [
  { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "Python", "REST / GraphQL"] },
  { category: "Database", items: ["PostgreSQL", "MongoDB", "Redis", "Supabase"] },
  { category: "Infrastructure", items: ["Vercel", "AWS", "Docker", "CI/CD Pipelines"] },
]

const whyChoose = [
  "Production-grade engineering -- not templates or page builders",
  "Modern stack: Next.js, Node.js, PostgreSQL, Vercel",
  "Scalable architecture designed for growth from day one",
  "Agile sprints with weekly demos and transparent communication",
  "Full IP ownership -- everything we build belongs to you",
  "Post-launch support with SLA-backed response times",
]

export function AppsContent() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })

  return (
    <div ref={ref} className="relative">
      {/* Services */}
      <section className="py-32 md:py-40">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-20 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-accent/50" />
              <span className="text-xs font-semibold tracking-widest text-accent uppercase">
                What We Build
              </span>
              <div className="h-px w-12 bg-accent/50" />
            </div>
            <h2 className="mb-5 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              Full-Stack Web Engineering
            </h2>
            <p className="mx-auto max-w-2xl text-base text-muted-foreground leading-relaxed">
              From business websites to complex SaaS platforms, we deliver
              production-grade solutions with modern high-code frameworks.
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
                style={{ transitionDelay: `${i * 80}ms` }}
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

      {/* Tech Stack */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-20 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-accent/50" />
              <span className="text-xs font-semibold tracking-widest text-accent uppercase">
                Tech Stack
              </span>
              <div className="h-px w-12 bg-accent/50" />
            </div>
            <h2 className="mb-5 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              Technologies We Use
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {techStack.map((group) => (
              <div
                key={group.category}
                className="glass-card rounded-2xl p-6"
              >
                <h3 className="mb-4 text-sm font-semibold tracking-wide text-accent uppercase">
                  {group.category}
                </h3>
                <div className="flex flex-col gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg bg-primary/10 px-3 py-2 text-sm text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
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
                Why Favor Apps
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
