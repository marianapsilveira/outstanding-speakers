import { ResourceCard } from '@/components/resources/ResourceCard'
import {
  TypewriterLabel,
  getSequentialTypingDelay,
} from '@/components/motion/TypewriterLabel'
import { resourceGroups } from '@/data/resources'
import {
  editorialContent,
  pagePaddingX,
  typewriterEyebrowRow,
} from '@/constants/layout'
import { eyebrowText, groupHeading, supportingDescription } from '@/constants/typography'

const sectionLabels = [
  'For the questions before',
  'And the everyday practice after',
]

const typingSpeed = 30
const typingGap = 80

export function ResourcesLibrarySection() {
  return (
    <section
      className="
        relative
        z-10
        w-full
        bg-surface-light
        pb-[160px]
        pt-[48px]
      "
    >
      <div
        className="
          pointer-events-none
          absolute inset-0 z-0
          overflow-hidden
        "
        aria-hidden="true"
      >
        <div className="absolute left-[9%] top-[12%] h-[480px] w-[480px] rounded-full bg-[#FFC6FA] opacity-40 blur-[220px]" />
        <div className="absolute left-[32%] top-[18%] h-[520px] w-[520px] rounded-full bg-[#FFE8A8] opacity-40 blur-[220px]" />
        <div className="absolute right-[18%] top-[8%] h-[540px] w-[540px] rounded-full bg-[#BDF3CC] opacity-40 blur-[220px]" />
        <div className="absolute right-[-5%] top-[22%] h-[620px] w-[620px] rounded-full bg-[#A9D9FF] opacity-40 blur-[220px]" />
      </div>

      <div
        className={`
          relative z-20
          ${typewriterEyebrowRow}
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
        className={`
          relative z-10
          mt-[80px]
          flex
          w-full
          flex-col
          gap-[80px]
          ${editorialContent}
        `}
      >
        {resourceGroups.map((group) => (
          <div key={group.id}>
            <h2 className={`${groupHeading} text-text-dark`}>
              {group.title}
            </h2>

            <p
              className={`
                mt-[8px]
                ${supportingDescription}
                text-secondary
                lg:whitespace-nowrap
              `}
            >
              {group.description}
            </p>

            <div
              className="
                mt-[28px]
                grid
                grid-cols-1
                items-stretch
                gap-[20px]
                md:grid-cols-3
                lg:gap-[24px]
              "
            >
              {group.items.map((resource) => (
                <ResourceCard
                  key={resource.id}
                  resource={resource}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
