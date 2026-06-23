import type { Metadata } from "next";
import { Inter, Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  adjustFontFallback: false,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

// TODO: Kendi domainini bağladıysan burayı onunla değiştir (örn. https://ertugrulbayraktar.com)
const siteUrl = "https://website-ashy-theta-67.vercel.app";

const title = "Ertuğrul Bayraktar — Yazılım Mühendisi";
const description =
  "Dağıtık sistemler ve olay-güdümlü mikroservisler üzerine uzmanlaşmış yazılım mühendisi. Tecrübelerim, projelerim, teknolojiler ve yazılarım.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — Ertuğrul Bayraktar",
  },
  description,
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Ertuğrul Bayraktar",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${newsreader.variable} ${jetbrainsMono.variable}`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
