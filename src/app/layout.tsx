import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Outfit, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-noto",
  display: "swap",
  preload: false,
  adjustFontFallback: false,
});

const siteUrl = "https://eclat-skin.studio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "\u00C9CLAT SKIN STUDIO | \uD504\uB9AC\uBBF8\uC5C4 \uD53C\uBD80\uAD00\uB9AC\uC0F5",
    template: "%s | \u00C9CLAT SKIN STUDIO",
  },
  description:
    "\uACFC\uD558\uC9C0 \uC54A\uC740 \uCF00\uC5B4, \uC808\uC81C\uB41C \uC544\uB984\uB2E4\uC6C0. \uAC15\uB0A8 \uD504\uB9AC\uBBF8\uC5C4 \uD53C\uBD80\uAD00\uB9AC\uC0F5 \u00C9CLAT SKIN STUDIO\uC5D0\uC11C \uB2F9\uC2E0\uB9CC\uC758 \uBE5B\uB098\uB294 \uD53C\uBD80\uACB0\uC744 \uACBD\uD5D8\uD558\uC138\uC694.",
  keywords: [
    "\uC5D0\uB04C\uB77C\uC2A4\uD0A8",
    "\uD504\uB9AC\uBBF8\uC5C4 \uD53C\uBD80\uAD00\uB9AC",
    "\uAC15\uB0A8 \uC5D0\uC2A4\uD14C\uD2F1",
    "\uD53C\uBD80\uAD00\uB9AC\uC0F5",
    "\uB808\uC774\uC800 \uD1A0\uB2DD",
    "\uB9AC\uD504\uD305 \uCF00\uC5B4",
    "\uD53C\uBD80 \uC0C1\uB2F4",
  ],
  authors: [{ name: "\u00C9CLAT SKIN STUDIO" }],
  creator: "\u00C9CLAT SKIN STUDIO",
  icons: {
    icon: [{ url: "/images/favicon.png", type: "image/png", sizes: "512x512" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteUrl,
    siteName: "\u00C9CLAT SKIN STUDIO",
    title: "\u00C9CLAT SKIN STUDIO | \uD504\uB9AC\uBBF8\uC5C4 \uD53C\uBD80\uAD00\uB9AC\uC0F5",
    description:
      "\uB2F9\uC2E0\uB9CC\uC758 \uACB0\uC744 \uC874\uC911\uD558\uB294 \uD504\uB9AC\uBBF8\uC5C4 \uC2A4\uD0A8 \uC2A4\uD29C\uB514\uC624. \uC9C0\uAE08 \uC0C1\uB2F4\uC744 \uC608\uC57D\uD558\uC138\uC694.",
    images: [
      {
        url: "/images/oz.png",
        width: 1358,
        height: 1159,
        alt: "\u00C9CLAT SKIN STUDIO",
      },
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: "\u00C9CLAT SKIN STUDIO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "\u00C9CLAT SKIN STUDIO | \uD504\uB9AC\uBBF8\uC5C4 \uD53C\uBD80\uAD00\uB9AC\uC0F5",
    description:
      "\uB2F9\uC2E0\uB9CC\uC758 \uACB0\uC744 \uC874\uC911\uD558\uB294 \uD504\uB9AC\uBBF8\uC5C4 \uC2A4\uD0A8 \uC2A4\uD29C\uB514\uC624. \uC9C0\uAE08 \uC0C1\uB2F4\uC744 \uC608\uC57D\uD558\uC138\uC694.",
    images: ["/images/oz.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: "#C98F7A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${cormorant.variable} ${outfit.variable} ${notoSansKr.variable}`}
    >
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
