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

const mobileTypingSpeed = 34
const mobileTypingGap = 100

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
            flex w-full flex-1
            -translate-y-[clamp(0rem,2vh,1.5rem)]
            flex-col justify-center
          "
        >
          <div className="mx-auto w-full max-w-[1320px] text-center">
            <motion.h1
              initial={headlineInitial}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.45 }}
              transition={{
                duration: reducedMotion ? 0 : 0.95,
                ease: easing,
              }}
              className={`
                font-display
                text-[clamp(1.375rem,calc((100vw-5rem)/11.6),10rem)]
                leading-[1.1]
                tracking-normal
                ${fontDisplayRoman}
                whitespace-nowrap
                text-text-light
              `}
            >
              <span className="text-lime">OUT</span>
              standing Speakers
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
              className="mx-auto mt-[clamp(2.5rem,5vh,4rem)] max-w-[min(100%,62rem)] px-2"
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
        </div>

        <div className="mt-auto hidden w-full items-end justify-between pt-12 sm:flex">
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
              className={`${eyebrowText} text-pink-section`}
            >
              {label}
            </TypewriterLabel>
          ))}
        </div>

        <div className="mt-auto flex flex-col items-start gap-4 pt-10 sm:hidden">
          {heroLabels.map((label, index) => (
            <TypewriterLabel
              key={label}
              delay={getSequentialTypingDelay(
                heroLabels,
                index,
                mobileTypingSpeed,
                mobileTypingGap,
              )}
              speed={mobileTypingSpeed}
              className={`${eyebrowText} text-pink-section`}
            >
              {label}
            </TypewriterLabel>
          ))}
        </div>
      </div>
    </section>
  )
}
