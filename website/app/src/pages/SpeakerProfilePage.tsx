import { Link, useParams } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ArrowIcon } from '@/components/ui/ArrowIcon'
import { SpeakerProfileSection } from '@/sections/speaker-profile/SpeakerProfileSection'
import { speakers } from '@/data/speakers'
import { editorialContent } from '@/constants/layout'
import { speakersListingTopState } from '@/constants/speakersNavigation'

function ProfileNotFound() {
  return (
    <>
      <Header />
      <main className="bg-surface-light pb-32 pt-[clamp(7rem,11vh,9rem)]">
        <div className={editorialContent}>
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-medium text-text-dark">
            Speaker not found
          </h1>
          <p className="mt-4 max-w-md font-sans text-[16px] leading-[1.6] text-secondary">
            This profile is not available yet.
          </p>
          <Link
            to="/speakers"
            state={speakersListingTopState}
            className="group/back mt-8 inline-flex items-center gap-1.5 font-sans text-[14px] font-medium text-text-violet transition-colors hover:text-primary-violet"
          >
            <ArrowIcon className="h-3.5 w-3.5 rotate-180 transition-transform duration-300 group-hover/back:-translate-x-[3px]" />
            <span>Browse all speakers</span>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}

export function SpeakerProfilePage() {
  const { id } = useParams<{ id: string }>()
  const speaker = speakers.find((entry) => entry.id === id)

  if (!speaker) {
    return <ProfileNotFound />
  }

  return (
    <>
      <Header />
      <main>
        <SpeakerProfileSection speaker={speaker} />
      </main>
      <Footer />
    </>
  )
}
