import { createContext, useContext } from 'react'
import type { Content, Lang } from './data/profile'

export type LangState = { lang: Lang; t: Content; setLang: (lang: Lang) => void }

export const LangContext = createContext<LangState | null>(null)

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang debe usarse dentro de LangProvider')
  return ctx
}
