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
    default: "OrbitSafe — Интернет-свобода для России",
    template: "%s | OrbitSafe",
  },
  description:
    "OrbitSafe — приватный доступ в интернет через Telegram-бота. Работает в России. 3 дня бесплатно. Шифрование трафика, анонимность, без логов.",
  keywords: ["Россия", "Telegram", "бот", "приватность", "зашифрованный доступ", "свобода в интернете", "безопасность", "шифрование", "OrbitSafe"],
  authors: [{ name: "OrbitSafe" }],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "OrbitSafe",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OrbitSafe — Интернет-свобода для России",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OrbitSafe — Интернет-свобода для России",
    description: "Приватный доступ через Telegram-бота. Работает в России. 3 дня бесплатно.",
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
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
