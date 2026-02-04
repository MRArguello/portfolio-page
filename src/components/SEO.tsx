import { useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

// Update this with your actual domain when deploying
const SITE_URL = typeof window !== 'undefined' ? window.location.origin : 'https://yourdomain.com';

export default function SEO() {
    const { language, content } = useLanguage();
    const { hero } = content;

    const title = `${hero.name} - ${hero.role}`;
    const description = hero.intro;
    const imageUrl = `${SITE_URL}/og-image.jpg`; // Add an og-image.jpg to public/ if you have one

    useEffect(() => {
        // Update meta description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', description);

        // Update Open Graph tags
        const updateOrCreateMeta = (property: string, content: string) => {
            let meta = document.querySelector(`meta[property="${property}"]`);
            if (!meta) {
                meta = document.createElement('meta');
                meta.setAttribute('property', property);
                document.head.appendChild(meta);
            }
            meta.setAttribute('content', content);
        };

        // Update or create Twitter meta tags
        const updateOrCreateTwitterMeta = (name: string, content: string) => {
            let meta = document.querySelector(`meta[name="${name}"]`);
            if (!meta) {
                meta = document.createElement('meta');
                meta.setAttribute('name', name);
                document.head.appendChild(meta);
            }
            meta.setAttribute('content', content);
        };

        updateOrCreateMeta('og:title', title);
        updateOrCreateMeta('og:description', description);
        updateOrCreateMeta('og:type', 'website');
        updateOrCreateMeta('og:url', SITE_URL);
        updateOrCreateMeta('og:image', imageUrl);
        updateOrCreateMeta('og:locale', language === 'es' ? 'es_ES' : 'en_US');
        updateOrCreateMeta('og:site_name', hero.name);

        // Twitter Card tags
        updateOrCreateTwitterMeta('twitter:card', 'summary');
        updateOrCreateTwitterMeta('twitter:title', title);
        updateOrCreateTwitterMeta('twitter:description', description);
        updateOrCreateTwitterMeta('twitter:image', imageUrl);

        // Update title
        document.title = title;
    }, [language, title, description, hero.name, imageUrl]);

    useEffect(() => {
        // Structured data (JSON-LD) - remove old and add new
        let existingScript = document.querySelector('script[type="application/ld+json"]');
        if (existingScript) {
            existingScript.remove();
        }

        const structuredData = {
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: hero.name,
            jobTitle: hero.role,
            description: description,
            url: SITE_URL,
            sameAs: [
                'https://www.github.com/MRArguello',
                'https://www.linkedin.com/in/rosario-arguello',
            ],
            knowsAbout: ['React', 'TypeScript', 'Frontend Development', 'Design Systems'],
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(structuredData);
        document.head.appendChild(script);

        return () => {
            const scriptToRemove = document.querySelector('script[type="application/ld+json"]');
            if (scriptToRemove) {
                scriptToRemove.remove();
            }
        };
    }, [language, hero.name, hero.role, description]);

    return null;
}
