// src/components/LanguageSwitcher.tsx
import React from "react"
import { useLanguage } from "../i18n/LanguageContext"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en")
  }

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 border rounded-md text-sm text-neutral-700 dark:text-neutral-200 border-neutral-400 dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
    >
      {language === "en" ? "ES" : "EN"}
    </button>
  )
}
