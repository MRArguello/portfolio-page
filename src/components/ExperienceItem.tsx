import React from 'react';
import type { Experience } from '../data/experience';
import { formatPeriod } from '../utils/formatPeriod';
import { useLanguage } from '../i18n/LanguageContext';
import { Pill } from './Pill';

export default function ExperienceItem({ item }: { item: Experience }) {
  const {
    language,
    content: { experience, uiText },
  } = useLanguage();
  return (
    <div className="mb-10">
      <h3 className="font-semibold text-lg text-neutral-400">
        {item.role} — {item.company}
      </h3>
      <p className="text-sm text-secondary mb-1">
        {formatPeriod(
          item.startDate,
          item.endDate,
          language,
          uiText.currentJob,
        )}{' '}
        · {item.location}
      </p>
      {experience[item.id]?.description && (
        <p className="mt-2 text-neutral-500">
          {experience[item.id].description}
        </p>
      )}
      {item.tech && (
        <ul className="mt-3 flex flex-wrap gap-2">
          {item.tech.map((tech) => (
            <Pill key={tech} label={tech} />
          ))}
        </ul>
      )}
    </div>
  );
}
