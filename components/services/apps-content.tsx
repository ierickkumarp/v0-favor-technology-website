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
  ClipboardCheck,
  Compass,
  Rocket,
  TrendingUp,
  FileCheck,
} from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "High-Code Business Websites",
    desc: "Custom-built with Next.js, React, and SSR/ISR for blazing performance and SEO.",
  },
  {
    icon: Layers,
    title: "Advanced Web Applications",
    desc: "Complex apps with real-time features, role-based access, and integrations.",
  },
  {
    icon: Cloud,
    title: "SaaS Development",
    desc: "Multi-tenancy, billing, dashboards, and API infrastructure from scratch.",
  },
  {
    icon: Database,
    title: "Admin Dashboards & CRM Systems",
    desc: "Custom admin panels tailored to your workflows, not off-the-shelf limitations.",
  },
  {
    icon: Plug,
    title: "API Integrations & Automation",
    desc: "Seamless integrations with payment gateways, CRMs, ERPs, and third-party services.",
  },
  {
    icon: Cpu,
    title: "AI-Powered Automation Systems",
    desc: "Custom AI workflows using n8n, Make, and Zapier for data flows and task automation.",
  },
  {
    icon: BarChart3,
    title: "Performance Optimization",
    desc: "Core Web Vitals optimization, caching strategies, and infrastructure tuning.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Architecture",
    desc: "Authentication, encryption, RBAC, and compliance-ready architecture.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    desc: "Ongoing support, bug fixes, feature updates, and production monitoring.",
  },
]

const executionSteps = [
  {
    icon: ClipboardCheck,
    title: "Discovery & Requirements Audit",
    desc: "We analyze your business goals, existing systems, user flows, and technical constraints.",
  },
  {
    icon: Compass,
    title: "Architecture & Scoping",
    desc: "We define the tech stack, data models, integrations, and sprint plan with clear milestones.",
  },
  {
    icon: Rocket,
    title: "Agile Development & QA",
    desc: "We build in 2-week sprints with weekly demos, code reviews, and rigorous testing.",
  },
  {
    icon: TrendingUp,
    title: "Launch & Ongoing Support",
    desc: "Production deployment, monitoring setup, documentation, and SLA-backed support.",
  },
]

const deliverables = [
  "Full source code with documentation",
  "CI/CD pipeline and staging environment",
  "Database schema and API documentation",
  "User authentication and role management",
  "Performance optimization and Core Web Vitals",
  "Production deployment and monitoring",
  "Post-launch support with SLA",
  "Knowledge transfer and training sessions",
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
      {/* Outcome Statement */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-lg font-medium text-muted-foreground leading-relaxed md:text-xl">
            Favor Apps is your dedicated engineering partner for
            production-grade web applications. We build custom, scalable
            software -- not templates. Every line of code is written for
            performance, security, and long-term maintainability.
          </p>
        </div>
      </section>

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
                <h3 className="mb-2 text-base font-semibold text-foreground">
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

      {/* Execution Process */}
      <section className="py-32 md:py-40">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-16 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-accent/50" />
              <span className="text-xs font-semibold tracking-widest text-accent uppercase">
                How We Build
              </span>
              <div className="h-px w-12 bg-accent/50" />
            </div>
            <h2 className="mb-5 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              Our Development Process
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {executionSteps.map((step, i) => (
              <div
                key={step.title}
                className="glass-card flex items-start gap-5 rounded-2xl p-7"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20">
                  <span className="text-xs font-bold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="mb-2 text-base font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-accent/50" />
              <span className="text-xs font-semibold tracking-widest text-accent uppercase">
                What You Get
              </span>
              <div className="h-px w-12 bg-accent/50" />
            </div>
            <h2 className="mb-5 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              Standard Deliverables
            </h2>
          </div>

          <div className="glass-card rounded-2xl p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {deliverables.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <FileCheck
                    size={16}
                    className="mt-1 shrink-0 text-accent"
                  />
                  <p className="text-sm text-foreground leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
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
              <div key={group.category} className="glass-card rounded-2xl p-6">
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
              Engineered for Production, Not Prototypes
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
