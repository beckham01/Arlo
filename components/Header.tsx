'use client'

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-brand-dark/80 backdrop-blur-xl text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-brand-teal">
          <span>Arlo</span>
          <span className="h-2 w-2 rounded-full bg-brand-teal" />
          <span className="text-white/80">Chief of Staff</span>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-slate-200 md:flex">
          <a href="#how-it-works" className="transition hover:text-white">How it works</a>
          <a href="#demo" className="transition hover:text-white">Demo</a>
          <a href="#brief" className="transition hover:text-white">Brief</a>
          <a href="#features" className="transition hover:text-white">Features</a>
        </nav>
        <a href="#demo" className="inline-flex rounded-full bg-brand-teal px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-teal/20 transition hover:bg-teal-600">
          Start in Telegram
        </a>
      </div>
    </header>
  )
}
