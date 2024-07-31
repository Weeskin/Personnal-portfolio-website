import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const phrases = [
	"Développeur passionné ",

	"je chercher les designs les plus créatifs",

	"pour créer les sites de demain."
];

export function MaskText() {
	const animation = {
		initial: { y: "100%" },
		enter: (i: any) => ({
			y: "0",
			transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i }
		})
	};

	const { ref, inView, entry } = useInView({
		threshold: 0.75,
		triggerOnce: true
	});

	return (
		<div
			ref={ref}
			className="text-white text-center text-7xl mb-60  px-12 xl:px-60"
		>
			{phrases.map((phrase, index) => {
				return (
					<div
						key={index}
						className="overflow-hidden"
					>
						<motion.p
							className="m-0 py-2 font-bold"
							custom={index}
							variants={animation}
							initial="initial"
							animate={inView ? "enter" : ""}
						>
							{phrase}
						</motion.p>
					</div>
				);
			})}
		</div>
	);
}
