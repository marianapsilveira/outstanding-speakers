import { SpeakerFilterOptions } from '@/components/speakers/SpeakerFilterOptions'
import type { SpeakerFilterState } from '@/utils/speakerFilters'

interface SpeakersFilterSidebarProps {
  filters: SpeakerFilterState
  onToggle: (
    groupId: keyof SpeakerFilterState,
    value: string,
  ) => void
}

export function SpeakersFilterSidebar({
  filters,
  onToggle,
}: SpeakersFilterSidebarProps) {
  return (
    <aside
      className="
        hidden
        w-full
        shrink-0
        self-start
        lg:sticky
        lg:top-[40px]
        lg:block
        lg:w-[220px]
      "
    >
      {/*
       * Keeps TOPIC level with the speaker cards after removing Refine.
       * Matches the former heading size plus its original 28px gap.
       */}
      <div
        className="hidden h-[1.2em] text-[18px] lg:block"
        aria-hidden="true"
      />

      <div className="lg:mt-[28px]">
        <SpeakerFilterOptions
          filters={filters}
          onToggle={onToggle}
        />
      </div>
    </aside>
  )
}
