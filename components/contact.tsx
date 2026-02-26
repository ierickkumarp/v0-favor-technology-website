"use client"

import { useRef, useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { useInView } from "@/hooks/use-in-view"
import { Mail, Phone, Send } from "lucide-react"

const services = [
  { slug: "growth", name: "Growth Starter (Marketing)" },
  { slug: "scale", name: "Scale Pro (Marketing)" },
  { slug: "dominate", name: "Dominate (Marketing)" },
  { slug: "ecommerce", name: "E-Commerce Performance" },
  { slug: "custom", name: "Custom Web Development" },
]

export function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.15 })
  const [submitted, setSubmitted] = useState(false)
  const searchParams = useSearchParams()
  const [selectedPlan, setSelectedPlan] = useState("")
  const [planLocked, setPlanLocked] = useState(false)

  useEffect(() => {
    const planParam = searchParams.get("plan")
    if (planParam) {
      const matchedService = services.find((s) => s.slug === planParam)
      if (matchedService) {
        setSelectedPlan(matchedService.name)
        setPlanLocked(true)
      }
    }
  }, [searchParams])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section className="relative py-14 md:py-20">
      <div className="animate-glow-pulse absolute left-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[150px]" />

      <div
        ref={ref}
        className={`relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-5">
          {/* Form */}
          <div className="glass-card rounded-2xl p-8 lg:col-span-3">
            {submitted ? (
              <div className="flex h-full min-h-[300px] flex-col items-center justify-center gap-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                  <Send size={24} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Message Sent!
                </h3>
                <p className="text-sm text-muted-foreground">
                  We will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-medium tracking-wide text-muted-foreground uppercase"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full rounded-lg border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-xs font-medium tracking-wide text-muted-foreground uppercase"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full rounded-lg border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-medium tracking-wide text-muted-foreground uppercase"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="w-full rounded-lg border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-xs font-medium tracking-wide text-muted-foreground uppercase"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    required
                    value={selectedPlan}
                    onChange={(e) => setSelectedPlan(e.target.value)}
                    disabled={planLocked}
                    className={`w-full rounded-lg border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30 ${
                      planLocked ? "opacity-75 cursor-not-allowed" : ""
                    }`}
                  >
                    <option value="" className="bg-background text-muted-foreground">
                      Select a service
                    </option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.name} className="bg-background text-foreground">
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-medium tracking-wide text-muted-foreground uppercase"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="Tell us about your project..."
                    className="w-full resize-none rounded-lg border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-accent hover:shadow-[0_0_30px_rgba(33,150,243,0.4)]"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="glass-card glass-card-hover rounded-2xl p-7 transition-all duration-300">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
                <Mail size={18} className="text-accent" />
              </div>
              <h3 className="mb-1 text-sm font-semibold text-foreground">
                Email Us
              </h3>
              <a
                href="mailto:contact.sales@favorad.in"
                className="text-sm text-accent hover:underline"
              >
                contact.sales@favorad.in
              </a>
            </div>

            <div className="glass-card glass-card-hover rounded-2xl p-7 transition-all duration-300">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
                <Phone size={18} className="text-accent" />
              </div>
              <h3 className="mb-1 text-sm font-semibold text-foreground">
                Call / WhatsApp
              </h3>
              <a
                href="https://wa.me/918122347028"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:underline"
              >
                +91 8122347028
              </a>
            </div>

            <div className="glass-card rounded-2xl p-7">
              <h3 className="mb-3 text-sm font-semibold text-foreground">
                Response Time
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We respond within 24 business hours. For urgent matters, reach us
                directly on WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
