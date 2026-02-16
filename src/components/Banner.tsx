'use client';

export function Banner() {
    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="snap-section w-full h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 relative">
            <div className="text-center space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                    Bienvenue sur mon Portfolio
                </h1>
                <p className="text-xl md:text-2xl text-white/90">
                    Découvrez mes projets et réalisations
                </p>
            </div>

            {/* Bouton de scroll vers le bas */}
            <button
                onClick={scrollToProjects}
                className="absolute bottom-8 animate-bounce text-white hover:text-white/80 transition-colors"
                aria-label="Scroll vers les projets"
            >
                <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
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