import type { Metadata } from "next";
import { Google_Sans } from "next/font/google";
import "./globals.css";

const googleSans = Google_Sans({
  variable: "--font-google-sans",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Site personnel de Pierre Sourice",
  description:
      "Développeur Frontend, passionné du design et du développement web. Je suis expert en création de sites web, dédié à répondre aux exigences spécifiques de chaque client.",

  openGraph: {
    title: "Pierre SOURICE - Développeur Frontend",
    description:
        "Développeur Frontend, passionné du design et du développement web. Je suis expert en création de sites web, dédié à répondre aux exigences spécifiques de chaque client.",
    type: "website",
    url: "https://pierresourice.fr",
    images: [
      {
        type: "image/jpeg",
        width: 1200,
        height: 630,
        url: "https://res.cloudinary.com/duqrhths8/image/upload/v1721987131/Logo_hq2fas.ico"
      }
    ],
    siteName: "Pierre SOURICE - Développeur Frontend",
    locale: "fr_FR"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${googleSans.variable} font-google`}>
        {children}
      </body>
    </html>
  );
}
