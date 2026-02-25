"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { useInView } from "@/hooks/use-in-view"
import { ArrowRight, Check } from "lucide-react"
import { formatINR } from "@/lib/plans-data"

const serviceOptions = [
  { id: "meta", label: "Meta Ads (Facebook + Instagram)", estimate: 15000 },
  { id: "google", label: "Google Ads (Search + Display)", estimate: 18000 },
  { id: "linkedin", label: "LinkedIn Ads", estimate: 20000 },
  { id: "seo", label: "SEO & Content Marketing", estimate: 12000 },
  { id: "automation", label: "Marketing Automation (Zapier / Make)", estimate: 10000 },
  { id: "crm", label: "CRM Setup & Integration", estimate: 8000 },
  { id: "whatsapp", label: "WhatsApp Business Automation", estimate: 7000 },
]

export function GrowthPlanBuilder() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleService = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const estimatedTotal = serviceOptions
    .filter((s) => selected.has(s.id))
    .reduce((sum, s) => sum + s.estimate, 0)

  return (
    <section className="relative py-32 md:py-40">
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-glow-pulse absolute right-1/4 top-1/4 h-[350px] w-[350px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div
        ref={sectionRef}
        className={`relative mx-auto max-w-3xl px-6 transition-all duration-700 ${
          isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-accent/50" />
            <span className="text-xs font-semibold tracking-widest text-accent uppercase">
              Custom Plans
            </span>
            <div className="h-px w-12 bg-accent/50" />
          </div>
          <h2 className="mb-5 text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Build Your Plan
          </h2>
          <p className="mx-auto max-w-xl text-base text-muted-foreground leading-relaxed">
            Mix and match services. See your estimated investment instantly.
          </p>
        </div>

        {/* Service checkboxes */}
        <div className="glass-card rounded-2xl p-8">
          <div className="flex flex-col gap-3">
            {serviceOptions.map((service) => {
              const isChecked = selected.has(service.id)
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => toggleService(service.id)}
                  className={`flex items-center gap-4 rounded-xl px-5 py-4 text-left transition-all duration-200 ${
                    isChecked
                      ? "bg-primary/15 border border-accent/30"
                      : "bg-secondary/30 border border-transparent hover:bg-secondary/50"
                  }`}
                >
                  <div
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-all ${
                      isChecked
                        ? "border-accent bg-accent"
                        : "border-muted-foreground/40 bg-transparent"
                    }`}
                  >
                    {isChecked && <Check size={12} className="text-accent-foreground" />}
                  </div>
                  <span className="flex-1 text-sm font-medium text-foreground">
                    {service.label}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {mounted ? `from ${formatINR(service.estimate)}/mo` : "..."}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Estimated cost */}
          <div className="mt-8 flex flex-col items-center gap-6 border-t border-border/50 pt-8">
            <div className="text-center">
              <p className="mb-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                Estimated Monthly Investment
              </p>
              <p className="text-3xl font-bold text-foreground md:text-4xl">
                {mounted
                  ? selected.size > 0
                    ? `${formatINR(estimatedTotal)}+`
                    : "Select services above"
                  : "..."
                }
              </p>
              {selected.size > 0 && (
                <p className="mt-1 text-xs text-muted-foreground">
                  Final pricing based on scope and business requirements.
                </p>
              )}
            </div>
            <Link
              href="/contact"
              className="group flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-accent hover:shadow-[0_0_30px_rgba(33,150,243,0.4)]"
            >
              Request Custom Strategy Proposal
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
