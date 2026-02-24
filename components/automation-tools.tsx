"use client"

import { useInViewRef } from "@/hooks/use-in-view"
import {
  Zap,
  Workflow,
  Bot,
  MessageSquare,
  BarChart3,
  Mail,
  Database,
  Globe,
} from "lucide-react"

const tools = [
  { name: "Zapier", description: "Connect 6,000+ apps", icon: Zap },
  { name: "Make (Integromat)", description: "Visual workflow automation", icon: Workflow },
  { name: "n8n", description: "Self-hosted AI workflows", icon: Bot },
  { name: "WAPI AI", description: "WhatsApp business automation", icon: MessageSquare },
  { name: "Google Analytics 4", description: "Advanced event tracking", icon: BarChart3 },
  { name: "Mailchimp / Brevo", description: "Email drip sequences", icon: Mail },
  { name: "HubSpot / Zoho CRM", description: "Lead pipeline management", icon: Database },
  { name: "Custom Webhooks", description: "Real-time data sync", icon: Globe },
]

export function AutomationTools() {
  const { ref, isInView } = useInViewRef()

  return (
    <section className="relative py-32 md:py-40">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-primary/4 blur-[120px]" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-6xl px-6">
        <div
          className={`mb-20 text-center transition-all duration-700 ${
            isInView ? "animate-fade-in-up" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-accent/50" />
            <span className="text-xs font-semibold tracking-widest text-accent uppercase">
              Our Stack
            </span>
            <div className="h-px w-12 bg-accent/50" />
          </div>
          <h2 className="mb-5 text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Automation & Tools We Deploy
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground leading-relaxed">
            We integrate powerful automation platforms into your growth stack
            -- connecting ads, CRM, email, WhatsApp, and analytics into one
            system.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool, i) => {
            const Icon = tool.icon
            return (
              <div
                key={tool.name}
                className={`glass-card glass-card-hover group flex items-start gap-4 rounded-xl p-6 transition-all duration-500 ${
                  isInView
                    ? "animate-fade-in-up"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 transition-colors group-hover:bg-accent/20">
                  <Icon size={18} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
