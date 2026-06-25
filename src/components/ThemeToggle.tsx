'use client';

import { useEffect, useState } from 'react';

export function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        setIsDark(document.documentElement.classList.contains('dark'));
    }, []);

    // Suit la preference systeme tant que l'utilisateur n'a pas choisi explicitement
    useEffect(() => {
        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        const handler = () => {
            if (!localStorage.getItem('theme')) {
                document.documentElement.classList.toggle('dark', mq.matches);
                setIsDark(mq.matches);
            }
        };
        mq.addEventListener('change', handler);
        return () => mq.removeEventListener('change', handler);
    }, []);

    const toggle = () => {
        const next = !isDark;
        document.documentElement.classList.toggle('dark', next);
        localStorage.setItem('theme', next ? 'dark' : 'light');
        setIsDark(next);
    };

    return (
        <button
            type="button"
            onClick={toggle}
            aria-label={isDark ? 'Activer le thème clair' : 'Activer le thème sombre'}
            title={isDark ? 'Thème clair' : 'Thème sombre'}
            className="inline-flex items-center justify-center w-9 h-9 rounded-full text-foreground/60 hover:text-foreground hover:bg-foreground/10 transition-colors cursor-pointer"
        >
            {mounted && isDark ? (
                // Soleil
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>
            ) : (
                // Lune
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
            )}
        </button>
    );
}
