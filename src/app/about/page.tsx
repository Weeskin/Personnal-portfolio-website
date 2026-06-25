import Link from "next/link";

export const metadata = {
    title: "À propos - Pierre Sourice",
    description:
        "Développeur Frontend passionné de design et de performance web. 3 ans d'expérience en édition de logiciels industriels (React, Next.js).",
};

export default function AboutPage() {
    return (
        <main className="bg-zinc-50 dark:bg-black">
            <section className="relative flex min-h-[calc(100svh-4rem)] flex-col items-center justify-center overflow-hidden px-6">
                {/* Halo lumineux d'arrière-plan */}
                <div
                    aria-hidden
                    className="pointer-events-none absolute left-1/2 top-1/3 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-[#7182ff]/20 via-[#3cff52]/10 to-transparent blur-3xl"
                />

                <div className="relative max-w-4xl text-center">
                    <p className="animate-slide-in-up mb-6 text-sm font-medium uppercase tracking-[0.3em] text-gray-500 md:text-base">
                        Développeur Logiciel
                    </p>

                    <h1
                        className="animate-slide-in-up text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl"
                        style={{ animationDelay: "120ms" }}
                    >
                        Pierre <span className="span-animation">Sourice</span>
                    </h1>

                    <p
                        className="animate-slide-in-up mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300 md:text-2xl"
                        style={{ animationDelay: "240ms" }}
                    >
                        Je conçois des interfaces web modernes et performantes.<br /> 3 ans
                        d&apos;expérience en édition de logiciels industriels - React, Next.js
                        et un goût prononcé pour l&apos;optimisation des performances.
                    </p>

                    <div
                        className="animate-slide-in-up mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
                        style={{ animationDelay: "360ms" }}
                    >
                        <Link
                            href="/"
                            className="cursor-pointer rounded-full bg-black px-7 py-3 font-medium text-white transition-all hover:scale-105 hover:opacity-90 dark:bg-white dark:text-black"
                        >
                            Voir mes projets
                        </Link>
                        <Link
                            href="/contact"
                            className="cursor-pointer rounded-full border border-gray-400 px-7 py-3 font-medium transition-all hover:scale-105 hover:bg-gray-100 dark:border-white/30 dark:hover:bg-white/10"
                        >
                            Me contacter
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
