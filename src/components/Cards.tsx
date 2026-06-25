import Link from 'next/link';
import dataProjects from '@/Data/dataProjects.json';

interface ProjectCardProps {
    id: string,
    title: string,
    description: string,
    cover: string,
    logo?: string,
    logoText?: string,
    logoBg?: string,
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
                className={`group block h-full ${getAnimationClass()}`}
                style={{ animationDelay: `${index * 80}ms` }}
            >
                <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white dark:bg-[#181818] ring-1 ring-black/5 dark:ring-white/5 shadow-sm shadow-black/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/15 dark:hover:shadow-black/40 hover:ring-black/10 dark:hover:ring-white/10">
                    {/* Zone logo, fond teinte par projet */}
                    <div
                        className="relative flex aspect-[16/10] shrink-0 items-center justify-center overflow-hidden p-8 sm:p-10"
                        style={{ backgroundColor: project.logoBg || '#f5f5f7' }}
                    >
                        {/* Halo doux pour donner du relief */}
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.18),transparent_70%)]" />
                        {project.logo ? (
                            /* eslint-disable-next-line @next/next/no-img-element */
                            <img
                                src={project.logo}
                                alt={project.title}
                                loading="lazy"
                                className="relative max-h-[64%] max-w-[80%] object-contain transition-transform duration-500 group-hover:scale-105"
                            />
                        ) : (
                            <span className="relative text-2xl sm:text-3xl font-semibold tracking-tight text-white/90 transition-transform duration-500 group-hover:scale-105">
                                {project.logoText || project.title}
                            </span>
                        )}
                    </div>

                    {/* Pied : titre + tags */}
                    <div className="flex flex-1 flex-col p-4 sm:p-5">
                        <h3 className="text-gray-900 dark:text-white text-base sm:text-lg font-semibold leading-snug">{project.title}</h3>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {project.tag.slice(0, 4).map((item) => (
                                <span
                                    key={item}
                                    className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-black/5 text-gray-600 dark:bg-white/10 dark:text-white/80"
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
