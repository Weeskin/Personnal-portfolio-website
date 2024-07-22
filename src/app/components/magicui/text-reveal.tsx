"use client";

import { cn } from "../../utils/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { FC, ReactNode, useRef } from "react";

interface TextRevealByWordProps {
	text: string;
	className?: string;
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
	text,
	className
}) => {
	const targetRef = useRef<HTMLDivElement | null>(null);

	const { scrollYProgress } = useScroll({
		target: targetRef
	});
	const words = text.split(" ");

	return (
		<div
			ref={targetRef}
			className={cn("relative z-0 h-[200vh] -my-40", className)}
		>
			<div
				className={
					"sticky top-0 flex h-[50%] max-w-8xl items-center bg-transparent px-[1rem]"
				}
			>
				<p
					ref={targetRef}
					className={
						"flex flex-wrap text-3xl font-bold text-black/20  sm:text-5xl md:text-7xl lg:text-6xl xl:text-6xl"
					}
				>
					{words.map((word, i) => {
						const start = i / words.length;
						const end = start + 1 / words.length;
						return (
							<Word
								key={i}
								progress={scrollYProgress}
								range={[start, end]}
							>
								{word}
							</Word>
						);
					})}
				</p>
			</div>
		</div>
	);
};

interface WordProps {
	children: ReactNode;
	progress: any;
	range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
	const opacity = useTransform(progress, range, [0, 1]);
	return (
		<span className="xl:lg-3 relative mx-1 lg:mx-2.5">
			<span className={"absolute opacity-30"}>{children}</span>
			<motion.span
				style={{ opacity: opacity }}
				className={"text-white"}
			>
				{children}
			</motion.span>
		</span>
	);
};

export default TextRevealByWord;
