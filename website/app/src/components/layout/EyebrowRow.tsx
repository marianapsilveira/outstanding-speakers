import { type ReactNode } from 'react'
import { pagePaddingX } from '@/constants/layout'

interface EyebrowRowProps {
  left: string
  right?: string
  className?: string
  textClassName?: string
}

/** Eyebrow labels — Sometype Mono Regular, min 20px. */
const eyebrowBase =
  'flex flex-col gap-3 font-mono text-[18px] font-normal uppercase tracking-[0.18em] sm:flex-row sm:items-center sm:justify-between'

export function EyebrowRow({ left, right, className = '', textClassName = '' }: EyebrowRowProps) {
  return (
    <div className={`w-full ${pagePaddingX} ${className}`}>
      <div className={`${eyebrowBase} ${textClassName}`}>
        <span>{left}</span>
        {right && <span className="sm:text-right">{right}</span>}
      </div>
    </div>
  )
}

interface ContentWrapProps {
  children: ReactNode
  className?: string
}

/** 80px padding + 1320px content column. */
export function ContentWrap({ children, className = '' }: ContentWrapProps) {
  return (
    <div className={`w-full ${pagePaddingX} ${className}`}>
      <div className="mx-auto w-full max-w-[1320px]">{children}</div>
    </div>
  )
}

interface FullWidthWrapProps {
  children: ReactNode
  className?: string
}

/** Full viewport editorial width with 80px padding only — no max-width cap. */
export function FullWidthWrap({ children, className = '' }: FullWidthWrapProps) {
  return <div className={`w-full ${pagePaddingX} ${className}`}>{children}</div>
}
