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
    <article className="border border-neutral-200 dark:border-neutral-700 rounded p-4 mb-4 bg-white dark:bg-zinc-800">
      <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">{project.title}</h3>
      {project.description && <p className="mt-2 text-neutral-600 dark:text-neutral-400">{project.description}</p>}
      {project.link && (
        <a
          href={project.link}
          className="text-blue-600 dark:text-blue-400 mt-2 inline-block"
          aria-label={`${content.uiText.viewProject}: ${project.title}`}
        >
          {content.uiText.viewProject}
        </a>
      )}
    </article>
  );
}
