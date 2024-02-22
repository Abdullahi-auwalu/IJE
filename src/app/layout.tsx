import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Download from "@/components/Download";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Banner />
        <About />
        <HowItWorks />
        <Download />
        {children}
      </body>
    </html>
  );
}
