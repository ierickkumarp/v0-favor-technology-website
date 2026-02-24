"use client"

import Link from "next/link"
import { AlertTriangle, ArrowLeft } from "lucide-react"

export default function PlanError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-6">
      <div className="flex max-w-md flex-col items-center text-center">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-destructive/10">
          <AlertTriangle size={28} className="text-destructive" />
        </div>
        <h2 className="mb-2 text-2xl font-bold text-foreground">
          Something went wrong
        </h2>
        <p className="mb-8 text-sm text-muted-foreground leading-relaxed">
          We could not load this pricing plan. Please try again or go back to
          view all plans.
        </p>
        <div className="flex gap-4">
          <button
            onClick={reset}
            className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-accent"
          >
            Try Again
          </button>
          <Link
            href="/pricing"
            className="flex items-center gap-2 rounded-lg border border-border bg-secondary/40 px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-accent/40"
          >
            <ArrowLeft size={14} />
            All Plans
          </Link>
        </div>
      </div>
    </div>
  )
}
