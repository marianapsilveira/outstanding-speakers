import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowIcon } from './ArrowIcon'

type ButtonVariant =
  | 'lime'
  | 'ghost-light'
  | 'ghost-dark'
  | 'purple'
  | 'ghost-purple'
  | 'violet'
  | 'ghost-violet'

type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  linkState?: object
  className?: string
  showArrow?: boolean
  underlineOnHover?: boolean
  disabled?: boolean
  type?: 'button' | 'submit'
  onClick?: () => void
}

const variantClasses: Record<
  ButtonVariant,
  string
> = {
  lime:
    'bg-lime text-text-dark hover:bg-lime-hover border border-lime',

  'ghost-light':
    'bg-transparent text-white border border-white/60 hover:bg-white/10 hover:border-white',

  'ghost-dark':
    'bg-transparent text-text-dark border border-text-dark/30 hover:bg-text-dark/5 hover:border-text-dark/50',

  purple:
    'bg-purple-dark text-white border border-purple-dark hover:bg-purple',

  'ghost-purple':
    'bg-transparent text-text-dark border border-text-dark/40 hover:bg-text-dark/5 hover:border-text-dark/60',

  violet:
    'bg-primary-violet text-text-light border border-primary-violet hover:bg-text-violet',

  'ghost-violet':
    'bg-transparent text-text-violet border border-text-violet/50 hover:bg-text-violet/5 hover:border-text-violet',
}

const sizeClasses: Record<
  ButtonSize,
  string
> = {
  sm: 'px-5 py-2.5 text-xs',
  md: 'px-6 py-3 text-xs',
  lg: 'px-8 py-3.5 text-sm',
}

export function Button({
  children,
  variant = 'lime',
  size = 'md',
  href,
  linkState,
  className = '',
  showArrow = false,
  underlineOnHover = false,
  disabled = false,
  type = 'button',
  onClick,
}: ButtonProps) {
  const classes = `
    group/button
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-full
    font-mono
    font-medium
    uppercase
    tracking-[0.16em]
    transition-all
    duration-300
    disabled:cursor-not-allowed
    disabled:opacity-60
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${className}
  `

  const content = (
    <>
      <span
        className={
          underlineOnHover
            ? `
              relative
              after:absolute
              after:left-0
              after:bottom-[-3px]
              after:h-px
              after:w-full
              after:origin-left
              after:scale-x-0
              after:bg-current
              after:transition-transform
              after:duration-300
              after:ease-out
              group-hover/button:after:scale-x-100
            `
            : undefined
        }
      >
        {children}
      </span>

      {showArrow && (
        <ArrowIcon
          className="
            h-3.5 w-3.5
            transition-transform
            duration-300
            ease-out
            group-hover/button:translate-x-[3px]
          "
        />
      )}
    </>
  )

  if (href) {
    return (
      <Link
        to={href}
        state={linkState}
        className={classes}
      >
        {content}
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {content}
    </button>
  )
}