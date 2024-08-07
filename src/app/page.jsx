"use client";
import Head from "next/head";
import Cursor from "./components/Cursor";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import ProjectsSection from "./components/ProjectSection";
import ProjectsParallaxSection from "./components/ProjectSectionParallax";
import { PageProvider } from "./components/context/pageContext";
import { Header } from "./components/header";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { BackgroundBeams } from "./components/ui/background-beams";

export default function Home() {
	return (
		<PageProvider>
			<main className="flex min-h-screen flex-col">
				<Head>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="../assets/favicon/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="../assets/favicon/favicon-16x16.png"
					/>
				</Head>
				<div className=" w-auto ">
					<BackgroundBeams />
					<Cursor />
					<Header />
					<div className="align-middle mx-auto justify-items-center">
						<HeroSection />
						<AboutSection />
						<ProjectsSection />
						<ProjectsParallaxSection />
						<EmailSection />
					</div>
					<Footer />
					<SpeedInsights />
				</div>
			</main>
		</PageProvider>
	);
}
