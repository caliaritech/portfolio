import { Calendar, ChevronRight, ExternalLink } from 'lucide-react'
import { projects } from '../data/profile'
import { useLang } from '../i18n'
import { GithubIcon } from './icons'
import { Reveal, Section } from './Section'

const kindColor: Record<string, string> = {
  NestJS: 'bg-[#e0234e]',
  'Node.js': 'bg-[#5fa04e]',
  TypeScript: 'bg-[#3178c6]',
  'Web app': 'bg-accent-3',
  Landing: 'bg-accent',
}

export function Projects() {
  const { lang, t } = useLang()
  const copy = t.projects

  return (
    <Section id="projects" eyebrow={copy.eyebrow} title={copy.title}>
      <p className="-mt-6 mb-10 max-w-2xl text-lg text-muted">
        {copy.intro}
      </p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => {
          const link = p.url ?? p.repo
          return (
            <Reveal key={p.name.es} delay={(i % 3) * 80} className="h-full">
              <article className="card card-hover flex h-full flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="flex items-center gap-2 font-mono text-xs text-muted">
                      <span className={`size-2 rounded-full ${kindColor[p.kind] ?? 'bg-accent-2'}`} />
                      {p.kind}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-semibold">{p.name[lang]}</h3>
                  </div>
                  {link && (
                    <a
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${copy.open} ${p.name[lang]}`}
                      className="grid size-9 shrink-0 place-items-center rounded-lg border border-line text-muted hover:border-line-strong hover:text-text"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>

                <p className="mt-3 leading-relaxed text-muted">{p.description[lang]}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between gap-3 pt-6 font-mono text-xs text-faint">
                  {p.year ? (
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} /> {p.year}
                    </span>
                  ) : (
                    <span />
                  )}
                  {p.repo ? (
                    <a href={p.repo} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-text">
                      <GithubIcon size={13} /> {copy.viewCode} <ChevronRight size={13} />
                    </a>
                  ) : (
                    <span>{copy.private}</span>
                  )}
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
