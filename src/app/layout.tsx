import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/contexts/LanguageContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://safeorbitvpn.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "OrbitSafe VPN — Secure & Private Internet for Android",
    template: "%s | OrbitSafe VPN",
  },
  description:
    "OrbitSafe VPN provides a secure, private internet connection for your Android device. Encrypt your traffic, hide your IP, and browse without being tracked. Now in closed testing on Google Play.",
  keywords: ["VPN", "Android", "Google Play", "privacy", "security", "encryption", "OrbitSafe"],
  authors: [{ name: "OrbitSafe VPN" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "OrbitSafe VPN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OrbitSafe VPN — Secure & Private Internet for Android",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OrbitSafe VPN — Secure & Private Internet for Android",
    description: "Encrypt your connection, hide your location, browse without being tracked. Now in closed testing on Google Play.",
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
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
