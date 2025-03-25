import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import ClientLayout from "./ClientLayout";
import Start from "@/components/start/Start";
import Menu from "@/components/system-ui/Menu";
import Dock from "@/components/system-ui/Dock";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sohyeon Jeon",
  description: "Sohyeon's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className="overflow-hidden">
          <ClientLayout>
            <Start />
            <Menu />
            {children}
            <Dock />
          </ClientLayout>
        </body>
    </html>
  );
}
