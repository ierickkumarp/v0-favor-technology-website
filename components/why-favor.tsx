"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import {
  ClipboardList,
  Users,
  Cog,
  Globe,
  FileText,
  ShieldCheck,
} from "lucide-react"

const reasons = [
  {
    icon: ClipboardList,
    title: "Structured Execution Framework",
    description:
      "Every project follows a documented process: audit, strategy, build, launch, optimize. No guesswork.",
  },
  {
    icon: Users,
    title: "Limited Clients Per Quarter",
    description:
      "We cap our roster to ensure dedicated attention, faster turnarounds, and better results for each partner.",
  },
  {
    icon: Cog,
    title: "Automation-Driven Systems",
    description:
      "We build repeatable systems with Zapier, Make, n8n, and custom integrations so growth compounds over time.",
  },
  {
    icon: Globe,
    title: "Multi-Platform Expertise",
    description:
      "Meta, Google, LinkedIn, YouTube, WhatsApp -- we run full-funnel campaigns across every channel that matters.",
  },
  {
    icon: FileText,
    title: "Transparent Cost Breakdown",
    description:
      "No hidden fees. Every proposal comes with a clear scope, deliverable list, and line-item pricing.",
  },
  {
    icon: ShieldCheck,
    title: "Full Ownership & IP Rights",
    description:
      "Everything we build belongs to you. Full source code, ad account access, and documentation handover included.",
  },
]

export function WhyFavor() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.15 })

  return (
    <section className="relative py-14 md:py-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-glow-pulse absolute left-1/3 top-1/3 h-[300px] w-[300px] rounded-full bg-primary/3 blur-[100px]" />
      </div>

      <div
        ref={ref}
        className={`relative mx-auto max-w-6xl px-6 transition-all duration-700 ${
          isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-xs font-semibold tracking-widest text-accent uppercase">
            The Favor Difference
          </span>
          <h2 className="mb-5 text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Why Favor
          </h2>
          <p className="mx-auto max-w-xl text-base text-muted-foreground leading-relaxed">
            We operate differently. Here is what sets us apart from every other
            agency or freelancer.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`glass-card glass-card-hover flex flex-col rounded-2xl p-8 transition-all duration-500 ${
                isInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15">
                <r.icon size={22} className="text-accent" />
              </div>
              <h3 className="mb-3 text-base font-bold text-foreground">
                {r.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {r.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
