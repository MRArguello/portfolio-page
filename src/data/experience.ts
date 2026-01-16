export type Experience = {
  id: number;
  company: string;
  role: string;
  period?: string;
  summary?: string;
};

const experience: Experience[] = [
  {
    id: 1,
    company: 'Treatwell',
    role: 'Senior Frontend Developer',
    period: '2025 — Present',
    summary: 'This is a summary.'
  }
];

export default experience;
