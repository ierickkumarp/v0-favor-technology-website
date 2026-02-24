import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PlanNotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-6">
      <div className="flex max-w-md flex-col items-center text-center">
        <p className="mb-2 text-6xl font-bold text-accent">404</p>
        <h2 className="mb-2 text-2xl font-bold text-foreground">
          Plan Not Found
        </h2>
        <p className="mb-8 text-sm text-muted-foreground leading-relaxed">
          The pricing plan you are looking for does not exist. View our
          available plans below.
        </p>
        <Link
          href="/pricing"
          className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-accent"
        >
          <ArrowLeft size={14} />
          View All Plans
        </Link>
      </div>
    </div>
  )
}
