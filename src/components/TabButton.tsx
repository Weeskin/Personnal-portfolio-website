import React from "react";

interface TabButtonProps {
	active: boolean;
	selectTab: () => void;
	children: React.ReactNode;
}

const variants = {
	default: { width: 0 },
	active: { width: "calc(100% - 0.75rem)" }
};

export default function TabButton({
	active,
	selectTab,
	children
}: TabButtonProps) {
	const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

	return (
		<button onClick={selectTab}>
			<p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
				{children}
			</p>
		</button>
	);
}
