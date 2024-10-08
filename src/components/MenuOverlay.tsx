import React from "react";
import NavLink from "./NavLink";

interface Link {
	path: string;
	title: string;
}

interface MenuOverlayProps {
	links: Link[];
}

export default function MenuOverlay({ links }: MenuOverlayProps) {
	return (
		<ul className="flex flex-col py-4 items-center text-white">
			{links.map((link, index) => (
				<li key={index}>
					<NavLink
						href={link.path}
						title={link.title}
					/>
				</li>
			))}
		</ul>
	);
}
