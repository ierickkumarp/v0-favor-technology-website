import Link from "next/link"
import Image from "next/image"
import { Mail, Phone } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

const serviceLinks = [
  { label: "Favor Apps", href: "/services/apps" },
  { label: "Favor Digital Marketing", href: "/services/marketing" },
  { label: "Pricing Plans", href: "/pricing" },
]

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-secondary/15">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2">
              <Image
                src="/images/favor-logo.jpg"
                alt="Favor Logo"
                width={36}
                height={36}
                className="rounded-lg"
                loading="lazy"
              />
              <span className="text-xl font-bold tracking-tight text-foreground">
                Favor
              </span>
            </Link>
            <p className="mb-6 text-sm text-foreground/70 leading-relaxed">
              Your technology-powered growth partner. High-code web apps,
              performance marketing, and AI automation.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/918122347028"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary/40 text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent"
                aria-label="WhatsApp"
              >
                <Phone size={16} />
              </a>
              <a
                href="mailto:contact.sales@favorad.in"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary/40 text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:contact.sales@favorad.in"
                className="text-sm text-muted-foreground transition-colors hover:text-accent"
              >
                contact.sales@favorad.in
              </a>
              <a
                href="https://wa.me/918122347028"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-accent"
              >
                +91 8122347028
              </a>
              <p className="text-xs text-muted-foreground/70">
                We respond within 24 business hours.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-border/30 pt-6">
          <div className="mb-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-muted-foreground">
              {`\u00A9 ${new Date().getFullYear()} Favor. All rights reserved.`}
            </p>
            <p className="text-xs text-muted-foreground">
              Performance. Automation. Scale.
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 pt-4 border-t border-border/30">
            <a href="/privacy" className="text-xs text-muted-foreground/70 hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <span className="text-border/30">•</span>
            <a href="/terms" className="text-xs text-muted-foreground/70 hover:text-accent transition-colors">
              Terms of Service
            </a>
            <span className="text-border/30">•</span>
            <a href="/tool-policy" className="text-xs text-muted-foreground/70 hover:text-accent transition-colors">
              Tool Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
