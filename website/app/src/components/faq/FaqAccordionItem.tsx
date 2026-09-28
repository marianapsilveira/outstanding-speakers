import { AnimatePresence, motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { bodyText20 } from '@/constants/typography'
import type { FaqItem } from '@/data/faq'

interface FaqAccordionItemProps {
  item: FaqItem
  isOpen: boolean
  onToggle: () => void
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`
        h-5 w-5 shrink-0
        text-text-dark/70
        transition-transform duration-300 ease-out
        ${open ? 'rotate-180' : 'rotate-0'}
      `}
      fill="none"
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function FaqAccordionItem({
  item,
  isOpen,
  onToggle,
}: FaqAccordionItemProps) {
  const reducedMotion = useReducedMotion()
  const panelId = `${item.id}-answer`
  const buttonId = `${item.id}-question`

  return (
    <div className="border-b border-[#D9D7E3]">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={(event) => {
            event.currentTarget.focus({ preventScroll: true })
            onToggle()
          }}
          className="
            group
            flex w-full
            items-start justify-between
            gap-6
            py-[28px]
            text-left
            transition-colors
            duration-300
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-primary-violet/40
            focus-visible:ring-offset-4
            focus-visible:ring-offset-surface-light
          "
        >
          <span
            className="
              font-display
              text-[clamp(1.375rem,2.2vw,2rem)]
              font-normal
              leading-[1.2]
              tracking-normal
              text-text-dark
              transition-colors
              duration-300
              group-hover:text-text-violet
            "
          >
            {item.question}
          </span>

          <span className="mt-[0.35em] flex h-6 w-6 items-center justify-center">
            <ChevronIcon open={isOpen} />
          </span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={
              reducedMotion
                ? { height: 'auto', opacity: 1 }
                : { height: 0, opacity: 0 }
            }
            animate={{ height: 'auto', opacity: 1 }}
            exit={
              reducedMotion
                ? { height: 0, opacity: 1 }
                : { height: 0, opacity: 0 }
            }
            transition={{
              duration: reducedMotion ? 0 : 0.38,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden"
          >
            <p
              className={`
                max-w-[42rem]
                pb-[32px]
                ${bodyText20}
                text-text-dark/78
              `}
            >
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
