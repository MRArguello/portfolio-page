import React from 'react';

export type Experience = {
  id: number | string;
  company: string;
  role: string;
  period?: string;
  summary?: string;
};

export default function ExperienceItem({ item }: { item: Experience }) {
  return (
    <div className="mb-6">
      <h3 className="font-semibold text-lg">{item.role} — {item.company}</h3>
      {item.period && <div className="text-sm text-gray-600">{item.period}</div>}
      {item.summary && <p className="mt-2 text-gray-800">{item.summary}</p>}
    </div>
  );
}
