"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import {
  Code2,
  TrendingUp,
  Zap,
  Target,
  Users,
  Shield,
} from "lucide-react"

const values = [
  {
    icon: Code2,
    title: "High-Code Engineering",
    desc: "Production-grade applications built with Next.js, Node.js, and modern frameworks -- no templates, no shortcuts.",
  },
  {
    icon: TrendingUp,
    title: "Performance-First Marketing",
    desc: "Every campaign is optimized for ROAS. We run full-funnel strategies across 13+ platforms.",
  },
  {
    icon: Zap,
    title: "AI-Powered Automation",
    desc: "We deploy Zapier, Make, n8n, and custom AI workflows to eliminate manual work and scale operations.",
  },
  {
    icon: Target,
    title: "Measurable Outcomes",
    desc: "We tie every engagement to real business metrics -- leads, revenue, ROAS, and conversion rates.",
  },
  {
    icon: Users,
    title: "Dedicated Growth Teams",
    desc: "Each client gets a cross-functional team of engineers, marketers, and automation specialists.",
  },
  {
    icon: Shield,
    title: "Transparent & Secure",
    desc: "Full ad account access, transparent reporting, industry-standard security, and clear SLAs.",
  },
]

export function AboutContent() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })

  return (
    <section className="relative py-32 md:py-40">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 transition-all duration-700 ${
          isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {/* Mission & Vision */}
        <div className="mb-20 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px flex-1 max-w-16 bg-accent/50" />
              <span className="text-xs font-semibold tracking-widest text-accent uppercase">
                Our Mission
              </span>
            </div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
              Engineering Growth,{" "}
              <span className="text-accent">Not Guesswork</span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed md:text-lg">
              Favor is a technology-powered growth partner. We combine high-code
              web development with omnichannel performance marketing and
              AI-powered automation to build businesses that scale predictably
              and profitably. No templates. No guesswork. Just systems that work.
            </p>
          </div>
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px flex-1 max-w-16 bg-accent/50" />
              <span className="text-xs font-semibold tracking-widest text-accent uppercase">
                Our Vision
              </span>
            </div>
            <p className="mb-6 text-base text-muted-foreground leading-relaxed md:text-lg">
              We envision a world where every ambitious brand has access to the
              same caliber of technology and marketing infrastructure that
              Fortune 500 companies use -- without the Fortune 500 budget.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed md:text-lg">
              Our two divisions -- Favor Apps and Favor Digital Marketing -- work
              in tandem: we build the platform, then we drive the traffic. One
              partner, complete growth.
            </p>
          </div>
        </div>

        {/* Values */}
        <div>
          <div className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-accent/50" />
              <span className="text-xs font-semibold tracking-widest text-accent uppercase">
                What Drives Us
              </span>
              <div className="h-px w-12 bg-accent/50" />
            </div>
            <h2 className="mb-5 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              Our Core Principles
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((item, i) => (
              <div
                key={item.title}
                className={`glass-card glass-card-hover flex items-start gap-4 rounded-xl p-6 transition-all duration-500 ${
                  isInView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20">
                  <item.icon size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
