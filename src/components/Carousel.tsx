import Link from 'next/link';
import Image from 'next/image';
import dataProjects from '@/Data/dataProjects.json';

interface ProjectCardProps {
    id: number,
    title: string,
    description: string,
    cover: string,
    tag: string[],
    gitUrl: string,
    previewUrl: string
}

export function Carousel() {
    // Diviser les projets 7-12 en une grille de 6
    const projects = dataProjects.slice(6, 12);

    // Créer des pages de 6 projets chacune
    const pages = [];
    for (let i = 0; i < projects.length; i += 6) {
        pages.push(projects.slice(i, i + 6));
    }

    return (
        <div className="carousel-scroll-container">
            {pages.map((pageProjects, pageIndex) => (
                <div key={pageIndex} className="carousel-page">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {pageProjects.map((project: ProjectCardProps) => (
                            <div key={project.id} className="group">
                                <Link href={`/projects/${project.id}`} className="block">
                                    <div className="bg-[#181818] rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105">
                                        <div className="relative aspect-square w-full overflow-hidden">
                                            <Image
                                                src={project.cover}
                                                alt={project.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

