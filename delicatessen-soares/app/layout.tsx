import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://delicatensse-soares.vercel.app"),
  title: {
    default: "Delicatensse Soares — Sabor, qualidade e aconchego",
    template: "%s | Delicatensse Soares",
  },
  description:
    "Na Delicatensse Soares você encontra pães artesanais, frios selecionados, sanduíches e doces caseiros em um ambiente acolhedor. Reserve sua mesa pelo WhatsApp.",
  keywords: [
    "delicatessen",
    "padaria artesanal",
    "frios e queijos",
    "restaurante Caetés",
    "Delicatensse Soares",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Delicatensse Soares — Sabor, qualidade e aconchego",
    description:
      "Pães artesanais, tábuas de frios, sanduíches e doces caseiros em um ambiente acolhedor. Venha viver essa experiência.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
