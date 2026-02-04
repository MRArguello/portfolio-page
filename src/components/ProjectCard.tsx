import { useLanguage } from '../i18n/LanguageContext';

export type Project = {
  id: number | string;
  title: string;
  description?: string;
  link?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  const { content } = useLanguage();

  return (
    <article className="border rounded p-4 mb-4">
      <h3 className="font-semibold">{project.title}</h3>
      {project.description && <p className="mt-2">{project.description}</p>}
      {project.link && (
        <a
          href={project.link}
          className="text-blue-600 mt-2 inline-block"
          aria-label={`${content.uiText.viewProject}: ${project.title}`}
        >
          {content.uiText.viewProject}
        </a>
      )}
    </article>
  );
}
