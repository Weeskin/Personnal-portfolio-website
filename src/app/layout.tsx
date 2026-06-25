import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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

const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-google-sans">
        <Header />
        <div className="pt-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
