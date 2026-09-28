export type BookingRequestForm = {
  organizationName: string
  contactPerson: string
  contactEmail: string
  sessionPurpose: string

  audienceSize: string
  audienceType: string

  preferredDate: string
  alternativeDate: string
  preferredStartTime: string
  timeZone: string

  countryRegion: string
  city: string
  buildingName: string
  unitOrFloor: string
  streetAddress: string
  accessibilityNeeds: string

  messageToSpeaker: string
}

export type BookingRequestPayload = {
  speakerId: string

  organization: {
    name: string
    contactPerson: string
    contactEmail: string
  }

  session: {
    purpose: string
    audienceSize: string
    audienceType: string
  }

  logistics: {
    preferredDate: string
    alternativeDate: string | null
    preferredStartTime: string
    timeZone: string

    location: {
      countryRegion: string
      city: string
      buildingName: string | null
      unitOrFloor: string | null
      streetAddress: string | null
    }

    accessibilityNeeds: string | null
  }

  messageToSpeaker: string | null
}

export type BookingStep = 1 | 2 | 3 | 4

export type BookingFieldKey = keyof BookingRequestForm

export type BookingErrors = Partial<
  Record<BookingFieldKey, string>
>

export const BOOKING_STEP_META = [
  {
    step: 1 as const,
    title: 'Session purpose',
    label: 'Session purpose',
  },
  {
    step: 2 as const,
    title: 'Audience details',
    label: 'Audience details',
  },
  {
    step: 3 as const,
    title: 'Date & logistics',
    label: 'Date & logistics',
  },
  {
    step: 4 as const,
    title: 'Message to speaker',
    label: 'Message to speaker',
  },
]

export const AUDIENCE_SIZE_OPTIONS = [
  'Up to 15 people',
  '16–30 people',
  '31–60 people',
  '61–100 people',
  'More than 100 people',
  'Not sure yet',
]

export const AUDIENCE_TYPE_OPTIONS = [
  'Executive or senior leadership',
  'People managers',
  'General employee audience',
  'HR, People or DEI teams',
  'Employee resource group',
  'Clients or external partners',
  'Mixed audience',
  'Other',
]

export const TIME_ZONE_OPTIONS = [
  'GMT',
  'WEST',
  'CET',
  'CEST',
  'EET',
  'EEST',
]

export const PREFERRED_START_TIME_OPTIONS = [
  '08:00',
  '08:30',
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
  '17:00',
  '17:30',
  '18:00',
]

export const CITIES_BY_COUNTRY = {
  Austria: [
    'Vienna',
    'Graz',
    'Linz',
    'Salzburg',
    'Innsbruck',
  ],

  Belgium: [
    'Brussels',
    'Antwerp',
    'Ghent',
    'Bruges',
    'Leuven',
  ],

  Bulgaria: [
    'Sofia',
    'Plovdiv',
    'Varna',
    'Burgas',
  ],

  Croatia: [
    'Zagreb',
    'Split',
    'Rijeka',
    'Dubrovnik',
  ],

  Cyprus: [
    'Nicosia',
    'Limassol',
    'Larnaca',
    'Paphos',
  ],

  'Czech Republic': [
    'Prague',
    'Brno',
    'Ostrava',
    'Plzeň',
  ],

  Denmark: [
    'Copenhagen',
    'Aarhus',
    'Odense',
    'Aalborg',
  ],

  Estonia: [
    'Tallinn',
    'Tartu',
    'Pärnu',
  ],

  Finland: [
    'Helsinki',
    'Espoo',
    'Tampere',
    'Vantaa',
    'Turku',
    'Oulu',
  ],

  France: [
    'Paris',
    'Lyon',
    'Marseille',
    'Toulouse',
    'Lille',
    'Bordeaux',
    'Nice',
    'Nantes',
  ],

  Germany: [
    'Berlin',
    'Hamburg',
    'Munich',
    'Cologne',
    'Frankfurt',
    'Düsseldorf',
    'Stuttgart',
    'Leipzig',
  ],

  Greece: [
    'Athens',
    'Thessaloniki',
    'Patras',
    'Heraklion',
  ],

  Hungary: [
    'Budapest',
    'Debrecen',
    'Szeged',
    'Pécs',
  ],

  Ireland: [
    'Dublin',
    'Cork',
    'Galway',
    'Limerick',
  ],

  Italy: [
    'Rome',
    'Milan',
    'Turin',
    'Bologna',
    'Florence',
    'Naples',
    'Venice',
  ],

  Latvia: [
    'Riga',
    'Daugavpils',
    'Liepāja',
  ],

  Lithuania: [
    'Vilnius',
    'Kaunas',
    'Klaipėda',
  ],

  Luxembourg: [
    'Luxembourg City',
    'Esch-sur-Alzette',
  ],

  Malta: [
    'Valletta',
    'Sliema',
    'St Julian’s',
  ],

  Netherlands: [
    'Amsterdam',
    'Rotterdam',
    'The Hague',
    'Utrecht',
    'Eindhoven',
  ],

  Norway: [
    'Oslo',
    'Bergen',
    'Trondheim',
    'Stavanger',
  ],

  Poland: [
    'Warsaw',
    'Kraków',
    'Wrocław',
    'Gdańsk',
    'Poznań',
    'Łódź',
  ],

  Portugal: [
    'Lisbon',
    'Porto',
    'Braga',
    'Coimbra',
    'Faro',
    'Aveiro',
  ],

  Romania: [
    'Bucharest',
    'Cluj-Napoca',
    'Timișoara',
    'Iași',
    'Brașov',
  ],

  Slovakia: [
    'Bratislava',
    'Košice',
    'Žilina',
  ],

  Slovenia: [
    'Ljubljana',
    'Maribor',
    'Koper',
  ],

  Spain: [
    'Madrid',
    'Barcelona',
    'Valencia',
    'Seville',
    'Bilbao',
    'Málaga',
    'Zaragoza',
  ],

  Sweden: [
    'Stockholm',
    'Gothenburg',
    'Malmö',
    'Uppsala',
  ],

  Switzerland: [
    'Zurich',
    'Geneva',
    'Basel',
    'Bern',
    'Lausanne',
  ],
} as const

export type SupportedCountry =
  keyof typeof CITIES_BY_COUNTRY

export const COUNTRY_OPTIONS = Object.keys(
  CITIES_BY_COUNTRY,
) as SupportedCountry[]

export function getCitiesForCountry(
  country: string,
): string[] {
  if (!(country in CITIES_BY_COUNTRY)) {
    return []
  }

  return [
    ...CITIES_BY_COUNTRY[
      country as SupportedCountry
    ],
  ]
}

export function createEmptyBookingForm(): BookingRequestForm {
  return {
    organizationName: '',
    contactPerson: '',
    contactEmail: '',
    sessionPurpose: '',
    audienceSize: '',
    audienceType: '',
    preferredDate: '',
    alternativeDate: '',
    preferredStartTime: '',
    timeZone: '',
    countryRegion: '',
    city: '',
    buildingName: '',
    unitOrFloor: '',
    streetAddress: '',
    accessibilityNeeds: '',
    messageToSpeaker: '',
  }
}