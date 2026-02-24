"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import {
  Layers,
  TrendingUp,
  Zap,
  Target,
  Users,
  Shield,
} from "lucide-react"

const values = [
  {
    icon: Layers,
    title: "Full-Stack Solutions",
    desc: "From ideation to launch, we handle every layer of your digital presence — apps, marketing, and media.",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Growth",
    desc: "Every strategy is backed by analytics, ensuring measurable, transparent results for your business.",
  },
  {
    icon: Zap,
    title: "AI-Powered Innovation",
    desc: "We integrate cutting-edge AI into apps, marketing automation, and creative workflows.",
  },
  {
    icon: Target,
    title: "Result-Focused Approach",
    desc: "We don't just deliver services — we deliver outcomes. Every engagement is tied to real business metrics.",
  },
  {
    icon: Users,
    title: "Dedicated Teams",
    desc: "Each project gets a dedicated cross-functional team of developers, marketers, and creatives.",
  },
  {
    icon: Shield,
    title: "Trusted & Secure",
    desc: "We follow industry best practices for security, scalability, and code quality across every project.",
  },
]

export function AboutContent() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })

  return (
    <section className="relative py-28 md:py-36">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 transition-all duration-700 ${
          isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {/* Mission */}
        <div className="mb-20 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px flex-1 max-w-16 bg-accent/50" />
              <span className="text-xs font-semibold tracking-widest text-accent uppercase">
                Our Mission
              </span>
            </div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
              Building the Future,{" "}
              <span className="text-accent">One Brand at a Time</span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed md:text-lg">
              Favor is your all-in-one innovation hub. We build scalable apps,
              drive measurable digital growth, and craft powerful brand media —
              all under one roof. With Favor Apps, Favor Digital Marketing, and
              Favor Media, we help businesses thrive in the modern world.
            </p>
          </div>
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px flex-1 max-w-16 bg-accent/50" />
              <span className="text-xs font-semibold tracking-widest text-accent uppercase">
                Our Vision
              </span>
            </div>
            <p className="mb-6 text-base text-muted-foreground leading-relaxed md:text-lg">
              We envision a world where every business — from startups to
              enterprises — has access to world-class technology, marketing, and
              creative services. Our goal is to be the single growth partner that
              companies trust to handle all three.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed md:text-lg">
              Our mission is simple: make digital growth accessible, affordable,
              and result-driven. We combine technology with creativity to deliver
              solutions that move the needle.
            </p>
          </div>
        </div>

        {/* Values */}
        <div>
          <div className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-accent/50" />
              <span className="text-xs font-semibold tracking-widest text-accent uppercase">
                Our Values
              </span>
              <div className="h-px w-12 bg-accent/50" />
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              What Drives Us
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((item, i) => (
              <div
                key={item.title}
                className={`glass-card glass-card-hover flex items-start gap-4 rounded-xl p-6 transition-all duration-500 ${
                  isInView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
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
