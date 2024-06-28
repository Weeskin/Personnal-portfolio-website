import { gsap } from "gsap";
import React, { useEffect } from "react";

export default function Cursor() {
	useEffect(() => {
		const cursor = document.querySelector(".custom-cursor");
		const links = document.querySelectorAll("a");
		const cursorText = document.querySelector(".cursor-text");

		const onMouseMove = (e) => {
			const { clientX, clientY } = e;
			gsap.to(cursor, {
				x: clientX,
				y: clientY,
				stagger: -0.1
			});
		};

		const onMouseEnterLink = (e) => {
			const link = e.target;
			if (link.classList.contains("view")) {
				gsap.to(cursor, { scale: 4 });
				cursorText.style.display = "block";
			} else {
				gsap.to(cursor, { scale: 4 });
			}
		};

		const onMouseLeaveLink = (e) => {
			gsap.to(cursor, { scale: 1 });
			cursorText.style.display = "none";
		};

		document.addEventListener("mousemove", onMouseMove);
		links.forEach((link) => {
			link.addEventListener("mouseenter", onMouseEnterLink);
			link.addEventListener("mouseleave", onMouseLeaveLink);
		});
	});
	return (
		<div
			id="custom-cursor"
			className="custom-cursor"
		>
			<div className="cursor-text"></div>
		</div>
	);
}
