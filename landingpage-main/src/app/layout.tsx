import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from "next/head";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Personalised AI Avatar Videos for Outreach | PurePitch AI",
 description: "Personalised AI Avatar Videos for Cold Outreach on LinkedIn with Generative AI for sales to book more sales meetings and engage your leads.",
 metadataBase: new URL('https://purepitchai.com'),
 robots: {
  index: true,
  follow: true,
},
 keywords: [
  "cold outreach on linkedin", "linkedin cold outreach", "ai avatar generator", "ai avatar", "ai video avatar", "ai avatar video generator", "outreach sales", "cold outreach sales tool", "sales outreach strategy", "outreach sales tool", "outreach sales engagement platform", "how to automate cold outreach sales", "automate outreach on linkedin", "sales on linkedin", "purepitchai", "purepitch ai", "personalised cold outreach", "linkedin", "personalised ai avatar", "personalised videos",
  "sales", "cold outreach", "automate sales", "sales videos", "ai sales", "sales ai", "linkedin ai", "cold outreach ai", "cold email outreach", "linkedin cold outreach", "linkedin sales navigator", "sales navigator linkedin", "what is linkedin sales navigator", "linkedin outreach automation", "automated linkedin outreach"

],
 twitter: {
  title: "PurePitch AI",
  description: "Personalised AI Avatar Videos for Cold Outreach on LinkedIn with Generative AI for sales to book more sales meetings and engage your leads.",
  card: "summary_large_image"
},
 openGraph: {
   title: "Personalised AI Avatar Videos for Outreach | PurePitch AI",
   description: "Personalised AI Avatar Videos for Cold Outreach on LinkedIn with Generative AI for sales to book more sales meetings and engage your leads.",
   url: "https://purepitchai.com",
   siteName: "PurePitch AI",
   type: "website",
   images: [
     {
       url: "https://purepitchai.com/landing.png",
       width: 1200,
       height: 630,
       alt: "PurePitch AI",
     },
   ],
 },
};

const jsonLd = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  "name": "PurePitch AI",
  "url": "https://purepitchai.com",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <Script
    id="my-script1"
      src="https://cdn-cookieyes.com/client_data/e51df2d8a3004f39eaa36f65/script.js"
      strategy="lazyOnload"
       />
          <Script
          id="my-script2"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
       />
      <html lang="en">
        <body className={inter.className}>{children}
        <Analytics />
        <SpeedInsights /></body>
      </html></>
  );
}
