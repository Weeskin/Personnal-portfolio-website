'use client';

import { useEffect, useRef, useState } from 'react';

type Animation = 'up' | 'left' | 'right' | 'scale' | 'fade';

interface RevealProps {
    children: React.ReactNode;
    animation?: Animation;
    delay?: number;
    className?: string;
}

const animationClass: Record<Animation, string> = {
    up: 'animate-slide-in-up',
    left: 'animate-slide-in-left',
    right: 'animate-slide-in-right',
    scale: 'animate-scale-in',
    fade: 'animate-fade-in',
};

export function Reveal({ children, animation = 'up', delay = 0, className = '' }: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`${visible ? animationClass[animation] : 'opacity-0'} ${className}`}
            style={visible && delay ? { animationDelay: `${delay}ms` } : undefined}
        >
            {children}
        </div>
    );
}
