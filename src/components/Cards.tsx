import Link from 'next/link';
import Image from 'next/image';
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

interface CardsProps {
    projects?: ProjectCardProps[];
}

export function Cards({ projects }: CardsProps) {
    const projectsToDisplay = projects || (dataProjects as ProjectCardProps[]).slice(0, 6);

    const cardSheet = projectsToDisplay.map((project: ProjectCardProps) => {
        return (
            <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group block"
            >
                <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-[#181818] transition-transform duration-300 hover:scale-105">
                    <Image
                        src={project.cover}
                        alt={project.title}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-white text-center text-lg font-semibold px-4">{project.title}</h3>
                    </div>
                </div>
            </Link>
        );
    });

    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-4 max-w-full xl:px-80">
            {cardSheet}
        </section>
    );
}

