import { useEffect, useRef, useState, type RefObject } from "react"

/**
 * useInView supports two calling conventions:
 *
 * 1) Pass an existing ref:
 *    const ref = useRef<HTMLDivElement>(null)
 *    const isInView = useInView(ref, { threshold: 0.2 })
 *
 * 2) Let the hook create its own ref (no args or just options):
 *    const { ref, isInView } = useInView({ threshold: 0.2 })
 */
export function useInView(
  refOrOptions?: RefObject<HTMLElement | null> | IntersectionObserverInit,
  maybeOptions?: IntersectionObserverInit
): boolean | { ref: RefObject<HTMLElement | null>; isInView: boolean } {
  const internalRef = useRef<HTMLElement | null>(null)
  const [isInView, setIsInView] = useState(false)

  // Determine whether the first arg is a ref or options
  const isRef =
    refOrOptions != null &&
    typeof refOrOptions === "object" &&
    "current" in refOrOptions

  const resolvedRef = isRef
    ? (refOrOptions as RefObject<HTMLElement | null>)
    : internalRef
  const resolvedOptions = isRef
    ? maybeOptions
    : (refOrOptions as IntersectionObserverInit | undefined)

  useEffect(() => {
    const el = resolvedRef.current
    if (!el) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
        observer.unobserve(el)
      }
    }, resolvedOptions)

    observer.observe(el)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resolvedRef, resolvedOptions])

  // Convention 1: caller passed a ref -> return a simple boolean
  if (isRef) {
    return isInView
  }

  // Convention 2: no ref passed -> return object with ref + boolean
  return { ref: internalRef, isInView }
}
