import { BookingSelect } from '@/components/booking/BookingFormFields'
import { BookingStepNavigation } from '@/components/booking/BookingStepNavigation'
import {
  AUDIENCE_SIZE_OPTIONS,
  AUDIENCE_TYPE_OPTIONS,
  type BookingErrors,
  type BookingRequestForm,
} from '@/types/booking'

interface AudienceDetailsStepProps {
  formData: BookingRequestForm
  errors: BookingErrors
  onChange: (
    field: keyof BookingRequestForm,
    value: string,
  ) => void
  onBack: () => void
  onNext: () => void
}

export function AudienceDetailsStep({
  formData,
  errors,
  onChange,
  onBack,
  onNext,
}: AudienceDetailsStepProps) {
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
        Who will be in the room?
      </h2>

      <div className="mt-[28px] grid grid-cols-1 gap-5 md:grid-cols-2">
        <BookingSelect
          id="audienceSize"
          label="Audience size"
          value={formData.audienceSize}
          onChange={(value) =>
            onChange('audienceSize', value)
          }
          options={AUDIENCE_SIZE_OPTIONS}
          placeholder="Select audience size"
          error={errors.audienceSize}
          required
        />

        <BookingSelect
          id="audienceType"
          label="Audience type"
          value={formData.audienceType}
          onChange={(value) =>
            onChange('audienceType', value)
          }
          options={AUDIENCE_TYPE_OPTIONS}
          placeholder="Select audience type"
          error={errors.audienceType}
          required
        />
      </div>

      <div
        className="
          mt-6
          rounded-[12px]
          border border-[#E8E6EF]
          bg-[#F7F7F8]
          px-5
          py-4
        "
      >
        <p className="font-sans text-[14px] leading-[1.55] text-secondary">
          Smaller, well-briefed rooms tend to
          make for the most honest
          conversations.
        </p>
      </div>

      <BookingStepNavigation
        showBack
        onBack={onBack}
        onNext={onNext}
      />
    </div>
  )
}