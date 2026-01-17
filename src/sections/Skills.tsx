import React from 'react';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import { skills } from '../data/skills';
import { useLanguage } from '../i18n/LanguageContext';

export default function Skills() {
    const {content: {uiText: {skillsTitle}}} = useLanguage();
  return (
    <Container className="py-12">
      <SectionTitle title={skillsTitle} />
      <ul className="list-disc ml-5">
        {skills.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </Container>
  );
}
