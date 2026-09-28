import { useEffect, useRef, useState } from 'react'

export function useScrollDirection(threshold = 80) {
  const [visible, setVisible] = useState(true)
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY

      if (currentY <= threshold) {
        setVisible(true)
      } else if (currentY > lastY.current + 4) {
        setVisible(false)
      } else if (currentY < lastY.current - 4) {
        setVisible(true)
      }

      lastY.current = currentY
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return visible
}
