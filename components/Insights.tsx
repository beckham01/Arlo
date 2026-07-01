'use client'

import { motion } from 'framer-motion'

const stats = [
  { label: 'Inbox triage rate', value: '78%' },
  { label: 'Meetings briefed', value: '100%' },
  { label: 'Follow-ups captured', value: '92%' },
  { label: 'Daily summaries delivered', value: '7/7' },
]

const chartData = [
  { name: 'Email', value: 84, color: 'bg-brand-teal' },
  { name: 'Meetings', value: 72, color: 'bg-brand-blue' },
  { name: 'Tasks', value: 65, color: 'bg-slate-400' },
  { name: 'Follow-ups', value: 58, color: 'bg-cyan-500' },
]

export default function Insights() {
  return (
    <section id="insights" className="bg-brand-light px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-brand-teal">INSIGHTS</p>
            <h2 className="mt-4 text-4xl font-bold text-brand-blue">A compact performance dashboard for your day.</h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-text-secondary">
              Arlo turns your email, calendar, and task signals into one fast summary. See what matters at a glance and trust the AI to keep the details in sync.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-3xl font-semibold text-brand-blue">{stat.value}</p>
                  <p className="mt-2 text-sm text-text-secondary">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35 }} className="rounded-[2rem] border border-brand-blue/10 bg-white/95 p-8 shadow-[0_25px_60px_rgba(15,23,42,0.12)]">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-brand-teal">Weekly summary</p>
                <p className="mt-2 text-xl font-semibold text-brand-blue">Performance snapshot</p>
              </div>
              <span className="rounded-full bg-brand-blue/5 px-3 py-1 text-xs font-semibold uppercase text-brand-blue">Fast view</span>
            </div>
            <div className="space-y-5">
              {chartData.map((item) => (
                <div key={item.name} className="space-y-2">
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>{item.name}</span>
                    <span>{item.value}%</span>
                  </div>
                  <div className="h-3 rounded-full bg-slate-100">
                    <div className={`${item.color} h-full rounded-full`} style={{ width: `${item.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
