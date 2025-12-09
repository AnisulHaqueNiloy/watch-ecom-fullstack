import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
// <CHANGE> Added Playfair Display for elegant watch store branding
const _playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "TimeKeeper - Premium Watch Store",
  description:
    "Discover premium watches with elegant design and timeless craftsmanship",
  generator: "Next Js app",
  icons: {
    icon: [
      {
        url: "/icon.svg.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon.svg.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/icon.svg.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${_playfair.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
