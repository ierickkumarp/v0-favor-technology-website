"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import {
  Smartphone,
  Globe,
  Palette,
  Plug,
  Wrench,
  Cloud,
  CheckCircle2,
} from "lucide-react"

const services = [
  {
    icon: Smartphone,
    title: "Custom Mobile App Development",
    desc: "Native and cross-platform apps for iOS and Android, built for performance and engagement.",
  },
  {
    icon: Globe,
    title: "Web App Development",
    desc: "Scalable web applications with modern frameworks, optimized for speed and user experience.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Intuitive, user-centered designs that delight users and drive conversions.",
  },
  {
    icon: Plug,
    title: "API Integration",
    desc: "Seamless third-party integrations with payment gateways, CRMs, analytics, and more.",
  },
  {
    icon: Wrench,
    title: "App Maintenance & Updates",
    desc: "Ongoing support, bug fixes, feature updates, and performance optimization.",
  },
  {
    icon: Cloud,
    title: "SaaS Product Development",
    desc: "End-to-end SaaS platform development from architecture to launch and scaling.",
  },
]

const techStack = [
  { category: "Mobile", items: ["React Native", "Flutter", "Kotlin", "Swift"] },
  { category: "Backend", items: ["Node.js", "Python", "Firebase"] },
  { category: "Cloud", items: ["AWS", "Azure"] },
  { category: "Database", items: ["MongoDB", "MySQL", "PostgreSQL"] },
]

const whyChoose = [
  "Tailor-made solutions for your unique business needs",
  "Scalable and secure architecture from day one",
  "Agile development process with transparent communication",
  "Expert team with cross-platform knowledge",
  "Post-launch support and continuous improvement",
]

export function AppsContent() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })

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
              What We Build
            </h2>
            <p className="mx-auto max-w-2xl text-base text-muted-foreground leading-relaxed">
              From simple mobile apps to complex SaaS platforms, we deliver
              high-quality solutions across every platform.
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

      {/* Tech Stack */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-accent/50" />
              <span className="text-xs font-semibold tracking-widest text-accent uppercase">
                Tech Stack
              </span>
              <div className="h-px w-12 bg-accent/50" />
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
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
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-accent/50" />
              <span className="text-xs font-semibold tracking-widest text-accent uppercase">
                Why Favor Apps
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
