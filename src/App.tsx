import { useRef, useEffect } from 'react';
import { useLanguage } from './i18n/LanguageContext';
import Hero from './sections/Hero';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Header from './components/Header';
import Footer from './components/Footer';
import SEO from './components/SEO';

function App() {
  const heroRef = useRef<HTMLElement | null>(null);
  const { language } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div className="bg-neutral-100 dark:bg-zinc-900">
      <SEO />
      <Header heroRef={heroRef} />
      <Hero ref={heroRef} />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
