'use client'

import { useRef } from 'react'
import { useInView } from '@/hooks/use-in-view'
import {
  Store,
  Briefcase,
  GraduationCap,
  Stethoscope,
  Utensils,
  Truck,
  Zap,
  Home,
  FlaskConical,
  DollarSign,
  Globe,
  Printer,
} from 'lucide-react'

const industries = [
  { icon: Store, label: 'E-Commerce & Retail' },
  { icon: Briefcase, label: 'B2B & SaaS' },
  { icon: GraduationCap, label: 'Education & EdTech' },
  { icon: Stethoscope, label: 'Healthcare & Medical' },
  { icon: Utensils, label: 'Food & Beverage' },
  { icon: Truck, label: 'Logistics & Supply Chain' },
  { icon: Zap, label: 'Technology & AI' },
  { icon: Home, label: 'Real Estate & Construction' },
  { icon: FlaskConical, label: 'Chemical & Pharma' },
  { icon: DollarSign, label: 'Financial Services' },
  { icon: Globe, label: 'Hospitality & Travel' },
  { icon: Printer, label: 'Creative & Services' },
]

export function IndustriesServed() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })

  return (
    <section ref={ref} className="relative py-14 md:py-20">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-accent/50" />
            <span className="text-xs font-semibold tracking-widest text-accent uppercase">
              Wide Industry Experience
            </span>
            <div className="h-px w-12 bg-accent/50" />
          </div>
          <h2 className="mb-5 text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Industries We Serve
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground leading-relaxed">
            We've worked across diverse sectors. Regardless of your industry, our
            framework adapts to your unique market dynamics and growth challenges.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {industries.map((industry, i) => {
            const Icon = industry.icon
            return (
              <div
                key={industry.label}
                className={`glass-card rounded-xl p-5 text-center transition-all duration-300 ${
                  isInView
                    ? 'animate-fade-in-up'
                    : 'opacity-0 translate-y-4'
                }`}
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15">
                  <Icon size={18} className="text-accent" />
                </div>
                <p className="text-[11px] font-medium text-foreground leading-tight">
                  {industry.label}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
