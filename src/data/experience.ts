export type Experience = {
  id: string;
  company: string;
  role: string;
  location: string;
    startDate: string;
    endDate?: string;
    tech: string[];
};

export const experience: Experience[] = [
  {
    id: "omio",
    company: "Omio",
    role: "Senior Software Engineer",
    location: "Berlin, Germany",
    startDate: "2022-04",
    endDate: "2024-09",
    tech: [
      "React",
      "TypeScript",
      "React Native",
      "Design Systems",
      "Testing Library",
      "Node.js",
    ],
  },
  {
    id: "adjust",
    company: "Adjust",
    role: "Frontend Developer",
    location: "Berlin, Germany",
    startDate: "2021-11",
    endDate: "2022-04",
    tech: [
      "React",
      "TypeScript",
      "Design Systems",
      "Storybook",
      "Jest",
      "Rollup",
    ],
  },
  {
    id: "heycar",
    company: "heycar (Volkswagen Group)",
    role: "Frontend Developer",
    location: "Berlin, Germany",
    startDate: "2020-11",
    endDate: "2021-10",
    tech: [
      "React",
      "TypeScript",
      "Redux",
      "GraphQL",
      "A/B Testing",
      "Contentful",
    ],
  },
]


export default experience;
