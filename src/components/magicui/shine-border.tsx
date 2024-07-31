"use client";
import React from "react";
import ReactDOM from "react-dom";

import { cn } from "../../utils/utils";

type TColorProp = `#${string}` | `#${string}`[];
interface ShineBorderProps {
	borderRadius?: number;
	borderWidth?: number;
	duration?: number;
	color?: TColorProp;
	className?: string;
	children: React.ReactNode;
	href?: string;
}

/**
 * @name Shine Border
 * @description It is an animated background border effect component with easy to use and configurable props.
 * @param borderRadius defines the radius of the border.
 * @param borderWidth defines the width of the border.
 * @param duration defines the animation duration to be applied on the shining border
 * @param color a string or string array to define border color.
 * @param className defines the class name to be applied to the component
 * @param children contains react node elements.
 */
export default function ShineBorder({
	borderRadius = 50,
	borderWidth = 3,
	duration = 14,
	color = "#192bc2",
	className,
	children
}: ShineBorderProps) {
	return (
		<div
			style={
				{
					"--border-radius": `${borderRadius}px`
				} as React.CSSProperties
			}
			className={cn(
				"relative grid place-items-center rounded-[--border-radius] bg-white py-3 px-6 inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-violet-500 to-fuchsia-600",
				className
			)}
		>
			<div
				style={
					{
						"--border-width": `${borderWidth}px`,
						"--border-radius": `${borderRadius}px`,
						"--border-radius-child": `${borderRadius * 0.2}px`,
						"--shine-pulse-duration": `${duration}s`,
						"--mask-linear-gradient": `linear-gradient(#b200ED 0 0) content-box, linear-gradient(#b200ED 0 0)`,
						"--background-radial-gradient": `radial-gradient(transparent,transparent, ${
							!(color instanceof Array) ? color : color.join(",")
						},transparent,transparent)`
					} as React.CSSProperties
				}
				className={`before:bg-shine-size before:absolute before:inset-[0] before:aspect-square before:h-full before:w-full before:rounded-[--border-radius] before:p-[--border-width] before:will-change-[background-position] before:content-[""] before:![-webkit-mask-composite:xor] before:![mask-composite:exclude] before:[background-image:var(--background-radial-gradient)] before:[background-size:300%_300%] before:[mask:var(--mask-linear-gradient)] motion-safe:before:animate-[shine-pulse_var(--shine-pulse-duration)_infinite_linear]`}
			></div>
			<div className={"z-[1] h-full w-full rounded-[--border-radius-child]"}>
				<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-violet-500 to-fuchsia-600">
					{children}
				</span>
			</div>
		</div>
	);
}
