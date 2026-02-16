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

export function Cards() {
    const cardSheet = dataProjects.slice(0, 6).map((project : ProjectCardProps) => {
        return (
            <div key={project.id} className="group">
                <Link
                    href={`/projects/${project.id}`}
                    className="block"
                >
                    <div className="bg-[#181818] rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105">
                        <div className="relative aspect-square w-full overflow-hidden">
                            <Image
                                src={project.cover}
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/*<h2 className="text-white text-lg font-semibold py-4 px-4">{project.title}</h2>*/}
                    </div>
                </Link>
            </div>
        );
    });

    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 max-w-6xl mx-auto">
            {cardSheet}
        </section>
    );
}