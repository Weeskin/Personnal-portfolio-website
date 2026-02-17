'use client';

import { useState } from 'react';
import { Cards } from './Cards';
import dataProjects from '@/Data/dataProjects.json';

interface ProjectCardProps {
    id: string,
    title: string,
    description: string,
    cover: string,
    tag: string[],
    gitUrl: string,
    previewUrl: string
}

export function Carousel() {
    const [currentPage, setCurrentPage] = useState(0);
    const projectsPerPage = 6;
    const totalPages = Math.ceil(dataProjects.length / projectsPerPage);

    const startIndex = currentPage * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    const pagedProjects = (dataProjects as ProjectCardProps[]).slice(startIndex, endIndex);
    const allProjects = dataProjects as ProjectCardProps[];

    const handlePrev = () => {
        setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
    };

    const handleNext = () => {
        setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
    };

    return (
        <div className="w-full flex items-center justify-center gap-4 px-4">
            {/* Flèche gauche */}
            {currentPage > 0 && (
                <button
                    onClick={handlePrev}
                    className="hidden md:flex flex-shrink-0 px-2 py-8 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg transition-all"
                    aria-label="Projets précédents"
                >
                    <svg className="w-6 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
            )}

            {/* Grille des cards */}
            <div className="flex-1">
                <div className="md:hidden">
                    <Cards projects={allProjects} />
                </div>
                <div className="hidden md:block">
                    <Cards projects={pagedProjects} />
                </div>
            </div>

            {/* Flèche droite */}
            {currentPage < totalPages - 1 && (
                <button
                    onClick={handleNext}
                    className="hidden md:flex flex-shrink-0 px-2 py-8 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg transition-all"
                    aria-label="Projets suivants"
                >
                    <svg className="w-6 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            )}
        </div>
    );
}
