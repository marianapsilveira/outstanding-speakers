import type { Speaker } from '@/data/speakers'
import { speakerFilterGroups } from '@/data/speakerFilters'

export type SpeakerFilterState = Record<
  (typeof speakerFilterGroups)[number]['id'],
  string[]
>

export const emptySpeakerFilters =
  (): SpeakerFilterState => ({
    topic: [],
    language: [],
    industry: [],
    availability: [],
  })

export const cloneSpeakerFilters = (
  filters: SpeakerFilterState,
): SpeakerFilterState => ({
  topic: [...filters.topic],
  language: [...filters.language],
  industry: [...filters.industry],
  availability: [...filters.availability],
})

export const countActiveSpeakerFilters = (
  filters: SpeakerFilterState,
) =>
  filters.topic.length +
  filters.language.length +
  filters.industry.length +
  filters.availability.length

function matchesFilterGroup(
  speaker: Speaker,
  groupId: keyof SpeakerFilterState,
  selected: string[],
): boolean {
  if (selected.length === 0) {
    return true
  }

  switch (groupId) {
    case 'topic':
      return selected.every((value) =>
        speaker.tags.includes(value),
      )

    case 'language':
      return selected.every((value) =>
        speaker.languages.includes(value),
      )

    case 'industry':
      return selected.every((value) =>
        speaker.industries.includes(value),
      )

    case 'availability':
      return selected.includes(
        speaker.availability,
      )

    default:
      return true
  }
}

export function filterSpeakers(
  speakers: Speaker[],
  query: string,
  filters: SpeakerFilterState,
): Speaker[] {
  const normalizedQuery =
    query.trim().toLowerCase()

  return speakers.filter((speaker) => {
    const searchableContent = [
      speaker.name,
      speaker.location,
      speaker.timezone,
      speaker.quote,
      ...speaker.tags,
      ...speaker.languages,
      ...speaker.industries,
      speaker.availability,
    ]
      .join(' ')
      .toLowerCase()

    const matchesSearch =
      normalizedQuery.length === 0 ||
      searchableContent.includes(
        normalizedQuery,
      )

    const matchesFilters =
      speakerFilterGroups.every(
        (group) =>
          matchesFilterGroup(
            speaker,
            group.id,
            filters[group.id],
          ),
      )

    return matchesSearch && matchesFilters
  })
}