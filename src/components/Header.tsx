'use client';

import Link from 'next/link';

export function Header() {
    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full h-16 px-8 bg-white/90 dark:bg-black/90 backdrop-blur-sm shadow-md">
            <h1 className="text-xl font-bold text-foreground">Pierre</h1>
            <nav>
                <ul className="flex space-x-6">
                    <li>
                        <button
                            onClick={() => scrollToSection('home')}
                            className="text-foreground/60 hover:text-foreground transition-colors"
                        >
                            Accueil
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="text-foreground/60 hover:text-foreground transition-colors"
                        >
                            Projets
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="text-foreground/60 hover:text-foreground transition-colors"
                        >
                            Contact
                        </button>
                    </li>
                    <li><Link href="/about" className="text-foreground/60 hover:text-foreground transition-colors">À propos</Link></li>
                </ul>
            </nav>
        </header>
    );
}