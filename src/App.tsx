import { ArrowUpRight, Layers, MapPin, RefreshCw, Server } from 'lucide-react'
import { useEffect, useState, type ReactNode } from 'react'
import { siDocker, siGraphql, siKubernetes, siMongodb, siNestjs, siNodedotjs, siTypescript } from 'simple-icons'
import { GithubIcon, LinkedinIcon } from './components/icons'
import { LangToggle } from './components/LangToggle'
import { built, profile } from './data/profile'
import { useLang } from './lang-context'

function Card({ className = '', delay = 0, children }: { className?: string; delay?: number; children: ReactNode }) {
  return (
    <div className={`card appear ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

const toolIcons: Record<string, { path: string; hex: string }> = {
  'Node.js': siNodedotjs,
  NestJS: siNestjs,
  TypeScript: siTypescript,
  GraphQL: siGraphql,
  MongoDB: siMongodb,
  Docker: siDocker,
  Kubernetes: siKubernetes,
}

const doingIcons = [Server, Layers, RefreshCw]

// Hora actual en Gdańsk, actualizada cada 15 segundos
function useWarsawTime() {
  const format = () =>
    new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Warsaw', hour: '2-digit', minute: '2-digit' }).format(new Date())
  const [time, setTime] = useState(format)
  useEffect(() => {
    const id = setInterval(() => setTime(format()), 15_000)
    return () => clearInterval(id)
  }, [])
  return time
}

function Label({ children }: { children: ReactNode }) {
  return <h2 className="text-xs font-semibold tracking-[0.14em] text-faint uppercase">{children}</h2>
}

export default function App() {
  const { lang, t } = useLang()
  const mail = `mailto:${profile.email}`
  const time = useWarsawTime()

  return (
    <div className="glow min-h-screen overflow-x-clip">
      <main className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 py-6 sm:grid-cols-2 sm:py-10 lg:grid-cols-12 lg:py-12">
        {/* Hero */}
        <Card className="flex flex-col p-7 sm:col-span-2 sm:p-10 lg:col-span-6 lg:row-span-2">
          <div className="flex items-center justify-between gap-4">
            <p className="font-semibold">{profile.name}</p>
            <LangToggle />
          </div>
          <h1 className="mt-8 font-display text-[2.6rem] leading-[1.04] font-semibold tracking-tight sm:text-6xl">
            {t.hero.title}
            <span className="text-accent">{t.hero.highlight}</span>
          </h1>
          <p className="mt-6 max-w-md leading-relaxed text-muted">{t.hero.text}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={mail} className="btn bg-accent text-ink hover:brightness-110">
              {t.hero.talk}
            </a>
            <a href={profile.cv[lang]} target="_blank" rel="noreferrer" className="btn border border-line-strong hover:bg-raised">
              {t.hero.cv}
            </a>
          </div>
        </Card>

        {/* Foto */}
        <Card delay={60} className="relative aspect-square overflow-hidden lg:col-span-3 lg:aspect-auto">
          <img
            src={profile.photo}
            alt={profile.name}
            className="absolute inset-0 size-full object-cover object-[50%_35%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
          <span className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-bg/85 px-3 py-1.5 text-sm backdrop-blur">
            Backend Engineer
          </span>
        </Card>

        {/* Ubicación */}
        <Card delay={120} className="map relative flex min-h-64 flex-col justify-between gap-4 overflow-hidden p-6 lg:col-span-3">
          <div className="relative grid size-12 place-items-center">
            <span className="ring-pulse absolute inset-0 rounded-full border border-accent/50" />
            <span className="ring-pulse absolute inset-0 rounded-full border border-accent/50 [animation-delay:1.2s]" />
            <span className="grid size-12 place-items-center rounded-full bg-accent/15">
              <MapPin size={22} className="text-accent" />
            </span>
          </div>
          <div className="relative">
            <p className="font-display text-4xl font-semibold tracking-tight tabular-nums">{time}</p>
            <p className="mt-1 text-xs font-semibold tracking-[0.14em] text-faint uppercase">{t.location.time} · CET</p>
          </div>
          <div className="relative">
            <p className="font-display text-xl font-semibold">{t.location.city}</p>
            <p className="mt-1 text-sm text-faint">{t.location.note}</p>
          </div>
        </Card>

        {/* Datos destacados */}
        <Card delay={180} className="grid content-center gap-5 p-7 sm:col-span-2 sm:grid-cols-3 sm:gap-0 lg:col-span-6">
          {t.highlights.map((h, i) => (
            <div
              key={h.value}
              className={`${i > 0 ? 'border-t border-line pt-5 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-5' : ''} ${i < 2 ? 'sm:pr-5' : ''}`}
            >
              <p className={`font-display font-semibold tracking-tight text-3xl ${i === 0 ? 'text-accent' : ''}`}>
                {h.value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{h.label}</p>
            </div>
          ))}
        </Card>

        {/* Lorico */}
        <a
          href={profile.lorico}
          target="_blank"
          rel="noreferrer"
          className="card card-link appear group flex flex-col items-start bg-[linear-gradient(120deg,color-mix(in_srgb,var(--color-accent)_10%,var(--color-card)),var(--color-card)_60%)] p-7 sm:col-span-2 sm:p-8 lg:col-span-12"
          style={{ animationDelay: '240ms' }}
        >
          <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
            {t.lorico.badge}
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold">Lorico</h2>
          <p className="mt-3 max-w-xl leading-relaxed text-muted">{t.lorico.text}</p>
          <span className="mt-auto flex items-center gap-1 pt-6 font-semibold text-accent">
            {t.lorico.link}
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </a>

        {/* También construí */}
        <Card delay={300} className="p-7 sm:col-span-2 lg:col-span-6">
          <Label>{t.builtTitle}</Label>
          <ul className="mt-4">
            {built.map((b) => {
              const row = (
                <>
                  <span className="flex shrink-0 items-center gap-1.5 font-semibold">
                    {b.name}
                    {b.url && <ArrowUpRight size={14} className="text-faint transition-colors group-hover:text-accent" />}
                  </span>
                  <span className="text-sm text-muted sm:text-right sm:text-base">{b.text[lang]}</span>
                </>
              )
              const cls = 'flex flex-col gap-0.5 border-t border-line py-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4'
              return (
                <li key={b.name}>
                  {b.url ? (
                    <a href={b.url} target="_blank" rel="noreferrer" className={`group ${cls}`}>
                      {row}
                    </a>
                  ) : (
                    <div className={cls}>{row}</div>
                  )}
                </li>
              )
            })}
          </ul>
        </Card>

        {/* Qué hago */}
        <Card delay={360} className="p-7 sm:col-span-2 lg:col-span-6">
          <Label>{t.doTitle}</Label>
          <ul className="mt-5 space-y-5">
            {t.doing.map((d, i) => {
              const Icon = doingIcons[i]
              return (
                <li key={d.title} className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-accent/25 bg-accent/10 text-accent">
                    <Icon size={20} />
                  </span>
                  <div>
                    <p className="font-semibold">{d.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{d.text}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </Card>

        {/* Herramientas */}
        <Card delay={420} className="p-7 sm:col-span-2 lg:col-span-6">
          <Label>{t.toolsTitle}</Label>
          <ul className="mt-4 flex flex-wrap gap-2">
            {profile.tools.map((tool) => {
              const icon = toolIcons[tool]
              return (
                <li
                  key={tool}
                  className="flex items-center gap-2 rounded-full border border-line-strong py-1.5 pr-3.5 pl-2.5 text-sm transition-colors hover:bg-raised"
                >
                  {icon && (
                    <svg viewBox="0 0 24 24" width={16} height={16} fill={`#${icon.hex}`} aria-hidden>
                      <path d={icon.path} />
                    </svg>
                  )}
                  {tool}
                </li>
              )
            })}
          </ul>
        </Card>

        {/* CTA */}
        <a
          href={mail}
          className="card-link appear group flex min-h-56 flex-col justify-between rounded-3xl bg-accent p-7 text-ink sm:col-span-2 lg:col-span-6"
          style={{ animationDelay: '480ms' }}
        >
          <ArrowUpRight size={28} strokeWidth={2.25} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          <p className="font-display text-3xl leading-tight font-bold">
            {t.cta[0]}
            <br />
            {t.cta[1]}
          </p>
        </a>
      </main>

      <footer className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 pb-10 text-sm text-faint">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-text">
            <GithubIcon size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-text">
            <LinkedinIcon size={18} />
          </a>
        </div>
      </footer>
    </div>
  )
}
