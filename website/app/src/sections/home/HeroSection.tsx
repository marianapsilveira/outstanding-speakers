import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import {
  TypewriterLabel,
  getSequentialTypingDelay,
} from '@/components/motion/TypewriterLabel'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { pagePaddingX } from '@/constants/layout'
import { speakersListingTopState } from '@/constants/speakersNavigation'
import {
  eyebrowText,
  fontDisplayRoman,
  supportingDescription,
} from '@/constants/typography'

const heroLabels = ['Swap Experts', 'Change Minds', 'End the Bias']

const easing = [0.22, 1, 0.36, 1] as const

const desktopTypingSpeed = 38
const desktopTypingGap = 120

export function HeroSection() {
  const reducedMotion = useReducedMotion()

  const headlineInitial = reducedMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 28 }

  const copyInitial = reducedMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 20 }

  return (
    <section className="relative min-h-screen min-h-[100dvh] w-full overflow-hidden">
      <div
        className={`
          relative z-10 flex min-h-screen min-h-[100dvh] w-full flex-col
          ${pagePaddingX}
          pt-[clamp(10rem,16vh,12rem)]
          pb-[clamp(3rem,6vh,4.5rem)]
        `}
      >
        <div
          className="
            @container
            flex w-full flex-1
            -translate-y-[clamp(0rem,2vh,1.5rem)]
            flex-col justify-center
          "
        >
          <motion.h1
            initial={headlineInitial}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.45 }}
            transition={{
              duration: reducedMotion ? 0 : 0.95,
              ease: easing,
            }}
            aria-label="OUTstanding Speakers"
            className={`
              w-full
              text-center
              font-display
              leading-[1.1]
              tracking-normal
              ${fontDisplayRoman}
              text-text-light
            `}
          >
            <span
              className="
                flex flex-col items-center
                text-[clamp(2.75rem,calc(100cqw/5.85),8rem)]
                @min-[44rem]:hidden
              "
            >
              <span className="whitespace-nowrap">
                <span className="text-lime">OUT</span>
                standing
              </span>
              <span className="whitespace-nowrap">Speakers</span>
            </span>

            <span
              className="
                hidden whitespace-nowrap
                text-[clamp(2.75rem,calc(100cqw/9.95),10rem)]
                @min-[44rem]:inline
              "
            >
              <span className="text-lime">OUT</span>
              standing Speakers
            </span>
          </motion.h1>

          <motion.div
            initial={copyInitial}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{
              duration: reducedMotion ? 0 : 0.85,
              delay: reducedMotion ? 0 : 0.12,
              ease: easing,
            }}
            className="mx-auto mt-[clamp(2.5rem,5vh,4rem)] w-full max-w-[min(100%,62rem)] px-2 text-center"
          >
            <p className={`${supportingDescription} text-text-light/90`}>
              An inter-company speaker exchange, connecting queer professionals
              <br className="hidden lg:inline" />
              {' '}
              with employees and leaders across different organizations.
            </p>

            <div className="mt-[clamp(1.25rem,2.5vh,2.5rem)] flex justify-center">
              <Button
                href="/speakers"
                linkState={speakersListingTopState}
                variant="ghost-light"
                size="lg"
                showArrow
              >
                Explore Speakers
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="@container mt-auto w-full pt-10 md:pt-12">
          <div className="flex w-full items-end justify-between gap-x-2">
            {heroLabels.map((label, index) => (
              <TypewriterLabel
                key={label}
                delay={getSequentialTypingDelay(
                  heroLabels,
                  index,
                  desktopTypingSpeed,
                  desktopTypingGap,
                )}
                speed={desktopTypingSpeed}
                nowrap
                className={`
                  ${eyebrowText}
                  text-pink-section
                  ${
                    label === 'Change Minds'
                      ? 'hidden @min-[21rem]:inline-block'
                      : ''
                  }
                `}
              >
                {label}
              </TypewriterLabel>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
