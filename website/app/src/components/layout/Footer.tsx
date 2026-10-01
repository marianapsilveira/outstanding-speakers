import { Logo } from '@/components/ui/Logo'
import { pagePaddingX } from '@/constants/layout'
import { footerDescription } from '@/constants/typography'

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
        className={`
          relative z-10
          flex
          flex-col
          items-center
          ${pagePaddingX}
          pb-[40px]
          pt-[160px]
        `}
      >
        <Logo
          size="footer"
          variant="dark-background"
          asLink={false}
          className="w-full max-w-[42rem]"
        />

        <p
          className={`
            mt-[160px]
            text-center
            ${footerDescription}
          `}
        >
          <span className="block sm:inline">
            Copyright © 2026 OUTstanding Speakers.
          </span>
          {' '}
          <span className="block sm:inline">
            All rights reserved.
          </span>
        </p>
      </div>
    </footer>
  )
}
