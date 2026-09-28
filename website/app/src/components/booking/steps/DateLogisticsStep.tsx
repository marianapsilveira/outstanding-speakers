import { useMemo } from 'react'
import { BookingCombobox, BookingTextInput } from '@/components/booking/BookingFormFields'
import { BookingStepNavigation } from '@/components/booking/BookingStepNavigation'
import {
  COUNTRY_OPTIONS,
  PREFERRED_START_TIME_OPTIONS,
  getCitiesForCountry,
  type BookingErrors,
  type BookingRequestForm,
} from '@/types/booking'

interface DateLogisticsStepProps {
  formData: BookingRequestForm
  errors: BookingErrors
  minDate: string
  onChange: (
    field: keyof BookingRequestForm,
    value: string,
  ) => void
  onBack: () => void
  onNext: () => void
}

export function DateLogisticsStep({
  formData,
  errors,
  minDate,
  onChange,
  onBack,
  onNext,
}: DateLogisticsStepProps) {
  const availableCities = useMemo(
    () => getCitiesForCountry(formData.countryRegion),
    [formData.countryRegion],
  )

  const hasSelectedCountry =
    formData.countryRegion.trim().length > 0

  const handleCountryChange = (country: string) => {
    const citiesForNewCountry = getCitiesForCountry(country)

    onChange('countryRegion', country)

    if (
      formData.city &&
      !citiesForNewCountry.includes(formData.city)
    ) {
      onChange('city', '')
    }
  }

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
        When and where?
      </h2>

      <div
        className="
          mt-[28px]
          grid
          grid-cols-1
          gap-5
          md:grid-cols-2
        "
      >
        <BookingTextInput
          id="preferredDate"
          label="Date"
          type="date"
          min={minDate}
          value={formData.preferredDate}
          onChange={(value) =>
            onChange('preferredDate', value)
          }
          error={errors.preferredDate}
          required
        />

        <BookingCombobox
          id="preferredStartTime"
          label="Start time"
          value={formData.preferredStartTime}
          onChange={(value) =>
            onChange('preferredStartTime', value)
          }
          options={PREFERRED_START_TIME_OPTIONS}
          placeholder="Type or select a time"
          error={errors.preferredStartTime}
          required
        />

        <BookingCombobox
          id="countryRegion"
          label="Country/region"
          value={formData.countryRegion}
          onChange={handleCountryChange}
          options={COUNTRY_OPTIONS}
          placeholder="Type or select a country"
          error={errors.countryRegion}
          required
        />

        <BookingCombobox
          id="city"
          label="City"
          value={formData.city}
          onChange={(value) => onChange('city', value)}
          options={availableCities}
          placeholder={
            hasSelectedCountry
              ? 'Type or select a city'
              : 'Select a country first'
          }
          error={errors.city}
          required
          disabled={!hasSelectedCountry}
        />
      </div>

      <BookingStepNavigation
        showBack
        onBack={onBack}
        onNext={onNext}
      />
    </div>
  )
}
