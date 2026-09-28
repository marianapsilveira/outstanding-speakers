import { motion } from 'framer-motion'
import { FullWidthWrap } from '@/components/layout/EyebrowRow'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const easing = [0.22, 1, 0.36, 1] as const

export function InsightSection() {
  const reducedMotion = useReducedMotion()

  const quoteInitial = reducedMotion
    ? { opacity: 1, x: 0, y: 0 }
    : { opacity: 0, x: -90, y: 24 }

  const sourceInitial = reducedMotion
    ? { opacity: 1, x: 0 }
    : { opacity: 0, x: -35 }

  const supportingInitial = reducedMotion
    ? { opacity: 1, x: 0, y: 0 }
    : { opacity: 0, x: 90, y: 24 }

  return (
    <section
      className="
        insight-section
        relative z-[4] w-full overflow-hidden
        pt-[clamp(16rem,30vh,19rem)]
        pb-[160px]
      "
    >
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[linear-gradient(to_bottom,rgba(91,72,255,0)_0%,rgba(91,72,255,1)_100%)]
        "
        aria-hidden="true"
      />

      <FullWidthWrap className="relative z-10">
        <div className="w-full">
          <motion.div
            initial={quoteInitial}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            viewport={{
              once: false,
              amount: 0.25,
            }}
            transition={{
              duration: reducedMotion ? 0 : 1,
              ease: easing,
            }}
            className="w-full"
          >
            <blockquote
              className="
                w-full max-w-[1400px]
                font-display
                text-[clamp(2rem,2.8vw,2.5rem)]
                font-normal
                leading-[1.15]
                tracking-normal
                text-text-light
              "
            >
              <span className="hidden lg:inline">
                &ldquo;A single 10-minute deep canvassing conversation can durably reduce
                <br />
                transgender prejudice and increase support for non-discrimination laws.&rdquo;
              </span>

              <span className="lg:hidden">
                &ldquo;A single 10-minute deep canvassing conversation can durably reduce
                transgender prejudice and increase support for non-discrimination laws.&rdquo;
              </span>
            </blockquote>

            <motion.p
              initial={sourceInitial}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: false,
                amount: 0.6,
              }}
              transition={{
                duration: reducedMotion ? 0 : 0.75,
                delay: reducedMotion ? 0 : 0.12,
                ease: easing,
              }}
              className="
                mt-[32px]
                font-mono
                text-[18px]
                font-normal
                uppercase
                tracking-[0.18em]
                text-text-light/55
              "
            >
              Stanford &amp; UC Berkeley
            </motion.p>
          </motion.div>

          <motion.div
            initial={supportingInitial}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            transition={{
              duration: reducedMotion ? 0 : 1,
              delay: reducedMotion ? 0 : 0.12,
              ease: easing,
            }}
            className="
              mt-[80px]
              ml-auto
              w-full
              max-w-[1080px]
              text-left
            "
          >
            <p
              className="
                font-sans
                text-[clamp(1.5rem,2.2vw,2rem)]
                font-normal
                leading-[1.2]
                text-text-light/88
              "
            >
              <span className="hidden lg:inline">
                Understanding begins when experience becomes real.
                <br />
                <span className="text-[#FFC6FA]">
                  That shift happens in conversation
                </span>{' '}
                — in the unremarkable moment
                <br />
                when one person listens to another and something quietly rearranges.
              </span>

              <span className="lg:hidden">
                Understanding begins when experience becomes real.{' '}
                <span className="text-[#FFC6FA]">
                  That shift happens in conversation
                </span>{' '}
                — in the unremarkable moment when one person listens to another
                and something quietly rearranges.
              </span>
            </p>
          </motion.div>
        </div>
      </FullWidthWrap>
    </section>
  )
}