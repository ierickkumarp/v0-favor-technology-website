import { useEffect, useRef, useState, type RefObject } from "react"

/**
 * Convention A — caller owns the ref:
 *   const ref = useRef<HTMLDivElement>(null)
 *   const isInView = useInView(ref, { threshold: 0.2 })
 */
export function useInView(
  ref: RefObject<HTMLElement | null>,
  options?: IntersectionObserverInit
): boolean {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const el = ref?.current
    if (!el) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
        observer.unobserve(el)
      }
    }, options)

    observer.observe(el)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, options])

  return isInView
}

/**
 * Convention B — hook creates and returns the ref:
 *   const { ref, isInView } = useInViewRef({ threshold: 0.2 })
 */
export function useInViewRef(options?: IntersectionObserverInit): {
  ref: RefObject<HTMLElement | null>
  isInView: boolean
} {
  const ref = useRef<HTMLElement | null>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
        observer.unobserve(el)
      }
    }, options)

    observer.observe(el)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options])

  return { ref, isInView }
}
