"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface PageHeroProps {
  title: string
  tagline: string
  breadcrumbs: { label: string; href?: string }[]
}

export function PageHero({ title, tagline, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[45vh] items-center justify-center overflow-hidden pt-20">
      {/* Glow orbs */}
      <div className="animate-glow-pulse absolute top-1/3 left-1/4 -z-10 h-[350px] w-[350px] rounded-full bg-primary/10 blur-[120px]" />
      <div
        className="animate-glow-pulse absolute right-1/4 bottom-1/4 -z-10 h-[250px] w-[250px] rounded-full bg-accent/8 blur-[100px]"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Breadcrumbs */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex items-center justify-center gap-1 text-sm text-muted-foreground"
        >
          {breadcrumbs.map((crumb, i) => (
            <span key={crumb.label} className="flex items-center gap-1">
              {i > 0 && <ChevronRight size={14} className="text-muted-foreground/50" />}
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="transition-colors hover:text-foreground"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-accent">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance">
          {title}
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed md:text-xl">
          {tagline}
        </p>
      </div>
    </section>
  )
}
