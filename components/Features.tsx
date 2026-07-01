'use client'

import { Brain, Calendar, CheckSquare, Mail, Users, Video } from 'lucide-react'
import { motion } from 'framer-motion'

const items = [
  {
    icon: Mail,
    title: 'Every email, remembered',
    description: 'Arlo reads every email as it arrives. Extracts contacts, promises, and context. You never re-read an email thread before a call again.',
  },
  {
    icon: Calendar,
    title: 'Your schedule, always known',
    description: 'Arlo syncs your Google Calendar in real time. Ask about today, tomorrow, or next week. It checks availability before booking anything.',
  },
  {
    icon: CheckSquare,
    title: 'Nothing falls through',
    description: 'Commitments made in emails, calls, and messages are extracted automatically. Arlo surfaces what is overdue every morning.',
  },
  {
    icon: Video,
    title: 'Meetings that matter',
    description: 'Fireflies transcribes your calls. Arlo extracts decisions, promises, and context. Ask about any meeting from any date.',
  },
  {
    icon: Users,
    title: 'Know everyone you know',
    description: 'Arlo tracks every contact across email and Telegram. Response times, last contact date, companies. Never go into a call cold.',
  },
  {
    icon: Brain,
    title: 'Ask about anything',
    description: 'Everything is embedded in vector memory. Ask about a conversation from three months ago. Arlo finds it.',
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-brand-teal">WHAT ARLO KNOWS</p>
          <h2 className="mt-4 text-4xl font-bold text-brand-blue">Everything. All at once.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(13,148,136,0.16)' }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08),0_4px_16px_rgba(0,0,0,0.06)]"
              >
                <div className="mb-4 inline-flex rounded-xl bg-teal-50 p-3 text-brand-teal">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-brand-blue">{item.title}</h3>
                <p className="text-base leading-relaxed text-text-secondary">{item.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
