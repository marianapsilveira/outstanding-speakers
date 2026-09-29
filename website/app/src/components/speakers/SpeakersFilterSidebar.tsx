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
      <h2
        className="
          font-sans
          text-[18px]
          font-semibold
          leading-[1.2]
          text-text-dark
        "
      >
        Refine
      </h2>

      <div className="mt-[28px]">
        <SpeakerFilterOptions
          filters={filters}
          onToggle={onToggle}
        />
      </div>
    </aside>
  )
}
