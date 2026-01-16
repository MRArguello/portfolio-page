import React from 'react';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import ExperienceItem from '../components/ExperienceItem';
import experience from '../data/experience';

export default function Experience() {
  return (
    <Container className="py-12">
      <SectionTitle title="Experience" />
      <div>
        {experience.map((e) => (
          <ExperienceItem key={e.id} item={e} />
        ))}
      </div>
    </Container>
  );
}
