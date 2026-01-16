export type Project = {
  id: number;
  title: string;
  description?: string;
  link?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'Personal portfolio built with React and Vite.',
    link: '#'
  }
];

export default projects;
