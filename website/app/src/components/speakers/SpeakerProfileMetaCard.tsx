import { Link } from 'react-router-dom'
import type { Speaker } from '@/data/speakers'

interface SpeakerProfileMetaCardProps {
  speaker: Speaker
}

const metaLabel =
  'font-mono text-[14px] font-normal uppercase leading-[1.2] tracking-[0em] text-text-dark'

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-[16px] w-[16px] shrink-0 text-text-violet"
      fill="none"
    >
      <path
        d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle
        cx="12"
        cy="10"
        r="2.2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function LanguageIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-[16px] w-[16px] shrink-0 text-text-violet"
      fill="none"
    >
      <path
        d="M4 5h10M9 3v2M6 9c1.5 2.2 3.5 3.9 6 5M12 9c-1.3 2.2-3.3 4.2-6 5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="m14 20 3.3-8 3.3 8M15.2 17h4.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function SpeakerProfileMetaCard({
  speaker,
}: SpeakerProfileMetaCardProps) {
  return (
    <aside
      className="
        rounded-[12px]
        border border-[#D9D7E3]
        bg-white
        p-[24px]
      "
    >
      <h2 className={metaLabel}>At a glance</h2>

      <div
        className="
          mt-[20px]
          flex
          flex-col
          gap-[8px]
          font-sans
          text-[14px]
          font-normal
          leading-[1.4]
          text-text-dark/75
        "
      >
        <div className="flex min-w-0 items-start gap-[8px]">
          <LocationIcon />

          <span className="min-w-0">
            {speaker.location}
            <span aria-hidden="true"> · </span>
            {speaker.timezone}
          </span>
        </div>

        <div className="flex min-w-0 items-start gap-[8px]">
          <LanguageIcon />

          <span className="min-w-0">
            {speaker.languages.join(', ')}
          </span>
        </div>
      </div>

      <Link
        to={`/book?speaker=${speaker.id}`}
        className="
          mt-[24px]
          flex
          w-full
          items-center
          justify-center
          rounded-[8px]
          bg-[#5749E7]
          px-[20px]
          py-[12px]
          font-mono
          text-[12px]
          font-medium
          uppercase
          leading-[1]
          tracking-[0.08em]
          text-white
          transition-transform
          duration-200
          hover:scale-[1.01]
          focus-visible:outline
          focus-visible:outline-2
          focus-visible:outline-offset-3
          focus-visible:outline-[#5749E7]
        "
      >
        Request a session
      </Link>

      <p
        className="
          mt-[10px]
          text-center
          font-sans
          text-[12px]
          font-normal
          leading-[1.4]
          text-secondary
        "
      >
        A request, not an automatic booking.
      </p>
    </aside>
  )
}