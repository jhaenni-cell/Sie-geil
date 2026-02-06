import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Brainhance – Digitale Mitarbeiter für Schweizer Treuhandbüros",
  description:
    "KI-gestützte Automatisierungen für Treuhandbüros: Belegverarbeitung, Mandantenkommunikation und Buchhaltungs-Workflows. Weniger Administration, mehr Beratung, maximale Marge.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de-CH">
      <body className={`${geistSans.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
