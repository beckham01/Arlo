export default function Footer() {
  return (
    <section className="bg-brand-darker px-6 py-16 text-center text-text-inverse">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4">
        <div className="flex items-center gap-3 text-lg font-semibold">
          <span className="text-white">Arlo</span>
          <span className="h-2 w-2 rounded-full bg-brand-teal" />
          <span className="text-text-muted">AI Chief of Staff</span>
        </div>
        <p className="text-sm text-text-secondary">Built by AI Solutions Lab · Port Harcourt, Nigeria</p>
        <div className="mt-2 flex flex-wrap justify-center gap-2 text-xs uppercase tracking-[0.2em] text-text-muted">
          <span className="rounded-full border border-white/10 px-3 py-2">Powered by: n8n</span>
          <span className="rounded-full border border-white/10 px-3 py-2">Supabase</span>
          <span className="rounded-full border border-white/10 px-3 py-2">OpenAI GPT-4.1 Mini</span>
          <span className="rounded-full border border-white/10 px-3 py-2">Telegram</span>
        </div>
        <p className="pt-4 text-xs text-text-muted/70">© 2026 AI Solutions Lab. All rights reserved.</p>
      </div>
    </section>
  )
}
