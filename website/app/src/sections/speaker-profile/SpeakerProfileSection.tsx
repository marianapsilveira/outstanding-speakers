import { Link } from 'react-router-dom'
import { ArrowIcon } from '@/components/ui/ArrowIcon'
import { SpeakerProfileMetaCard } from '@/components/speakers/SpeakerProfileMetaCard'
import { TestimonialCard } from '@/components/speakers/TestimonialCard'
import { getSpeakerFirstName, type Speaker } from '@/data/speakers'
import { editorialContent } from '@/constants/layout'
import { speakersListingRestoreState } from '@/constants/speakersNavigation'

interface SpeakerProfileSectionProps {
  speaker: Speaker
}

const sectionLabel =
  'font-mono text-[14px] font-normal uppercase leading-[1.2] tracking-[0em] text-text-dark'

function QuoteMarkIcon() {
  return (
    <svg
      viewBox="0 0 36 30"
      aria-hidden="true"
      className="h-[18px] w-[24px] text-[#5749E7]"
      fill="none"
    >
      <path
        d="M2 28V17.3C2 11.7 3.6 7.4 6.8 4.2C9.9 1.1 13.9.6 17.9 1.8L16.1 7.1C13.4 6.4 11.1 7 9.3 9.1C7.5 11.2 6.6 13.8 6.6 16.8H14.2V28H2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M19.2 28V17.3C19.2 11.7 20.8 7.4 24 4.2C27.1 1.1 31.1.6 35.1 1.8L33.3 7.1C30.6 6.4 28.3 7 26.5 9.1C24.7 11.2 23.8 13.8 23.8 16.8H31.4V28H19.2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ProfileBackLink() {
  return (
    <Link
      to="/speakers"
      state={speakersListingRestoreState}
      className="
        group/back
        inline-flex
        items-center
        gap-[6px]
        font-sans
        text-[14px]
        font-normal
        text-secondary
        transition-colors
        hover:text-text-violet
      "
    >
      <ArrowIcon
        className="
          h-3.5 w-3.5
          rotate-180
          transition-transform
          duration-300
          group-hover/back:-translate-x-[3px]
        "
      />

      <span>Browse all speakers</span>
    </Link>
  )
}

export function SpeakerProfileSection({
  speaker,
}: SpeakerProfileSectionProps) {
  const firstName = getSpeakerFirstName(speaker.name)

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-surface-light
        pb-[120px]
        pt-[clamp(8rem,13vh,11rem)]
      "
    >
      {/* Subtle abstract background */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          overflow-hidden
        "
        aria-hidden="true"
      >
        <div
          className="
            absolute
            left-[-3%]
            top-[3%]
            h-[300px]
            w-[360px]
            rounded-[48%]
            bg-[#BDF3CC]
            opacity-30
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            right-[-2%]
            top-[10%]
            h-[330px]
            w-[400px]
            rounded-[48%]
            bg-[#A9D9FF]
            opacity-28
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            right-[12%]
            bottom-[8%]
            h-[300px]
            w-[360px]
            rounded-[46%]
            bg-[#FFC6FA]
            opacity-24
            blur-[125px]
          "
        />

        <div
          className="
            absolute
            left-[25%]
            bottom-[5%]
            h-[280px]
            w-[340px]
            rounded-[46%]
            bg-[#FFE8A8]
            opacity-22
            blur-[120px]
          "
        />
      </div>

      <div
        className={`
          relative z-10
          w-full
          ${editorialContent}
        `}
      >
        {/* Breadcrumb spans both columns */}
        <div className="mb-[32px]">
          <ProfileBackLink />
        </div>

        <div
          className="
            grid
            grid-cols-1
            items-start
            gap-[48px]
            lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)]
            lg:gap-[64px]
          "
        >
          {/* Left column */}
          <div className="min-w-0">
            <div className="overflow-hidden rounded-[12px]">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="
                  aspect-[3/4]
                  w-full
                  object-cover
                "
              />
            </div>

            <div className="mt-[24px]">
              <SpeakerProfileMetaCard speaker={speaker} />
            </div>
          </div>

          {/* Right column — starts at exactly the same height as the image */}
          <div className="min-w-0">
            <div
              className="
                flex
                flex-wrap
                items-baseline
                gap-x-[12px]
                gap-y-[4px]
              "
            >
              <h1
                className="
                  font-sans
                  text-[clamp(2rem,3.5vw,2.75rem)]
                  font-semibold
                  titlecase
                  leading-[1.05]
                  tracking-normal
                  text-text-dark
                "
              >
                {speaker.name}
              </h1>

              <span
                className="
                  font-sans
                  text-[clamp(1rem,1.6vw,1.125rem)]
                  font-normal
                  text-secondary
                "
              >
                {speaker.pronouns}
              </span>
            </div>

            <p
              className="
                mt-[12px]
                font-mono
                text-[14px]
                font-normal
                uppercase
                leading-[1.3]
                tracking-[0em]
                text-text-violet
              "
            >
              {speaker.roleLine}
            </p>

            {/* Quote */}
            <figure
              className="
                relative
                mt-[48px]
                grid
                grid-cols-[4px_minmax(0,1fr)]
                gap-x-[20px]
              "
            >
              <div
                className="
                  h-full
                  w-[4px]
                  rounded-full
                  bg-[linear-gradient(to_bottom,#5749E7_0%,#C7F238_50%,#FFC6FA_100%)]
                "
                aria-hidden="true"
              />

              <div className="min-w-0">
                <QuoteMarkIcon />

                <blockquote
                  className="
                    mt-[14px]
                    font-sans
                    text-[clamp(1.125rem,1.5vw,1.5rem)]
                    font-normal
                    leading-[1.4]
                    tracking-normal
                    text-text-dark
                  "
                >
                  {speaker.quote}
                </blockquote>
              </div>
            </figure>

            {/* Story */}
            <section className="mt-[56px]">
              <h2 className={sectionLabel}>Story overview</h2>

              <div className="mt-[16px] flex flex-col gap-[16px]">
                {speaker.storyOverview.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="
                      font-sans
                      text-[16px]
                      font-normal
                      leading-[1.6]
                      text-text-dark/80
                    "
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            {/* Topics */}
            <section className="mt-[56px]">
              <h2 className={sectionLabel}>
                Topics {firstName} speaks about
              </h2>

              <div className="mt-[16px] flex flex-wrap gap-[8px]">
                {speaker.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      inline-flex
                      min-h-[30px]
                      items-center
                      rounded-full
                      border border-[#5749E7]
                      bg-transparent
                      px-[14px]
                      py-[6px]
                      font-sans
                      text-[12px]
                      font-normal
                      leading-[1]
                      tracking-normal
                      text-[#5749E7]
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            {/* Testimonials */}
            <section className="mt-[56px]">
              <h2 className={sectionLabel}>What organizations say</h2>

              <div
                className="
                  mt-[16px]
                  grid
                  grid-cols-1
                  gap-[16px]
                  md:grid-cols-2
                "
              >
                {speaker.testimonials.map((testimonial) => (
                  <TestimonialCard
                    key={`${testimonial.author}-${testimonial.role}`}
                    testimonial={testimonial}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}