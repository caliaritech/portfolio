import { useLang } from '../i18n'
import { Reveal, Section } from './Section'

export function Profile() {
  const { about } = useLang().t

  return (
    <Section id="profile" eyebrow={about.eyebrow} title={about.title}>
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal className="card relative flex flex-col overflow-hidden p-7">
          <div className="space-y-4 text-[17px] leading-relaxed text-muted">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <p
            aria-hidden
            className="pointer-events-none mt-8 self-end font-display text-7xl font-bold text-transparent [-webkit-text-stroke:1px_color-mix(in_srgb,var(--color-accent-2)_25%,transparent)]"
          >
            NC/DEV
          </p>
        </Reveal>

        <Reveal delay={100} className="card divide-y divide-line p-2">
          {about.pillars.map((p) => (
            <div key={p.tag} className="flex gap-5 p-5">
              <span className="w-14 shrink-0 font-mono text-sm text-accent-2">{p.tag}</span>
              <div>
                <h3 className="font-mono text-base font-semibold">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{p.text}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  )
}
