import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function ProjectCard({
	imgUrl,
	title,
	description,
	gitUrl,
	previewUrl
}) {
	const openInNewTab = (url) => {
		const newWindow = window.open(url, "_blank", "noopener,noreferrer");
		if (newWindow) {
			newWindow.opener = null;
		}
	};

	return (
		<div>
			<div
				className="h-52 md:h-72 rounded-t-xl relative group"
				style={{
					background: `url(${imgUrl})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat"
				}}
			>
				<div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full rounded-t-lg bg-gradient-to-l from-[#1e65ff] to-[#d037ff] bg-opacity-0 hidden group-active:flex group-active:bg-opacity-50 transition-all duration-500 ">
					<button
						onClick={() => openInNewTab(gitUrl)}
						className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] active:border-white group/link"
					>
						<CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white" />
					</button>
					<button
						onClick={() => openInNewTab(previewUrl)}
						target="_blank"
						className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] active:border-white group/link"
					>
						<EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-active/link:text-white" />
					</button>
				</div>
			</div>
			<div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
				<h5 className="text-xl font-semibold mb-2">{title}</h5>
				<p className="text-[#ADB7BE]">{description}</p>
			</div>
		</div>
	);
}
