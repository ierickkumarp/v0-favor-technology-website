"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Check, X } from "lucide-react"

const features = [
  "Only Marketing",
  "Only App Development",
  "Tech + Marketing + Media",
  "AI Integration",
  "Automation Systems",
  "Dedicated Growth Strategy",
]

const otherAgencies = [true, true, false, false, false, false]
const favorValues = [false, false, true, true, true, true]

export function WhyChoose() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.2 })

  return (
    <section className="relative py-32 md:py-40">
      <div
        ref={ref}
        className={`mx-auto max-w-4xl px-6 transition-all duration-700 ${
          isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="mb-20 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-accent/50" />
            <span className="text-xs font-semibold tracking-widest text-accent uppercase">
              The Favor Advantage
            </span>
            <div className="h-px w-12 bg-accent/50" />
          </div>
          <h2 className="mb-5 text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Why Choose Favor?
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground leading-relaxed">
            We are not just another agency. We are a full-stack growth partner
            that combines technology, marketing, and creative media under one
            roof.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="glass-card overflow-hidden rounded-2xl">
          {/* Table header */}
          <div className="grid grid-cols-3 border-b border-border bg-primary/10 px-6 py-4">
            <span className="text-sm font-semibold text-foreground">
              Feature
            </span>
            <span className="text-center text-sm font-semibold text-muted-foreground">
              Other Agencies
            </span>
            <span className="text-center text-sm font-semibold text-accent">
              Favor
            </span>
          </div>

          {/* Table rows */}
          {features.map((feature, i) => (
            <div
              key={feature}
              className={`grid grid-cols-3 items-center px-6 py-4 transition-all duration-500 ${
                i < features.length - 1 ? "border-b border-border/50" : ""
              } ${isInView ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              <span className="text-sm text-foreground">{feature}</span>
              <div className="flex justify-center">
                {otherAgencies[i] ? (
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-muted">
                    <Check size={14} className="text-muted-foreground" />
                  </div>
                ) : (
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-destructive/10">
                    <X size={14} className="text-destructive" />
                  </div>
                )}
              </div>
              <div className="flex justify-center">
                {favorValues[i] ? (
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/20">
                    <Check size={14} className="text-accent" />
                  </div>
                ) : (
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-muted">
                    <span className="text-[10px] text-muted-foreground">
                      N/A
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
