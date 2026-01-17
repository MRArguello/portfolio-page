import React from 'react';
import type { Experience } from '../data/experience';
import { formatPeriod } from '../utils/formatPeriod';
import { useLanguage } from '../i18n/LanguageContext';

export default function ExperienceItem({ item }: { item: Experience }) {
    const { language, content: { experience, uiText } } = useLanguage();
  return (
    <div className="mb-6">
      <h3 className="font-semibold text-lg">{item.role} — {item.company}</h3>
      <p className="text-sm text-neutral-500 mb-1">
        {formatPeriod(item.startDate, item.endDate, language, uiText.currentJob)} · {item.location}
        </p>
      {experience[item.id].description && <p className="mt-2 text-gray-800">{experience[item.id].description}</p>}
    </div>
  );
}
