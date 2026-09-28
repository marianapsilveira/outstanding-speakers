import { Button } from '@/components/ui/Button'
import { pagePaddingX, typewriterEyebrowRow } from '@/constants/layout'
import { speakersListingTopState } from '@/constants/speakersNavigation'
import {
  bodyText20,
  displayHeading160,
  eyebrowText,
  fontDisplayExtraLight,
  fontDisplayRoman,
  stepNumeralDisplay,
  stepTitleDisplay,
} from '@/constants/typography'
import { publicAsset } from '@/utils/publicAsset'

const nextSteps = [
  {
    number: '01',
    title: 'A coordinator reviews your request',
    body: 'They consider the context, availability and fit — and may suggest adjustments.',
  },
  {
    number: '02',
    title: 'You receive a response',
    body: 'We’ll let you know whether the speaker can accept, usually within a few days.',
  },
  {
    number: '03',
    title: 'Preparation resources are shared',
    body: 'Before the session, both sides get materials to help the conversation land well.',
  },
]

export function BookingConfirmationSection() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#0A0A0A]
        pt-[360px]
        pb-[200px]
      "
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          controls={false}
        >
          <source
            src={publicAsset('assets/request-accepted-hero.mp4')}
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-[#0A0A0A]/70" />

        <div className="confirmation-hero-fade absolute inset-x-0 bottom-0 h-[58%]" />
      </div>

      <div className={`relative z-10 w-full text-center ${pagePaddingX}`}>
        <h1
          className={`
            mx-auto
            max-w-[18ch]
            ${displayHeading160}
            leading-[0.92]
          `}
        >
          <span className={`block ${fontDisplayExtraLight} text-text-light`}>
            Your request
          </span>
          <span className={`mt-[0.12em] block ${fontDisplayRoman} text-lime`}>
            has been sent
          </span>
        </h1>

        <p
          className={`
            mx-auto
            mt-[clamp(1.5rem,3vh,2.25rem)]
            max-w-[36rem]
            ${bodyText20}
            text-text-light
          `}
        >
          A coordinator will review the context, availability
          <br className="hidden sm:inline" />
          {' '}
          and fit before confirming the session.
        </p>
      </div>

      <div
        className={`
          relative z-10
          mt-[clamp(5rem,12vh,8rem)]
          w-full
          ${pagePaddingX}
        `}
      >
        <div
          className={typewriterEyebrowRow}
        >
          <p className={`${eyebrowText} text-text-light/90`}>
            What happens
          </p>
          <p className={`${eyebrowText} text-text-light/90`}>
            Next
          </p>
        </div>

        <div
          className="
            mt-[40px]
            grid
            w-full
            grid-cols-1
            gap-[40px]
            md:grid-cols-3
            md:gap-[48px]
          "
        >
          {nextSteps.map((step) => (
            <div key={step.number} className="min-w-0">
              <p
                className={`
                  ${stepNumeralDisplay}
                  text-[#FFC6FA]
                `}
              >
                {step.number}
              </p>
              <h2
                className={`
                  mt-[16px]
                  ${stepTitleDisplay}
                  text-text-light
                `}
              >
                {step.title}
              </h2>
              <p
                className={`
                  mt-[12px]
                  ${bodyText20}
                  text-text-light
                `}
              >
                {step.body}
              </p>
            </div>
          ))}
        </div>

        <div
          className="
            mt-[clamp(3rem,7vh,4.5rem)]
            flex
            flex-wrap
            items-center
            justify-center
            gap-[12px]
          "
        >
          <Button
            href="/resources"
            variant="lime"
            size="lg"
            showArrow
          >
            Browse Resources
          </Button>
          <Button
            href="/speakers"
            linkState={speakersListingTopState}
            variant="ghost-light"
            size="lg"
          >
            Back to Speakers
          </Button>
        </div>
      </div>
    </section>
  )
}
