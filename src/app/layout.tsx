import "./globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";

import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.className}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          <Header />
          <main
            className="
            min-h-screen flex-1
            overflow-y-auto overflow-x-hidden
            py-24 px-8 
            bg-secondary/20
            flex flex-col
          "
          >
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
