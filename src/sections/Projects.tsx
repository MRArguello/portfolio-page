import React from 'react';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';
import { useLanguage } from '../i18n/LanguageContext';

export default function Projects() {
    const {content: {uiText:{ projectsTitle}}} = useLanguage();  
  return (
    <Container className="py-12">
      <SectionTitle title={projectsTitle} />
      <div>
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </Container>
  );
}
