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
  title: "Unfiltered Fantasy | Fantasy Football Podcast & Blog",
  description: "Bold takes, hot picks, and unfiltered fantasy football talk from six passionate hosts across the globe. Your weekly dose of fantasy insights, hot takes, and chaos.",
  keywords: ["fantasy football", "fantasy podcast", "NFL", "fantasy analysis", "hot takes", "fantasy advice"],
  authors: [{ name: "Unfiltered Fantasy" }],
  openGraph: {
    title: "Unfiltered Fantasy | Fantasy Football Podcast & Blog",
    description: "Bold takes, hot picks, and unfiltered fantasy football talk from six passionate hosts across the globe.",
    url: "https://unfilteredfantasy.com",
    siteName: "Unfiltered Fantasy",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unfiltered Fantasy",
    description: "Bold takes, hot picks, and unfiltered fantasy football talk from six passionate hosts across the globe.",
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
