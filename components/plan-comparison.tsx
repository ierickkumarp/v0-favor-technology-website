"use client"

import { useRef, useState, useEffect } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Check, Minus } from "lucide-react"
import { formatINR } from "@/lib/plans-data"

const features = [
  { label: "Starting Price", type: "price" as const },
  { label: "Min Contract", type: "text" as const },
  { label: "Ad Platforms Included", type: "text" as const },
  { label: "Meta Ads", type: "check" as const },
  { label: "Google Search Ads", type: "check" as const },
  { label: "Google Display / YouTube", type: "check" as const },
  { label: "Google Shopping", type: "check" as const },
  { label: "LinkedIn Ads", type: "check" as const },
  { label: "Bing Ads", type: "check" as const },
  { label: "SEO (Full-Service)", type: "check" as const },
  { label: "Email + WhatsApp Automation", type: "check" as const },
  { label: "CRM Integration", type: "check" as const },
  { label: "AI Workflow Automation", type: "check" as const },
  { label: "Live Reporting Dashboard", type: "check" as const },
  { label: "Dedicated Account Manager", type: "check" as const },
  { label: "Strategy Calls", type: "text" as const },
]

type PlanKey = "growth" | "scale" | "dominate" | "ecommerce"

const planData: Record<PlanKey, Record<string, string | boolean | number>> = {
  growth: {
    "Starting Price": 45000,
    "Min Contract": "3 months",
    "Ad Platforms Included": "2",
    "Meta Ads": true,
    "Google Search Ads": true,
    "Google Display / YouTube": false,
    "Google Shopping": false,
    "LinkedIn Ads": false,
    "Bing Ads": false,
    "SEO (Full-Service)": false,
    "Email + WhatsApp Automation": false,
    "CRM Integration": false,
    "AI Workflow Automation": false,
    "Live Reporting Dashboard": false,
    "Dedicated Account Manager": true,
    "Strategy Calls": "Monthly",
  },
  scale: {
    "Starting Price": 65000,
    "Min Contract": "6 months",
    "Ad Platforms Included": "4+",
    "Meta Ads": true,
    "Google Search Ads": true,
    "Google Display / YouTube": true,
    "Google Shopping": false,
    "LinkedIn Ads": false,
    "Bing Ads": false,
    "SEO (Full-Service)": true,
    "Email + WhatsApp Automation": false,
    "CRM Integration": true,
    "AI Workflow Automation": false,
    "Live Reporting Dashboard": false,
    "Dedicated Account Manager": true,
    "Strategy Calls": "Bi-weekly",
  },
  dominate: {
    "Starting Price": 95000,
    "Min Contract": "6 months",
    "Ad Platforms Included": "6+",
    "Meta Ads": true,
    "Google Search Ads": true,
    "Google Display / YouTube": true,
    "Google Shopping": true,
    "LinkedIn Ads": true,
    "Bing Ads": true,
    "SEO (Full-Service)": true,
    "Email + WhatsApp Automation": true,
    "CRM Integration": true,
    "AI Workflow Automation": true,
    "Live Reporting Dashboard": true,
    "Dedicated Account Manager": true,
    "Strategy Calls": "Weekly",
  },
  ecommerce: {
    "Starting Price": 75000,
    "Min Contract": "3 months",
    "Ad Platforms Included": "4+",
    "Meta Ads": true,
    "Google Search Ads": true,
    "Google Display / YouTube": false,
    "Google Shopping": true,
    "LinkedIn Ads": false,
    "Bing Ads": false,
    "SEO (Full-Service)": true,
    "Email + WhatsApp Automation": true,
    "CRM Integration": false,
    "AI Workflow Automation": false,
    "Live Reporting Dashboard": false,
    "Dedicated Account Manager": true,
    "Strategy Calls": "Bi-weekly",
  },
}

const planNames: { key: PlanKey; name: string; popular?: boolean }[] = [
  { key: "growth", name: "Growth Starter" },
  { key: "scale", name: "Scale Pro", popular: true },
  { key: "dominate", name: "Dominate" },
  { key: "ecommerce", name: "E-Commerce" },
]

export function PlanComparison() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderCell = (feature: (typeof features)[0], planKey: PlanKey) => {
    const value = planData[planKey][feature.label]

    if (feature.type === "price" && typeof value === "number") {
      return mounted ? (
        <span className="text-sm font-bold text-foreground">{formatINR(value)}</span>
      ) : (
        <span className="inline-block h-4 w-16 animate-pulse rounded bg-muted" />
      )
    }

    if (feature.type === "check") {
      return value ? (
        <Check size={16} className="mx-auto text-accent" />
      ) : (
        <Minus size={16} className="mx-auto text-muted-foreground/30" />
      )
    }

    return <span className="text-sm text-foreground">{String(value)}</span>
  }

  return (
    <section className="relative py-32 md:py-40">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 transition-all duration-700 ${
          isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-accent/50" />
            <span className="text-xs font-semibold tracking-widest text-accent uppercase">
              Compare Plans
            </span>
            <div className="h-px w-12 bg-accent/50" />
          </div>
          <h2 className="mb-5 text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Feature Comparison
          </h2>
        </div>

        <div className="glass-card overflow-x-auto rounded-2xl">
          <table className="w-full min-w-[640px] text-center">
            <thead>
              <tr className="border-b border-border/50">
                <th className="px-5 py-5 text-left text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  Feature
                </th>
                {planNames.map((plan) => (
                  <th key={plan.key} className="px-4 py-5">
                    <span
                      className={`text-sm font-bold ${
                        plan.popular ? "text-accent" : "text-foreground"
                      }`}
                    >
                      {plan.name}
                    </span>
                    {plan.popular && (
                      <span className="mt-1 block text-[10px] font-medium tracking-wider text-accent/70 uppercase">
                        Most Popular
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, i) => (
                <tr
                  key={feature.label}
                  className={i < features.length - 1 ? "border-b border-border/30" : ""}
                >
                  <td className="px-5 py-4 text-left text-sm text-muted-foreground">
                    {feature.label}
                  </td>
                  {planNames.map((plan) => (
                    <td
                      key={plan.key}
                      className={`px-4 py-4 ${
                        plan.popular ? "bg-accent/[0.04]" : ""
                      }`}
                    >
                      {renderCell(feature, plan.key)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
