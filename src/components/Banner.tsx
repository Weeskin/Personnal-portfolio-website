'use client';

export function Banner() {
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="home"
            className="snap-section relative w-full min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
        >
            {/* Halo lumineux d'arrière-plan */}
            <div
                aria-hidden
                className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[42rem] w-[42rem] rounded-full bg-gradient-to-tr from-[#7182ff]/20 via-[#3cff52]/10 to-transparent blur-3xl"
            />

            <div className="relative text-center max-w-4xl">
                <p className="animate-slide-in-up text-sm md:text-base font-medium uppercase tracking-[0.3em] text-gray-500 mb-6">
                    Développeur Logiciel
                </p>

                <h1
                    className="animate-slide-in-up text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]"
                    style={{ animationDelay: '120ms' }}
                >
                    Pierre <span className="span-animation">Sourice</span>
                </h1>

                <p
                    className="animate-slide-in-up mt-8 text-lg md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
                    style={{ animationDelay: '240ms' }}
                >
                    Je conçois des interfaces web modernes et performantes.<br /> 3 ans
                    d&apos;expérience en édition de logiciels industriels - React, Next.js
                    et un goût prononcé pour l&apos;optimisation des performances.
                </p>

                <div
                    className="animate-slide-in-up mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
                    style={{ animationDelay: '360ms' }}
                >
                    <button
                        onClick={() => scrollToSection('projects')}
                        className="px-7 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black font-medium hover:opacity-90 hover:scale-105 transition-all cursor-pointer"
                    >
                        Voir mes projets
                    </button>
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="px-7 py-3 rounded-full border border-gray-400 dark:border-white/30 font-medium hover:bg-gray-100 dark:hover:bg-white/10 hover:scale-105 transition-all cursor-pointer"
                    >
                        Me contacter
                    </button>
                </div>
            </div>

            {/* Bouton de scroll vers le bas */}
            <button
                onClick={() => scrollToSection('projects')}
                className="absolute bottom-8 animate-bounce text-gray-500 hover:text-foreground transition-colors"
                aria-label="Scroll vers les projets"
            >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </button>
        </section>
    );
}
