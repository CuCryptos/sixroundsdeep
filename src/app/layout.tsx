import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Six Rounds Deep | Fantasy Football, Sports & Lifestyle",
  description: "Bold takes, hot picks, and unfiltered sports talk from six passionate hosts across America. Your weekly dose of fantasy football insights, sports analysis, and lifestyle content.",
  keywords: ["fantasy football", "sports podcast", "NFL", "sports analysis", "lifestyle", "sports betting"],
  authors: [{ name: "Six Rounds Deep" }],
  openGraph: {
    title: "Six Rounds Deep | Fantasy Football, Sports & Lifestyle",
    description: "Bold takes, hot picks, and unfiltered sports talk from six passionate hosts across America.",
    url: "https://sixroundsdeep.com",
    siteName: "Six Rounds Deep",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Six Rounds Deep",
    description: "Bold takes, hot picks, and unfiltered sports talk from six passionate hosts across America.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
