export type ResourceAudience = 'employees' | 'managers' | 'hr'

export type ResourceCategory =
  | 'Training'
  | 'Document'
  | 'Video'
  | 'Guide'
  | 'Checklist'

export interface Resource {
  id: string
  title: string
  description: string
  audience: ResourceAudience
  duration?: string
  category: ResourceCategory
  href?: string
}

export interface ResourceGroup {
  id: ResourceAudience
  title: string
  description: string
  items: Resource[]
}

const lgbtqAllyshipUrl = 'https://www.youtube.com/watch?v=ZQH4Mu5mxqY'

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
        id: 'training-toolkit-gender-diverse-employees',
        title: 'Training toolkit for gender diverse employees',
        description:
          'Know your rights, and how to navigate workplace processes with more confidence.',
        audience: 'employees',
        category: 'Guide',
        href: 'https://www.transgendernetwerk.nl/wp-content/uploads/2023/01/Inclusion4All-TINb-Training-Toolkit-English-version-nov22.pdf',
      },
      {
        id: 'trans-intersex-non-binary-people-at-work',
        title: 'Trans, intersex and non-binary people at work',
        description:
          'See the barriers trans, intersex and non-binary people face at work, and the changes that help.',
        audience: 'employees',
        duration: '6 min',
        category: 'Video',
        href: 'https://www.youtube.com/watch?v=FWh2u0xXbZ8',
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
        category: 'Guide',
        href: 'https://www.imperial.ac.uk/media/imperial-college/administration-and-support-services/equality/public/trans/Guidance-for-managers-to-support-employees-who-are-transitioning-(May-2025).pdf',
      },
      {
        id: 'inclusive-leadership-practices',
        title: 'Inclusive leadership practices',
        description:
          'Create a safe and respectful environment for everyone, especially LGBTQ+ team members.',
        audience: 'managers',
        category: 'Guide',
        href: 'https://nextgendei.com/rainbow-hub/#inclusive:~:text=Knowing%20LGBTQ%2B-,Inclusive%20Leadership%20Practices,-Policies%20%26%20Legal%20Considerations',
      },
    ],
  },
  {
    id: 'hr',
    title: 'For HR',
    description: 'Documentation that follows the human conversation.',
    items: [
      {
        id: 'inclusive-onboarding',
        title: 'Inclusive onboarding',
        description:
          'A checklist to help HR welcome people with care from day one.',
        audience: 'hr',
        category: 'Checklist',
        href: 'https://nextgendei.com/rainbow-hub/#checklist:~:text=Training%20%26%20Development-,Checklists%20%26%20Forms,-Quick%20Tips',
      },
      {
        id: 'training-toolkit-hr-professionals',
        title: 'Training toolkit for HR professionals',
        description:
          'A guideline for HR training on creating inclusive workplaces for transgender, intersex and non-binary people.',
        audience: 'hr',
        category: 'Guide',
        href: 'https://www.transgendernetwerk.nl/wp-content/uploads/2023/01/Inclusion4All-HR-Training-Toolkit-English-version-nov22.pdf',
      },
    ],
  },
]
