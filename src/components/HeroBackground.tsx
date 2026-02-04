import { useEffect, useRef, useState } from "react";
import './HeroBackground.css';

export default function HeroBackground() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(() => {
        if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
            return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        }
        return false;
    });

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

        const handleChange = (e: MediaQueryListEvent) => {
            setPrefersReducedMotion(e.matches);
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const onScroll = () => {
            const rect = el.getBoundingClientRect();
            const raw = -rect.top / rect.height;
            const clamped = Math.min(Math.max(raw, 0), 1);

            setProgress(clamped);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const fadeOut = 1 - progress * 1.6;
    const primaryTransform = prefersReducedMotion ? 'none' : `translateY(${progress * 40}px)`;
    const secondaryTransform = prefersReducedMotion ? 'none' : `translateY(${progress * 70}px)`;

    return (
        <div
            ref={containerRef}
            className={`hero-bg`}
            style={{ opacity: Math.max(fadeOut, 0) }}
        >
            <div
                className="hero-layer hero-glow primary"
                style={{
                    transform: primaryTransform
                }}
            />

            <div
                className="hero-layer hero-glow secondary"
                style={{
                    transform: secondaryTransform
                }}
            />

            <div className="hero-noise hero-layer" />
            <div className="hero-gradient hero-layer" />
        </div>
    );
}
