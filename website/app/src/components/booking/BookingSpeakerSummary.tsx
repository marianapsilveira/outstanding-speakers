import type { Speaker } from '@/data/speakers'
import {
  BOOKING_STEP_META,
  type BookingStep,
} from '@/types/booking'

interface BookingSpeakerSummaryProps {
  speaker: Speaker
  currentStep: BookingStep
  onStepSelect: (step: BookingStep) => void
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 12 12"
      aria-hidden="true"
      className="h-3 w-3"
      fill="none"
    >
      <path
        d="M2.5 6 5 8.5 9.5 3.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function StepIndicator({
  step,
  currentStep,
}: {
  step: BookingStep
  currentStep: BookingStep
}) {
  if (step < currentStep) {
    return (
      <span
        className="
          flex
          h-[22px]
          w-[22px]
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-primary-violet
          text-white
        "
      >
        <CheckIcon />
      </span>
    )
  }

  if (step === currentStep) {
    return (
      <span
        className="
          flex
          h-[22px]
          w-[22px]
          shrink-0
          items-center
          justify-center
          rounded-full
          border border-primary-violet
          font-sans
          text-[12px]
          font-normal
          text-primary-violet
        "
      >
        {step}
      </span>
    )
  }

  return (
    <span
      className="
        flex
        h-[22px]
        w-[22px]
        shrink-0
        items-center
        justify-center
        rounded-full
        border border-[#D9D7E3]
        font-sans
        text-[12px]
        font-normal
        text-secondary
      "
    >
      {step}
    </span>
  )
}

export function BookingSpeakerSummary({
  speaker,
  currentStep,
  onStepSelect,
}: BookingSpeakerSummaryProps) {
  return (
    <aside className="w-full lg:w-[340px] lg:shrink-0">
      <div
        className="
          overflow-hidden
          rounded-[12px]
          border border-[#D9D7E3]
          bg-white
        "
      >
        <div className="overflow-hidden">
          <img
            src={speaker.image}
            alt={speaker.name}
            className="
              aspect-[4/3]
              w-full
              object-cover
              lg:aspect-[16/11]
            "
          />
        </div>

        <div className="px-6 py-6">
          <p
            className="
              font-mono
              text-[12px]
              font-normal
              uppercase
              leading-[1.3]
              tracking-[0em]
              text-secondary
            "
          >
            Requesting a session with
          </p>

          <p
            className="
              mt-[8px]
              font-sans
              text-[22px]
              font-bold
              uppercase
              leading-[1.1]
              tracking-normal
              text-text-dark
            "
          >
            {speaker.name}
          </p>

          <nav
            className="
              mt-[32px]
              hidden
              flex-col
              gap-[16px]
              lg:flex
            "
            aria-label="Booking steps"
          >
            {BOOKING_STEP_META.map((meta) => {
              const isClickable =
                meta.step <= currentStep

              const isCurrent =
                meta.step === currentStep

              return (
                <button
                  key={meta.step}
                  type="button"
                  disabled={!isClickable}
                  aria-current={
                    isCurrent
                      ? 'step'
                      : undefined
                  }
                  onClick={() => {
                    if (isClickable) {
                      onStepSelect(meta.step)
                    }
                  }}
                  className={`
                    flex
                    items-center
                    gap-[12px]
                    text-left
                    transition-opacity
                    ${
                      isClickable
                        ? 'cursor-pointer opacity-100'
                        : 'cursor-default opacity-45'
                    }
                  `}
                >
                  <StepIndicator
                    step={meta.step}
                    currentStep={currentStep}
                  />

                  <span
                    className={`
                      font-sans
                      text-[14px]
                      font-normal
                      leading-[1.3]
                      ${
                        isCurrent
                          ? 'text-text-dark'
                          : 'text-secondary'
                      }
                    `}
                  >
                    {meta.label}
                  </span>
                </button>
              )
            })}
          </nav>

          <div
            className="
              mt-6
              flex
              items-center
              gap-3
              lg:hidden
            "
          >
            <StepIndicator
              step={currentStep}
              currentStep={currentStep}
            />

            <p
              className="
                font-sans
                text-[14px]
                font-normal
                text-text-dark
              "
            >
              Step {currentStep} of 4 ·{' '}
              {
                BOOKING_STEP_META[
                  currentStep - 1
                ].label
              }
            </p>
          </div>
        </div>
      </div>
    </aside>
  )
}