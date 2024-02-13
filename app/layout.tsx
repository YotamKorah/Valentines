import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Happy Valentine's Day!",
  description: "A simple Valentine's Day card",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" className="bg-red-200 text-red-400">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
