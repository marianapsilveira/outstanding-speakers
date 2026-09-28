import {
  Link,
  useLocation,
} from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowIcon } from '@/components/ui/ArrowIcon'
import {
  LanguageIcon,
  LocationIcon,
} from '@/components/speakers/SpeakerIcons'
import { saveSpeakersScrollPosition } from '@/components/navigation/ScrollManager'
import type { Speaker } from '@/data/speakers'

interface SpeakerCardProps {
  speaker: Speaker
  index?: number
  interactive?: boolean
  animate?: boolean
  showViewProfile?: boolean
}

const easing =
  [0.22, 1, 0.36, 1] as const

export function SpeakerCard({
  speaker,
  index = 0,
  interactive = false,
  animate = true,
  showViewProfile = true,
}: SpeakerCardProps) {
  const location = useLocation()

  const handleProfileNavigation = () => {
    if (
      location.pathname === '/speakers'
    ) {
      saveSpeakersScrollPosition()
    }
  }

  const cardContent = (
    <>
      <div
        className="
          relative
          h-[340px]
          w-full
          shrink-0
          overflow-hidden
          rounded-[12px]
        "
      >
        <img
          src={speaker.image}
          alt={speaker.name}
          className="
            h-full
            w-full
            object-cover
          "
          loading="lazy"
        />
      </div>

      <div
        className="
          flex
          flex-1
          flex-col
          px-[24px]
          pt-[16px]
          pb-[24px]
        "
      >
        <div
          className="
            flex
            min-h-[24px]
            flex-wrap
            items-baseline
            gap-x-[8px]
            gap-y-[2px]
          "
        >
          <h3
            className="
              font-sans
              text-[18px]
              font-semibold
              titlecase
              leading-[1.1]
              tracking-normal
              text-text-dark
            "
          >
            {speaker.name}
          </h3>

          <span
            className="
              font-sans
              text-[12px]
              font-normal
              lowercase
              leading-[1.2]
              tracking-normal
              text-secondary
            "
          >
            {speaker.pronouns}
          </span>
        </div>

        <div
          className="
            mt-[8px]
            flex
            min-h-[36px]
            flex-col
            gap-[4px]
            font-sans
            text-[12px]
            font-normal
            leading-[1.3]
            text-secondary
          "
        >
          <div className="flex min-w-0 items-start gap-[4px]">
            <LocationIcon />

            <span className="min-w-0">
              {speaker.location}
              <span aria-hidden="true">
                {' '}
                ·{' '}
              </span>
              {speaker.timezone}
            </span>
          </div>

          <div className="flex min-w-0 items-start gap-[4px]">
            <LanguageIcon />

            <span className="min-w-0">
              {speaker.languages.join(', ')}
            </span>
          </div>
        </div>

        <div
          className="
            mt-[24px]
            flex
            min-h-[58px]
            flex-wrap
            content-start
            items-start
            gap-[6px]
          "
        >
          {speaker.tags.map((tag) => (
            <span
              key={tag}
              className="
                inline-flex
                min-h-[26px]
                items-center
                rounded-full
                border
                border-text-violet
                bg-transparent
                px-[12px]
                py-[4px]
                font-sans
                text-[12px]
                font-normal
                leading-[1]
                tracking-normal
                text-text-violet
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {showViewProfile && (
          <span
            className="
              group/profile
              mt-[24px]
              inline-flex
              w-fit
              items-center
              gap-[6px]
              font-sans
              text-[14px]
              font-normal
              leading-[1.2]
              text-text-violet
            "
          >
            <span
              className="
                relative
                after:absolute
                after:left-0
                after:bottom-[-3px]
                after:h-px
                after:w-full
                after:origin-left
                after:scale-x-0
                after:bg-current
                after:transition-transform
                after:duration-300
                group-hover/profile:after:scale-x-100
                group-hover/card:after:scale-x-100
              "
            >
              View profile
            </span>

            <ArrowIcon
              className="
                h-3.5 w-3.5
                transition-transform
                duration-300
                group-hover/profile:translate-x-[3px]
                group-hover/card:translate-x-[3px]
              "
            />
          </span>
        )}
      </div>
    </>
  )

  return (
    <motion.article
      initial={
        animate
          ? {
              opacity: 0,
              y: 24,
            }
          : false
      }
      whileInView={
        animate
          ? {
              opacity: 1,
              y: 0,
            }
          : undefined
      }
      viewport={
        animate
          ? {
              once: false,
              amount: 0.18,
              margin:
                '0px 0px -40px 0px',
            }
          : undefined
      }
      transition={
        animate
          ? {
              duration: 0.6,
              delay: index * 0.08,
              ease: easing,
            }
          : {
              type: 'spring',
              stiffness: 320,
              damping: 24,
              mass: 0.7,
            }
      }
      whileHover={
        interactive
          ? {
              scale: 1.012,
            }
          : undefined
      }
      whileTap={
        interactive
          ? {
              scale: 0.995,
            }
          : undefined
      }
      className="
        group/card
        relative
        z-0
        flex
        h-full
        min-w-0
        origin-center
        flex-col
        overflow-hidden
        rounded-[12px]
        border border-[#D9D7E3]
        bg-white
        transform-gpu
        hover:z-10
      "
    >
      {interactive ? (
        <Link
          to={`/speakers/${speaker.id}`}
          onClick={
            handleProfileNavigation
          }
          className="
            flex
            h-full
            min-w-0
            flex-col
            rounded-[inherit]
            focus-visible:outline
            focus-visible:outline-2
            focus-visible:outline-offset-4
            focus-visible:outline-text-violet
          "
          aria-label={`View ${speaker.name}'s profile`}
        >
          {cardContent}
        </Link>
      ) : (
        cardContent
      )}
    </motion.article>
  )
}