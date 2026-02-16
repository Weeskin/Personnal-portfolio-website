import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pierresourice.fr"),
  title: "Site personnel de Pierre Sourice",
  description:
      "Développeur Frontend, passionné du design et du développement web. Je suis expert en création de sites web, dédié à répondre aux exigences spécifiques de chaque client.",
  icons: {
    icon: "/assets/logo/logo.ico"
  },

  openGraph: {
    title: "Pierre SOURICE - Développeur Frontend",
    description:
        "Développeur Frontend, passionné du design et du développement web. Je suis expert en création de sites web, dédié à répondre aux exigences spécifiques de chaque client.",
    type: "website",
    url: "https://pierresourice.fr",
    images: [
      {
        type: "image/png",
        width: 1740,
        height: 1740,
        url: "/assets/logo/logo.png"
      }
    ],
    siteName: "Pierre SOURICE - Développeur Frontend",
    locale: "fr_FR"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className="font-google-sans">
        {children}
      </body>
    </html>
  );
}
