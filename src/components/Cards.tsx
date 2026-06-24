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
    direction?: 'left' | 'right' | null;
}

export function Cards({ projects, direction }: CardsProps) {
    const projectsToDisplay = projects || (dataProjects as ProjectCardProps[]).slice(0, 6);

    const getAnimationClass = () => {
        if (direction === 'right') return 'animate-slide-in-right';
        if (direction === 'left') return 'animate-slide-in-left';
        return 'animate-scale-in';
    };

    const cardSheet = projectsToDisplay.map((project: ProjectCardProps, index: number) => {
        return (
            <Link
                key={`${project.id}-${direction}-${index}`}
                href={`/projects/${project.id}`}
                className={`group block ${getAnimationClass()}`}
                style={{ animationDelay: `${index * 80}ms` }}
            >
                <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-[#181818] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/30">
                    <Image
                        src={project.cover}
                        alt={project.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Film noir du bas pour faire ressortir le texte */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Contenu en bas, qui monte au survol */}
                    <div className="absolute inset-x-0 bottom-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white text-lg font-semibold leading-snug [text-shadow:0_1px_2px_rgba(0,0,0,0.55)]">{project.title}</h3>
                        <div className="mt-3 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                            {project.tag.slice(0, 4).map((item) => (
                                <span
                                    key={item}
                                    className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/15 text-white backdrop-blur-sm"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </Link>
        );
    });

    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-4 w-full">
            {cardSheet}
        </section>
    );
}
