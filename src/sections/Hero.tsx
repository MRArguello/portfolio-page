import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Hero() {
    const { content } = useLanguage()
    const { hero } = content
    return (
        <section className="min-h-screen flex items-center">
            <div className="max-w-3xl px-6">
                <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
                    {hero.name}
                </h1>

                <p className="mt-4 text-xl text-neutral-400">
                    {hero.intro}
                </p>

                <p className="mt-6 text-neutral-500 max-w-xl">
                    {hero.description}
                </p>

                <div className="mt-8 flex gap-6 text-sm text-neutral-400">
                    <a href="https://www.github.com/MRArguello" className="hover:text-neutral-200">
                        {hero.links.github}
                    </a>
                    <a href="https://www.linkedin.com/rosario-arguello" className="hover:text-neutral-200">
                        {hero.links.linkedin}
                    </a>
                    <a href="mailto:mrosario.arguello[at]gmail.com" className="hover:text-neutral-200">
                        {hero.links.email}
                    </a>
                </div>
            </div>
        </section>
    )
}
