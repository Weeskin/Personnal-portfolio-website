import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-poppins",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata = {
	title: "Site personnel de Pierre Sourice",
	description:
		"Développeur Frontend, passionné du design et du développement web. Je suis expert en création de sites web, dédié à répondre aux exigences spécifiques de chaque client.",
	openGraph: {
		title: " Pierre SOURICE - Développeur Frontend",
		description:
			"Développeur Frontend, passionné du design et du développement web. Je suis expert en création de sites web, dédié à répondre aux exigences spécifiques de chaque client.",
		type: "website",
		url: "https://https://pierresourice.fr",
		images: [
			{
				type: "image/jpeg",
				width: 1200,
				height: 630,
				url: "https://res.cloudinary.com/duqrhths8/image/upload/v1721987131/Logo_hq2fas.ico"
			}
		],
		site_name: "Pierre SOURICE - Développeur Frontend",
		locale: "fr_FR"
	},
	icons: [
		{
			rel: "apple-touch-icon",
			sizes: "180x180",
			url: "/apple-touch-icon.png"
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "32x32",
			url: "/favicon-32x32.png"
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "16x16",
			url: "/favicon-16x16.png"
		}
	],
	manifest: "/site.webmanifest",
	maskIcon: {
		url: "/safari-pinned-tab.svg",
		color: "#645bd5"
	},
	msapplicationTileColor: "#da532c",
	themeColor: "#ffffff"
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="fr">
			<body className={poppins.className}>{children}</body>
		</html>
	);
}
