import { useEffect, useState, type ReactNode } from 'react'
import { content, type Lang } from './data/profile'
import { LangContext } from './lang-context'

// Prioridad: ?lang= en la URL, después la última elección guardada, después el idioma del navegador.
function initialLang(): Lang {
  const param = new URLSearchParams(window.location.search).get('lang')
  if (param === 'es' || param === 'en') return param
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'es' || saved === 'en') return saved
  } catch {
    // localStorage no disponible
  }
  return navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang)
  const t = content[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
    try {
      localStorage.setItem('lang', lang)
    } catch {
      // localStorage no disponible
    }
    const url = new URL(window.location.href)
    url.searchParams.set('lang', lang)
    window.history.replaceState(null, '', url)
  }, [lang, t])

  return <LangContext.Provider value={{ lang, t, setLang }}>{children}</LangContext.Provider>
}
