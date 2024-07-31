import React, { createContext, useContext, useState, ReactNode } from "react";

// Définir les types pour le contexte
interface HoverContextType {
	isHovered: boolean;
	handleMouseEnter: () => void;
	handleMouseLeave: () => void;
}

const HoverContext = createContext<HoverContextType>({
	isHovered: false,
	handleMouseEnter: () => {},
	handleMouseLeave: () => {}
});

export const useHover = () => useContext(HoverContext);

export interface HoverProviderProps {
	children: ReactNode;
}

const HoverProvider: React.FC<HoverProviderProps> = ({ children }) => {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => setIsHovered(true);
	const handleMouseLeave = () => setIsHovered(false);

	return (
		<HoverContext.Provider
			value={{ isHovered, handleMouseEnter, handleMouseLeave }}
		>
			{children}
		</HoverContext.Provider>
	);
};

export default HoverProvider;
