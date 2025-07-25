import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { LenisWrapper } from "@/components/LenisWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Ahana Studios",
  description: "Frontier AI venture studio",
  icons: {
    icon: '/logo_only.png',
    shortcut: '/logo_only.png',
    apple: '/logo_only.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <LenisWrapper>
          <Navbar />
          {children}
        </LenisWrapper>
      </body>
    </html>
  );
}
