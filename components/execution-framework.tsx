"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import {
  ClipboardCheck,
  Compass,
  Hammer,
  Rocket,
  TrendingUp,
} from "lucide-react"

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Audit",
    subtitle: "Understand the Current State",
    description:
      "We start by analyzing your existing digital presence, ad accounts, tech stack, competitors, and growth blockers. Nothing is assumed.",
  },
  {
    number: "02",
    icon: Compass,
    title: "Strategy",
    subtitle: "Define the Growth Roadmap",
    description:
      "We build a documented strategy covering channels, budgets, KPIs, timelines, and deliverables. You approve before anything executes.",
  },
  {
    number: "03",
    icon: Hammer,
    title: "Build",
    subtitle: "Engineer the Systems",
    description:
      "Our team builds, integrates, and tests everything -- from ad campaigns and landing pages to web apps and automation workflows.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch",
    subtitle: "Go Live with Confidence",
    description:
      "We launch with rigorous QA, tracking verification, and real-time monitoring. Every campaign and system goes live with a checklist.",
  },
  {
    number: "05",
    icon: TrendingUp,
    title: "Optimize",
    subtitle: "Compound the Results",
    description:
      "Post-launch, we monitor, test, and refine continuously. Weekly reviews, A/B tests, and data-driven adjustments keep growth compounding.",
  },
]

export function ExecutionFramework() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })

  return (
    <section className="relative py-20 md:py-28">
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-glow-pulse absolute right-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[150px]" />
      </div>

      <div
        ref={ref}
        className={`relative mx-auto max-w-5xl px-6 transition-all duration-700 ${
          isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-accent/50" />
            <span className="text-xs font-semibold tracking-widest text-accent uppercase">
              Our Process
            </span>
            <div className="h-px w-12 bg-accent/50" />
          </div>
          <h2 className="mb-5 text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            How We Execute
          </h2>
          <p className="mx-auto max-w-xl text-base text-muted-foreground leading-relaxed">
            Every engagement follows a structured 5-step framework. No shortcuts,
            no guesswork -- just systems that scale.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line connector */}
          <div className="absolute left-6 top-0 bottom-0 hidden w-px bg-border/60 md:left-8 lg:block" />

          <div className="flex flex-col gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <div
                  key={step.number}
                  className={`relative flex gap-6 transition-all duration-500 lg:gap-8 ${
                    isInView
                      ? "translate-y-0 opacity-100"
                      : "translate-y-12 opacity-0"
                  }`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  {/* Step number circle */}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-background md:h-16 md:w-16">
                    <Icon size={22} className="text-accent" />
                  </div>

                  {/* Content */}
                  <div className="glass-card flex-1 rounded-2xl p-6 md:p-8">
                    <div className="mb-1 flex items-center gap-3">
                      <span className="text-xs font-bold tracking-widest text-accent/60 uppercase">
                        Step {step.number}
                      </span>
                    </div>
                    <h3 className="mb-1 text-lg font-bold text-foreground md:text-xl">
                      {step.title}
                    </h3>
                    <p className="mb-3 text-sm font-medium text-accent/80">
                      {step.subtitle}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed md:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
