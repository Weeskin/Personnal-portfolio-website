import Image from 'next/image';
import Link from 'next/link';
import dataProjects from '@/Data/dataProjects.json';

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  cover: string;
  tag: string[];
  gitUrl: string;
  previewUrl: string;
  details?: string;
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const projectId = Number(params.id);
  const project = (dataProjects as ProjectCardProps[]).find((item) => item.id === projectId);

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6 py-16">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Projet introuvable</h1>
          <p className="text-gray-600 dark:text-gray-300">Le projet demande n'existe pas.</p>
          <Link href="/" className="text-blue-600 hover:underline">
            Retour a l'accueil
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-6 py-16 max-w-5xl mx-auto">
      <div className="flex flex-col gap-10">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">{project.title}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">{project.description}</p>
        </div>

        <div className="relative w-full overflow-hidden rounded-2xl bg-[#181818] aspect-[16/9]">
          <Image
            src={project.cover}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            {project.tag.map((item) => (
              <span
                key={item}
                className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-200"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            {project.details ?? project.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={project.previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black"
            >
              Voir le projet
            </a>
            <a
              href={project.gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full border border-gray-300 dark:border-white/30 text-gray-700 dark:text-gray-200"
            >
              Code source
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

