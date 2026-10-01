import { ArrowIcon } from '@/components/ui/ArrowIcon'
import { Button } from '@/components/ui/Button'

interface BookingStepNavigationProps {
  showBack?: boolean
  onBack?: () => void
  onNext?: () => void
  nextLabel?: string
  isSubmitting?: boolean
  submitMode?: boolean
}

export function BookingStepNavigation({
  showBack = false,
  onBack,
  onNext,
  nextLabel = 'Next',
  isSubmitting = false,
  submitMode = false,
}: BookingStepNavigationProps) {
  return (
    <div className="mt-auto">
      <div
        className="
          mt-[40px]
          flex
          items-center
          justify-between
          gap-4
          border-t
          border-[#E8E6EF]
          pt-[32px]
        "
      >
      {showBack ? (
        <button
          type="button"
          onClick={onBack}
          className="
            group/back
            inline-flex
            items-center
            gap-[6px]
            font-sans
            text-[14px]
            font-normal
            text-secondary
            transition-colors
            hover:text-text-dark
          "
        >
          <ArrowIcon
            className="
              h-3.5 w-3.5
              rotate-180
              transition-transform
              duration-300
              group-hover/back:-translate-x-[3px]
            "
          />

          <span
            className="
              relative
              after:absolute
              after:left-0
              after:bottom-[-3px]
              after:h-px
              after:w-full
              after:origin-right
              after:scale-x-0
              after:bg-current
              after:transition-transform
              after:duration-300
              group-hover/back:after:origin-left
              group-hover/back:after:scale-x-100
            "
          >
            Back
          </span>
        </button>
      ) : (
        <span />
      )}

      <Button
        type="button"
        variant="violet"
        size="sm"
        showArrow={!submitMode}
        underlineOnHover
        disabled={isSubmitting}
        onClick={onNext}
        className="
          !rounded-[8px]
          !px-[20px]
          !py-[12px]
          !text-[14px]
          !leading-[1]
        "
      >
        {isSubmitting
          ? 'Sending…'
          : nextLabel}
        </Button>
      </div>
    </div>
  )
}
