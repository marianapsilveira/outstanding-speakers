import type {
  BookingRequestForm,
  BookingRequestPayload,
} from '@/types/booking'

export function createBookingRequestPayload(
  speakerId: string,
  formData: BookingRequestForm,
): BookingRequestPayload {
  return {
    speakerId,

    organization: {
      name:
        formData.organizationName.trim(),

      contactPerson:
        formData.contactPerson.trim(),

      contactEmail:
        formData.contactEmail.trim(),
    },

    session: {
      purpose:
        formData.sessionPurpose.trim(),

      audienceSize:
        formData.audienceSize,

      audienceType:
        formData.audienceType,
    },

    logistics: {
      preferredDate:
        formData.preferredDate,

      alternativeDate:
        formData.alternativeDate || null,

      preferredStartTime:
        formData.preferredStartTime.trim(),

      timeZone:
        formData.timeZone.trim(),

      location: {
        countryRegion:
          formData.countryRegion.trim(),

        city:
          formData.city.trim(),

        buildingName:
          formData.buildingName.trim() ||
          null,

        unitOrFloor:
          formData.unitOrFloor.trim() ||
          null,

        streetAddress:
          formData.streetAddress.trim() ||
          null,
      },

      accessibilityNeeds:
        formData.accessibilityNeeds.trim() ||
        null,
    },

    messageToSpeaker:
      formData.messageToSpeaker.trim() ||
      null,
  }
}