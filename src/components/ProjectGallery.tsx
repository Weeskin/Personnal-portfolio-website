'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

interface ProjectGalleryProps {
    images: string[];
    title: string;
    aspectClassName?: string;
}

export function ProjectGallery({ images, title, aspectClassName = 'aspect-video' }: ProjectGalleryProps) {
    const [index, setIndex] = useState(0);
    const count = images.length;

    const go = useCallback(
        (n: number) => setIndex(((n % count) + count) % count),
        [count]
    );

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') go(index - 1);
            if (e.key === 'ArrowRight') go(index + 1);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [index, go]);

    return (
        <div className="w-full">
            <div className={`relative w-full overflow-hidden rounded-2xl bg-[#181818] ${aspectClassName}`}>
                {images.map((image, i) => (
                    <Image
                        key={image}
                        src={image}
                        alt={`${title} - capture ${i + 1}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 1024px"
                        className={`object-cover transition-opacity duration-500 ${
                            i === index ? 'opacity-100' : 'opacity-0'
                        }`}
                        priority={i === 0}
                    />
                ))}

                {count > 1 && (
                    <>
                        <button
                            onClick={() => go(index - 1)}
                            aria-label="Capture précédente"
                            className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black/70 transition-colors cursor-pointer"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={() => go(index + 1)}
                            aria-label="Capture suivante"
                            className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black/70 transition-colors cursor-pointer"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-medium bg-black/50 text-white backdrop-blur-sm">
                            {index + 1} / {count}
                        </div>
                    </>
                )}
            </div>

            {count > 1 && (
                <div className="mt-4 flex justify-center gap-2">
                    {images.map((image, i) => (
                        <button
                            key={image}
                            onClick={() => go(i)}
                            aria-label={`Aller à la capture ${i + 1}`}
                            aria-current={i === index}
                            className={`h-2 rounded-full transition-all cursor-pointer ${
                                i === index
                                    ? 'w-6 bg-gray-800 dark:bg-white'
                                    : 'w-2 bg-gray-300 dark:bg-white/30 hover:bg-gray-400 dark:hover:bg-white/50'
                            }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
