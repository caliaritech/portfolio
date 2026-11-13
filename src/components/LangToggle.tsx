import { useLang } from '../lang-context'

export function LangToggle() {
  const { lang, t, setLang } = useLang()

  return (
    <div
      role="group"
      aria-label={t.switchLang}
      className="flex shrink-0 items-center rounded-xl border border-line bg-bg/60 p-1 text-xs font-semibold"
    >
      {(['es', 'en'] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-lg px-2.5 py-1.5 uppercase transition-colors ${
            lang === l ? 'bg-raised text-text' : 'text-faint hover:text-muted'
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  )
}
