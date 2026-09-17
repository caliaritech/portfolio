import { useEffect, useRef, type ReactNode } from 'react'

type Props = {
  id: string
  eyebrow?: string
  title?: ReactNode
  alt?: boolean
  children: ReactNode
}

export function Section({ id, eyebrow, title, alt, children }: Props) {
  return (
    <section id={id} className={`border-t border-line py-24 md:py-28 ${alt ? 'bg-bg-raised/60' : ''}`}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {eyebrow && (
          <Reveal>
            <p className="font-mono text-sm text-accent-2">// {eyebrow}</p>
          </Reveal>
        )}
        {title && (
          <Reveal>
            <h2 className="mt-3 max-w-3xl font-display text-4xl leading-[1.08] font-semibold tracking-tight md:text-5xl">
              {title}
            </h2>
          </Reveal>
        )}
        <div className={title ? 'mt-12' : ''}>{children}</div>
      </div>
    </section>
  )
}

export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}
