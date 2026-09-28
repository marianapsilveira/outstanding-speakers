import type {
  BookingErrors,
  BookingFieldKey,
  BookingRequestForm,
  BookingStep,
} from '@/types/booking'

const EMAIL_PATTERN =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function todayIsoDate(): string {
  const today = new Date()

  const year = today.getFullYear()

  const month = String(
    today.getMonth() + 1,
  ).padStart(2, '0')

  const day = String(
    today.getDate(),
  ).padStart(2, '0')

  return `${year}-${month}-${day}`
}

function isPastDate(
  value: string,
): boolean {
  return value < todayIsoDate()
}

function letterCount(value: string): number {
  return (value.match(/\p{L}/gu) ?? []).length
}

function validateStep1(
  form: BookingRequestForm,
): BookingErrors {
  const errors: BookingErrors = {}

  if (!form.contactPerson.trim()) {
    errors.contactPerson =
      'Name is required.'
  }

  if (!form.organizationName.trim()) {
    errors.organizationName =
      'Organization is required.'
  }

  if (!form.contactEmail.trim()) {
    errors.contactEmail =
      'Email is required.'
  } else if (
    !EMAIL_PATTERN.test(
      form.contactEmail.trim(),
    )
  ) {
    errors.contactEmail =
      'Enter a valid email address.'
  }

  if (!form.sessionPurpose.trim()) {
    errors.sessionPurpose =
      'Session purpose is required.'
  } else if (
    letterCount(form.sessionPurpose) < 10
  ) {
    errors.sessionPurpose =
      'Please share a little more context.'
  }

  return errors
}

function validateStep2(
  form: BookingRequestForm,
): BookingErrors {
  const errors: BookingErrors = {}

  if (!form.audienceSize) {
    errors.audienceSize =
      'Select an audience size.'
  }

  if (!form.audienceType) {
    errors.audienceType =
      'Select an audience type.'
  }

  return errors
}

function validateStep3(
  form: BookingRequestForm,
): BookingErrors {
  const errors: BookingErrors = {}

  if (!form.preferredDate) {
    errors.preferredDate =
      'Date is required.'
  } else if (
    isPastDate(form.preferredDate)
  ) {
    errors.preferredDate =
      'Date cannot be in the past.'
  }

  if (!form.preferredStartTime.trim()) {
    errors.preferredStartTime =
      'Enter a start time.'
  }

  if (!form.countryRegion.trim()) {
    errors.countryRegion =
      'Country or region is required.'
  }

  if (!form.city.trim()) {
    errors.city =
      'City is required.'
  }

  return errors
}

function validateStep4(
  form: BookingRequestForm,
): BookingErrors {
  const errors: BookingErrors = {}

  if (
    form.messageToSpeaker.trim().length >
    1000
  ) {
    errors.messageToSpeaker =
      'Message must be 1,000 characters or fewer.'
  }

  return errors
}

const stepValidators: Record<
  BookingStep,
  (
    form: BookingRequestForm,
  ) => BookingErrors
> = {
  1: validateStep1,
  2: validateStep2,
  3: validateStep3,
  4: validateStep4,
}

function firstInvalidField(
  errors: BookingErrors,
): BookingFieldKey | null {
  const field = Object.keys(
    errors,
  )[0] as
    | BookingFieldKey
    | undefined

  return field ?? null
}

export function validateBookingStep(
  step: BookingStep,
  form: BookingRequestForm,
): {
  isValid: boolean
  errors: BookingErrors
  firstInvalidField:
    | BookingFieldKey
    | null
} {
  const errors =
    stepValidators[step](form)

  const invalidField =
    firstInvalidField(errors)

  return {
    isValid: invalidField === null,
    errors,
    firstInvalidField: invalidField,
  }
}

export function validateAllBookingSteps(
  form: BookingRequestForm,
): {
  isValid: boolean
  errors: BookingErrors
  firstInvalidStep:
    | BookingStep
    | null
  firstInvalidField:
    | BookingFieldKey
    | null
} {
  const steps: BookingStep[] = [
    1, 2, 3, 4,
  ]

  for (const step of steps) {
    const result =
      validateBookingStep(step, form)

    if (!result.isValid) {
      return {
        isValid: false,
        errors: result.errors,
        firstInvalidStep: step,
        firstInvalidField:
          result.firstInvalidField,
      }
    }
  }

  return {
    isValid: true,
    errors: {},
    firstInvalidStep: null,
    firstInvalidField: null,
  }
}