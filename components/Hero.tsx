'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const words = ['Your', 'business,', 'finally', 'under', 'control.']
const chips = ['Gmail', 'Google Calendar', 'Telegram', 'Fireflies']

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-brand-dark via-brand-blue to-brand-dark px-6 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(13,148,136,0.24),_transparent_34%)]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl flex-col justify-center lg:flex-row lg:items-center lg:gap-16">
        <div className="max-w-2xl">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-teal">
            AI Chief of Staff
          </motion.p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {words.map((word, index) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 * index }}
                className="mr-3 inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.6 }} className="mt-8 max-w-xl text-lg leading-relaxed text-slate-300">
            Arlo connects to Gmail, Calendar, Telegram, and meeting transcripts so your day is scheduled, followed up, and briefed automatically.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.9 }} className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#demo" className="inline-flex rounded-full bg-brand-teal px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-teal/20 transition hover:bg-teal-600">
              Try Arlo in Telegram
            </a>
            <a href="#insights" className="inline-flex rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-brand-teal hover:text-white">
              See the quick view
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 1.15 }} className="mt-8 flex flex-wrap gap-3">
            {chips.map((chip) => (
              <span key={chip} className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90">
                ● {chip}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: [0, -8, 0] }} transition={{ duration: 0.8, delay: 0.3, repeat: Infinity, repeatType: 'mirror' }} className="mx-auto mt-14 w-full max-w-md lg:mt-0 lg:flex-1">
          <div className="rounded-[2rem] border border-white/10 bg-tg-bg p-3 shadow-[0_30px_70px_rgba(0,0,0,0.35)]">
            <div className="rounded-[1.5rem] border border-white/10 bg-tg-bg p-4">
              <div className="flex items-center justify-between rounded-t-2xl bg-tg-header px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-teal font-semibold text-white">A</div>
                  <div>
                    <p className="text-sm font-semibold text-white">Arlo</p>
                    <p className="text-xs text-slate-400">Online</p>
                  </div>
                </div>
                <div className="h-2.5 w-2.5 rounded-full bg-tg-online" />
              </div>
              <div className="space-y-3 rounded-b-2xl bg-tg-bg px-3 py-4">
                <div className="flex justify-end">
                  <div className="max-w-[80%] rounded-[18px] rounded-br-[4px] bg-tg-outgoing px-4 py-3 text-sm text-white">
                    What do I have today?
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="max-w-[85%] rounded-[18px] rounded-bl-[4px] bg-tg-bubble px-4 py-3 text-sm leading-relaxed text-slate-200">
                    Good morning. You have 3 meetings today and one overdue promise from Marcus. Want the full brief?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: [0, 8, 0] }} transition={{ duration: 0.6, delay: 1.2, repeat: Infinity, repeatType: 'mirror' }} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-brand-teal">
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </section>
  )
}
