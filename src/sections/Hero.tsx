import React, { forwardRef } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import SocialLinks from '../components/SocialLinks';
import HeroBackground from '../components/HeroBackground';

const Hero = forwardRef<HTMLElement>((_, ref) => {
  const { content } = useLanguage();
  const { hero } = content;

  return (
    <section ref={ref} className="min-h-screen relative flex items-center">
      <HeroBackground />
      <div className="relative z-10 mx-40 max-w-5xl px-6 pt-48">
        <h1 className="text-5xl text-primary sm:text-5xl font-semibold tracking-tight">
          {hero.name}
        </h1>
        <p className="mt-6 text-xl text-neutral-900 dark:text-neutral-400 ">
          {hero.intro}
        </p>
        <p className="mt-6 text-neutral-800 dark:text-neutral-500 max-w-2xl">
          {hero.description}
        </p>
        <SocialLinks className="mt-4" />
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
