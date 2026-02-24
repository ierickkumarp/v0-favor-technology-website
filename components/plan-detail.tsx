"use client"

import { useState, useMemo, useEffect } from "react"
import Link from "next/link"
import {
  Check,
  Plus,
  ArrowRight,
  IndianRupee,
  Clock,
  Target,
  CheckCircle2,
} from "lucide-react"
import type { Plan } from "@/lib/plans-data"
import { formatINR } from "@/lib/plans-data"

interface PlanDetailProps {
  plan: Plan
}

export function PlanDetail({ plan }: PlanDetailProps) {
  const [mounted, setMounted] = useState(false)
  const [selectedAddOns, setSelectedAddOns] = useState<Set<string>>(new Set())

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  // Stable references keyed off plan.slug to avoid re-creating arrays every render
  const platforms = useMemo(() => plan?.platforms ?? [], [plan?.slug])
  const addOns = useMemo(() => plan?.addOns ?? [], [plan?.slug])
  const highlights = useMemo(() => plan?.highlights ?? [], [plan?.slug])
  const basePrice = plan?.startingPrice ?? 0

  const includedTotal = useMemo(
    () =>
      platforms
        .filter((p) => p.included)
        .reduce((sum, p) => sum + (p.monthlyCost ?? 0), 0),
    [platforms]
  )

  const addOnTotal = useMemo(
    () =>
      addOns
        .filter((a) => selectedAddOns.has(a.id))
        .reduce((sum, a) => sum + (a.price ?? 0), 0),
    [addOns, selectedAddOns]
  )

  const grandTotal = basePrice + addOnTotal

  // Safe price renderer -- shows placeholder on server, real value on client
  const price = (amount: number) => {
    if (!mounted) return <span className="inline-block h-5 w-16 animate-pulse rounded bg-muted" />
    return formatINR(amount)
  }

  if (!plan) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <p className="text-muted-foreground">Plan data unavailable.</p>
      </div>
    )
  }

  return (
    <div className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Overview */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                Plan Overview
              </h2>
              <p className="mb-6 text-base text-muted-foreground leading-relaxed">
                {plan.description ?? ""}
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="glass-card flex items-center gap-3 rounded-xl p-5">
                  <IndianRupee size={20} className="text-accent" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">
                      Starting at
                    </p>
                    <p className="text-lg font-bold text-foreground">
                      {price(basePrice)}
                      <span className="text-xs font-normal text-muted-foreground">
                        /mo
                      </span>
                    </p>
                  </div>
                </div>
                <div className="glass-card flex items-center gap-3 rounded-xl p-5">
                  <Clock size={20} className="text-accent" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">
                      Min Contract
                    </p>
                    <p className="text-lg font-bold text-foreground">
                      {plan.minContract ?? "N/A"}
                    </p>
                  </div>
                </div>
                <div className="glass-card flex items-center gap-3 rounded-xl p-5">
                  <Target size={20} className="text-accent" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">
                      Platforms
                    </p>
                    <p className="text-lg font-bold text-foreground">
                      {platforms.filter((p) => p.included).length} Included
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* What's Included */}
            {highlights.length > 0 && (
              <section className="mb-12">
                <h2 className="mb-4 text-2xl font-bold text-foreground">
                  {"What's Included"}
                </h2>
                <div className="glass-card rounded-2xl p-6">
                  <div className="flex flex-col gap-3">
                    {highlights.map((h) => (
                      <div key={h} className="flex items-start gap-3">
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0 text-accent"
                        />
                        <span className="text-sm text-foreground leading-relaxed">
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Platform Breakdown */}
            {platforms.length > 0 && (
              <section className="mb-12">
                <h2 className="mb-4 text-2xl font-bold text-foreground">
                  Platform Cost Breakdown
                </h2>
                <div className="glass-card overflow-hidden rounded-2xl">
                  <div className="flex items-center justify-between border-b border-border bg-primary/5 px-6 py-3">
                    <span className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                      Platform
                    </span>
                    <span className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                      Monthly Cost
                    </span>
                  </div>
                  {platforms.map((p) => (
                    <div
                      key={p.name}
                      className={`flex items-center justify-between border-b border-border/50 px-6 py-4 ${
                        !p.included ? "opacity-50" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {p.included ? (
                          <Check size={14} className="text-accent" />
                        ) : (
                          <Plus size={14} className="text-muted-foreground" />
                        )}
                        <span
                          className={`text-sm ${
                            p.included
                              ? "text-foreground"
                              : "text-muted-foreground"
                          }`}
                        >
                          {p.name}
                        </span>
                        {!p.included && (
                          <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] text-muted-foreground">
                            Optional
                          </span>
                        )}
                      </div>
                      <span
                        className={`text-sm font-medium ${
                          p.included
                            ? "text-foreground"
                            : "text-muted-foreground"
                        }`}
                      >
                        {price(p.monthlyCost ?? 0)}
                      </span>
                    </div>
                  ))}
                  <div className="flex items-center justify-between bg-primary/5 px-6 py-4">
                    <span className="text-sm font-semibold text-foreground">
                      Included Platforms Total
                    </span>
                    <span className="text-sm font-bold text-accent">
                      {price(includedTotal)}
                    </span>
                  </div>
                </div>
              </section>
            )}

            {/* Add-Ons */}
            {addOns.length > 0 && (
              <section className="mb-12">
                <h2 className="mb-4 text-2xl font-bold text-foreground">
                  Optional Add-Ons
                </h2>
                <p className="mb-6 text-sm text-muted-foreground">
                  Toggle add-ons to see your estimated monthly total update in
                  real time.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {addOns.map((addOn) => {
                    const isSelected = selectedAddOns.has(addOn.id)
                    return (
                      <button
                        key={addOn.id}
                        onClick={() => toggleAddOn(addOn.id)}
                        className={`glass-card group flex flex-col rounded-xl p-5 text-left transition-all duration-300 ${
                          isSelected
                            ? "border-accent/40 bg-accent/[0.08] ring-1 ring-accent/20"
                            : "hover:border-accent/20"
                        }`}
                      >
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-sm font-semibold text-foreground">
                            {addOn.name}
                          </span>
                          <div
                            className={`flex h-5 w-5 items-center justify-center rounded-md border transition-colors ${
                              isSelected
                                ? "border-accent bg-accent"
                                : "border-border"
                            }`}
                          >
                            {isSelected && (
                              <Check
                                size={12}
                                className="text-accent-foreground"
                              />
                            )}
                          </div>
                        </div>
                        <p className="mb-3 text-xs text-muted-foreground leading-relaxed">
                          {addOn.description}
                        </p>
                        <span className="mt-auto text-sm font-bold text-accent">
                          +{price(addOn.price ?? 0)}/mo
                        </span>
                      </button>
                    )
                  })}
                </div>
              </section>
            )}
          </div>

          {/* Sticky sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <div className="glass-card rounded-2xl p-6">
                <h3 className="mb-1 text-lg font-bold text-foreground">
                  {plan.name}
                </h3>
                <p className="mb-6 text-xs text-muted-foreground">
                  {plan.tagline}
                </p>

                <div className="mb-6 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Base plan</span>
                    <span className="font-medium text-foreground">
                      {price(basePrice)}
                    </span>
                  </div>
                  {mounted &&
                    addOns
                      .filter((a) => selectedAddOns.has(a.id))
                      .map((a) => (
                        <div
                          key={a.id}
                          className="flex items-center justify-between text-sm"
                        >
                          <span className="text-muted-foreground">
                            {a.name}
                          </span>
                          <span className="font-medium text-foreground">
                            +{formatINR(a.price ?? 0)}
                          </span>
                        </div>
                      ))}
                </div>

                <div className="mb-6 border-t border-border pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-foreground">
                      Estimated Total
                    </span>
                    <span className="text-2xl font-bold text-accent">
                      {price(grandTotal)}
                    </span>
                  </div>
                  <p className="mt-1 text-right text-xs text-muted-foreground">
                    per month
                  </p>
                </div>

                <Link
                  href={`/contact?plan=${plan.slug}`}
                  className="group mb-4 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-accent hover:shadow-[0_0_30px_rgba(33,150,243,0.4)]"
                >
                  Request Custom Proposal
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <a
                  href="https://wa.me/918122347028"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-secondary/40 px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-accent/40 hover:bg-secondary/70"
                >
                  Chat on WhatsApp
                </a>

                <p className="mt-4 text-center text-[10px] text-muted-foreground">
                  Ad spend budget is separate and billed directly by platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
