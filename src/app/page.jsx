"use client";
import Head from "next/head";
import Cursor from "../components/Cursor";
import Header from "../components/section/Header";
import HeroSection from "../components/section/HeroSection";
import AboutSection from "../components/section/AboutSection";
import ProjectsSection from "../components/section/ProjectSection";
import EmailSection from "../components/section/EmailSection";
import Footer from "../components/section/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col bg-black">
			<Head>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/assets/favicon/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/assets/favicon/favicon-16x16.png"
				/>
			</Head>
			<div className="w-auto">
				<BackgroundBeams />
				<Cursor isHovered />
				<Header />
				<div className="align-middle mx-auto justify-items-center">
					<HeroSection isHovered />
					<AboutSection />
					<ProjectsSection />
					<EmailSection />
				</div>
				<Footer />
				<SpeedInsights />
			</div>
		</main>
	);
}