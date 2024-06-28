"use client";
import TextReveal from "./magicui/text-reveal";
import IconCloud from "./magicui/icon-cloud";

const slugs = [
	"typescript",
	"javascript",
	"java",
	"react",
	"html5",
	"css3",
	"express",
	"nextdotjs",
	"postgresql",
	"firebase",
	"vercel",
	"mongodb",
	"docker",
	"git",
	"github",
	"gitlab",
	"visualstudiocode",
	"figma"
];

export default function AboutSection() {
	return (
		<section
			className="text-white xl:px-60"
			id="about"
		>
			<div className="flex min-h-10 md:min-h-[16rem] items-center justify-center">
				<TextReveal text="Transformez vos idées en expériences numériques époustouflantes." />
			</div>
			<h2 className="text-7xl text-center font-bold capitalize antialiased mb-16">
				Mes skills
			</h2>
			<div className="relative flex h-full w-full items-center justify-center mx-auto overflow-hidden rounded-lg bg-[#18191E] px-16 mb-20">
				<IconCloud iconSlugs={slugs} />
			</div>
		</section>
	);
}
