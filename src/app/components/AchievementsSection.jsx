"use client";
import React from "react";
import dynamic from "next/dynamic";
import AchievementSection from "./AchievementsSection";

const AnimatedNumbers = dynamic(
	() => {
		return import("react-animated-numbers");
	},
	{ ssr: false }
);

const achievementsList = [
	{
		prefix: "+",
		metric: "Projets",
		value: "15"
	},
	{
		prefix: "~",
		metric: "Languages",
		value: "10"
	},
	{
		metric: "Collaborations",
		value: "7",
		postfix: "+"
	},
	{
		metric: "Ans d'expérience",
		value: "2"
	}
];

export default function AchievementsSection() {
	return (
		<div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
			<div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
				{achievementsList.map((achievement, index) => {
					return (
						<div
							key={index}
							className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
						>
							<h2 className="text-white text-4xl font-bold flex flex-row">
								{achievement.prefix}
								<AchievementSection />
								<AnimatedNumbers
									includeComma
									animateToNumber={parseInt(achievement.value)}
									locale="fr-FR"
									className="text-white text-4xl font-bold"
									configs={(_, index) => {
										return {
											mass: 1,
											friction: 100,
											tensions: 140 * (index + 1)
										};
									}}
								/>
								{achievement.postfix}
							</h2>
							<p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}
