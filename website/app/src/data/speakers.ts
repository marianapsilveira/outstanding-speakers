import { publicAsset } from '@/utils/publicAsset'

export interface SpeakerTestimonial {
  quote: string
  author: string
  role: string
}

export interface Speaker {
  id: string
  name: string
  pronouns: string
  roleLine: string
  location: string
  timezone: string
  languages: string[]
  quote: string
  storyOverview: string[]
  tags: string[]
  sessionFormats: string[]
  industries: string[]
  availability: string
  testimonials: SpeakerTestimonial[]
  image: string
}

export const speakers: Speaker[] = [
  {
    id: 'amara-okonkwo',
    name: 'Amara Okonkwo',
    pronouns: 'she/her',
    roleLine: 'Director of People Operations (Northwind)',
    location: 'Dublin, Ireland',
    timezone: 'IST',
    languages: ['English', 'Igbo'],
    quote:
      'Leadership got easier when I stopped editing myself before every single meeting.',
    storyOverview: [
      'Amara speaks from years of leading teams through change — what it takes to show up authentically when the room expects something else, and how leaders can make that easier for everyone.',
      'Her sessions are direct and grounded. She brings practical language for difficult conversations, without turning lived experience into a performance for the audience.',
    ],
    tags: ['Leadership', 'Workplace transition'],
    sessionFormats: [
      'Fireside conversation',
      'Leadership roundtable',
    ],
    industries: ['Technology', 'Finance'],
    availability: 'Available now',
    testimonials: [
      {
        quote:
          'Amara gave our managers a way to talk about transition that felt honest, not scripted. People stayed behind to keep the conversation going.',
        author: 'Priya Nair',
        role: 'VP People, Lattice Works',
      },
      {
        quote:
          'She has a rare ability to hold a senior room with warmth and precision. Our leadership team still references her session months later.',
        author: 'Tom Hughes',
        role: 'Chief of Staff, Meridian',
      },
    ],
    image: publicAsset('/assets/speakers/amara-okonkwo.jpg'),
  },
  {
    id: 'devon-costa',
    name: 'Devon Costa',
    pronouns: 'they/them',
    roleLine: 'Lead Customer Experience (Nokia)',
    location: 'Lisbon, Portugal',
    timezone: 'WEST',
    languages: ['English', 'Portuguese', 'Spanish'],
    quote:
      'Belonging is being able to have a bad day without feeling like you let your whole community down.',
    storyOverview: [
      'Devon brings a customer experience lens to the conversation on everyday inclusion — how people show up, read signals and create room for each other in fast-moving workplaces.',
      'They speak with warmth and humour, but they’re always grounded in what it actually takes to sustain belonging on a team: listening before solving, naming what’s hard, and making space for difference without turning someone into a symbol.',
    ],
    tags: [
      'Everyday inclusion',
      'Belonging',
      'Workplace transition',
    ],
    sessionFormats: [
      'Storytelling talk',
      'Fireside conversation',
      'Q&A panel',
    ],
    industries: ['Education', 'Public sector'],
    availability: 'Available now',
    testimonials: [
      {
        quote:
          'Devon had 400 people laughing. More importantly, they left with language for the quiet moments that define whether someone feels they belong.',
        author: 'Grace Oyelaran',
        role: 'Culture Lead, Heleo',
      },
      {
        quote:
          'We booked Devon for a leadership offsite and ended up rearranging how our managers think about feedback. Practical, human, unforgettable.',
        author: 'Marcus Lind',
        role: 'Head of People, Tall',
      },
    ],
    image: publicAsset('/assets/speakers/devon-costa.jpg'),
  },
  {
    id: 'elias-fontaine',
    name: 'Elias Fontaine',
    pronouns: 'he/they',
    roleLine: 'Inclusion Programme Lead (Vantage)',
    location: 'Wrocław, Poland',
    timezone: 'CEST',
    languages: ['English', 'Polish'],
    quote:
      "Allyship isn't a badge you wear. It's a hundred small choices nobody applauds you for.",
    storyOverview: [
      'Elias focuses on the everyday mechanics of allyship — the small decisions colleagues make when no one is watching, and how teams build habits that last beyond a single session.',
      'He speaks clearly and without jargon, helping audiences understand what supportive action looks like in practice, especially when conversations feel uncomfortable or unfinished.',
    ],
    tags: [
      'Inclusive communication',
      'Belonging',
      'Workplace transition',
    ],
    sessionFormats: [
      'Fireside conversation',
      'Small-group workshop',
    ],
    industries: ['Healthcare', 'Education'],
    availability: 'Limited availability',
    testimonials: [
      {
        quote:
          'Elias helped our team move from well-meaning intentions to specific behaviours we could actually practise together.',
        author: 'Sofia Reyes',
        role: 'DEI Partner, Arden Health',
      },
      {
        quote:
          'Thoughtful, unflinching and deeply relatable. Our employees said it was the first inclusion session that felt like it was about them, not a slide deck.',
        author: 'Jonas Meier',
        role: 'HR Director, Klaro',
      },
    ],
    image: publicAsset('/assets/speakers/elias-fontaine.jpg'),
  },
  {
    id: 'lina-petrova',
    name: 'Lina Petrova',
    pronouns: 'she/they',
    roleLine:
      'Organisational Development Consultant (Independent)',
    location: 'Stockholm, Sweden',
    timezone: 'CEST',
    languages: ['Swedish', 'English', 'Russian'],
    quote:
      "Understanding isn't a destination. It's a habit you practise out loud.",
    storyOverview: [
      'Lina works with teams learning to stay curious when conversations get personal — how to listen well, respond with care, and keep learning after the session ends.',
      'Her approach is calm and structured, giving people frameworks without losing the human texture of real workplace stories.',
    ],
    tags: [
      'Inclusive communication',
      'Belonging',
      'Everyday inclusion',
    ],
    sessionFormats: ['Q&A panel', 'Storytelling talk'],
    industries: ['Manufacturing', 'Logistics'],
    availability: 'Available now',
    testimonials: [
      {
        quote:
          'Lina created a room where people felt safe enough to ask the questions they had been avoiding for years.',
        author: 'Elin Forsberg',
        role: 'People Lead, Norra',
      },
      {
        quote:
          'Her session gave us shared language and a clearer sense of what good follow-up looks like. Exactly what we needed.',
        author: 'David Cho',
        role: 'Learning & Culture, Unitas',
      },
    ],
    image: publicAsset('/assets/speakers/lina-petrova.jpg'),
  },
  {
    id: 'noor-haddad',
    name: 'Noor Haddad',
    pronouns: 'she/her',
    roleLine: 'Employee Experience Strategist (Mosaic)',
    location: 'Amsterdam, Netherlands',
    timezone: 'CEST',
    languages: ['English', 'Dutch', 'Arabic'],
    quote:
      "I didn't transition to become an example. I did it to feel at home.",
    storyOverview: [
      'Noor speaks about the difference between being visible and being turned into a symbol, especially during moments of personal and professional transition.',
      'Her conversations help organizations create support without placing the burden of education on the person experiencing change.',
    ],
    tags: [
      'Workplace transition',
      'Belonging',
      'Inclusive communication',
    ],
    sessionFormats: [
      'Fireside conversation',
      'Storytelling talk',
    ],
    industries: ['Technology', 'Retail'],
    availability: 'Available now',
    testimonials: [
      {
        quote:
          'Noor helped us understand how care can become pressure when it is not led by listening.',
        author: 'Eva de Vries',
        role: 'People Director, Koan',
      },
      {
        quote:
          'A deeply personal conversation that still gave managers practical ways to act differently.',
        author: 'Milan Jansen',
        role: 'Operations Lead, Shift',
      },
    ],
    image: publicAsset('/assets/speakers/noor-haddad.jpg'),
  },
  {
    id: 'rosa-iglesias',
    name: 'Rosa Iglesias',
    pronouns: 'she/her',
    roleLine: 'Culture and Communications Lead (Orbe)',
    location: 'Barcelona, Spain',
    timezone: 'CEST',
    languages: ['Spanish', 'Catalan', 'English'],
    quote:
      "I tell people: you don't have to understand everything to be kind right now.",
    storyOverview: [
      'Rosa explores what inclusive communication looks like when people are uncertain, afraid of saying the wrong thing or still learning the language.',
      'She helps audiences replace silence and perfectionism with curiosity, accountability and practical care.',
    ],
    tags: [
      'Inclusive communication',
      'Belonging',
      'Workplace transition',
    ],
    sessionFormats: ['Q&A panel', 'Small-group workshop'],
    industries: ['Media', 'Education'],
    availability: 'Available now',
    testimonials: [
      {
        quote:
          'Rosa made difficult questions feel possible without making anyone feel exposed.',
        author: 'Lucía Ferrer',
        role: 'Learning Partner, Alba',
      },
      {
        quote:
          'Our team left with language they could use the very next morning.',
        author: 'Martí Serra',
        role: 'People Manager, Traç',
      },
    ],
    image: publicAsset('/assets/speakers/rosa-iglesias.jpg'),
  },
  {
    id: 'sam-okafor',
    name: 'Sam Okafor',
    pronouns: 'they/them',
    roleLine: 'Organisational Culture Partner (Common Ground)',
    location: 'Berlin, Germany',
    timezone: 'CEST',
    languages: ['English', 'German'],
    quote:
      'The most inclusive thing a team ever did for me was ask, and then actually listen.',
    storyOverview: [
      'Sam focuses on the gap between asking for input and genuinely allowing that input to change a decision.',
      'Their sessions explore trust, psychological safety and the small organizational signals that tell people whether speaking honestly is worth the risk.',
    ],
    tags: [
      'Everyday inclusion',
      'Allyship',
      'Inclusive communication',
    ],
    sessionFormats: [
      'Small-group workshop',
      'Leadership roundtable',
    ],
    industries: ['Technology', 'Public sector'],
    availability: 'Limited availability',
    testimonials: [
      {
        quote:
          'Sam changed how our leadership team thinks about listening. It is now something we design, not something we assume.',
        author: 'Greta Müller',
        role: 'Transformation Director, Veld',
      },
      {
        quote:
          'Clear, generous and challenging in exactly the right way.',
        author: 'Paolo Ricci',
        role: 'HR Business Partner, Sera',
      },
    ],
    image: publicAsset('/assets/speakers/sam-okafor.jpg'),
  },
  {
    id: 'theo-nakamura',
    name: 'Theo Nakamura',
    pronouns: 'he/him',
    roleLine: 'Learning Experience Director (Noma)',
    location: 'Copenhagen, Denmark',
    timezone: 'CEST',
    languages: ['English', 'Japanese', 'Danish'],
    quote:
      "I'm not here to change your mind. I'm here to tell you what one Tuesday felt like.",
    storyOverview: [
      'Theo uses specific, everyday stories to make conversations about identity and belonging feel immediate rather than abstract.',
      'His approach is thoughtful and understated, helping audiences notice how ordinary moments can communicate safety, exclusion or care.',
    ],
    tags: [
      'Workplace transition',
      'Belonging',
      'Allyship',
    ],
    sessionFormats: [
      'Storytelling talk',
      'Fireside conversation',
    ],
    industries: ['Technology', 'Education'],
    availability: 'Available now',
    testimonials: [
      {
        quote:
          'Theo made a complex topic feel human without simplifying it.',
        author: 'Freja Nielsen',
        role: 'People Lead, Nord',
      },
      {
        quote:
          'The room was completely still. People were not being instructed — they were paying attention.',
        author: 'Emil Sørensen',
        role: 'Learning Director, Favn',
      },
    ],
    image: publicAsset('/assets/speakers/theo-nakamura.jpg'),
  },

  /*
   * The following seven profiles temporarily reuse existing images.
   * Replace each path when dedicated photography becomes available.
   */

  {
    id: 'aisha-rahman',
    name: 'Aisha Rahman',
    pronouns: 'she/her',
    roleLine: 'Senior Inclusion Advisor (Aster)',
    location: 'Brussels, Belgium',
    timezone: 'CEST',
    languages: ['French', 'Dutch', 'English', 'Arabic'],
    quote:
      'Inclusion becomes real when people know they can disagree without losing their place in the room.',
    storyOverview: [
      'Aisha speaks about belonging across multilingual and multicultural workplaces, where the same gesture can be interpreted in very different ways.',
      'Her sessions help teams build curiosity and repair into their everyday communication rather than expecting perfect understanding.',
    ],
    tags: [
      'Inclusive communication',
      'Belonging',
      'Leadership',
    ],
    sessionFormats: [
      'Leadership roundtable',
      'Q&A panel',
    ],
    industries: ['Public sector', 'Finance'],
    availability: 'Available now',
    testimonials: [
      {
        quote:
          'Aisha gave our European leadership group a common language without erasing local differences.',
        author: 'Camille Laurent',
        role: 'People Director, Élan',
      },
      {
        quote:
          'She made complexity feel manageable and disagreement feel productive.',
        author: 'Jeroen Vos',
        role: 'Regional Lead, Forma',
      },
    ],
    image: publicAsset('/assets/speakers/amara-okonkwo.jpg'),
  },
  {
    id: 'mateo-alvarez',
    name: 'Mateo Álvarez',
    pronouns: 'he/him',
    roleLine: 'People Development Manager (Senda)',
    location: 'Madrid, Spain',
    timezone: 'CEST',
    languages: ['Spanish', 'English', 'Portuguese'],
    quote:
      'You do not need the perfect words to interrupt something that is hurting someone.',
    storyOverview: [
      'Mateo focuses on practical allyship: what colleagues can do in the moment when a comment, joke or assumption causes harm.',
      'He gives audiences realistic language for intervening without turning every interaction into a confrontation.',
    ],
    tags: [
      'Allyship',
      'Everyday inclusion',
      'Inclusive communication',
    ],
    sessionFormats: [
      'Small-group workshop',
      'Storytelling talk',
    ],
    industries: ['Retail', 'Logistics'],
    availability: 'Available now',
    testimonials: [
      {
        quote:
          'Mateo replaced abstract allyship with actions our managers could actually remember.',
        author: 'Inés Romero',
        role: 'HR Director, Surco',
      },
      {
        quote:
          'Warm, practical and refreshingly free of corporate jargon.',
        author: 'Tiago Matos',
        role: 'Operations Director, Norte',
      },
    ],
    image: publicAsset('/assets/speakers/elias-fontaine.jpg'),
  },
  {
    id: 'nia-williams',
    name: 'Nia Williams',
    pronouns: 'she/they',
    roleLine: 'Workplace Experience Lead (Luma)',
    location: 'Paris, France',
    timezone: 'CEST',
    languages: ['French', 'English'],
    quote:
      'Psychological safety is not everyone feeling comfortable. It is everyone knowing what happens when discomfort appears.',
    storyOverview: [
      'Nia speaks about the difference between a pleasant workplace and one where people can raise difficult truths without being punished or isolated.',
      'Her work helps teams define what support, accountability and repair should look like before conflict occurs.',
    ],
    tags: [
      'Leadership',
      'Belonging',
      'Everyday inclusion',
    ],
    sessionFormats: [
      'Leadership roundtable',
      'Fireside conversation',
    ],
    industries: ['Finance', 'Healthcare'],
    availability: 'Limited availability',
    testimonials: [
      {
        quote:
          'Nia helped us see that safety is a system, not a feeling we can simply announce.',
        author: 'Claire Moreau',
        role: 'Culture Director, Ligne',
      },
      {
        quote:
          'Our managers left with clearer expectations for how to respond when someone speaks up.',
        author: 'Hugo Bernard',
        role: 'HR Lead, Avance',
      },
    ],
    image: publicAsset('/assets/speakers/rosa-iglesias.jpg'),
  },
  {
    id: 'mika-korhonen',
    name: 'Mika Korhonen',
    pronouns: 'they/them',
    roleLine: 'Service Design Lead (Northline)',
    location: 'Helsinki, Finland',
    timezone: 'EEST',
    languages: ['Finnish', 'Swedish', 'English'],
    quote:
      'Sometimes inclusion is simply being given enough time to answer in your own way.',
    storyOverview: [
      'Mika explores how workplace rhythms, meetings and communication norms can unintentionally exclude people who process information differently.',
      'Their sessions invite teams to reconsider speed, participation and what they interpret as confidence or competence.',
    ],
    tags: [
      'Everyday inclusion',
      'Inclusive communication',
      'Belonging',
    ],
    sessionFormats: [
      'Small-group workshop',
      'Q&A panel',
    ],
    industries: ['Technology', 'Public sector'],
    availability: 'Available now',
    testimonials: [
      {
        quote:
          'Mika changed how we facilitate meetings across the entire organization.',
        author: 'Sanna Lahti',
        role: 'Design Director, Kajo',
      },
      {
        quote:
          'Quiet, precise and incredibly impactful.',
        author: 'Erik Lund',
        role: 'People Partner, Norr',
      },
    ],
    image: publicAsset('/assets/speakers/sam-okafor.jpg'),
  },
  {
    id: 'joao-mendes',
    name: 'João Mendes',
    pronouns: 'he/they',
    roleLine: 'Employee Relations Partner (Maré)',
    location: 'Porto, Portugal',
    timezone: 'WEST',
    languages: ['Portuguese', 'English', 'Spanish'],
    quote:
      'Being included is not being invited once. It is knowing the invitation will still exist after you say no.',
    storyOverview: [
      'João speaks about belonging, boundaries and the pressure people can feel to participate, disclose or represent a community at work.',
      'His sessions help organizations create invitations that preserve agency rather than making inclusion another obligation.',
    ],
    tags: [
      'Belonging',
      'Everyday inclusion',
      'Leadership',
    ],
    sessionFormats: [
      'Fireside conversation',
      'Q&A panel',
    ],
    industries: ['Logistics', 'Manufacturing'],
    availability: 'Available now',
    testimonials: [
      {
        quote:
          'João made us reconsider how often our invitations carried an unspoken expectation.',
        author: 'Marta Pinto',
        role: 'People Lead, Ria',
      },
      {
        quote:
          'The conversation was gentle, but the impact on our practices was immediate.',
        author: 'André Lopes',
        role: 'Operations Manager, Eixo',
      },
    ],
    image: publicAsset('/assets/speakers/devon-costa.jpg'),
  },
  {
    id: 'leila-ben-youssef',
    name: 'Leila Ben Youssef',
    pronouns: 'she/her',
    roleLine: 'Change Communications Director (Arc)',
    location: 'Lyon, France',
    timezone: 'CEST',
    languages: ['French', 'English', 'Arabic'],
    quote:
      'People can handle change. What they struggle with is being asked to pretend nothing important is changing.',
    storyOverview: [
      'Leila speaks about organizational change, identity and the emotional work people are often expected to keep invisible during transitions.',
      'She helps leaders communicate uncertainty honestly while still creating clarity, dignity and room for different responses.',
    ],
    tags: [
      'Workplace transition',
      'Leadership',
      'Inclusive communication',
    ],
    sessionFormats: [
      'Leadership roundtable',
      'Storytelling talk',
    ],
    industries: ['Healthcare', 'Finance'],
    availability: 'Limited availability',
    testimonials: [
      {
        quote:
          'Leila helped our leaders communicate change without hiding behind polished language.',
        author: 'Élodie Martin',
        role: 'Transformation Lead, Aube',
      },
      {
        quote:
          'She brought humanity into a process that had started to feel entirely procedural.',
        author: 'Karim Haddad',
        role: 'People Director, Nexo',
      },
    ],
    image: publicAsset('/assets/speakers/noor-haddad.jpg'),
  },
  {
    id: 'sofie-de-wilde',
    name: 'Sofie De Wilde',
    pronouns: 'she/her',
    roleLine: 'Learning and Culture Director (Common)',
    location: 'Antwerp, Belgium',
    timezone: 'CEST',
    languages: ['Dutch', 'French', 'English'],
    quote:
      'A team does not become inclusive because nobody complains. Sometimes silence is the clearest warning.',
    storyOverview: [
      'Sofie explores how leaders interpret silence, agreement and low conflict — and why these signals do not always mean people feel safe.',
      'Her sessions help teams create multiple ways to raise concerns, contribute ideas and challenge decisions.',
    ],
    tags: [
      'Leadership',
      'Inclusive communication',
      'Allyship',
    ],
    sessionFormats: [
      'Leadership roundtable',
      'Small-group workshop',
    ],
    industries: ['Education', 'Retail'],
    availability: 'Available now',
    testimonials: [
      {
        quote:
          'Sofie helped us understand that low conflict was not the same as high trust.',
        author: 'Anke Peeters',
        role: 'Managing Director, Samen',
      },
      {
        quote:
          'Practical, observant and exceptionally good at reading a room.',
        author: 'Louis Vermeulen',
        role: 'HR Partner, Delta',
      },
    ],
    image: publicAsset('/assets/speakers/lina-petrova.jpg'),
  },
  {
    id: 'andrei-popescu',
    name: 'Andrei Popescu',
    pronouns: 'he/him',
    roleLine: 'Engineering Culture Manager (Vector)',
    location: 'Bucharest, Romania',
    timezone: 'EEST',
    languages: ['Romanian', 'English'],
    quote:
      'The first person to question a team habit is often treated as the problem the habit created.',
    storyOverview: [
      'Andrei speaks about inclusion in technical teams, where established habits can be mistaken for objective or necessary ways of working.',
      'He helps teams examine whose communication styles, working patterns and ideas are rewarded — and whose are routinely overlooked.',
    ],
    tags: [
      'Everyday inclusion',
      'Leadership',
      'Belonging',
    ],
    sessionFormats: [
      'Fireside conversation',
      'Small-group workshop',
    ],
    industries: ['Technology', 'Manufacturing'],
    availability: 'Available now',
    testimonials: [
      {
        quote:
          'Andrei gave our engineering leaders a way to question culture without blaming individuals.',
        author: 'Ioana Stan',
        role: 'VP Engineering, Semn',
      },
      {
        quote:
          'Direct, credible and deeply relevant to how technical teams actually work.',
        author: 'Marek Novák',
        role: 'Technology Director, Forma',
      },
    ],
    image: publicAsset('/assets/speakers/theo-nakamura.jpg'),
  },
]

const featuredSpeakerIds = speakers.map(
  (speaker) => speaker.id,
)

export const featuredSpeakers = featuredSpeakerIds
  .map((id) =>
    speakers.find(
      (speaker) => speaker.id === id,
    ),
  )
  .filter(
    (speaker): speaker is Speaker =>
      Boolean(speaker),
  )

export function getSpeakerFirstName(
  name: string,
): string {
  return name.split(' ')[0] ?? name
}