import Logo from "../../assets/images/android-chrome-512x512.webp";
import Image from "next/image";

export default function Footer() {
	return (
		<footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
			<div className="container p-12 flex justify-between items-center">
				<Image
					src={Logo}
					alt="Logo du site"
					width={50}
				></Image>
				<p className="text-slate-600">Copyright &copy; Pierre Sourice - 2024</p>
			</div>
		</footer>
	);
}
