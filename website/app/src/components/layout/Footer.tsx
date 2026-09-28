import { Link } from 'react-router-dom'
import { Logo } from '@/components/ui/Logo'
import { pagePaddingX } from '@/constants/layout'
import { footerLegal, footerFaq } from '@/data/navigation'

const legalLinkClass = `
  font-mono
  text-[16px]
  font-normal
  uppercase
  tracking-[0.12em]
  text-[#FFC6FA]
  transition-colors
  hover:text-white
`

export function Footer() {
  return (
    <footer
      className="
        footer-section
        relative
        w-full
        overflow-hidden
        bg-[#2B1650]
      "
    >
      <div
        className="
          relative z-10
          flex
          justify-center
          px-6
          pb-[160px]
          pt-[160px]
          md:px-10
        "
      >
        <Logo
          size="footer"
          variant="dark-background"
          asLink={false}
          className="w-full max-w-[min(100%,42rem)] justify-items-center"
        />
      </div>

      <div
        className={`
          relative z-10
          flex w-full
          flex-col
          gap-[24px]
          pb-[40px]
          ${pagePaddingX}
          sm:flex-row
          sm:items-center
          sm:justify-between
        `}
      >
        <div
          className="
            flex
            flex-wrap
            items-center
            gap-x-[40px]
            gap-y-[16px]
          "
        >
          <span className={legalLinkClass}>
            2026@OUTSTANDINGSPEAKERS
          </span>

          {footerLegal.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={legalLinkClass}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          to={footerFaq.href}
          className={`shrink-0 ${legalLinkClass}`}
        >
          {footerFaq.label}
        </Link>
      </div>
    </footer>
  )
}
