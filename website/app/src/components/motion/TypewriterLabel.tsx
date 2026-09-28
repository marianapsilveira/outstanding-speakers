import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

type TypewriterLabelProps = {
  children: string
  className?: string
  delay?: number
  speed?: number
  once?: boolean
}

export function getSequentialTypingDelay(
  labels: string[],
  currentIndex: number,
  speed: number,
  gap: number,
) {
  return labels
    .slice(0, currentIndex)
    .reduce(
      (total, previousLabel) =>
        total + previousLabel.length * speed + gap,
      0,
    )
}

export function TypewriterLabel({
  children,
  className = '',
  delay = 0,
  speed = 32,
  once = true,
}: TypewriterLabelProps) {
  const triggerRef = useRef<HTMLSpanElement>(null)

  const isInView = useInView(triggerRef, {
    amount: 0.4,
    once,
    margin: '0px 0px -5% 0px',
  })

  const [visibleCharacters, setVisibleCharacters] = useState(0)
  const hasCompletedRef = useRef(false)

  useEffect(() => {
    if (!isInView) {
      if (!once) {
        setVisibleCharacters(0)
        hasCompletedRef.current = false
      }

      return
    }

    if (once && hasCompletedRef.current) {
      return
    }

    setVisibleCharacters(0)

    let intervalId: ReturnType<typeof window.setInterval> | undefined

    const timeoutId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        setVisibleCharacters((current) => {
          const next = current + 1

          if (next >= children.length) {
            if (intervalId) {
              window.clearInterval(intervalId)
            }

            hasCompletedRef.current = true
            return children.length
          }

          return next
        })
      }, speed)
    }, delay)

    return () => {
      window.clearTimeout(timeoutId)

      if (intervalId) {
        window.clearInterval(intervalId)
      }
    }
  }, [children, delay, isInView, once, speed])

  const visibleText = children.slice(0, visibleCharacters)

  return (
    <span
      ref={triggerRef}
      className={`relative inline-block ${className}`}
      aria-label={children}
    >
      {/* Reserves the final dimensions so the layout does not move */}
      <span className="invisible" aria-hidden="true">
        {children}
      </span>

      {/* Visible typing layer */}
      <span
        className="absolute inset-0 block whitespace-nowrap"
        aria-hidden="true"
      >
        {visibleText}
      </span>
    </span>
  )
}