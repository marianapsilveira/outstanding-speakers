import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import type { SpeakersNavigationState } from '@/constants/speakersNavigation'

const speakersScrollStorageKey =
  'outstanding-speakers-list-scroll'

export function saveSpeakersScrollPosition() {
  sessionStorage.setItem(
    speakersScrollStorageKey,
    String(window.scrollY),
  )
}

export function ScrollManager() {
  const location = useLocation()

  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    const navigationState =
      location.state as SpeakersNavigationState | null

    const isSpeakersList = location.pathname === '/speakers'

    const shouldRestoreSpeakersScroll =
      isSpeakersList &&
      navigationState?.speakersScrollIntent === 'restore-listing'

    if (shouldRestoreSpeakersScroll) {
      const savedPosition = Number(
        sessionStorage.getItem(speakersScrollStorageKey) ?? 0,
      )

      window.scrollTo({
        top: savedPosition,
        left: 0,
        behavior: 'instant',
      })

      return
    }

    if (isSpeakersList) {
      sessionStorage.removeItem(speakersScrollStorageKey)
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    })
  }, [location.key, location.pathname, location.state])

  return null
}
