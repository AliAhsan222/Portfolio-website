import { useEffect, useRef, useState } from 'react'

/**
 * Adds the "is-visible" class to an element once it scrolls into view.
 * Usage: const [ref, visible] = useReveal(); <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
 */
export function useReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(node)
        }
      },
      { threshold }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, visible]
}
