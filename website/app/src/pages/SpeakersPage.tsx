import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SpeakersHeroSection } from '@/sections/speakers/SpeakersHeroSection'
import { SpeakersGridSection } from '@/sections/speakers/SpeakersGridSection'

export function SpeakersPage() {
  return (
    <>
      <Header />

      <main className="bg-[#0A0A0A]">
        <SpeakersHeroSection />
        <div className="relative z-10 -mt-[clamp(6rem,14vh,10rem)]">
          <SpeakersGridSection />
        </div>
      </main>

      <Footer />
    </>
  )
}
