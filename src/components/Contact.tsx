import { ArrowUp, Check, Clock, Copy, Mail } from 'lucide-react'
import { useState } from 'react'
import { profile, socialsFor } from '../data/profile'
import { useLang } from '../lang-context'
import { SocialIcon } from './icons'
import { socialColor } from './social-colors'
import { Reveal } from './Section'

export function Contact() {
  const [copied, setCopied] = useState(false)
  const { lang, t } = useLang()
  const copy = t.contact
  const socials = socialsFor(lang)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <>
      <section id="contact" className="border-t border-line py-28">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center px-4 text-center">
          <span className="font-mono text-3xl text-accent-2">&gt;_</span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">{copy.title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            {t.location} · {copy.text}
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <span className="chip rounded-full">
              <span className="size-2 animate-pulse-dot rounded-full bg-accent-2" />
              {copy.available}
            </span>
            <span className="chip rounded-full">
              <Clock size={13} className="text-accent-3" />
              {t.timezone}
            </span>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-accent-2 px-5 py-3 font-mono text-sm font-semibold text-ink transition hover:brightness-110"
            >
              <Mail size={16} /> {copy.send}
            </a>
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-5 py-3 font-mono text-sm font-semibold transition-colors hover:border-line-strong"
            >
              {copied ? <Check size={16} className="text-accent-2" /> : <Copy size={16} />}
              {copied ? copy.copied : copy.copy}
            </button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-5">
            {socials
              .filter((s) => s.key !== 'email')
              .map((s) => (
                <a
                  key={s.key}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 font-mono text-sm text-muted hover:text-text"
                >
                  <SocialIcon name={s.key} size={15} className={socialColor[s.key]} />
                  {s.label}
                </a>
              ))}
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 font-mono text-xs text-faint md:px-6">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <a href="#top" className="flex items-center gap-1.5 hover:text-text">
            {copy.backToTop} <ArrowUp size={13} />
          </a>
        </div>
      </footer>
    </>
  )
}
