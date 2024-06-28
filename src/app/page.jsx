"use client";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import ProjectsSection from "./components/ProjectSection";
import ProjectsParallaxSection from "./components/ProjectSectionParallax";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { BackgroundBeams } from "./components/ui/background-beams";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col bg-[#121212]">
			<BackgroundBeams />
			<Cursor />
			<Navbar />
			<div className="w-full align-middle mx-auto justify-items-center">
				<HeroSection />
				<AboutSection />
				<ProjectsSection />
				<ProjectsParallaxSection />
				<EmailSection />
			</div>
			<Footer />
			<SpeedInsights />
		</main>
	);
}
