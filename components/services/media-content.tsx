"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import {
  Palette,
  Video,
  Camera,
  Tv,
  MessageSquare,
  Calendar,
  CheckCircle2,
} from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Brand Identity Design",
    desc: "Complete brand identity systems including logos, color palettes, typography, and brand guidelines.",
  },
  {
    icon: Video,
    title: "Video Production & Editing",
    desc: "High-quality promotional videos, corporate films, and ad films from concept to final cut.",
  },
  {
    icon: Camera,
    title: "Photography & Visual Content",
    desc: "Professional product photography, corporate shoots, and visual content creation.",
  },
  {
    icon: Tv,
    title: "Ad Campaigns (TV, Digital, Print)",
    desc: "Multi-channel ad campaigns designed for maximum reach and brand impact.",
  },
  {
    icon: MessageSquare,
    title: "Social Media Content",
    desc: "Engaging social media graphics, reels, stories, and campaign creatives.",
  },
  {
    icon: Calendar,
    title: "Event Coverage & Live Streaming",
    desc: "Professional event documentation, photography, videography, and live streaming services.",
  },
]

const process = [
  {
    step: "01",
    title: "Creative Brief",
    desc: "We understand your brand, goals, and audience to define the creative direction.",
  },
  {
    step: "02",
    title: "Concept & Script",
    desc: "Our creative team develops concepts, storyboards, and scripts for your approval.",
  },
  {
    step: "03",
    title: "Production & Shoot",
    desc: "Professional production with state-of-the-art equipment and experienced crew.",
  },
  {
    step: "04",
    title: "Editing & Output",
    desc: "Post-production magic — editing, color grading, motion graphics, and final delivery.",
  },
  {
    step: "05",
    title: "Promotion & Feedback",
    desc: "We help distribute your content and iterate based on audience feedback.",
  },
]

const whyChoose = [
  "Passionate creative team with fresh perspectives",
  "High-quality production standards across every project",
  "Tailored storytelling strategies for your brand",
  "On-time project delivery, every time",
  "End-to-end creative solutions from concept to promotion",
]

export function MediaContent() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })

  return (
    <div ref={ref} className="relative">
      {/* Services */}
      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-accent/50" />
              <span className="text-xs font-semibold tracking-widest text-accent uppercase">
                Our Services
              </span>
              <div className="h-px w-12 bg-accent/50" />
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              Full-Service Creative Agency
            </h2>
            <p className="mx-auto max-w-2xl text-base text-muted-foreground leading-relaxed">
              From promotional videos and ad campaigns to brand identity and
              event coverage, we communicate your message with clarity and
              impact.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`glass-card glass-card-hover flex flex-col rounded-2xl p-7 transition-all duration-500 ${
                  isInView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
                  <service.icon size={24} className="text-accent" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Process */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-16 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-accent/50" />
              <span className="text-xs font-semibold tracking-widest text-accent uppercase">
                Our Process
              </span>
              <div className="h-px w-12 bg-accent/50" />
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              How We Create
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

            <div className="flex flex-col gap-12">
              {process.map((step, i) => (
                <div
                  key={step.step}
                  className={`relative flex items-start gap-6 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Step number */}
                  <div className="absolute left-0 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-background text-sm font-bold text-accent md:relative md:left-auto">
                    {step.step}
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-16 glass-card rounded-2xl p-6 md:ml-0 md:w-[calc(50%-2rem)] ${
                      isInView
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    } transition-all duration-500`}
                    style={{ transitionDelay: `${i * 150}ms` }}
                  >
                    <h3 className="mb-2 text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-accent/50" />
              <span className="text-xs font-semibold tracking-widest text-accent uppercase">
                Why Favor Media
              </span>
              <div className="h-px w-12 bg-accent/50" />
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              Why Choose Us
            </h2>
          </div>

          <div className="glass-card rounded-2xl p-8">
            <div className="flex flex-col gap-4">
              {whyChoose.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-accent"
                  />
                  <p className="text-base text-foreground leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
