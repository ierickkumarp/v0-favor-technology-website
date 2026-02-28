"use client"

import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"

export function Hero() {

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-background pt-20">
      <div className="relative z-10 mx-auto max-w-6xl px-6 w-full">
        {/* Headline */}
        <h1 className="mb-8 text-6xl font-bold tracking-tight text-foreground sm:text-7xl md:text-8xl lg:text-[6rem] leading-[1.05]">
          We Engineer Growth{" "}
          <span className="text-accent">Through Systems</span>
        </h1>

        {/* Subtitle - 60% width */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 text-xl font-medium tracking-wide text-foreground/90">
            High-Code Web Applications. Omnichannel Marketing. AI Automation.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Favor combines production-grade web engineering with full-funnel
            performance marketing to help ambitious brands scale predictably
            and profitably.
          </p>
        </div>

        {/* CTAs - aligned left */}
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-4">
          <Link
            href="/pricing"
            className="group flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground transition-all hover:bg-[#d4e8f0] hover:shadow-lg"
          >
            View Plans
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-lg border border-primary/40 bg-transparent px-8 py-4 text-sm font-semibold text-accent transition-all hover:bg-primary/20"
          >
            <MessageCircle size={16} />
            Book Strategy Call
          </Link>
        </div>

      </div>
    </section>
  )
}
