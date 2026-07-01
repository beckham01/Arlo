'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, CheckSquare, Mail, Search, Video, Menu, type LucideIcon } from 'lucide-react'
import { SCENARIOS, type Message } from '@/lib/conversations'

const scenarioIcons: Record<string, LucideIcon> = {
  Calendar,
  Mail,
  CheckSquare,
  Video,
}

export default function DemoChat() {
  const [activeScenario, setActiveScenario] = useState('calendar')
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const chatRef = useRef<HTMLDivElement>(null)
  const timeoutRefs = useRef<ReturnType<typeof setTimeout>[]>([])

  const clearTimeouts = () => {
    timeoutRefs.current.forEach((timeout) => clearTimeout(timeout))
    timeoutRefs.current = []
  }

  const playScenario = (scenarioId: string) => {
    clearTimeouts()
    setVisibleMessages([])
    setIsTyping(false)
    setIsPlaying(true)

    const scenario = SCENARIOS.find((item) => item.id === scenarioId)
    if (!scenario) return

    const startTimeout = setTimeout(() => {
      scenario.messages.forEach((message) => {
        const delayTimeout = setTimeout(() => {
          if (message.role === 'arlo') {
            setIsTyping(true)
            const typingTimeout = setTimeout(() => {
              setIsTyping(false)
              setVisibleMessages((prev) => [...prev, message])
            }, 900)
            timeoutRefs.current.push(typingTimeout)
          } else {
            setVisibleMessages((prev) => [...prev, message])
          }
        }, message.delay)
        timeoutRefs.current.push(delayTimeout)
      })

      const finishTimeout = setTimeout(() => {
        setIsPlaying(false)
      }, 4200)
      timeoutRefs.current.push(finishTimeout)
    }, 400)

    timeoutRefs.current.push(startTimeout)
  }

  const replayScenario = () => playScenario(activeScenario)

  useEffect(() => {
    playScenario(activeScenario)
    return () => clearTimeouts()
  }, [activeScenario])

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight
    }
  }, [visibleMessages, isTyping])

  const scenario = SCENARIOS.find((item) => item.id === activeScenario) ?? SCENARIOS[0]

  return (
    <section id="demo" className="bg-brand-dark px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center lg:text-left">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-brand-teal">LIVE DEMO</p>
          <h2 className="mt-4 text-4xl font-bold text-white">Watch Arlo work.</h2>
          <p className="mt-4 max-w-2xl text-lg text-text-secondary">
            Select a scenario below to see a real Arlo conversation play out. These are actual responses from the system.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-3">
            {SCENARIOS.map((item) => {
              const Icon = scenarioIcons[item.icon] ?? Calendar
              const active = item.id === activeScenario
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveScenario(item.id)}
                  className={`flex w-full items-center justify-between rounded-2xl border px-4 py-4 text-left transition ${active ? 'border-brand-teal bg-brand-teal/20 text-white' : 'border-white/10 bg-white/5 text-text-secondary hover:border-brand-teal/40 hover:text-white'}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`rounded-xl p-2 ${active ? 'bg-brand-teal text-white' : 'bg-white/10 text-brand-teal'}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold">{item.label}</p>
                      <p className={`text-sm ${active ? 'text-white/80' : 'text-text-muted'}`}>{item.tagline}</p>
                    </div>
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] text-brand-teal">Run</span>
                </button>
              )
            })}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-text-secondary">
              <p className="font-medium text-white">Current flow</p>
              <p className="mt-2">{scenario.label} — {scenario.tagline}</p>
              <button
                type="button"
                onClick={replayScenario}
                disabled={isPlaying}
                className="mt-4 inline-flex rounded-full bg-brand-teal px-4 py-2 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:bg-brand-teal/40"
              >
                {isPlaying ? 'Playing...' : 'Replay scenario'}
              </button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-tg-bg shadow-[0_24px_70px_rgba(0,0,0,0.35)]"
          >
            <div className="flex items-center justify-between border-b border-white/10 bg-tg-header px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-teal text-sm font-semibold text-white">A</div>
                <div>
                  <p className="text-sm font-semibold text-white">Arlo</p>
                  <p className="text-xs text-text-muted">AI Chief of Staff</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs text-tg-online">
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-tg-online" /> Online
                </span>
                <Search className="h-4 w-4 text-slate-400" />
                <Menu className="h-4 w-4 text-slate-400" />
              </div>
            </div>
            <div ref={chatRef} className="h-[470px] overflow-y-auto bg-tg-bg px-4 py-5">
              <div className="space-y-3">
                {visibleMessages.map((message, index) => {
                  const isUser = message.role === 'user'
                  const showLabel = !isUser && index === 0 ? true : !isUser && visibleMessages[index - 1]?.role === 'user'
                  return (
                    <div key={`${message.text}-${index}`} className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[75%] ${isUser ? 'text-right' : 'text-left'}`}>
                        {!isUser && showLabel ? <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-teal">Arlo</p> : null}
                        <div className={`rounded-[18px] px-4 py-3 text-sm leading-relaxed ${isUser ? 'bg-tg-outgoing text-white' : 'bg-tg-bubble text-slate-200'}`} style={{ borderRadius: isUser ? '18px 18px 4px 18px' : '18px 18px 18px 4px' }}>
                          <p className="whitespace-pre-line">{message.text}</p>
                          <p className={`mt-2 text-[11px] ${isUser ? 'text-white/70' : 'text-slate-500'}`}>10:4{index + 2}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}

                {isTyping ? (
                  <div className="flex justify-start">
                    <div className="max-w-[75%] rounded-[18px] rounded-bl-[4px] bg-tg-bubble px-4 py-3">
                      <div className="flex items-center gap-1.5">
                        <span className="dot-1 h-2 w-2 animate-bounce rounded-full bg-white/70" />
                        <span className="dot-2 h-2 w-2 animate-bounce rounded-full bg-white/70 [animation-delay:0.12s]" />
                        <span className="dot-3 h-2 w-2 animate-bounce rounded-full bg-white/70 [animation-delay:0.24s]" />
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="border-t border-white/10 bg-tg-header px-4 py-3 text-sm text-slate-400">
              {isPlaying ? 'Playing scenario…' : 'Scenario ready'}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
