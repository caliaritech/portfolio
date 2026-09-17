import { useLang } from '../lang-context'

export function LangToggle() {
  const { lang, t, toggle } = useLang()

  return (
    <button
      onClick={toggle}
      aria-label={t.ui.switchLang}
      title={t.ui.switchLang}
      className="flex h-9 items-center rounded-lg border border-line bg-surface p-0.5 font-mono text-xs transition-colors hover:border-line-strong"
    >
      {(['es', 'en'] as const).map((l) => (
        <span
          key={l}
          className={`rounded-md px-2 py-1.5 uppercase transition-colors ${
            lang === l ? 'bg-accent-2 font-semibold text-ink' : 'text-muted'
          }`}
        >
          {l}
        </span>
      ))}
    </button>
  )
}
