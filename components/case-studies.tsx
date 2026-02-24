"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { AlertTriangle, Lightbulb, TrendingUp } from "lucide-react"

const allStudies = [
  {
    problem: "Low Leads & Poor Online Visibility",
    strategy: "SEO + Google Ads Funnel + Landing Page Optimization",
    result: "3X Leads in 90 Days",
    tag: "Digital Marketing",
  },
  {
    problem: "Manual Business Ops & No Digital Tools",
    strategy: "Custom ERP App + Automation + Cloud Migration",
    result: "40% Cost Reduction",
    tag: "App Development",
  },
  {
    problem: "E-Commerce Store With Low ROAS & Cart Abandonment",
    strategy: "Google Shopping Optimization + Dynamic Retargeting + WhatsApp Cart Recovery",
    result: "5X ROAS in 90 Days",
    tag: "Digital Marketing",
  },
]

interface CaseStudiesProps {
  filter?: string
}

export function CaseStudies({ filter }: CaseStudiesProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.15 })

  const studies = filter
    ? allStudies.filter((s) => s.tag === filter)
    : allStudies

  return (
    <section className="relative py-32 md:py-40">
      <div className="animate-glow-pulse absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[150px]" />

      <div ref={ref} className="relative mx-auto max-w-6xl px-6">
        <div className="mb-20 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-accent/50" />
            <span className="text-xs font-semibold tracking-widest text-accent uppercase">
              Proven Results
            </span>
            <div className="h-px w-12 bg-accent/50" />
          </div>
          <h2 className="mb-5 text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Success Stories
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground leading-relaxed">
            Real results from real clients. Here is how we transform challenges
            into growth.
          </p>
        </div>

        <div className={`grid gap-8 ${studies.length === 1 ? "max-w-lg mx-auto" : studies.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
          {studies.map((study, i) => (
            <div
              key={study.tag + study.problem}
              className={`glass-card glass-card-hover flex flex-col rounded-2xl p-8 transition-all duration-500 ${
                isInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Tag */}
              <span className="mb-6 inline-block w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                {study.tag}
              </span>

              {/* Problem */}
              <div className="mb-5">
                <div className="mb-2 flex items-center gap-2">
                  <AlertTriangle size={14} className="text-destructive" />
                  <span className="text-xs font-semibold tracking-wide text-destructive uppercase">
                    Problem
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {study.problem}
                </p>
              </div>

              {/* Strategy */}
              <div className="mb-5">
                <div className="mb-2 flex items-center gap-2">
                  <Lightbulb size={14} className="text-accent" />
                  <span className="text-xs font-semibold tracking-wide text-accent uppercase">
                    Strategy
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {study.strategy}
                </p>
              </div>

              {/* Result */}
              <div className="mt-auto rounded-xl bg-primary/10 p-4">
                <div className="mb-1 flex items-center gap-2">
                  <TrendingUp size={14} className="text-accent" />
                  <span className="text-xs font-semibold tracking-wide text-accent uppercase">
                    Result
                  </span>
                </div>
                <p className="text-lg font-bold text-foreground">
                  {study.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
