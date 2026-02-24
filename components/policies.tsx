"use client"

import { useInView } from "@/hooks/use-in-view"
import {
  ShieldCheck,
  RefreshCcw,
  FileText,
  HandshakeIcon,
  Lock,
  Clock,
} from "lucide-react"

const policies = [
  {
    icon: ShieldCheck,
    title: "Data Privacy & Security",
    description:
      "All client data is treated with strict confidentiality. We follow industry-standard security protocols and never share your data with third parties.",
  },
  {
    icon: RefreshCcw,
    title: "Refund & Cancellation",
    description:
      "If we fail to meet agreed KPIs within the first 30 days, we offer a prorated refund. Cancel anytime after the minimum contract period with 15 days notice.",
  },
  {
    icon: FileText,
    title: "Transparent Reporting",
    description:
      "You get full access to ad accounts, dashboards, and analytics. We believe in complete transparency -- no hidden spend, no black-box reporting.",
  },
  {
    icon: HandshakeIcon,
    title: "Service Agreement",
    description:
      "Every engagement starts with a signed scope-of-work detailing deliverables, timelines, and payment terms. No surprises.",
  },
  {
    icon: Lock,
    title: "IP & Ownership",
    description:
      "All work product, creatives, code, and campaigns belong to you. We build assets that stay with your business.",
  },
  {
    icon: Clock,
    title: "Response Time SLA",
    description:
      "Critical issues are addressed within 4 hours. Standard queries within 24 hours. Your dedicated account manager is always reachable.",
  },
]

export function Policies() {
  const { ref, isInView } = useInView()

  return (
    <section className="relative py-28 md:py-36">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/4 blur-[100px]" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-6xl px-6">
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isInView ? "animate-fade-in-up" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-accent/50" />
            <span className="text-xs font-semibold tracking-widest text-accent uppercase">
              Our Policies
            </span>
            <div className="h-px w-12 bg-accent/50" />
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Built on Trust & Transparency
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground leading-relaxed">
            We operate with clear terms, honest reporting, and policies designed
            to protect your investment.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {policies.map((policy, i) => {
            const Icon = policy.icon
            return (
              <div
                key={policy.title}
                className={`glass-card glass-card-hover group rounded-2xl p-8 transition-all duration-500 ${
                  isInView
                    ? "animate-fade-in-up"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/15 transition-colors group-hover:bg-primary/25">
                  <Icon size={20} className="text-accent" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-foreground">
                  {policy.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {policy.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
