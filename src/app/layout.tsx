import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aloha Nails AI Photoshoot Pro",
  description:
    "Generate flawless, high-fashion product photography for Aloha Nails with palette-locked manicures and compliance ready badges.",
  metadataBase: new URL("https://agentic-a869bf6a.vercel.app"),
  openGraph: {
    title: "Aloha Nails AI Photoshoot Pro",
    description:
      "High-fashion nail photography studio that syncs manicures, styling, and compliance in every frame.",
    url: "https://agentic-a869bf6a.vercel.app",
    siteName: "Aloha Nails AI Photoshoot Pro",
    images: [
      {
        url: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 1500,
        alt: "Aloha Nails AI editorial manicure showcase",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aloha Nails AI Photoshoot Pro",
    description:
      "Ultra-realistic manicure visuals with automatic palette matching and compliance.",
    images: [
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=80",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
