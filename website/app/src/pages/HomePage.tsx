import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/sections/home/HeroSection'
import { InsightSection } from '@/sections/home/InsightSection'
import { FeaturedSpeakersSection } from '@/sections/home/FeaturedSpeakersSection'
import { ResourcesSection } from '@/sections/home/ResourcesSection'
import { FinalCtaSection } from '@/sections/home/FinalCtaSection'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function HomePage() {
  const videoSectionRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: videoSectionRef,
    offset: ['start start', 'end start'],
  })

  /*
   * Scroll-linked animation:
   * unlike an entrance animation, this value follows the current scroll
   * position in both directions.
   */
  const videoY = useTransform(
    scrollYProgress,
    [0, 1],
    reducedMotion ? ['0%', '0%'] : ['0%', '14%'],
  )

  const videoScale = useTransform(
    scrollYProgress,
    [0, 1],
    reducedMotion ? [1, 1] : [1.06, 1.14],
  )

  return (
    <>
      <Header />

      <main className="bg-[#0A0A0A]">
        {/* Shared video background for Hero + Insight */}
        <div
          ref={videoSectionRef}
          className="relative overflow-hidden bg-[#0A0A0A]"
        >
          <motion.div
            style={{
              y: videoY,
              scale: videoScale,
            }}
            className="pointer-events-none absolute inset-0 origin-center"
            aria-hidden="true"
          >
            <video
              className="absolute inset-0 h-full w-full object-cover opacity-30"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/assets/home-hero.mp4" type="video/mp4" />
            </video>

            {/* Very subtle dark treatment over the video */}
            <div className="absolute inset-0 bg-[#0A0A0A]/5" />
          </motion.div>

          <div className="relative z-10">
            <HeroSection />
            <InsightSection />
          </div>
        </div>

        <FeaturedSpeakersSection />
        <ResourcesSection />
        <FinalCtaSection />
      </main>

      <Footer />
    </>
  )
}