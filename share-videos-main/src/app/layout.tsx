import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Head from "next/head";
const inter = Quicksand({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
