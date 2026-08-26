import { createContext, useContext, useState, type ReactNode } from 'react'
import { getPortfolio, type Language } from './data/portfolio'

const LanguageContext = createContext<{ language: Language; setLanguage: (language: Language) => void }>({
  language: 'en',
  setLanguage: () => undefined,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')
  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const { language, setLanguage } = useContext(LanguageContext)
  return { language, setLanguage, portfolio: getPortfolio(language) }
}
