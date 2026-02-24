export interface PlatformBreakdown {
  name: string
  monthlyCost: number
  included: boolean
}

export interface AddOn {
  id: string
  name: string
  price: number
  description: string
}

export interface Plan {
  slug: string
  name: string
  tagline: string
  startingPrice: number
  minContract: string
  bestFor: string
  description: string
  highlights: string[]
  platforms: PlatformBreakdown[]
  addOns: AddOn[]
}

export const plans: Plan[] = [
  {
    slug: "growth",
    name: "Growth Starter",
    tagline: "Launch. Learn. Optimise.",
    startingPrice: 45000,
    minContract: "3 months",
    bestFor: "Early-stage brands & local businesses wanting structured digital entry",
    description:
      "Start your digital marketing journey with a focused approach. We build your ad infrastructure from the ground up, run test campaigns, and optimize based on real data.",
    highlights: [
      "2 core ad platforms (Meta + Google Search)",
      "Campaign setup, creative direction & copywriting",
      "Monthly performance reporting with insights",
      "Landing page audit & recommendations",
      "Dedicated account manager",
    ],
    platforms: [
      { name: "Meta Ads (Facebook + Instagram)", monthlyCost: 20000, included: true },
      { name: "Google Search Ads", monthlyCost: 15000, included: true },
      { name: "SEO (On-page + Technical)", monthlyCost: 10000, included: false },
    ],
    addOns: [
      { id: "linkedin-growth", name: "LinkedIn Ads", price: 15000, description: "B2B lead generation campaigns on LinkedIn" },
      { id: "bing-growth", name: "Bing Ads", price: 8000, description: "Reach Microsoft/Bing search audiences" },
      { id: "email-growth", name: "Email Marketing Setup", price: 10000, description: "Email template design + first 3 drip sequences" },
      { id: "whatsapp-growth", name: "WhatsApp Automation", price: 12000, description: "Automated WhatsApp flows for leads & follow-ups" },
    ],
  },
  {
    slug: "scale",
    name: "Scale Pro",
    tagline: "Scale what works. Cut what doesn't.",
    startingPrice: 65000,
    minContract: "6 months",
    bestFor: "Growing brands ready to scale ad spend across channels with automation",
    description:
      "Move beyond experiments. We build full-funnel campaigns across multiple platforms, integrate automations, and drive consistent MQL/SQL pipelines.",
    highlights: [
      "4 ad platforms (Meta, Google Search, Display, + 1 more)",
      "Full-funnel strategy (TOFU / MOFU / BOFU)",
      "CRM integration & lead scoring setup",
      "Bi-weekly performance reviews",
      "A/B testing on creatives & landing pages",
      "Retargeting & lookalike audience setup",
    ],
    platforms: [
      { name: "Meta Ads (Facebook + Instagram)", monthlyCost: 20000, included: true },
      { name: "Google Search Ads", monthlyCost: 15000, included: true },
      { name: "Google Display / YouTube", monthlyCost: 12000, included: true },
      { name: "SEO (Full-Service)", monthlyCost: 15000, included: true },
      { name: "Email Marketing + Drip", monthlyCost: 8000, included: false },
    ],
    addOns: [
      { id: "linkedin-scale", name: "LinkedIn Ads", price: 15000, description: "B2B lead generation campaigns on LinkedIn" },
      { id: "bing-scale", name: "Bing Ads", price: 8000, description: "Reach Microsoft/Bing search audiences" },
      { id: "whatsapp-scale", name: "WhatsApp Automation", price: 12000, description: "Automated WhatsApp flows for leads & follow-ups" },
      { id: "crm-scale", name: "CRM Automation (Zapier/Make)", price: 15000, description: "Auto-sync leads, trigger workflows, score leads" },
      { id: "funnel-scale", name: "Advanced Funnel Builder", price: 20000, description: "Custom multi-step landing funnels with tracking" },
    ],
  },
  {
    slug: "dominate",
    name: "Dominate",
    tagline: "Outrank. Outspend. Outperform.",
    startingPrice: 95000,
    minContract: "6 months",
    bestFor: "Established brands needing full-stack digital dominance with AI & automation",
    description:
      "The full arsenal. Omnichannel advertising, AI-powered automation, CRM workflows, advanced retargeting, and real-time dashboards. We become your external growth team.",
    highlights: [
      "6+ ad platforms (Meta, Google, LinkedIn, Bing, YouTube, Shopping)",
      "AI workflow automation (n8n / Make / Zapier)",
      "WhatsApp + Email automation funnels",
      "Custom CRM setup & lead pipeline management",
      "Weekly strategy calls + dedicated team",
      "Live reporting dashboard",
      "CRO + heatmap analysis",
    ],
    platforms: [
      { name: "Meta Ads (Facebook + Instagram)", monthlyCost: 20000, included: true },
      { name: "Google Search Ads", monthlyCost: 15000, included: true },
      { name: "Google Display / YouTube", monthlyCost: 12000, included: true },
      { name: "Google Shopping", monthlyCost: 10000, included: true },
      { name: "LinkedIn Ads", monthlyCost: 15000, included: true },
      { name: "Bing Ads", monthlyCost: 8000, included: true },
      { name: "SEO (Full-Service + Content)", monthlyCost: 20000, included: true },
      { name: "Email + WhatsApp Automation", monthlyCost: 15000, included: true },
    ],
    addOns: [
      { id: "crm-dom", name: "Advanced CRM Automation", price: 20000, description: "Full CRM pipeline with AI scoring & auto-assignment" },
      { id: "funnel-dom", name: "Advanced Funnel Builder", price: 20000, description: "Custom multi-step landing funnels with tracking" },
      { id: "ai-dom", name: "AI Content Generation", price: 15000, description: "AI-powered ad copy, blog posts, and social content" },
      { id: "reporting-dom", name: "Custom BI Dashboard", price: 25000, description: "Live business intelligence dashboard with all KPIs" },
    ],
  },
  {
    slug: "ecommerce",
    name: "E-Commerce Performance",
    tagline: "Sell more. Spend smarter.",
    startingPrice: 75000,
    minContract: "3 months",
    bestFor: "D2C and e-commerce brands focused on ROAS, product feeds & shopping ads",
    description:
      "Purpose-built for online stores. We optimize product feeds, run shopping campaigns, retarget abandoned carts, and integrate your store with ad platforms for maximum ROAS.",
    highlights: [
      "Google Shopping + Meta Catalog setup",
      "Dynamic product retargeting",
      "Abandoned cart recovery flows (Email + WhatsApp)",
      "ROAS-focused campaign optimization",
      "Product feed management & optimization",
      "Marketplace integration support (Amazon, Flipkart)",
    ],
    platforms: [
      { name: "Meta Ads (Facebook + Instagram)", monthlyCost: 20000, included: true },
      { name: "Google Shopping", monthlyCost: 15000, included: true },
      { name: "Google Search Ads", monthlyCost: 12000, included: true },
      { name: "SEO (E-commerce focused)", monthlyCost: 15000, included: true },
      { name: "Email + WhatsApp Automation", monthlyCost: 12000, included: true },
    ],
    addOns: [
      { id: "linkedin-ecom", name: "LinkedIn Ads", price: 15000, description: "B2B wholesale or lead gen for e-commerce" },
      { id: "bing-ecom", name: "Bing Shopping", price: 10000, description: "Bing product feed & shopping campaigns" },
      { id: "crm-ecom", name: "CRM + Order Automation", price: 15000, description: "Post-purchase flows, repeat buyer targeting" },
      { id: "ai-ecom", name: "AI Product Descriptions", price: 10000, description: "AI-generated product titles & descriptions at scale" },
    ],
  },
]

export function getPlanBySlug(slug: string): Plan | undefined {
  return plans.find((p) => p.slug === slug)
}

export function formatINR(amount: number | undefined | null): string {
  const value = typeof amount === "number" && !Number.isNaN(amount) ? amount : 0
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value)
}
