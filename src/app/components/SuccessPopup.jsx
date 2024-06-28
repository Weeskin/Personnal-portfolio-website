import { useEffect } from "react";

export default function SuccessPopup({ show, onClose }) {
	useEffect(() => {
		if (show) {
			const timer = setTimeout(() => {
				onClose();
			}, 3000); // Masquer le popup après 3 secondes
			return () => clearTimeout(timer);
		}
	}, [show, onClose]);

	return (
		<div
			className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
				show ? "opacity-100" : "opacity-0 pointer-events-none"
			} transition-opacity duration-300`}
		>
			<div className="bg-green-500 text-white p-4 rounded shadow-lg">
				Formulaire bien envoyé!
			</div>
		</div>
	);
}
