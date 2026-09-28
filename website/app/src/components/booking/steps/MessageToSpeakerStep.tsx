import { BookingTextarea } from '@/components/booking/BookingFormFields'
import { BookingStepNavigation } from '@/components/booking/BookingStepNavigation'
import {
  getSpeakerFirstName,
  type Speaker,
} from '@/data/speakers'
import type {
  BookingErrors,
  BookingRequestForm,
} from '@/types/booking'

interface MessageToSpeakerStepProps {
  speaker: Speaker
  formData: BookingRequestForm
  errors: BookingErrors
  onChange: (
    field: keyof BookingRequestForm,
    value: string,
  ) => void
  onBack: () => void
  onSubmit: () => void
  isSubmitting: boolean
}

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className="
        mt-0.5
        h-5 w-5
        shrink-0
        text-primary-violet
      "
      fill="none"
    >
      <path
        d="M10 2.5 4.5 4.75v5.25c0 3.15 2.2 6.05 5.5 7 3.3-.95 5.5-3.85 5.5-7V4.75L10 2.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      <path
        d="m7.25 10 1.75 1.75L12.75 8.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function MessageToSpeakerStep({
  speaker,
  formData,
  errors,
  onChange,
  onBack,
  onSubmit,
  isSubmitting,
}: MessageToSpeakerStepProps) {
  const firstName =
    getSpeakerFirstName(speaker.name)

  return (
    <div>
      <h2
        className="
          font-sans
          text-[clamp(1.375rem,2vw,1.625rem)]
          font-semibold
          leading-[1.15]
          text-text-dark
        "
      >
        A message to {firstName}
      </h2>

      <div className="mt-[28px]">
        <BookingTextarea
          id="messageToSpeaker"
          label="Message to speaker (optional)"
          helperText="A few personal lines can help the speaker understand why you chose them."
          value={formData.messageToSpeaker}
          onChange={(value) =>
            onChange(
              'messageToSpeaker',
              value,
            )
          }
          placeholder={`Hi ${firstName}, your story about belonging really resonated with us...`}
          error={errors.messageToSpeaker}
          rows={7}
          maxLength={1000}
          showCount
        />
      </div>

      <div
        className="
          mt-6
          flex
          gap-3
          rounded-[12px]
          border border-primary-violet/20
          bg-primary-violet/[0.06]
          px-5
          py-4
        "
      >
        <ShieldIcon />

        <div>
          <p
            className="
              font-sans
              text-[14px]
              font-semibold
              leading-[1.4]
              text-text-dark
            "
          >
            This is a request, not a
            confirmed booking
          </p>

          <p
            className="
              mt-1
              font-sans
              text-[13px]
              leading-[1.55]
              text-secondary
            "
          >
            {firstName} will review the
            context, availability and fit,
            and may decline or suggest
            changes. You can edit anything
            before sending.
          </p>
        </div>
      </div>

      <BookingStepNavigation
        showBack
        onBack={onBack}
        onNext={onSubmit}
        nextLabel="Send request"
        isSubmitting={isSubmitting}
        submitMode
      />
    </div>
  )
}