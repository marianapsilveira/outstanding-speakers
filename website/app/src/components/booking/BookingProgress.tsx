import {
  motion,
  useReducedMotion,
} from 'framer-motion'
import {
  BOOKING_STEP_META,
  type BookingStep,
} from '@/types/booking'

interface BookingProgressProps {
  currentStep: BookingStep
}

export function BookingProgress({
  currentStep,
}: BookingProgressProps) {
  const reducedMotion = useReducedMotion()

  const stepMeta =
    BOOKING_STEP_META[currentStep - 1]

  return (
    <div className="mb-[32px]">
      <div
        className="
          mb-[12px]
          flex
          items-center
          justify-between
          gap-4
        "
      >
        <span
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
          Step {currentStep} of 4
        </span>

        <span
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
          {stepMeta.title}
        </span>
      </div>

      <div
        className="
          h-[3px]
          w-full
          overflow-hidden
          rounded-full
          bg-[#E8E6EF]
        "
        role="progressbar"
        aria-valuemin={1}
        aria-valuemax={4}
        aria-valuenow={currentStep}
        aria-label={`Booking progress, step ${currentStep} of 4`}
      >
        <motion.div
          className="
            h-full
            rounded-full
            bg-gradient-to-r
            from-[#FFC6FA]
            via-lime
            to-primary-violet
          "
          initial={false}
          animate={{
            width: `${currentStep * 25}%`,
          }}
          transition={{
            duration: reducedMotion
              ? 0
              : 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>
    </div>
  )
}