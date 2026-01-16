import React from 'react';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import { skills } from '../data/skills';

export default function Skills() {
  return (
    <Container className="py-12">
      <SectionTitle title="Skills" />
      <ul className="list-disc ml-5">
        {skills.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </Container>
  );
}
