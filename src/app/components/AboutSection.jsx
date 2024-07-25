"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import AboutImage from "../../../public/images/about-image.webp";

const TAB_DATA = [
	{
		title: "Skills",
		id: "skills",
		content: (
			<ul className="list-disc pl-2">
				<li>Node.js</li>
				<li>React</li>
				<li>Nexts.js</li>
				<li>TailwindCSS</li>
				<li>JavaScript</li>
				<li>Typecript</li>
			</ul>
		)
	},
	{
		title: "Formation",
		id: "formation",
		content: (
			<ul className="list-disc pl-2">
				<li>Intégrateur Web - Openclassrooms</li>
				<li>Webdesign - ISCOD</li>
				<li>École de commerce - École 3A</li>
			</ul>
		)
	},
	{
		title: "Certifications",
		id: "certifications",
		content: (
			<ul className="list-disc pl-2">
				<li>Intégrateur Web</li>
				<li>Initiez-vous à la gestion de projet agile</li>
				<li>Comprendre le web</li>
				<li>Référencement SEO</li>
				<li>Animation moderne avec CSS</li>
			</ul>
		)
	},
	{
		title: "Expériences",
		id: "experiences",
		content: (
			<ul className="list-disc pl-2">
				<li>Webdesigner - 1 an - QRU Entreprise</li>
				<li>Support Informatique - 4 ans - Experis France</li>
				<li>Agent d&apos;accueil - 2 ans - Cinéma le 6Rex </li>
				<li>Guide accompagnateur tourisme - 2 ans - Caves de la Chartreuse </li>
			</ul>
		)
	}
];
export default function AboutSection() {
	const [tab, setTab] = useState("skills");
	const [isPending, startTransition] = useTransition();

	const handleTabChange = (id) => {
		startTransition(() => {
			setTab(id);
		});
	};
	return (
		<section className="text-white xl:px-60">
			<h2
				className="text-7xl text-center font-bold capitalize antialiased mb-16"
				id="about"
			>
				Mes skills
			</h2>
			<div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
				<Image
					src={AboutImage}
					width={500}
					height={500}
					alt="Logo ordinateur"
					className="rounded-full hover:-translate-y-6 hover:duration-500 transform transition ease-in-out duration-500 hover:shadow-2xl"
					priority
				/>
				<div className="m-6 md:m-0 text-left flex flex-col h-full">
					<p className="text-base lg:text-lg text-justify">
						{
							"Je suis un développeur web passionné par la création d'applications web interactives et réactives. J'ai de l'expérience dans le travail avec JavaScript, React, Redux, Node.js, TailwindCSS, Typecript, HTML, CSS et Git. J'apprends rapidement et je cherche toujours à élargir mes connaissances et mes compétences."
						}
					</p>
					<div className="flex flex-row justify-start mt-8">
						<TabButton
							selectTab={() => handleTabChange("skills")}
							active={tab === "skills"}
						>
							Skills
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange("formation")}
							active={tab === "formation"}
						>
							Formation
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange("certifications")}
							active={tab === "certifications"}
						>
							Certifications
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange("experiences")}
							active={tab === "experiences"}
						>
							Expériences
						</TabButton>
					</div>
					<div className="mt-8">
						{TAB_DATA.find((t) => t.id === tab).content}
					</div>
				</div>
			</div>
		</section>
	);
}
