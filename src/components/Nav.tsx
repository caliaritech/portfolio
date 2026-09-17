import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { profile, socialsFor } from '../data/profile'
import { useLang } from '../i18n'
import { SocialIcon, socialColor } from './icons'
import { LangToggle } from './LangToggle'

export function Nav() {
  const [active, setActive] = useState('')
  const [progress, setProgress] = useState(0)
  const [open, setOpen] = useState(false)
  const { lang, t } = useLang()
  const nav = t.nav
  const socials = socialsFor(lang)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? window.scrollY / max : 0)

      let current = ''
      for (const item of nav) {
        const el = document.getElementById(item.id)
        if (el && el.getBoundingClientRect().top <= 140) current = item.id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [nav])

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-4 md:px-6">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-line bg-bg/80 backdrop-blur-md">
        <div className="flex h-14 items-center justify-between gap-4 px-3">
          <a href="#top" className="flex items-center gap-3">
            <img src={profile.photo} alt="" className="size-9 rounded-lg border border-line object-cover" />
            <span className="font-mono text-[15px] text-text">{profile.handle}</span>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`border-b py-1 font-mono text-sm transition-colors ${
                  active === item.id ? 'border-accent-2 text-accent-2' : 'border-transparent text-muted hover:text-text'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 lg:flex">
            {socials.map((s) => (
              <a
                key={s.key}
                href={s.href}
                target={s.key === 'email' ? undefined : '_blank'}
                rel="noreferrer"
                aria-label={s.label}
                title={s.label}
                className="grid size-9 place-items-center rounded-lg border border-line bg-surface transition-colors hover:border-line-strong"
              >
                <SocialIcon name={s.key} className={socialColor[s.key]} />
              </a>
            ))}
            </div>
            <LangToggle />
            <button
              className="grid size-9 place-items-center rounded-lg border border-line md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label={t.ui.openMenu}
              aria-expanded={open}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="flex flex-col gap-1 border-t border-line p-3 md:hidden">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2 font-mono text-sm ${active === item.id ? 'text-accent-2' : 'text-muted'}`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}

        <div
          className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-accent-2 via-accent to-accent-3"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </header>
  )
}
