export interface SpeakerFilterGroup {
  id:
    | 'topic'
    | 'language'
    | 'industry'
    | 'availability'
  label: string
  options: string[]
}

export const speakerFilterGroups: SpeakerFilterGroup[] = [
  {
    id: 'topic',
    label: 'Topic',
    options: [
      'Workplace transition',
      'Allyship',
      'Belonging',
      'Leadership',
      'Inclusive communication',
      'Everyday inclusion',
    ],
  },
  {
    id: 'language',
    label: 'Language',
    options: [
      'English',
      'Dutch',
      'French',
      'German',
      'Spanish',
      'Catalan',
      'Swedish',
      'Japanese',
      'Portuguese',
    ],
  },
  {
    id: 'industry',
    label: 'Industry experience',
    options: [
      'Technology',
      'Finance',
      'Healthcare',
      'Education',
      'Manufacturing',
      'Public sector',
      'Logistics',
      'Retail',
    ],
  },
  {
    id: 'availability',
    label: 'Availability',
    options: [
      'Available now',
      'Limited availability',
      'Waitlist',
    ],
  },
]