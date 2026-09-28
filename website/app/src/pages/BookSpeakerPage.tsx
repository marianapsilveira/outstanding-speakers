import { Link, useSearchParams } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ArrowIcon } from '@/components/ui/ArrowIcon'
import { BookingFlowSection } from '@/sections/booking/BookingFlowSection'
import { speakers } from '@/data/speakers'
import { editorialContent } from '@/constants/layout'
import { speakersListingTopState } from '@/constants/speakersNavigation'

function NoSpeakerSelected() {
  return (
    <>
      <Header />
      <main className="bg-surface-light pb-32 pt-[clamp(7rem,11vh,9rem)]">
        <div className={editorialContent}>
          <h1 className="font-sans text-[clamp(1.75rem,3vw,2.25rem)] font-semibold text-text-dark">
            Select a speaker to continue
          </h1>
          <p className="mt-4 max-w-lg font-sans text-[16px] leading-[1.6] text-secondary">
            To request a session, choose a speaker from the directory first. Each
            request is reviewed individually — it is not an automatic booking.
          </p>
          <Link
            to="/speakers"
            state={speakersListingTopState}
            className="group/browse mt-8 inline-flex items-center gap-1.5 font-sans text-[14px] font-medium text-text-violet transition-colors hover:text-primary-violet"
          >
            <span>Browse all speakers</span>
            <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover/browse:translate-x-[3px]" />
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}

export function BookSpeakerPage() {
  const [searchParams] = useSearchParams()
  const speakerId = searchParams.get('speaker')
  const speaker = speakers.find((entry) => entry.id === speakerId)

  if (!speaker) {
    return <NoSpeakerSelected />
  }

  return (
    <>
      <Header />
      <main>
        <BookingFlowSection speaker={speaker} />
      </main>
      <Footer />
    </>
  )
}
