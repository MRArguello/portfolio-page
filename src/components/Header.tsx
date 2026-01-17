// src/components/Header.tsx
import React from "react"
import LanguageSwitcher from "./LanguageSwitcher"

export default function Header() {
  return (
    <header className="flex justify-end items-center py-4 px-6 bg-neutral-100 dark:bg-zinc-900">
      <LanguageSwitcher />
    </header>
  )
}
