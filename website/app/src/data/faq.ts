export interface FaqItem {
  id: string
  question: string
  answer: string
}

export interface FaqCategory {
  id: string
  label: string
  items: FaqItem[]
}

export const faqCategories: FaqCategory[] = [
  {
    id: 'the-idea',
    label: 'The idea',
    items: [
      {
        id: 'what-is-outstanding-speakers',
        question: 'What is OUTstanding Speakers?',
        answer:
          'OUTstanding Speakers is an inter-company speaker exchange that connects organizations with professionals who bring lived experience into meaningful workplace conversations. The goal is to create safer, more human conversations around LGBTQIA+ inclusion without placing the burden of education on employees inside the organization.',
      },
      {
        id: 'is-it-a-speaker-agency',
        question: 'Is OUTstanding Speakers a speaker agency?',
        answer:
          'No. Speakers are not professional speakers hired to deliver generic talks. They are professionals from different companies who bring both lived experience and professional context into the room.',
      },
      {
        id: 'connection-to-outstanding-leaders',
        question: 'How is OUTstanding Speakers connected to OUTstanding Leaders?',
        answer:
          'OUTstanding Leaders already brings together professionals across companies, countries and industries. OUTstanding Speakers builds on that wider network by creating a structured way for people to share lived experience across organizations.',
      },
    ],
  },
  {
    id: 'the-people',
    label: 'The people',
    items: [
      {
        id: 'who-are-the-speakers',
        question: 'Who are the speakers?',
        answer:
          'Speakers are professionals from participating organizations who choose to share aspects of their lived experience and workplace perspective. Each speaker has different strengths, topics and boundaries, helping the initiative match the right person with the right audience.',
      },
      {
        id: 'who-are-sessions-for',
        question: 'Who are the sessions for?',
        answer:
          'Sessions are designed for workplace audiences broadly — not only LGBTQIA+ employees. They can be relevant for leadership teams, managers, colleagues, employee groups or wider internal audiences.',
      },
      {
        id: 'what-can-a-session-be-about',
        question: 'What can a session be about?',
        answer:
          'Topics depend on the speaker and the needs of the audience. They may include workplace transition, belonging, allyship, inclusive communication, leadership, identity at work and other experiences connected to LGBTQIA+ inclusion.',
      },
      {
        id: 'speaker-safety',
        question: 'How is speaker safety protected?',
        answer:
          'Participation is voluntary, and speakers define the topics they are comfortable discussing. The coordinator supports matching and preparation so that expectations, boundaries and context are clear before the session.',
      },
      {
        id: 'are-speakers-compensated',
        question: 'Are speakers compensated?',
        answer:
          'The initiative is designed around the principle that lived experience and the work involved in preparing and delivering a session should be valued rather than treated as free emotional labour.',
      },
    ],
  },
  {
    id: 'the-exchange',
    label: 'The exchange',
    items: [
      {
        id: 'who-can-request-a-session',
        question: 'Who can request a session?',
        answer:
          'A manager, team lead, HR professional, DEI lead, employee network or other internal stakeholder can request a session on behalf of their team or organization.',
      },
      {
        id: 'how-does-matching-work',
        question: 'How does the matching work?',
        answer:
          'A coordinator reviews the request, understands the audience and context, and helps identify a speaker whose experience and strengths are relevant to that specific conversation. The goal is not simply to find an available speaker, but the right expert for the right room.',
      },
      {
        id: 'why-another-company',
        question: 'Why use someone from another company?',
        answer:
          'An external speaker can bring enough distance to make the conversation feel safer, while still being close enough to the audience’s professional reality to feel relevant. It also reduces the expectation that LGBTQIA+ employees within the organization should educate their own colleagues.',
      },
      {
        id: 'in-person-or-online',
        question: 'Are sessions in person or online?',
        answer:
          'The initial model is designed around in-person conversations, with early pilots focused geographically to make that possible. Other formats may be explored as the initiative develops.',
      },
      {
        id: 'how-long-is-a-session',
        question: 'How long is a session?',
        answer:
          'The exact format can vary depending on the audience, topic and context. A session might include a personal story, facilitated conversation and space for questions rather than following a fixed lecture format.',
      },
    ],
  },
  {
    id: 'beyond-the-session',
    label: 'Beyond the session',
    items: [
      {
        id: 'what-happens-before',
        question: 'What happens before a session?',
        answer:
          'The coordinator helps clarify the context, audience and purpose of the conversation. Resources may also be provided to help managers, employees or HR teams prepare appropriately.',
      },
      {
        id: 'what-happens-after',
        question: 'What happens after a session?',
        answer:
          'The conversation is not meant to end when the speaker leaves the room. Follow-up resources can support reflection, discussion and practical action, helping teams continue the learning afterwards.',
      },
      {
        id: 'what-kind-of-resources',
        question: 'What kind of resources are available?',
        answer:
          'Resources may include discussion prompts, manager guidance, research, practical tools and relevant work created through OUTstanding Leaders cohorts or other trusted sources.',
      },
      {
        id: 'how-do-you-measure-impact',
        question: 'How do you measure impact?',
        answer:
          'Early pilots can look at participant feedback, perceived understanding, relevance of the session, speaker experience and indicators connected to belonging and workplace inclusion. The measurement approach can become more robust as the initiative grows.',
      },
    ],
  },
  {
    id: 'for-organizations',
    label: 'For organizations',
    items: [
      {
        id: 'how-can-an-organization-join',
        question: 'How can an organization join the network?',
        answer:
          'Organizations can participate by hosting conversations, contributing speakers to the network, or both. This exchange model is what allows the network to grow across companies.',
      },
      {
        id: 'host-and-contribute',
        question: 'Can organizations both host speakers and contribute speakers?',
        answer:
          'Yes. The model is designed as an exchange. Organizations can invite speakers into their own workplace conversations while also contributing professionals who want to participate in the network.',
      },
      {
        id: 'why-should-an-organization-participate',
        question: 'Why should an organization participate?',
        answer:
          'Organizations participate because inclusion is not only a values question, but also a talent, culture and retention question. OUTstanding Speakers helps companies create meaningful conversations that can strengthen belonging, trust and everyday inclusion.',
      },
    ],
  },
]
