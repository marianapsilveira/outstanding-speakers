import { Button } from '@/components/ui/Button'
import {
  TypewriterLabel,
  getSequentialTypingDelay,
} from '@/components/motion/TypewriterLabel'
import { RevealOnScroll } from '@/components/motion/RevealOnScroll'
import { pagePaddingX, typewriterEyebrowRow } from '@/constants/layout'
import { eyebrowText } from '@/constants/typography'

const sectionLabels = [
  'For the questions before',
  'And the everyday practice after',
]

const typingSpeed = 30
const typingGap = 80

export function ResourcesSection() {
  return (
    <section
      className="
        resources-section
        relative
        w-full
        overflow-hidden
        pb-[clamp(10rem,22vh,16rem)]
      "
    >
      <div
        className="
          resources-rainbow
          pointer-events-none
          absolute inset-0
          z-0
        "
        aria-hidden="true"
      />

      <div
        className="
          pointer-events-none
          absolute inset-0
          z-0
          bg-[#0A0A0A]/55
        "
        aria-hidden="true"
      />

      <div
        className={`
          relative z-20
          ${typewriterEyebrowRow}
          pt-[40px]
          ${pagePaddingX}
        `}
      >
        {sectionLabels.map((label, index) => {
          const delay = getSequentialTypingDelay(
            sectionLabels,
            index,
            typingSpeed,
            typingGap,
          )

          return (
            <TypewriterLabel
              key={label}
              delay={delay}
              speed={typingSpeed}
              once={false}
              className={`${eyebrowText} text-white`}
            >
              {label}
            </TypewriterLabel>
          )
        })}
      </div>

      <div
        className="
          relative z-10
          mx-auto
          mt-[160px]
          w-full
          max-w-[1320px]
          px-6
          md:px-10
          min-[1400px]:px-0
        "
      >
        <RevealOnScroll>
          <h2
            className="
              font-display
              text-[clamp(2.75rem,5.2vw,5rem)]
              font-normal
              leading-[1.04]
              tracking-normal
              text-white
            "
          >
            <span className="lg:hidden">
              Resources for before, during and after the conversation.
            </span>
            <span className="hidden lg:block">
              Resources for before, during
              <br />
              and after the conversation.
            </span>
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1} className="mt-[32px]">
          <p
            className="
              font-sans
              text-[18px]
              font-normal
              leading-[1.5]
              text-white
            "
          >
            <span className="lg:hidden">
              Practical guidance to help employees, managers and HR teams
              prepare with care, support meaningful exchanges, and continue
              learning afterwards.
            </span>
            <span className="hidden lg:block">
              <span className="block whitespace-nowrap">
                Practical guidance to help employees, managers and HR teams
                prepare with
              </span>
              <span className="block">
                care, support meaningful exchanges, and continue learning
                afterwards.
              </span>
            </span>
          </p>

          <div className="mt-[32px]">
            <Button
              href="/resources"
              variant="ghost-light"
              size="lg"
              showArrow
            >
              Explore Resources
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
