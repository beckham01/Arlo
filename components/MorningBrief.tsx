'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const lines = [
  'Good morning, Beckham. Wednesday 2 July.',
  '',
  'TODAY',
  '3 meetings: Emeka at 10am, Hogan Labs at 2pm, Evangelyn at 4pm.',
  '',
  'OVERDUE (1)',
  'Send revised pitch deck to Marcus — promised June 19.',
  '',
  'THIS WEEK (2)',
  'Reply to Chidinma about the partnership — due Friday.',
  'Follow up on invoice #1042 with Alex — due tomorrow.',
  '',
  'RELATIONSHIP GAP',
  "Haven't reached out to David Okafor in 18 days.",
  '',
  "That's your day.",
]

export default function MorningBrief() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const interval = window.setInterval(() => {
      setVisibleCount((prev) => (prev < lines.length ? prev + 1 : prev))
    }, 150)

    return () => window.clearInterval(interval)
  }, [isInView])

  return (
    <section id="brief" className="bg-brand-blue px-6 py-24">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-brand-teal">MORNING BRIEF</p>
        <h2 className="mt-4 text-4xl font-bold text-white">Every day starts with clarity.</h2>
        <div ref={ref} className="mx-auto mt-12 flex max-w-xl justify-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full rounded-[2rem] border border-white/10 bg-[#07121F] p-4 shadow-[0_20px_45px_rgba(0,0,0,0.25)]"
          >
            <div className="rounded-[1.5rem] border border-white/10 bg-[#0E1727] p-6 text-left text-sm text-slate-200">
              <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3 text-sm text-slate-400">
                <div>
                  <p className="font-semibold text-white">Arlo — Today&apos;s Brief</p>
                  <p className="text-xs text-slate-500">7:00 AM</p>
                </div>
                <div className="h-2.5 w-2.5 rounded-full bg-brand-teal" />
              </div>
              <div className="space-y-2 font-mono text-[13px] leading-7">
                {lines.slice(0, visibleCount).map((line, index) => (
                  <p
                    key={`${line}-${index}`}
                    className={
                      line === 'TODAY' || line === 'OVERDUE (1)' || line === 'THIS WEEK (2)' || line === 'RELATIONSHIP GAP'
                        ? 'font-semibold uppercase tracking-[0.2em] text-brand-teal'
                        : ''
                    }
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
