"use client";
import React from "react";
import Header from "../../../components/section/Header";
import HeroSection from "../../../components/section/HeroSection";
import AboutSection from "../../../components/section/AboutSection";
import EmailSection from "../../../components/section/EmailSection";
import Footer from "../../../components/section/Footer";
import ProjectsSection from "../../../components/section/ProjectSection";
import ProjectsParallaxSection from "../../../components/ProjectSectionParallax";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { BackgroundBeams } from "../../../components/ui/background-beams";
import { MaskText } from "../../../components/MaskText";

interface HomeProps {
	isHovered: boolean;
}

export default function Home(props: HomeProps) {
	return (
		<main className="flex min-h-screen flex-col bg-[#121212]">
			<div>
				<BackgroundBeams />
				<Header />
			</div>
			<div className="w-full align-middle mx-auto justify-items-center">
				<HeroSection isHovered={props.isHovered} />
				<MaskText />
				<AboutSection />
				<ProjectsSection />
				<ProjectsParallaxSection />
				<EmailSection />
			</div>
			<div>
				<Footer />
				<SpeedInsights />
			</div>
		</main>
	);
}
