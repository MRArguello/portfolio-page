/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react"
import { content as en } from "../content/en"
import { content as es } from "../content/es"

type Language = "en" | "es"

const contents = { en, es }

type LocalizedExperience = Record<string, { description?: string }>
type Content = typeof en & { experience: LocalizedExperience }

const LanguageContext = createContext<{
  language: Language
  content: Content
  setLanguage: (lang: Language) => void
} | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  return (
    <LanguageContext.Provider
      value={{
        language,
        content: contents[language],
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error("useLanguage must be used inside LanguageProvider")
  }
  return ctx
}
