import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'
import { primaryNav } from '@/data/navigation'
import { pagePaddingX } from '@/constants/layout'
import { speakersListingTopState } from '@/constants/speakersNavigation'
import { useScrollDirection } from '@/hooks/useScrollDirection'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const location = useLocation()
  const visible = useScrollDirection()

  /*
   * Speaker profiles have a light background at the top.
   *
   * Matches:
   * /speakers/amara-okonkwo
   * /speakers/devon-costa
   *
   * Does not match:
   * /speakers
   */
  const isSpeakerProfile =
    /^\/speakers\/[^/]+\/?$/.test(location.pathname)

  const isBookPage = location.pathname === '/book'

  const useLightTopTreatment =
    (isSpeakerProfile || isBookPage) && !isScrolled

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  /*
   * Close the mobile menu whenever the route changes.
   */
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <motion.header
      className="
        fixed
        top-[40px]
        right-0
        left-0
        z-50
      "
      initial={false}
      animate={{
        y: visible ? 0 : '-160%',
      }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className={pagePaddingX}>
        <motion.div
          initial={false}
          animate={{
            backgroundColor: isScrolled
              ? 'rgba(10, 10, 10, 0.38)'
              : 'rgba(10, 10, 10, 0)',
            borderColor: isScrolled
              ? 'rgba(255, 255, 255, 0.14)'
              : 'rgba(255, 255, 255, 0)',
            boxShadow: isScrolled
              ? '0 16px 50px rgba(0, 0, 0, 0.16)'
              : '0 0 0 rgba(0, 0, 0, 0)',
          }}
          transition={{
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            grid
            min-h-[64px]
            w-full
            grid-cols-[1fr_auto_1fr]
            items-center
            overflow-hidden
            rounded-[16px]
            border
            px-[20px]
            py-[12px]
            backdrop-blur-[28px]
            backdrop-saturate-[1.25]
          "
        >
          {/* Soft glass highlight */}
          <div
            className={`
              pointer-events-none
              absolute inset-0
              rounded-[inherit]
              bg-gradient-to-b
              from-white/[0.08]
              via-white/[0.025]
              to-transparent
              transition-opacity
              duration-300
              ${
                isScrolled
                  ? 'opacity-100'
                  : 'opacity-0'
              }
            `}
            aria-hidden="true"
          />

          {/* Logo */}
          <div
            className="
              relative z-10
              flex h-full
              translate-y-[1px]
              items-center
              justify-self-start
            "
          >
            <Logo
              variant={
                useLightTopTreatment
                  ? 'light-background'
                  : 'dark-background'
              }
            />
          </div>

          {/* Desktop navigation */}
          <nav
            className="
              relative z-10
              hidden
              items-center
              justify-center
              gap-10
              lg:flex
            "
            aria-label="Primary navigation"
          >
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                state={
                  item.href === '/speakers'
                    ? speakersListingTopState
                    : undefined
                }
                className={`
                  font-sans
                  text-sm
                  font-semibold
                  transition-colors
                  duration-300
                  ${
                    useLightTopTreatment
                      ? `
                        text-[#0A0A0A]
                        hover:text-[#5749E7]
                      `
                      : `
                        text-text-light/90
                        hover:text-text-light
                      `
                  }
                `}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div
            className="
              relative z-10
              hidden
              items-center
              justify-self-end
              lg:flex
            "
          >
            <Button
              href="/speakers"
              linkState={speakersListingTopState}
              variant={
                useLightTopTreatment
                  ? 'violet'
                  : 'lime'
              }
              size="sm"
            >
              Book a Speaker
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className={`
              relative z-10
              col-start-3
              flex h-10 w-10
              items-center
              justify-center
              justify-self-end
              rounded-lg
              border
              transition-colors
              duration-300
              lg:hidden
              ${
                useLightTopTreatment
                  ? `
                    border-[#0A0A0A]/20
                    text-[#0A0A0A]
                  `
                  : `
                    border-white/20
                    text-white
                  `
              }
            `}
            onClick={() => setMobileOpen((current) => !current)}
            aria-expanded={mobileOpen}
            aria-label={
              mobileOpen
                ? 'Close menu'
                : 'Open menu'
            }
          >
            <span className="sr-only">Menu</span>

            <div className="flex flex-col gap-1.5">
              <span
                className={`
                  block
                  h-0.5
                  w-5
                  transition-[background-color,transform]
                  duration-300
                  ${
                    useLightTopTreatment
                      ? 'bg-[#0A0A0A]'
                      : 'bg-white'
                  }
                  ${
                    mobileOpen
                      ? 'translate-y-2 rotate-45'
                      : ''
                  }
                `}
              />

              <span
                className={`
                  block
                  h-0.5
                  w-5
                  transition-[background-color,opacity]
                  duration-300
                  ${
                    useLightTopTreatment
                      ? 'bg-[#0A0A0A]'
                      : 'bg-white'
                  }
                  ${
                    mobileOpen
                      ? 'opacity-0'
                      : ''
                  }
                `}
              />

              <span
                className={`
                  block
                  h-0.5
                  w-5
                  transition-[background-color,transform]
                  duration-300
                  ${
                    useLightTopTreatment
                      ? 'bg-[#0A0A0A]'
                      : 'bg-white'
                  }
                  ${
                    mobileOpen
                      ? '-translate-y-2 -rotate-45'
                      : ''
                  }
                `}
              />
            </div>
          </button>
        </motion.div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
                y: -8,
              }}
              animate={{
                opacity: 1,
                height: 'auto',
                y: 0,
              }}
              exit={{
                opacity: 0,
                height: 0,
                y: -8,
              }}
              transition={{
                duration: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-[8px]
                overflow-hidden
                rounded-[16px]
                border
                border-white/12
                bg-[#0A0A0A]/60
                shadow-[0_16px_50px_rgba(0,0,0,0.18)]
                backdrop-blur-[28px]
                backdrop-saturate-[1.25]
                lg:hidden
              "
            >
              <nav
                className="
                  flex
                  flex-col
                  gap-1
                  px-6
                  py-4
                "
                aria-label="Mobile navigation"
              >
                {primaryNav.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    state={
                      item.href === '/speakers'
                        ? speakersListingTopState
                        : undefined
                    }
                    className="
                      rounded-lg
                      px-3
                      py-3
                      text-base
                      font-medium
                      text-text-light/90
                      transition-colors
                      hover:bg-white/5
                      hover:text-white
                    "
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="mt-3 px-3">
                  <Button
                    href="/speakers"
                    linkState={speakersListingTopState}
                    variant="lime"
                    size="sm"
                    className="w-full"
                  >
                    Book a Speaker
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}