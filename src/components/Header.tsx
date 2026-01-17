// src/components/Header.tsx
import React from "react"
import LanguageSwitcher from "./LanguageSwitcher"

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-6 bg-neutral-50 dark:bg-neutral-900">
      <h1 className="text-xl font-bold">My Portfolio</h1>
      <LanguageSwitcher />
    </header>
  )
}
