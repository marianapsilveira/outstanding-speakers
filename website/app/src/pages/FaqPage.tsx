import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FaqHeroSection } from '@/sections/faq/FaqHeroSection'
import { FaqContentSection } from '@/sections/faq/FaqContentSection'

export function FaqPage() {
  return (
    <>
      <Header />

      <main className="bg-[#0A0A0A]">
        <FaqHeroSection />
        <div className="relative z-10 -mt-[clamp(6rem,14vh,10rem)]">
          <FaqContentSection />
        </div>
      </main>

      <Footer />
    </>
  )
}
