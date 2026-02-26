"use client"

import { Suspense } from "react"
import { Contact } from "./contact"

export function ContactWrapper() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <Contact />
    </Suspense>
  )
}
