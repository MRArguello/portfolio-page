import React from 'react';

export type Project = {
  id: number | string;
  title: string;
  description?: string;
  link?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="border rounded p-4 mb-4">
      <h3 className="font-semibold">{project.title}</h3>
      {project.description && <p className="mt-2">{project.description}</p>}
      {project.link && (
        <a href={project.link} className="text-blue-600 mt-2 inline-block">View project</a>
      )}
    </article>
  );
}
