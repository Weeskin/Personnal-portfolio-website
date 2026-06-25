'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import dataProjects from '@/Data/dataProjects.json';

interface ProjectCardProps {
    id: string;
    title: string;
    brand?: string;
    description: string;
    cover: string;
    logo?: string;
    logoBg?: string;
    tag: string[];
    gitUrl: string;
    previewUrl: string;
}

const projects = dataProjects as ProjectCardProps[];
const SLIDE_DURATION = 5000;

// Forme/taille du "cube" différentes à chaque slide (cyclées par l'index)
const SHAPES = [
    'aspect-[4/3] rounded-2xl',
    'aspect-square rounded-[2.5rem]',
    'aspect-[3/4] rounded-3xl',
    'aspect-[16/10] rounded-tl-[4rem] rounded-br-[4rem]',
    'aspect-[5/4] rounded-[2rem]',
];

export function ProjectSlider() {
    const [current, setCurrent] = useState(0);
    // index de la slide sortante, gardé le temps du crossfade
    const [prev, setPrev] = useState<number | null>(null);

    useEffect(() => {
        if (projects.length <= 1) return;

        // Respecte "réduire les animations" : pas de défilement auto
        const prefersReducedMotion =
            typeof window !== 'undefined' &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const timer = setInterval(() => {
            setCurrent((c) => {
                setPrev(c);
                return (c + 1) % projects.length;
            });
        }, SLIDE_DURATION);

        return () => clearInterval(timer);
    }, []);

    // On rend la slide active + la sortante (pour le crossfade)
    const indices = prev === null || prev === current ? [current] : [prev, current];

    return (
        <section className="relative w-full min-h-[100svh] overflow-hidden">
            {indices.map((i) => {
                const project = projects[i];
                const isActive = i === current;
                const shape = SHAPES[i % SHAPES.length];
                const accent = project.logoBg || '#e5e7eb';

                return (
                    <div
                        key={i}
                        className={`absolute inset-0 flex items-center transition-opacity duration-700 ease-out ${
                            isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                        }`}
                    >
                        <Link
                            href={`/projects/${project.id}`}
                            aria-label={`Voir le projet ${project.title}`}
                            className="group relative mx-auto flex w-full max-w-6xl items-center px-6 py-24 sm:px-12 lg:px-20"
                        >
                            {/* Image cube : calée à droite, EN DESSOUS du titre (forme variable par slide) */}
                            <div className="absolute right-6 top-1/2 z-0 w-[72%] max-w-xl -translate-y-1/2 sm:right-12 sm:w-[58%] lg:right-20 lg:w-[52%]">
                                <div className={`relative w-full overflow-hidden ring-1 ring-black/5 dark:ring-white/10 ${shape}`}>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={project.cover}
                                        alt={project.title}
                                        className="animate-clip-reveal h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Bloc teinté qui balaie de gauche à droite */}
                                    <div
                                        aria-hidden
                                        className="animate-panel-sweep pointer-events-none absolute inset-0"
                                        style={{ backgroundColor: accent }}
                                    />
                                </div>
                            </div>

                            {/* Texte superposé PAR-DESSUS l'image (effet empilé) */}
                            <div className="relative z-10 max-w-2xl">
                                <p className="animate-slide-in-up text-sm font-medium tracking-[0.3em] text-gray-400">
                                    {String(i + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                                </p>

                                {/* Dégradé animé (shine) + drop-shadow pour rester lisible par-dessus l'image */}
                                <h2
                                    className="animate-slide-in-up mt-3 text-6xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl lg:text-[10rem]"
                                    style={{ animationDelay: '120ms' }}
                                >
                                    <span className="span-animation [filter:drop-shadow(0_2px_12px_rgba(0,0,0,0.35))]">
                                        {project.brand || project.title}
                                    </span>
                                </h2>

                                <p
                                    className="animate-slide-in-up mt-4 text-base text-gray-500 dark:text-gray-400 md:text-lg"
                                    style={{ animationDelay: '180ms' }}
                                >
                                    {project.title}
                                </p>

                                <div
                                    className="animate-slide-in-up mt-6 flex flex-wrap gap-2"
                                    style={{ animationDelay: '220ms' }}
                                >
                                    {project.tag.slice(0, 4).map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur-sm dark:bg-black/50 dark:text-white/80"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                <span
                                    className="animate-slide-in-up mt-8 inline-flex items-center gap-2 text-base font-medium text-gray-900 transition-transform group-hover:translate-x-1 dark:text-white"
                                    style={{ animationDelay: '300ms' }}
                                >
                                    Voir le projet
                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </div>
                        </Link>
                    </div>
                );
            })}
        </section>
    );
}
