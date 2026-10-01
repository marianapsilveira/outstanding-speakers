import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowIcon } from '@/components/ui/ArrowIcon'
import { BookingProgress } from '@/components/booking/BookingProgress'
import { BookingSpeakerSummary } from '@/components/booking/BookingSpeakerSummary'
import { AudienceDetailsStep } from '@/components/booking/steps/AudienceDetailsStep'
import { DateLogisticsStep } from '@/components/booking/steps/DateLogisticsStep'
import { MessageToSpeakerStep } from '@/components/booking/steps/MessageToSpeakerStep'
import { SessionPurposeStep } from '@/components/booking/steps/SessionPurposeStep'
import type { Speaker } from '@/data/speakers'
import { editorialContent } from '@/constants/layout'
import {
  createEmptyBookingForm,
  type BookingErrors,
  type BookingRequestForm,
  type BookingStep,
} from '@/types/booking'
import {
  validateAllBookingSteps,
  validateBookingStep,
} from '@/utils/bookingValidation'
import { createBookingRequestPayload } from '@/utils/createBookingRequestPayload'

interface BookingFlowSectionProps {
  speaker: Speaker
}

function getTodayIsoDate(): string {
  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const day = String(today.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

function focusField(fieldId: string | null) {
  if (!fieldId) {
    return
  }

  window.requestAnimationFrame(() => {
    document
      .querySelector<HTMLElement>(`[data-field="${fieldId}"]`)
      ?.focus()
  })
}

export function BookingFlowSection({
  speaker,
}: BookingFlowSectionProps) {
  const navigate = useNavigate()

  const [currentStep, setCurrentStep] =
    useState<BookingStep>(1)

  const [formData, setFormData] =
    useState<BookingRequestForm>(
      createEmptyBookingForm,
    )

  const [errors, setErrors] =
    useState<BookingErrors>({})

  const [isSubmitting, setIsSubmitting] =
    useState(false)

  const minDate = useMemo(
    () => getTodayIsoDate(),
    [],
  )

  const stepPanelRef = useRef<HTMLDivElement>(null)
  const hasMountedStep = useRef(false)

  useEffect(() => {
    if (!hasMountedStep.current) {
      hasMountedStep.current = true
      return
    }

    if (
      window.matchMedia('(min-width: 1024px)')
        .matches
    ) {
      return
    }

    const panel = stepPanelRef.current

    if (!panel) {
      return
    }

    const headerOffset = 128
    const nextTop =
      panel.getBoundingClientRect().top +
      window.scrollY -
      headerOffset

    window.scrollTo({
      top: Math.max(0, nextTop),
      behavior: 'smooth',
    })
  }, [currentStep])

  const handleChange = useCallback(
    (
      field: keyof BookingRequestForm,
      value: string,
    ) => {
      setFormData((current) => ({
        ...current,
        [field]: value,
      }))

      setErrors((current) => {
        if (!current[field]) {
          return current
        }

        const next = { ...current }
        delete next[field]

        return next
      })
    },
    [],
  )

  const handleStepSelect = useCallback(
    (step: BookingStep) => {
      if (step <= currentStep) {
        setCurrentStep(step)
        setErrors({})
      }
    },
    [currentStep],
  )

  const handleNext = useCallback(() => {
    const result = validateBookingStep(
      currentStep,
      formData,
    )

    if (!result.isValid) {
      setErrors(result.errors)
      focusField(result.firstInvalidField)
      return
    }

    setErrors({})

    setCurrentStep(
      (step) =>
        Math.min(4, step + 1) as BookingStep,
    )
  }, [currentStep, formData])

  const handleBack = useCallback(() => {
    setErrors({})

    setCurrentStep(
      (step) =>
        Math.max(1, step - 1) as BookingStep,
    )
  }, [])

  const handleSubmit = useCallback(async () => {
    const validationResult =
      validateAllBookingSteps(formData)

    if (!validationResult.isValid) {
      const invalidStep =
        validationResult.firstInvalidStep ?? 1

      setCurrentStep(invalidStep)
      setErrors(validationResult.errors)

      window.requestAnimationFrame(() => {
        focusField(
          validationResult.firstInvalidField,
        )
      })

      return
    }

    setIsSubmitting(true)

    try {
      const payload =
        createBookingRequestPayload(
          speaker.id,
          formData,
        )

      await new Promise((resolve) => {
        window.setTimeout(resolve, 600)
      })

      console.info(
        'Booking request payload prepared:',
        payload,
      )

      navigate('/book/confirmation', {
        state: {
          speakerId: speaker.id,
          requestPayload: payload,
        },
      })
    } finally {
      setIsSubmitting(false)
    }
  }, [formData, navigate, speaker.id])

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-surface-light
        pb-[120px]
        pt-[clamp(7rem,11vh,9rem)]
      "
    >
      <div
        className="
          pointer-events-none
          absolute inset-0
          overflow-hidden
        "
        aria-hidden="true"
      >
        <div className="absolute left-[4%] top-[8%] h-[360px] w-[360px] rounded-full bg-[#BDF3CC] opacity-30 blur-[200px]" />
        <div className="absolute right-[6%] top-[12%] h-[420px] w-[420px] rounded-full bg-[#A9D9FF] opacity-28 blur-[200px]" />
        <div className="absolute right-[18%] bottom-[10%] h-[460px] w-[460px] rounded-full bg-[#FFC6FA] opacity-25 blur-[220px]" />
      </div>

      <div
        className={`
          relative z-10
          w-full
          ${editorialContent}
        `}
      >
        <Link
          to={`/speakers/${speaker.id}`}
          className="
            group/back
            mb-[32px]
            inline-flex
            items-center
            gap-[6px]
            font-sans
            text-[14px]
            font-normal
            text-secondary
            transition-colors
            hover:text-text-violet
          "
        >
          <ArrowIcon
            className="
              h-3.5 w-3.5
              rotate-180
              transition-transform
              duration-300
              group-hover/back:-translate-x-[3px]
            "
          />

          <span>Back to profile</span>
        </Link>

        <div
          className="
            grid
            grid-cols-1
            items-start
            gap-[32px]
            lg:grid-cols-[340px_minmax(0,1fr)]
          "
        >
          <BookingSpeakerSummary
            speaker={speaker}
            currentStep={currentStep}
            onStepSelect={handleStepSelect}
          />

          <div
            ref={stepPanelRef}
            className="
              min-w-0
              overflow-x-hidden
              rounded-[12px]
              border border-[#D9D7E3]
              bg-white
              px-6
              py-8
              md:px-8
              md:py-10
            "
          >
            <BookingProgress
              currentStep={currentStep}
            />

            {currentStep === 1 && (
              <SessionPurposeStep
                formData={formData}
                errors={errors}
                onChange={handleChange}
                onNext={handleNext}
              />
            )}

            {currentStep === 2 && (
              <AudienceDetailsStep
                formData={formData}
                errors={errors}
                onChange={handleChange}
                onBack={handleBack}
                onNext={handleNext}
              />
            )}

            {currentStep === 3 && (
              <DateLogisticsStep
                formData={formData}
                errors={errors}
                minDate={minDate}
                onChange={handleChange}
                onBack={handleBack}
                onNext={handleNext}
              />
            )}

            {currentStep === 4 && (
              <MessageToSpeakerStep
                speaker={speaker}
                formData={formData}
                errors={errors}
                onChange={handleChange}
                onBack={handleBack}
                onSubmit={handleSubmit}
                isSubmitting={isSubmitting}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}