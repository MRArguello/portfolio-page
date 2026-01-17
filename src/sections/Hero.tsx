import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const SocialLink = ({ href, label }: { href: string; label: string }) => (
    <a href={href} target='_blank' className="hover:text-primary dark:hover:text-primary dark:text-secondary">
        {label}
    </a>
);

export default function Hero() {
    const { content } = useLanguage()
    const { hero } = content
    return (
        <section className="min-h-screen flex items-center">
            <div className="max-w-3xl px-6">
                <h1 className="text-4xl text-primary sm:text-5xl font-semibold tracking-tight">
                    {hero.name}
                </h1>
                <p className="mt-4 text-xl text-neutral-900 dark:text-neutral-400">
                    {hero.intro}
                </p>
                <p className="mt-6 text-neutral-800 dark:text-neutral-500 max-w-xl">
                    {hero.description}
                </p>
                <div className="mt-8 flex gap-6 text-sm text-neutral-400">
                    <SocialLink href="https://www.github.com/MRArguello" label={hero.links.github} />
                    <SocialLink href="https://www.linkedin.com/rosario-arguello" label={hero.links.linkedin} />
                    <SocialLink href="mailto:mrosario.arguello[at]gmail.com" label={hero.links.email} />
                </div>
            </div>
        </section>
    )
}
