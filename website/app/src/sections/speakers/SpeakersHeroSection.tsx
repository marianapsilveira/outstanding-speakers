import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { pagePaddingX } from '@/constants/layout'
import {
  displayHeading160,
  fontDisplayExtraLight,
  fontDisplayRoman,
} from '@/constants/typography'
import { publicAsset } from '@/utils/publicAsset'

const easing = [0.22, 1, 0.36, 1] as const

export function SpeakersHeroSection() {
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
        pt-[360px]
        pb-[260px]
      "
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-35"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          controls={false}
        >
          <source src={publicAsset('assets/speakers-hero.mp4')} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[#281749]/55" />
      </div>

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
            lg:whitespace-nowrap
          `}
        >
          <span className={`text-text-light ${fontDisplayExtraLight}`}>
            Meet our{' '}
          </span>
          <span className={`text-lime ${fontDisplayRoman}`}>Speakers</span>
        </motion.h1>
      </div>
    </section>
  )
}
