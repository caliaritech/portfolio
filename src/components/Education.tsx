import { Award, ExternalLink, GraduationCap } from 'lucide-react'
import { certificates, profile } from '../data/profile'
import { useLang } from '../i18n'
import { Reveal, Section } from './Section'

const issuerColor: Record<string, string> = {
  Udemy: 'border-[#a435f0]/40 text-[#c58cf5] bg-[#a435f0]/8',
  ITBA: 'border-[#4a9ce8]/40 text-[#7db8f0] bg-[#4a9ce8]/8',
}

export function Education() {
  const { lang, t } = useLang()
  const education = t.education

  return (
    <Section id="education" eyebrow={education.eyebrow} title={education.title}>
      <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
        <Reveal className="card flex flex-col p-6">
          <h3 className="flex items-center gap-2 font-mono text-sm tracking-wider text-faint uppercase">
            <GraduationCap size={16} /> {education.academicLabel}
          </h3>
          {education.degrees.map((e) => (
            <div key={e.title} className="mt-5 flex gap-4">
              <div className="grid size-12 shrink-0 place-items-center rounded-lg border border-line bg-surface font-display text-sm font-bold text-accent-2">
                UTN
              </div>
              <div>
                <p className="text-lg font-semibold">{e.title}</p>
                <p className="text-muted">{e.org}</p>
                <p className="mt-1 font-mono text-sm text-faint">{e.period}</p>
              </div>
            </div>
          ))}

          <div className="mt-auto pt-8">
            <p className="font-mono text-sm text-faint">{education.cvLabel}</p>
            <div className="mt-3 flex gap-2">
              <a href={profile.cv.es} target="_blank" rel="noreferrer" className="chip hover:border-line-strong hover:text-text">
                Español
              </a>
              <a href={profile.cv.en} target="_blank" rel="noreferrer" className="chip hover:border-line-strong hover:text-text">
                English
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="card p-6">
          <h3 className="flex items-center gap-2 font-mono text-sm tracking-wider text-faint uppercase">
            <Award size={16} /> {education.certsLabel}
          </h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {certificates.map((c) => {
              const color = issuerColor[c.issuer] ?? 'border-accent-2/30 text-accent-2 bg-accent-2/5'
              const body = (
                <>
                  <span className={`inline-block rounded-md border px-2 py-0.5 font-mono text-[11px] ${color}`}>
                    {c.issuer}
                  </span>
                  <p className="mt-2 leading-snug font-semibold">{c.title[lang]}</p>
                  <p className="mt-1 flex items-center gap-1.5 font-mono text-xs text-faint">
                    {c.date}
                    {c.url && <ExternalLink size={12} className="ml-auto text-muted" />}
                  </p>
                </>
              )
              return (
                <li key={c.title.es}>
                  {c.url ? (
                    <a href={c.url} target="_blank" rel="noreferrer" className="card card-hover block h-full p-4" title={education.viewCredential}>
                      {body}
                    </a>
                  ) : (
                    <div className="card h-full p-4" title={c.credential}>
                      {body}
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
