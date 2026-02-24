"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    const particles: {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
    }[] = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    // Create particles
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(27, 142, 207, ${p.opacity})`
        ctx.fill()
      })

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(15, 76, 117, ${0.15 * (1 - dist / 150)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Glow orbs */}
      <div className="animate-glow-pulse absolute top-1/4 left-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="animate-glow-pulse absolute right-1/4 bottom-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-accent/10 blur-[100px]" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Technology Powered Growth Ecosystem
          </span>
        </div>

        {/* Headline */}
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl text-balance">
          Innovate. Market.{" "}
          <span className="text-accent">Inspire.</span>
        </h1>

        {/* Subheadline */}
        <p className="mb-3 text-lg font-medium tracking-wide text-muted-foreground md:text-xl">
          One Powerhouse — Three Divisions
        </p>
        <p className="mx-auto mb-10 max-w-2xl text-base text-muted-foreground/80 leading-relaxed md:text-lg">
          Apps. Digital Marketing. Media. We build scalable apps, drive
          measurable digital growth, and craft powerful brand media — all under
          one roof.
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="group flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:bg-accent hover:shadow-[0_0_30px_rgba(15,76,117,0.5)]"
          >
            Get Free Strategy Call
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-lg border border-border bg-secondary/40 px-8 py-4 text-sm font-semibold text-foreground transition-all hover:border-accent/40 hover:bg-secondary/70"
          >
            <MessageCircle size={16} />
            Talk to Experts
          </Link>
        </div>

        {/* Stats row */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {[
            { value: "200+", label: "Campaigns Delivered" },
            { value: "150%", label: "Avg ROI Growth" },
            { value: "50+", label: "Happy Clients" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-accent md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-muted-foreground/30 p-1">
          <div className="h-2 w-1 animate-bounce rounded-full bg-accent" />
        </div>
      </div>
    </section>
  )
}
