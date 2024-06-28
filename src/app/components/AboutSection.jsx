"use client";
import TextReveal from "./magicui/text-reveal";

export default function AboutSection() {
	return (
		<section
			className="text-white xl:px-60"
			id="about"
		>
			<div className="flex min-h-10 md:min-h-[16rem] items-center justify-center rounded-lg">
				<TextReveal text="Transformez vos idées en expériences numériques époustouflantes." />
			</div>
		</section>
	);
}
