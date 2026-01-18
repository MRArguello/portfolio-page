import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="ml-auto px-3 py-1 border rounded-md text-sm text-primary font-semibold border-primary hover:bg-neutral-200 dark:hover:bg-primary dark:hover:text-zinc-900 transition"
    >
      {language === 'en' ? 'ES' : 'EN'}
    </button>
  );
}
