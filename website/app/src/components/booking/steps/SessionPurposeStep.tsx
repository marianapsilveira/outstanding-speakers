import {
  BookingTextInput,
  BookingTextarea,
} from '@/components/booking/BookingFormFields'
import { BookingStepNavigation } from '@/components/booking/BookingStepNavigation'
import type {
  BookingErrors,
  BookingRequestForm,
} from '@/types/booking'

interface SessionPurposeStepProps {
  formData: BookingRequestForm
  errors: BookingErrors
  onChange: (
    field: keyof BookingRequestForm,
    value: string,
  ) => void
  onNext: () => void
}

export function SessionPurposeStep({
  formData,
  errors,
  onChange,
  onNext,
}: SessionPurposeStepProps) {
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
        Tell us why you&apos;re reaching out
      </h2>

      <div className="mt-[28px] grid grid-cols-1 gap-5 md:grid-cols-2">
        <BookingTextInput
          id="contactPerson"
          label="Name"
          value={formData.contactPerson}
          onChange={(value) =>
            onChange('contactPerson', value)
          }
          placeholder="Your name"
          error={errors.contactPerson}
          required
        />

        <BookingTextInput
          id="organizationName"
          label="Organization"
          value={formData.organizationName}
          onChange={(value) =>
            onChange(
              'organizationName',
              value,
            )
          }
          placeholder="e.g. Lumen Health"
          error={errors.organizationName}
          required
        />
      </div>

      <div className="mt-5">
        <BookingTextInput
          id="contactEmail"
          label="Email"
          type="email"
          value={formData.contactEmail}
          onChange={(value) =>
            onChange('contactEmail', value)
          }
          placeholder="example@email.com"
          error={errors.contactEmail}
          required
        />
      </div>

      <div className="mt-5">
        <BookingTextarea
          id="sessionPurpose"
          label="Session purpose"
          helperText="What are you hoping this conversation opens up?"
          value={formData.sessionPurpose}
          onChange={(value) =>
            onChange('sessionPurpose', value)
          }
          placeholder="We're starting an inclusion initiative and want to begin with a human story rather than a policy briefing..."
          error={errors.sessionPurpose}
          required
          rows={6}
        />
      </div>

      <BookingStepNavigation
        onNext={onNext}
      />
    </div>
  )
}