"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import {
  Store,
  ShoppingBag,
  FlaskConical,
  Printer,
  Building2,
  GraduationCap,
  Car,
  PartyPopper,
  Truck,
  Briefcase,
  Stethoscope,
} from "lucide-react"

const clients = [
  { name: "DB Office", icon: Store },
  { name: "Crazy Crackers", icon: ShoppingBag },
  { name: "Amanah Chem Pharm", icon: FlaskConical },
  { name: "Bold Print Studio", icon: Printer },
  { name: "Karangal Institution", icon: Building2 },
  { name: "Skillful Learning", icon: GraduationCap },
  { name: "Carage Car Care", icon: Car },
  { name: "Pulse Celebrations", icon: PartyPopper },
  { name: "FoodLogixs", icon: Truck },
  { name: "Educadd", icon: Briefcase },
  { name: "Dr. Clinic", icon: Stethoscope },
]

export function TrustedBy() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.3 })

  return (
    <section className="relative py-16 md:py-20">
      <div
        ref={ref}
        className={`mx-auto max-w-5xl px-6 transition-all duration-700 ${
          isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <p className="mb-8 text-center text-xs font-semibold tracking-widest text-muted-foreground/60 uppercase">
          Trusted by ambitious brands across India
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 md:gap-x-12">
          {clients.map((client) => {
            const Icon = client.icon
            return (
              <div
                key={client.name}
                className="flex items-center gap-2 text-muted-foreground/50 transition-colors hover:text-muted-foreground/80"
              >
                <Icon size={16} strokeWidth={1.5} />
                <span className="text-xs font-medium tracking-wide whitespace-nowrap">
                  {client.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
