import { Button } from '@/components/ui/Button'
import {
  TypewriterLabel,
  getSequentialTypingDelay,
} from '@/components/motion/TypewriterLabel'
import { RevealOnScroll } from '@/components/motion/RevealOnScroll'
import { pagePaddingX, typewriterEyebrowRow } from '@/constants/layout'
import { speakersListingTopState } from '@/constants/speakersNavigation'
import {
  eyebrowText,
  fontDisplayLight,
  fontDisplayRoman,
  pinkSectionHeading80,
} from '@/constants/typography'

const sectionLabels = [
  'Bring lived experience',
  'Into your workplace',
]

const typingSpeed = 30
const typingGap = 80

export function FinalCtaSection() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-pink-section
        pb-[240px]
      "
    >
      <div
        className={`
          relative z-10
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
              className={`${eyebrowText} text-text-violet`}
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
          mt-[240px]
          w-full
          max-w-[1320px]
          px-6
          md:px-10
          min-[1400px]:px-0
        "
      >
        <RevealOnScroll>
          <div className="w-full text-left">
            <h2 className={`max-w-[1080px] text-text-dark ${pinkSectionHeading80}`}>
              <span className={`block ${fontDisplayLight}`}>
                Start with a conversation.
              </span>
              <span className={`mt-2 block ${fontDisplayRoman}`}>
                The rest tends to follow.
              </span>
            </h2>

            <div className="mt-[32px]">
              <Button
                href="/speakers"
                linkState={speakersListingTopState}
                variant="violet"
                size="lg"
                showArrow
              >
                Browse Speakers
              </Button>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
