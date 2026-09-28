import { speakerFilterGroups } from '@/data/speakerFilters'
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
        w-full
        shrink-0
        self-start
        lg:sticky
        lg:top-[40px]
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

      <div
        className="
          mt-[28px]
          flex
          flex-col
          gap-[28px]
        "
      >
        {speakerFilterGroups.map((group) => (
          <div key={group.id}>
            <h3
              className="
                font-mono
                text-[12px]
                font-normal
                uppercase
                leading-[1.3]
                tracking-[0em]
                text-secondary
              "
            >
              {group.label}
            </h3>

            <div
              className="
                mt-[12px]
                flex
                flex-wrap
                gap-[8px]
              "
            >
              {group.options.map((option) => {
                const isActive =
                  filters[group.id].includes(option)

                return (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() =>
                      onToggle(group.id, option)
                    }
                    className={`
                      inline-flex
                      min-h-[30px]
                      items-center
                      rounded-full
                      border
                      px-[12px]
                      py-[6px]
                      font-sans
                      text-[12px]
                      font-normal
                      leading-[1]
                      tracking-normal
                      transition-colors
                      duration-200
                      ${
                        isActive
                          ? `
                            border-text-violet
                            bg-text-violet/8
                            text-text-violet
                          `
                          : `
                            border-[#D9D7E3]
                            bg-white
                            text-text-dark
                            hover:border-text-violet/35
                          `
                      }
                    `}
                  >
                    {option}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </aside>
  )
}