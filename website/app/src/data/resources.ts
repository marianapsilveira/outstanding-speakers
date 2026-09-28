export type ResourceAudience = 'employees' | 'managers' | 'hr'

export type ResourceCategory =
  | 'Training'
  | 'Document'
  | 'Guide'
  | 'Checklist'

export interface Resource {
  id: string
  title: string
  description: string
  audience: ResourceAudience
  duration: string
  category: ResourceCategory
  href?: string
}

export interface ResourceGroup {
  id: ResourceAudience
  title: string
  description: string
  items: Resource[]
}

const lgbtqAllyshipUrl =
  'https://www.youtube.com/watch?v=ZQH4Mu5mxqY'

export const resourceGroups: ResourceGroup[] = [
  {
    id: 'employees',
    title: 'For employees',
    description:
      'Gentle starting points for anyone who wants to show up a little better.',
    items: [
      {
        id: 'lgbtq-allyship',
        title: 'LGBTQ+ allyship',
        description:
          'Become active and support the community at work and in society at large.',
        audience: 'employees',
        duration: '32 min',
        category: 'Training',
        href: lgbtqAllyshipUrl,
      },
      {
        id: 'understanding-gender-identity',
        title: 'Understanding gender identity',
        description:
          'Plain-language foundations, free of jargon and assumptions.',
        audience: 'employees',
        duration: '8 min',
        category: 'Document',
      },
      {
        id: 'everyday-allyship',
        title: 'Everyday allyship',
        description:
          'Small, repeatable habits that make a colleague’s day easier.',
        audience: 'employees',
        duration: '6 min',
        category: 'Guide',
      },
    ],
  },
  {
    id: 'managers',
    title: 'For managers',
    description:
      'Practical support for the conversations that land on your desk.',
    items: [
      {
        id: 'supporting-employee-through-transition',
        title: 'Supporting an employee through transition',
        description:
          'Follow their lead, protect their privacy, keep it human.',
        audience: 'managers',
        duration: '12 min',
        category: 'Checklist',
      },
      {
        id: 'inclusive-leadership-guide',
        title: 'Inclusive leadership guide',
        description:
          'Leading in a way that makes safety the default, not the exception.',
        audience: 'managers',
        duration: '10 min',
        category: 'Guide',
      },
    ],
  },
  {
    id: 'hr',
    title: 'For HR',
    description: 'Documentation that follows the human conversation.',
    items: [
      {
        id: 'care-clarity-starter-kit',
        title: 'Care & clarity starter kit',
        description:
          'A starter pack that helps HR respond to identity affirmation or transition processes with care.',
        audience: 'hr',
        duration: '9 min',
        category: 'Checklist',
      },
      {
        id: 'disclosure-consent-planner',
        title: 'Disclosure & Consent Planner',
        description:
          'Templates and prompts, designed to be adapted to each employee.',
        audience: 'hr',
        duration: '8 min',
        category: 'Document',
      },
      {
        id: 'event-preparation-guide',
        title: 'Event preparation guide',
        description:
          'Make a speaker session safe, well-run and worth the speaker’s time.',
        audience: 'hr',
        duration: '8 min',
        category: 'Guide',
      },
    ],
  },
]
