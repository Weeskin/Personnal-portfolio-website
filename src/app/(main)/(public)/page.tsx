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

export default function Home() {
	const [isHovered, setHovered] = React.useState(false);

	return (
		<main className="flex min-h-screen flex-col bg-[#121212]">
			<Header />
			<BackgroundBeams />
			<HeroSection isHovered={isHovered} />
			<MaskText />
			<AboutSection />
			<ProjectsSection />
			<ProjectsParallaxSection />
			<EmailSection />
			<Footer />
			<SpeedInsights />
		</main>
	);
}
