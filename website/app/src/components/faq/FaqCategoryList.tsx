import { useLayoutEffect, useRef, useState } from 'react'
import { FaqAccordionItem } from '@/components/faq/FaqAccordionItem'
import { eyebrowText } from '@/constants/typography'
import type { FaqCategory } from '@/data/faq'

interface FaqCategoryListProps {
  category: FaqCategory
}

export function FaqCategoryList({
  category,
}: FaqCategoryListProps) {
  const [openId, setOpenId] = useState<string | null>(null)
  const lockedScrollY = useRef<number | null>(null)

  useLayoutEffect(() => {
    const lockedY = lockedScrollY.current

    if (lockedY == null) {
      return
    }

    const holdScroll = () => {
      if (Math.abs(window.scrollY - lockedY) > 0.5) {
        window.scrollTo({
          top: lockedY,
          left: 0,
          behavior: 'instant',
        })
      }
    }

    holdScroll()

    const startedAt = performance.now()
    let frame = 0

    const tick = (now: number) => {
      holdScroll()

      if (now - startedAt < 420) {
        frame = window.requestAnimationFrame(tick)
      } else {
        lockedScrollY.current = null
      }
    }

    frame = window.requestAnimationFrame(tick)

    return () => {
      window.cancelAnimationFrame(frame)
    }
  }, [openId])

  return (
    <section
      aria-labelledby={`${category.id}-label`}
      className="[overflow-anchor:none]"
    >
      <h2
        id={`${category.id}-label`}
        className={`${eyebrowText} text-text-violet`}
      >
        {category.label}
      </h2>

      <div className="mt-[20px] border-t border-[#D9D7E3]">
        {category.items.map((item) => (
          <FaqAccordionItem
            key={item.id}
            item={item}
            isOpen={openId === item.id}
            onToggle={() => {
              lockedScrollY.current = window.scrollY
              setOpenId((current) =>
                current === item.id ? null : item.id,
              )
            }}
          />
        ))}
      </div>
    </section>
  )
}
