import { Link, useLocation } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ArrowIcon } from '@/components/ui/ArrowIcon'
import { BookingConfirmationSection } from '@/sections/booking/BookingConfirmationSection'
import type { BookingRequestPayload } from '@/types/booking'
import { editorialContent } from '@/constants/layout'
import { speakersListingTopState } from '@/constants/speakersNavigation'

interface ConfirmationLocationState {
  speakerId?: string
  requestPayload?: BookingRequestPayload
}

function ConfirmationUnavailable() {
  return (
    <>
      <Header />
      <main className="bg-surface-light pb-32 pt-[clamp(7rem,11vh,9rem)]">
        <div className={editorialContent}>
          <h1 className="font-sans text-[clamp(1.75rem,3vw,2.25rem)] font-semibold text-text-dark">
            No request to confirm
          </h1>
          <p className="mt-4 max-w-lg font-sans text-[16px] leading-[1.6] text-secondary">
            This page is only available after sending a speaker request. Start by
            selecting a speaker from the directory.
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

export function BookingConfirmationPage() {
  const location = useLocation()
  const state = location.state as ConfirmationLocationState | null

  if (!state?.requestPayload) {
    return <ConfirmationUnavailable />
  }

  return (
    <>
      <Header />
      <main className="bg-[#0A0A0A]">
        <BookingConfirmationSection />
      </main>
      <Footer />
    </>
  )
}
