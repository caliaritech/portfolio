import { profile, socialsFor } from '../data/profile'
import { useLang } from '../i18n'
import { HeroCanvas } from './HeroCanvas'
import { SocialIcon, socialColor } from './icons'

export function Hero() {
  const { lang, t } = useLang()
  const socials = socialsFor(lang)

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,color-mix(in_srgb,var(--color-accent-2)_12%,transparent),transparent_60%)]"
      />
      <HeroCanvas />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-4 py-1.5 font-mono text-xs text-muted sm:text-sm">
          <span className="size-2 animate-pulse-dot rounded-full bg-accent-2" />
          {t.badge}
        </span>

        <div className="relative mt-6">
          <div className="absolute -inset-2 rounded-full bg-[conic-gradient(from_180deg,var(--color-accent-2),var(--color-accent),var(--color-accent-3),var(--color-accent-2))] opacity-50 blur-md" />
          <img
            src={profile.photo}
            alt={profile.name}
            className="relative size-36 rounded-full border-4 border-bg object-cover sm:size-44"
          />
        </div>

        <p className="mt-6 font-mono text-sm text-accent-2 sm:text-base">
          nc@backend:~$ <span className="text-muted">whoami</span>{' '}
          <span className="inline-block h-4 w-2 translate-y-0.5 animate-blink bg-accent-2" />
        </p>

        <h1 className="mt-3 font-display text-5xl leading-[1.02] font-bold tracking-tight sm:text-7xl">
          {profile.name}
        </h1>

        <p className="mt-4 font-mono text-sm text-muted sm:text-lg">{t.roles.join(' · ')}</p>

        <div className="mt-8 w-full overflow-hidden rounded-xl border border-line-strong/60 bg-ink/80 text-left shadow-[0_0_60px_-20px_color-mix(in_srgb,var(--color-accent-2)_45%,transparent)]">
          <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
            <span className="size-3 rounded-full bg-[#ff5f57]" />
            <span className="size-3 rounded-full bg-[#febc2e]" />
            <span className="size-3 rounded-full bg-[#28c840]" />
            <span className="ml-2 font-mono text-xs text-faint sm:text-sm">nc@backend:~/career</span>
          </div>
          <div className="space-y-3 p-4 font-mono text-xs sm:p-5 sm:text-sm">
            {t.terminal.map((line) => (
              <div key={line.cmd}>
                <p>
                  <span className="text-accent-2">$</span> {line.cmd}
                </p>
                <p className="mt-1 text-muted">{line.out}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {socials.map((s) => (
            <a
              key={s.key}
              href={s.href}
              target={s.key === 'email' ? undefined : '_blank'}
              rel="noreferrer"
              className="chip transition-colors hover:border-line-strong hover:text-text"
            >
              <SocialIcon name={s.key} size={14} className={socialColor[s.key]} />
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
