import React from 'react';

export default function SectionTitle({ title }: { title: string }) {
  return <h2 className="text-2xl font-bold text-primary mb-4">{title}</h2>;
}
