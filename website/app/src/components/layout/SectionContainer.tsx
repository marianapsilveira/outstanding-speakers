import { type ReactNode } from 'react'

interface SectionLabelProps {
  left?: string
  right?: string
  variant?: 'light' | 'dark' | 'muted-on-light' | 'muted-on-dark'
  className?: string
}

const variantClasses = {
  light: 'text-white/70',
  dark: 'text-ink-muted',
  'muted-on-light': 'text-muted',
  'muted-on-dark': 'text-muted-light',
}

export function SectionLabel({
  left,
  right,
  variant = 'muted-on-light',
  className = '',
}: SectionLabelProps) {
  if (!left && !right) return null

  return (
    <div
      className={`flex flex-col gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.22em] sm:flex-row sm:items-center sm:justify-between ${variantClasses[variant]} ${className}`}
    >
      {left && <span>{left}</span>}
      {right && <span className="sm:text-right">{right}</span>}
    </div>
  )
}

interface SectionContainerProps {
  children: ReactNode
  className?: string
  innerClassName?: string
  as?: 'section' | 'div'
  id?: string
}

export function SectionContainer({
  children,
  className = '',
  innerClassName = '',
  as: Tag = 'section',
  id,
}: SectionContainerProps) {
  return (
    <Tag id={id} className={`relative w-full ${className}`}>
      <div
        className={`mx-auto w-full max-w-(--max-width-content) px-5 sm:px-8 lg:px-12 xl:px-16 ${innerClassName}`}
      >
        {children}
      </div>
    </Tag>
  )
}
