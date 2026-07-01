'use client'

const metrics = [
  { label: 'Meetings managed', value: '1.2K+' },
  { label: 'Promises tracked', value: '4.8K+' },
  { label: 'Inbox items saved', value: '28K+' },
  { label: 'Hours reclaimed', value: '9.4K+' },
]

export default function Metrics() {
  return (
    <section className="bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-brand-teal">AT A GLANCE</p>
          <h2 className="mt-4 text-4xl font-bold">Trusted by busy teams and founders.</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">
              <p className="text-4xl font-bold text-white">{metric.value}</p>
              <p className="mt-3 text-sm text-slate-300">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
