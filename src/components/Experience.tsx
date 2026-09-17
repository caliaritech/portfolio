import { Calendar, MapPin } from 'lucide-react'
import { useLang } from '../i18n'
import { Reveal, Section } from './Section'

export function Experience() {
  const { experience } = useLang().t

  return (
    <Section id="experience" eyebrow={experience.eyebrow} title={experience.title} alt>
      <ol className="relative">
        {experience.jobs.map((job, i) => (
          <li key={job.company} className="grid gap-4 border-b border-line py-10 last:border-b-0 md:grid-cols-[200px_1fr] md:gap-8">
            <Reveal className="flex items-start gap-2 pt-1 font-mono text-sm text-faint md:justify-end md:text-right">
              <Calendar size={15} className="mt-0.5 shrink-0" />
              {job.period}
            </Reveal>

            <Reveal delay={80} className="relative md:border-l md:border-accent-2/40 md:pl-8">
              <span className="absolute top-2 -left-[5px] hidden size-[9px] rounded-full bg-accent-2 shadow-[0_0_0_4px_color-mix(in_srgb,var(--color-accent-2)_20%,transparent)] md:block" />
              <p className="font-mono text-sm text-accent-2">
                {String(i + 1).padStart(2, '0')} · {job.company}
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold">{job.role}</h3>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-faint">
                <MapPin size={14} /> {job.location}
              </p>
              <ul className="mt-4 space-y-2 text-muted">
                {job.points.map((p) => (
                  <li key={p} className="flex gap-3 leading-relaxed">
                    <span className="mt-2.5 size-1 shrink-0 rounded-full bg-accent-2" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {job.tags.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
