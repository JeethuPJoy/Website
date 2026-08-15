import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LayoutRecalc from "@/components/LayoutRecalc";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "@/components/Header/Header.css";
import "@/components/Footer/Footer.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "NeuroLXP",
  description: "One Platform. Endless Learning. Limitless Growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <LayoutRecalc />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}