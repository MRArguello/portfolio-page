import React from 'react';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import ExperienceItem from '../components/ExperienceItem';
import experience from '../data/experience';
import { useLanguage } from '../i18n/LanguageContext';

export default function Experience() {
  const { content: { uiText } } = useLanguage();
  return (
    <Container className="py-12">
      <SectionTitle title={uiText.experienceTitle} />
      <div className="z-1 bg-zync-900">
        {experience.map((e) => (
          <ExperienceItem key={e.id} item={e} />
        ))}
      </div>
    </Container>
  );
}
