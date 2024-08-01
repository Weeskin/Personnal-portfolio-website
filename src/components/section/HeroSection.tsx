"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import ShineBorder from "../magicui/shine-border";
import { motion } from "framer-motion";
import photoProfil from "../../assets/images/photo_de_profil_3.png";
import Cursor from "../../components/Cursor";
import { useState } from "react";

interface HeroSectionProps {
	isHovered: boolean;
}

export default function HeroSection(props: HeroSectionProps) {
	const targetRef = useRef<HTMLDivElement>(null);

	const [isHovered, setHovered] = useState(false);

	return (
		<section
			className="px-12 py-28 md:py-96 xl:px-60"
			ref={targetRef}
		>
			<Cursor isHovered={isHovered} />
			<div className="grid grid-cols-1 md:grid-cols-12">
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
				>
					<div className="col-span-7 place-self-center text-center sm:text-left w-full">
						<div className="h-36 mb-4 sm:h-36 md:h-44 lg:h-64">
							<h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold h-auto lg:h-48">
								<div className="text-transparent bg-clip-text bg-gradient-to-br from-premiere-800 via-intermediaire-500 to-secondaire-500 mb-6">
									Pierre Sourice
									<br />
									{""}
								</div>
								<TypeAnimation
									sequence={[
										"Développeur Web",
										1000,
										"Développeur Frontend",
										1000,
										"Designer",
										1000
									]}
									wrapper="span"
									speed={7}
									style={{
										fontSize: "1.1em",
										display: "inline-block",
										lineHeight: "1.4em",
										marginBottom: "0.5em"
									}}
									repeat={Infinity}
								/>
							</h1>
						</div>

						<p className="text-justify text-[#ADB7BE] text-base sm:text-lg my-20 lg:text-xl">
							{
								"Actuellement à la recherche de nouvelles opportunités, je suis ouvert à des collaborations stimulantes. N'hésitez pas à me contacter pour plus d'informations."
							}
						</p>
						<div className="flex flex-col sm:flex-row items-center md:justify-items-center md:mt-8 gap-6 sm:gap-10">
							<a href="#contact">
								<ShineBorder
									href="/#contact"
									className="w-auto text-center text-2xl font-bold bg-black bg-opacity-100 capitalize transition-all duration-500 ease-in-out cursor-none hover:bg-opacity-50  hover:text-white hover:-translate-y-6 "
								>
									Contactez-moi
								</ShineBorder>
							</a>
							<a
								href="./images/cv_Pierre_Sourice_2024.pdf"
								target="_blank"
								rel="noopener noreferrer"
							>
								<ShineBorder className="w-auto text-center text-2xl bg-black bg-opacity-100 font-bold capitalize transition-all duration-500 ease-in-out cursor-none hover:bg-opacity-50 hover:text-white hover:-translate-y-6">
									Téléchargez CV
								</ShineBorder>
							</a>
						</div>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="col-span-4 place-self-center mt-4 lg:mt-0"
				>
					<div className="col-span-4 place-self-center mt-10 lg:-mt-8">
						<div className="w-60 h-60 sm:w-44 sm:h-44 md:w-50 md:h-50 lg:w-64 lg:h-64 xl:w-80 xl:h-80 relative">
							<Image
								src={photoProfil}
								alt="Photo de profil de Pierre"
								className="absolute hover:-translate-y-6 hover:duration-500 transform transition ease-in-out duration-500"
								loading="lazy"
								layout="fill"
								sizes="(max-width: 640px) 33vw, (max-width: 768px) 100vw, (max-width: 1200px) 50vw"
							/>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
