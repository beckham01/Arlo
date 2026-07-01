export type MessageRole = 'user' | 'arlo'

export interface Message {
  role: MessageRole
  text: string
  delay: number
}

export interface Scenario {
  id: string
  label: string
  icon: string
  tagline: string
  messages: Message[]
}

export const SCENARIOS: Scenario[] = [
  {
    id: 'calendar',
    label: 'Schedule',
    icon: 'Calendar',
    tagline: "What's on tomorrow?",
    messages: [
      {
        role: 'user',
        text: 'What do I have tomorrow?',
        delay: 0,
      },
      {
        role: 'arlo',
        text: "Tomorrow — Wednesday 2 July.\n\nThree things:\n1. Strategy call with Emeka at 10am (1 hour)\n2. Client review with Hogan Labs at 2pm — Google Meet link is in the calendar\n3. Nothing after 4pm, you're clear\n\nOne heads-up: you have an overdue promise to send the revised proposal to Marcus. That's been open since Monday.",
        delay: 1200,
      },
    ],
  },
  {
    id: 'email',
    label: 'Email',
    icon: 'Mail',
    tagline: 'Draft a follow-up',
    messages: [
      {
        role: 'user',
        text: 'Draft a follow-up to Alex about the invoice',
        delay: 0,
      },
      {
        role: 'arlo',
        text: "Found your last thread with Alex Chen (alex@growthpath.io) — June 23. His last reply was about the GrowthPath project. Invoice #1042 for $3,200 was sent June 23, no reply in 8 days.\n\nHere's a draft:\n\nSubject: Following up — Invoice #1042\n\nHi Alex, just checking in on invoice #1042 sent June 23 for the voice agent build. Let me know if anything is needed on my end to get this processed.\n\nBeckham\n\nReply yes to send this.",
        delay: 1400,
      },
      {
        role: 'user',
        text: 'yes',
        delay: 3200,
      },
      {
        role: 'arlo',
        text: 'Done. Email sent to Alex Chen.',
        delay: 900,
      },
    ],
  },
  {
    id: 'promises',
    label: 'Promises',
    icon: 'CheckSquare',
    tagline: 'Track commitments',
    messages: [
      {
        role: 'user',
        text: 'Did I promise Marcus anything?',
        delay: 0,
      },
      {
        role: 'arlo',
        text: "Two open items with Marcus Obi.\n\n1. Send the revised pitch deck — promised in your call on June 19. This one is overdue.\n\n2. Intro to Chidinma at Flutterwave — came up in a Telegram message June 25. No due date set.\n\nWant me to draft an email for either of these?",
        delay: 1100,
      },
      {
        role: 'user',
        text: 'I sent him the deck this morning, mark it done',
        delay: 3000,
      },
      {
        role: 'arlo',
        text: 'Marked as delivered: Send revised pitch deck to Marcus Obi.',
        delay: 800,
      },
    ],
  },
  {
    id: 'meeting',
    label: 'Meetings',
    icon: 'Video',
    tagline: 'Book a call',
    messages: [
      {
        role: 'user',
        text: 'Book a call with Sarah on Friday at 3pm',
        delay: 0,
      },
      {
        role: 'arlo',
        text: "Friday 4 July at 3pm is clear. I don't have Sarah's email on record — do you want to add her as an attendee, or just block the slot?",
        delay: 1100,
      },
      {
        role: 'user',
        text: 'Just block the time',
        delay: 2800,
      },
      {
        role: 'arlo',
        text: "Done. 'Call with Sarah' blocked — Friday 4 July, 3:00 – 4:00 PM.",
        delay: 800,
      },
    ],
  },
]
