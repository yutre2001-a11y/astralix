import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AstralixMC — Servidor de Minecraft Semi-Anárquico",
    template: "%s | AstralixMC",
  },
  description:
    "AstralixMC: servidor de Minecraft Semi-Anárquico con temática del End. Reglas mínimas, lore vivo, rangos y comunidad activa. Conéctate a astralis.mcsh.io.",
  keywords: [
    "minecraft",
    "servidor minecraft",
    "astralixmc",
    "semi-anarquico",
    "supervivencia",
    "lore",
    "server español",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "AstralixMC — Servidor de Minecraft Semi-Anárquico",
    description:
      "Servidor de Minecraft Semi-Anárquico con temática del End. Reglas mínimas, lore vivo, rangos y comunidad activa. Conéctate a astralis.mcsh.io.",
    url: "/",
    siteName: "AstralixMC",
    locale: "es_ES",
    type: "website",
    images: [
      { url: "/ambiente.jpg", width: 1472, height: 828, alt: "Ambientación de AstralixMC" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AstralixMC — Servidor de Minecraft Semi-Anárquico",
    description:
      "Servidor de Minecraft Semi-Anárquico con temática del End. Reglas mínimas, lore vivo, rangos y comunidad activa.",
    images: ["/ambiente.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
