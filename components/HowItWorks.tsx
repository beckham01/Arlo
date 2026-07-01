'use client'

import { MessageCircle, Plug, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    icon: Plug,
    title: 'Connect your tools',
    description: 'Link Gmail, Google Calendar, Telegram, and Fireflies. Arlo reads your existing tools — you change nothing about how you work.',
  },
  {
    number: '02',
    icon: MessageCircle,
    title: 'Message Arlo on Telegram',
    description: 'Ask about your schedule, request an email draft, check what you promised someone. Plain language. No commands to memorise.',
  },
  {
    number: '03',
    icon: Zap,
    title: 'Arlo handles it',
    description: 'Emails go out after you confirm. Meetings get booked. Commitments get tracked. And every morning at 7am you get a brief.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-brand-light px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-brand-teal">HOW IT WORKS</p>
          <h2 className="mt-4 text-4xl font-bold text-brand-blue">Set up once. Use forever.</h2>
        </div>
        <div className="relative grid gap-8 md:grid-cols-3">
          <div className="absolute left-[16.666%] top-12 hidden h-px w-2/3 border-t border-brand-teal/30 md:block" />
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="relative rounded-3xl border border-brand-mid/70 bg-white p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08),0_4px_16px_rgba(0,0,0,0.06)]"
              >
                <div className="mb-6 text-4xl font-bold text-brand-teal">{step.number}</div>
                <div className="mb-4 inline-flex rounded-2xl bg-teal-50 p-3 text-brand-teal">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-brand-blue">{step.title}</h3>
                <p className="text-base leading-relaxed text-text-secondary">{step.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
