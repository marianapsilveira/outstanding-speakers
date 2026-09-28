/** Router state: open /speakers at the top (default for header, home CTAs, footer). */
export const speakersListingTopState = {
  speakersScrollIntent: 'top' as const,
}

/** Router state: restore saved Speakers listing scroll (profile breadcrumb only). */
export const speakersListingRestoreState = {
  speakersScrollIntent: 'restore-listing' as const,
}

export type SpeakersScrollIntent = 'top' | 'restore-listing'

export interface SpeakersNavigationState {
  speakersScrollIntent?: SpeakersScrollIntent
}
