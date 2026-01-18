import React, { forwardRef } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import SocialLinks from '../components/SocialLinks';

const Hero = forwardRef<HTMLElement>((_, ref) => {
  const { content } = useLanguage();
  const { hero } = content;

  return (
    <section ref={ref} className="min-h-screen flex items-center z-1">
      <div className="max-w-3xl px-6 bg-zinc-900 z-1">
        <h1 className="text-4xl text-primary sm:text-5xl font-semibold tracking-tight">
          {hero.name}
        </h1>
        <p className="mt-4 text-xl text-neutral-900 dark:text-neutral-400">
          {hero.intro}
        </p>
        <p className="mt-6 text-neutral-800 dark:text-neutral-500 max-w-xl">
          {hero.description}
        </p>
        <SocialLinks className="mt-4" />
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
