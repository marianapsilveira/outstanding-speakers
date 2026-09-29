import { useEffect, useId, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SpeakerFilterOptions } from '@/components/speakers/SpeakerFilterOptions'
import { Button } from '@/components/ui/Button'
import {
  cloneSpeakerFilters,
  countActiveSpeakerFilters,
  emptySpeakerFilters,
  type SpeakerFilterState,
} from '@/utils/speakerFilters'

interface SpeakersFilterSheetProps {
  open: boolean
  filters: SpeakerFilterState
  onClose: () => void
  onApply: (filters: SpeakerFilterState) => void
}

export function SpeakersFilterSheet({
  open,
  filters,
  onClose,
  onApply,
}: SpeakersFilterSheetProps) {
  const titleId = useId()
  const [draft, setDraft] = useState(filters)

  useEffect(() => {
    if (open) {
      setDraft(cloneSpeakerFilters(filters))
    }
  }, [filters, open])

  useEffect(() => {
    if (!open) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose, open])

  const handleToggle = (
    groupId: keyof SpeakerFilterState,
    value: string,
  ) => {
    setDraft((current) => {
      const selected = current[groupId]
      const next = selected.includes(value)
        ? selected.filter((entry) => entry !== value)
        : [...selected, value]

      return {
        ...current,
        [groupId]: next,
      }
    })
  }

  const selectedCount = countActiveSpeakerFilters(draft)

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[80] lg:hidden">
          <motion.button
            type="button"
            aria-label="Close filters"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-[#0A0A0A]/45"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{
              duration: 0.32,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              inset-x-0
              bottom-0
              flex
              h-[88dvh]
              flex-col
              rounded-t-[20px]
              bg-white
              shadow-[0_-16px_50px_rgba(9,9,11,0.16)]
            "
          >
            <div className="flex items-center justify-between px-5 pt-4 pb-3">
              <div className="mx-auto h-1 w-10 rounded-full bg-[#D9D7E3]" />
            </div>

            <div className="flex items-center justify-between px-5 pb-4">
              <h2
                id={titleId}
                className="
                  font-sans
                  text-[18px]
                  font-semibold
                  leading-[1.2]
                  text-text-dark
                "
              >
                Filters
              </h2>

              <button
                type="button"
                onClick={onClose}
                className="
                  font-sans
                  text-[14px]
                  text-secondary
                  underline-offset-2
                  hover:text-text-dark
                  hover:underline
                "
              >
                Cancel
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto px-5 pb-4">
              <SpeakerFilterOptions
                filters={draft}
                onToggle={handleToggle}
              />
            </div>

            <div
              className="
                flex
                gap-3
                border-t
                border-[#D9D7E3]
                px-5
                py-4
                pb-[max(1rem,env(safe-area-inset-bottom))]
              "
            >
              <Button
                variant="ghost-dark"
                size="sm"
                className="flex-1"
                onClick={() => setDraft(emptySpeakerFilters())}
              >
                Clear
              </Button>

              <Button
                variant="violet"
                size="sm"
                className="flex-1"
                onClick={() => onApply(draft)}
              >
                Apply
                {selectedCount > 0 ? ` (${selectedCount})` : ''}
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
