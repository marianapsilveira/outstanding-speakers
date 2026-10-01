import { Link } from 'react-router-dom'
import logoForLightBackground from '../../../../../brand/assets/logo-light-background.svg'
import logoForDarkBackground from '../../../../../brand/assets/logo-dark-background.svg'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'footer'
  variant?: 'dark-background' | 'light-background'
  asLink?: boolean
  className?: string
}

const sizeClasses = {
  sm: 'h-6 w-auto',
  md: 'h-6 w-auto',
  lg: 'h-8 w-auto md:h-9',
  footer: 'h-auto w-full',
}

export function Logo({
  size = 'sm',
  variant = 'dark-background',
  asLink = true,
  className = '',
}: LogoProps) {
  const showLightBackgroundLogo = variant === 'light-background'
  const imageClass = sizeClasses[size]
  const isFooter = size === 'footer'

  const content = (
    <>
      <img
        src={logoForDarkBackground}
        alt=""
        className={`
          col-start-1 row-start-1
          transition-opacity duration-300 ease-out
          ${imageClass}
          ${showLightBackgroundLogo ? 'opacity-0' : 'opacity-100'}
        `}
        width={218}
        height={24}
      />
      <img
        src={logoForLightBackground}
        alt=""
        className={`
          col-start-1 row-start-1
          transition-opacity duration-300 ease-out
          ${imageClass}
          ${showLightBackgroundLogo ? 'opacity-100' : 'opacity-0'}
        `}
        width={218}
        height={24}
      />
    </>
  )

  const wrapperClass = `
    relative items-center justify-items-center
    ${isFooter ? 'grid w-full' : 'inline-grid'}
    ${className}
  `

  if (!asLink) {
    return (
      <div className={wrapperClass} aria-label="OUTstanding Speakers">
        {content}
      </div>
    )
  }

  return (
    <Link
      to="/"
      className={wrapperClass}
      aria-label="OUTstanding Speakers home"
    >
      {content}
    </Link>
  )
}
