import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { pagePaddingX } from '@/constants/layout'
import {
  displayHeading160,
  fontDisplayExtraLight,
  fontDisplayRoman,
} from '@/constants/typography'

const easing = [0.22, 1, 0.36, 1] as const

export function FaqHeroSection() {
  const reducedMotion = useReducedMotion()

  const headlineInitial = reducedMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 28 }

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#281749]
        pt-[clamp(11rem,24vh,22.5rem)]
        pb-[clamp(12rem,22vh,16.25rem)]
      "
    >
      <div className={`relative z-10 w-full ${pagePaddingX}`}>
        <motion.h1
          initial={headlineInitial}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.45 }}
          transition={{
            duration: reducedMotion ? 0 : 0.95,
            ease: easing,
          }}
          className={`
            mx-auto
            w-full
            max-w-none
            text-center
            ${displayHeading160}
          `}
        >
          <span className={`block text-text-light ${fontDisplayExtraLight}`}>
            Frequently asked
          </span>
          <span className={`block text-lime ${fontDisplayRoman}`}>
            questions
          </span>
        </motion.h1>
      </div>
    </section>
  )
}
