import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SpeakerCard } from '@/components/speakers/SpeakerCard'
import {
  TypewriterLabel,
  getSequentialTypingDelay,
} from '@/components/motion/TypewriterLabel'
import { ArrowIcon } from '@/components/ui/ArrowIcon'
import { featuredSpeakers } from '@/data/speakers'
import { pagePaddingX, typewriterEyebrowRow } from '@/constants/layout'
import { speakersListingTopState } from '@/constants/speakersNavigation'
import { eyebrowText } from '@/constants/typography'

const sectionLabels = [
  'Experts by',
  'Lived experience',
]

const typingSpeed = 30
const typingGap = 80

const easing = [0.22, 1, 0.36, 1] as const

export function FeaturedSpeakersSection() {
  const displayedSpeakers = featuredSpeakers.slice(0, 3)

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-surface-light
        pb-[160px]
      "
    >
      {/* Abstract background */}
      <div
        className="
          pointer-events-none
          absolute inset-0 z-0
          overflow-hidden
        "
        aria-hidden="true"
      >
        <div className="absolute left-[9%] top-[42%] h-[480px] w-[480px] rounded-full bg-[#FFC6FA] opacity-40 blur-[220px]" />

        <div className="absolute left-[32%] top-[48%] h-[520px] w-[520px] rounded-full bg-[#FFE8A8] opacity-40 blur-[220px]" />

        <div className="absolute right-[18%] top-[45%] h-[540px] w-[540px] rounded-full bg-[#BDF3CC] opacity-40 blur-[220px]" />

        <div className="absolute right-[-5%] top-[38%] h-[620px] w-[620px] rounded-full bg-[#A9D9FF] opacity-40 blur-[220px]" />

        <div className="absolute right-[1%] bottom-[-12%] h-[520px] w-[520px] rounded-full bg-[#C9BAFF] opacity-40 blur-[220px]" />
      </div>

      {/* Full-width eyebrow row */}
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
              className={`${eyebrowText} text-text-violet`}
            >
              {label}
            </TypewriterLabel>
          )
        })}
      </div>

      {/* Editorial content */}
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
        <div
          className="
            flex
            w-full
            flex-col
            gap-[48px]
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
              amount: 0.45,
              margin: '0px 0px -80px 0px',
            }}
            transition={{
              duration: 0.85,
              ease: easing,
            }}
            className="w-full lg:max-w-[560px]"
          >
            <h2
              className="
                font-display
                text-[clamp(2.5rem,4vw,3.5rem)]
                font-normal
                leading-[1.08]
                tracking-normal
                text-text-dark
              "
            >
              Meet our Speakers
            </h2>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 32,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
              amount: 0.45,
              margin: '0px 0px -80px 0px',
            }}
            transition={{
              duration: 0.75,
              delay: 0.12,
              ease: easing,
            }}
          >
            <Link
              to="/speakers"
              state={speakersListingTopState}
              className="
                group/browse
                inline-flex
                shrink-0
                items-center
                gap-[6px]
                font-sans
                text-[14px]
                font-medium
                text-text-violet
                transition-colors
                duration-300
                hover:text-primary-violet
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-primary-violet/30
                focus-visible:ring-offset-4
              "
            >
              <span
                className="
                  relative
                  after:absolute
                  after:bottom-[-3px]
                  after:left-0
                  after:h-px
                  after:w-full
                  after:origin-left
                  after:scale-x-0
                  after:bg-current
                  after:transition-transform
                  after:duration-300
                  after:ease-out
                  group-hover/browse:after:scale-x-100
                "
              >
                Browse all speakers
              </span>

              <ArrowIcon
                className="
                  h-3.5
                  w-3.5
                  transition-transform
                  duration-300
                  ease-out
                  group-hover/browse:translate-x-[3px]
                "
              />
            </Link>
          </motion.div>
        </div>

        <div
          className="
            mt-[48px]
            grid
            grid-cols-1
            items-stretch
            gap-[20px]
            md:grid-cols-3
            lg:gap-[24px]
          "
        >
          {displayedSpeakers.map((speaker, index) => (
            <SpeakerCard
              key={speaker.id}
              speaker={speaker}
              index={index}
              interactive
              animate={false}
            />
          ))}
        </div>
      </div>
    </section>
  )
}