import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ResourcesHeroSection } from '@/sections/resources/ResourcesHeroSection'
import { ResourcesLibrarySection } from '@/sections/resources/ResourcesLibrarySection'
import { ResourcesFinalCtaSection } from '@/sections/resources/ResourcesFinalCtaSection'

export function ResourcesPage() {
  return (
    <>
      <Header />

      <main className="bg-[#0A0A0A]">
        <ResourcesHeroSection />
        <div className="relative z-10 -mt-[clamp(6rem,14vh,10rem)]">
          <ResourcesLibrarySection />
        </div>
        <ResourcesFinalCtaSection />
      </main>

      <Footer />
    </>
  )
}
