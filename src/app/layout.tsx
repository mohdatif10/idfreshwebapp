import type { Metadata } from "next";
import { Hanken_Grotesk, Inter, Instrument_Serif, Roboto_Mono } from "next/font/google";
import { gothamRounded, amino } from "@/fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "iD Fresh | 100% Authentic, Fresh Food",
  description:
    "Idly & dosa batter, parottas, filter coffee and more — traditionally prepared with premium ingredients and zero shortcuts. Discover recipes, products, and what's cooking at iD Fresh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${gothamRounded.variable} ${amino.variable} ${instrumentSerif.variable} ${robotoMono.variable} ${hankenGrotesk.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-brand-900">
        <Header />
        <main className="flex-1 pt-20 sm:pt-24">{children}</main>
        <Footer />
        <MobileBottomNav />
      </body>
    </html>
  );
}
