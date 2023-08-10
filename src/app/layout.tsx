import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MainNavigation from "./components/utility/MainNavigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Productivia",
  description: "Open source Productivity app built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainNavigation />
        {children}
      </body>
    </html>
  );
}
