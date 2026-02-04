import { forwardRef } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import SocialLinks from '../components/SocialLinks';
import HeroBackground from '../components/HeroBackground';

const Hero = forwardRef<HTMLElement>((_, ref) => {
  const { content } = useLanguage();
  const { hero } = content;

  return (
    <section ref={ref} className="min-h-screen relative flex items-center">
      <HeroBackground />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 pt-24 md:pt-48">
        <h1 className="text-4xl md:text-5xl text-primary font-semibold tracking-tight">
          {hero.name}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-neutral-900 dark:text-neutral-400">
          {hero.intro}
        </p>
        <p className="mt-6 text-base md:text-lg text-neutral-800 dark:text-neutral-500 max-w-2xl">
          {hero.description}
        </p>
        <SocialLinks className="mt-4" />
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
