import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const title = "Xinyi Chen — Human-AI Interaction Researcher";
const description = "Research in human-AI collaboration, Human-Centered NLP, multi-agent systems, and creativity support.";

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: [
      { url: "/paw-favicon.png?v=2", type: "image/png", sizes: "32x32" },
      { url: "/paw.png?v=2", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/paw-favicon.png?v=2",
    apple: [
      { url: "/apple-touch-icon.png?v=2", type: "image/png", sizes: "180x180" },
    ],
  },
  openGraph: {
    title,
    description,
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
