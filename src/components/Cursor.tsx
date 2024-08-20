import { gsap } from "gsap";
import { useEffect, useRef, useCallback } from "react";

export interface CursorProps {
	isHovered: boolean;
}

export default function Cursor({ isHovered }: CursorProps) {
	const size = isHovered ? 300 : 50;
	const mouse = useRef({ x: 0, y: 0 });
	const circle = useRef<HTMLDivElement>(null);

	const delayedMouse = useRef({ x: 0, y: 0 });

	const manageMouseMove = (e: MouseEvent) => {
		const { clientX, clientY } = e;
		mouse.current = { x: clientX, y: clientY };
	};

	const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

	const moveCircle = (x: number, y: number) => {
		gsap.set(circle.current, { x, y, xPercent: -50, yPercent: -50 });
	};

	const animate = useCallback(() => {
		const { x, y } = delayedMouse.current;
		delayedMouse.current = {
			x: lerp(x, mouse.current.x, 0.075),
			y: lerp(y, mouse.current.y, 0.075)
		};
		moveCircle(delayedMouse.current.x, delayedMouse.current.y);
		window.requestAnimationFrame(animate);
	}, []);

	useEffect(() => {
		animate();
		window.addEventListener("mousemove", manageMouseMove);
		return () => window.removeEventListener("mousemove", manageMouseMove);
	}, []);

	return (
		<div
			ref={circle}
			className=" fixed top-0 left-0 bg-blue-900 rounded-full mix-blend-difference pointer-events-none"
			style={{
				width: size,
				height: size,
				filter: "blur(20px)"
			}}
		></div>
	);
}
