import { useLang } from '../lang-context'
import { Reveal, Section } from './Section'

const tone = {
  'accent-2': { border: 'hover:border-accent-2/50', chip: 'border-accent-2/30 text-accent-2', dot: 'bg-accent-2' },
  accent: { border: 'hover:border-accent/50', chip: 'border-accent/30 text-accent', dot: 'bg-accent' },
  'accent-3': { border: 'hover:border-accent-3/50', chip: 'border-accent-3/30 text-accent-3', dot: 'bg-accent-3' },
}

export function Stack() {
  const { stack } = useLang().t

  return (
    <Section id="stack" eyebrow={stack.eyebrow} title={stack.title} alt>
      <p className="-mt-6 mb-10 max-w-2xl text-lg text-muted">
        {stack.intro}
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stack.groups.map((group, i) => {
          const { color, items } = stack.items[i]
          const c = tone[color]
          return (
            <Reveal key={group.title} delay={i * 80} className={`card p-6 transition-colors ${c.border}`}>
              <h3 className="flex items-center gap-2 font-display text-xl font-semibold">
                <span className={`size-2 rounded-full ${c.dot}`} />
                {group.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{group.text}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className={`chip ${c.chip}`}>
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
