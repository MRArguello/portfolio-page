import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import { skills } from '../data/skills';
import { useLanguage } from '../i18n/LanguageContext';
import { Pill } from '../components/Pill';

export default function Skills() {
  const {
    content: {
      uiText: { skillsTitle },
    },
  } = useLanguage();
  return (
    <Container className="py-12">
      <SectionTitle title={skillsTitle} />
      <ul className="ml-5 flex flex-wrap gap-2">
        {skills.map((s) => (
          <Pill key={s} label={s} variant="solid" />
        ))}
      </ul>
    </Container>
  );
}
