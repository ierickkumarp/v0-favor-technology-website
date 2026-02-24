"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Layers, TrendingUp, Zap } from "lucide-react"

export function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.2 })

  return (
    <section id="about" className="relative py-28 md:py-36">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 transition-all duration-700 ${
          isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="mb-6 flex items-center gap-3">
          <div className="h-px flex-1 max-w-16 bg-accent/50" />
          <span className="text-xs font-semibold tracking-widest text-accent uppercase">
            About Favor
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
              Your Technology-Powered{" "}
              <span className="text-accent">Growth Partner</span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed md:text-lg">
              Favor engineers growth through systems, not shortcuts. We combine
              high-code web development with omnichannel performance marketing
              and AI-powered automation to build businesses that scale
              predictably and profitably.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {[
              {
                icon: Layers,
                title: "High-Code Engineering",
                desc: "Production-grade web applications built with Next.js, Node.js, and modern architecture.",
              },
              {
                icon: TrendingUp,
                title: "Performance Marketing",
                desc: "Full-funnel campaigns across Meta, Google, LinkedIn, and more -- optimized for ROAS.",
              },
              {
                icon: Zap,
                title: "AI Automation",
                desc: "Workflow automation using Zapier, Make, n8n, and custom AI integrations.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="glass-card glass-card-hover flex items-start gap-4 rounded-xl p-5 transition-all duration-300"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20">
                  <item.icon size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
