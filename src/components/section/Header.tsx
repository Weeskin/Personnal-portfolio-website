import { useRef, ReactElement } from "react";
import { MainLogo } from "../ui/icons";
import { MenuButton } from "../ui/menu-button";
import gsap from "gsap";

export default function Header(): ReactElement {
	const logoRef = useRef<HTMLDivElement>(null);

	const onLogoEnter = (): void => {
		const currColor = logoRef.current?.getAttribute("data-color");
		const logoSvg = logoRef.current?.firstChild?.firstChild as SVGElement;

		const nextColor =
			currColor === "#a6e2e3"
				? "#8566f6"
				: currColor === "#8566f6"
				? "#ed7c50"
				: "#a6e2e3";

		logoRef.current?.setAttribute("data-color", nextColor);
		gsap.to(logoSvg, { fill: currColor!, duration: 0.2, ease: "power1.out" });
	};

	const onLogoLeave = (): void => {
		const logoSvg = logoRef.current?.firstChild?.firstChild as SVGElement;

		gsap.to(logoSvg, {
			fill: "#fff",
			duration: 0.2,
			ease: "power1.out"
		});
	};

	return (
		<div className="header min-w-screen fixed left-0 top-0 z-10 w-screen px-7 transition-all duration-500 ease-out mt-3">
			<div className="overflow-hidden bg-none">
				<div className="header_container flex items-center justify-between transition-all duration-500 ease-out will-change-transform lg:py-8">
					<MenuButton>Menu</MenuButton>
					<div
						className="header_logo pointer-event-auto cursor-pointer leading-none transition-height [&>svg]:h-10 [&>svg]:duration-500 [&>svg]:ease-out lg:[&>svg]:h-16"
						data-color="#a6e2e3"
						ref={logoRef}
						onMouseEnter={onLogoEnter}
						onMouseLeave={onLogoLeave}
					>
						<MainLogo />
					</div>
					<MenuButton>
						<a href="#contact">Contact</a>
					</MenuButton>
				</div>
			</div>
		</div>
	);
}
