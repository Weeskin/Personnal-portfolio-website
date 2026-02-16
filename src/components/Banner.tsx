'use client';

export function Banner() {
    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="snap-section w-full h-screen flex flex-col items-center justify-center relative">
            <div className="text-center space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-shadow-black">
                    Bienvenue sur mon <span className="span-animation">Portfolio</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-500">
                    Découvrez mes projets et réalisations
                </p>
            </div>

            {/* Bouton de scroll vers le bas */}
            <button
                onClick={scrollToProjects}
                className="absolute bottom-8 animate-bounce text-shadow-black hover:text-shadow-black/80 transition-colors"
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

// bg-gradient-to-r from-blue-500 to-purple-600