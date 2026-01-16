import React from 'react';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

export default function Projects() {
  return (
    <Container className="py-12">
      <SectionTitle title="Projects" />
      <div>
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </Container>
  );
}
