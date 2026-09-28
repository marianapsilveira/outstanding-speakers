import { useMemo, useState } from 'react'
import { SpeakerCard } from '@/components/speakers/SpeakerCard'
import { SpeakersFilterSidebar } from '@/components/speakers/SpeakersFilterSidebar'
import {
  TypewriterLabel,
  getSequentialTypingDelay,
} from '@/components/motion/TypewriterLabel'
import { speakers } from '@/data/speakers'
import {
  editorialContent,
  pagePaddingX,
  typewriterEyebrowRow,
} from '@/constants/layout'
import { eyebrowText } from '@/constants/typography'
import {
  emptySpeakerFilters,
  filterSpeakers,
  type SpeakerFilterState,
} from '@/utils/speakerFilters'

const sectionLabels = [
  'Find a person whose story',
  'Fits your conversation.',
]

const typingSpeed = 30
const typingGap = 80

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-[18px] w-[18px] shrink-0 text-secondary"
      fill="none"
    >
      <circle
        cx="11"
        cy="11"
        r="6.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="m16.5 16.5 4 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function SpeakersGridSection() {
  const [query, setQuery] = useState('')

  const [filters, setFilters] =
    useState<SpeakerFilterState>(
      emptySpeakerFilters,
    )

  const filteredSpeakers = useMemo(
    () =>
      filterSpeakers(
        speakers,
        query,
        filters,
      ),
    [query, filters],
  )

  const handleToggleFilter = (
    groupId: keyof SpeakerFilterState,
    value: string,
  ) => {
    setFilters((current) => {
      const selected = current[groupId]

      const next = selected.includes(value)
        ? selected.filter(
            (entry) => entry !== value,
          )
        : [...selected, value]

      return {
        ...current,
        [groupId]: next,
      }
    })
  }

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
      {/*
       * Only the decorative background is clipped.
       * The section itself must not use overflow-hidden,
       * otherwise the sticky filter sidebar may stop working.
       */}
      <div
        className="
          pointer-events-none
          absolute inset-0 z-0
          overflow-hidden
        "
        aria-hidden="true"
      >
        <div
          className="
            absolute
            left-[-3%]
            top-[7%]
            h-[260px]
            w-[320px]
            rotate-[-10deg]
            rounded-[48%]
            bg-[#FFE8A8]
            opacity-45
            blur-[95px]
          "
        />

        <div
          className="
            absolute
            left-[25%]
            top-[14%]
            h-[230px]
            w-[280px]
            rotate-[14deg]
            rounded-[46%]
            bg-[#FFC6FA]
            opacity-38
            blur-[90px]
          "
        />

        <div
          className="
            absolute
            left-[48%]
            top-[10%]
            h-[220px]
            w-[260px]
            rotate-[-10deg]
            rounded-[45%]
            bg-[#C7B8FF]
            opacity-34
            blur-[85px]
          "
        />

        <div
          className="
            absolute
            right-[-2%]
            top-[13%]
            h-[300px]
            w-[360px]
            rotate-[12deg]
            rounded-[50%]
            bg-[#A9D9FF]
            opacity-40
            blur-[105px]
          "
        />

        <div
          className="
            absolute
            left-[4%]
            top-[40%]
            h-[270px]
            w-[330px]
            rotate-[8deg]
            rounded-[48%]
            bg-[#FFD5AC]
            opacity-38
            blur-[100px]
          "
        />

        <div
          className="
            absolute
            left-[43%]
            top-[43%]
            h-[250px]
            w-[310px]
            rotate-[-12deg]
            rounded-[46%]
            bg-[#BDF3CC]
            opacity-36
            blur-[95px]
          "
        />

        <div
          className="
            absolute
            right-[5%]
            top-[47%]
            h-[280px]
            w-[340px]
            rotate-[10deg]
            rounded-[48%]
            bg-[#9DE7E1]
            opacity-36
            blur-[100px]
          "
        />

        <div
          className="
            absolute
            left-[8%]
            top-[72%]
            h-[240px]
            w-[290px]
            rotate-[-14deg]
            rounded-[45%]
            bg-[#FFBFD9]
            opacity-32
            blur-[90px]
          "
        />

        <div
          className="
            absolute
            right-[2%]
            bottom-[3%]
            h-[300px]
            w-[370px]
            rotate-[-12deg]
            rounded-[50%]
            bg-[#B8C6FF]
            opacity-36
            blur-[105px]
          "
        />
      </div>

      {/* Full-width eyebrows */}
      <div
        className={`
          relative z-20
          ${typewriterEyebrowRow}
          ${pagePaddingX}
        `}
      >
        {sectionLabels.map(
          (label, index) => {
            const delay =
              getSequentialTypingDelay(
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
          },
        )}
      </div>

      {/* Search, filters and results */}
      <div
        className={`
          relative z-10
          mt-[56px]
          w-full
          ${editorialContent}
        `}
      >
        {/* Search aligned with the card column */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[220px_minmax(0,1fr)]
            lg:gap-12
          "
        >
          <div
            className="hidden lg:block"
            aria-hidden="true"
          />

          <label className="block w-full">
            <span className="sr-only">
              Search speakers
            </span>

            <span
              className="
                flex
                w-full
                items-center
                gap-3
                rounded-full
                border
                border-[#D9D7E3]
                bg-white
                px-5
                py-3.5
                shadow-[0_1px_2px_rgba(9,9,11,0.04)]
              "
            >
              <SearchIcon />

              <input
                type="search"
                value={query}
                onChange={(event) =>
                  setQuery(
                    event.target.value,
                  )
                }
                placeholder="Search by name, topic or location..."
                className="
                  w-full
                  border-0
                  bg-transparent
                  font-sans
                  text-[15px]
                  text-text-dark
                  placeholder:text-secondary/70
                  focus:outline-none
                "
              />
            </span>
          </label>
        </div>

        <div
          className="
            mt-[56px]
            grid
            grid-cols-1
            items-start
            gap-10
            lg:grid-cols-[220px_minmax(0,1fr)]
            lg:gap-12
          "
        >
          {/*
           * The sidebar itself already contains:
           * lg:sticky lg:top-[128px] self-start
           *
           * Do not wrap it inside an element with overflow
           * or a constrained height.
           */}
          <SpeakersFilterSidebar
            filters={filters}
            onToggle={handleToggleFilter}
          />

          <div className="min-w-0">
            <p className="font-sans text-[14px] text-secondary">
              {filteredSpeakers.length}{' '}
              speaker
              {filteredSpeakers.length === 1
                ? ''
                : 's'}{' '}
              available
            </p>

            <div
              className="
                mt-[24px]
                grid
                grid-cols-1
                gap-[20px]
                md:grid-cols-2
                xl:grid-cols-3
                xl:gap-[24px]
              "
            >
              {filteredSpeakers.map(
                (speaker) => (
                  <SpeakerCard
                    key={speaker.id}
                    speaker={speaker}
                    interactive
                    animate={false}
                    showViewProfile={false}
                  />
                ),
              )}
            </div>

            {filteredSpeakers.length ===
              0 && (
              <p className="mt-12 font-sans text-[15px] text-secondary">
                No speakers match your
                search or filters. Try
                adjusting your selection.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}