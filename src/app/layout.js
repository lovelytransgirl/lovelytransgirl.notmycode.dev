import { Geist, Geist_Mono } from "next/font/google";
import { Mali } from 'next/font/google';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const MaliFont = Mali({
  variable: "--font-mali",
  weight: "500",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfilio (how do you spell it idfk)",
  description: "Hello there! Welcome to my website :3",
  author: "lovelytransgirl"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://cdn.discordapp.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://github-readme-stats-eight-theta.vercel.app"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/assets/background.webp"
          as="image"
          type="image/webp"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${MaliFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
