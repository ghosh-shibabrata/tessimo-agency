import type { Metadata, Viewport } from "next";
import { Newsreader, Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TessimoAIWidget } from "@/components/ai/TessimoAIWidget";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FAF9F5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Tessimo — Creative Technology & AI Automation Agency",
    template: "%s | Tessimo Agency",
  },
  description:
    "Tessimo is a premier creative technology and AI automation agency engineering bespoke digital experiences, autonomous AI agents, and workflow integrations for forward-thinking enterprises.",
  metadataBase: new URL("https://tessimo.agency"),
  alternates: {
    canonical: "https://tessimo.agency",
  },
  keywords: [
    "Tessimo",
    "Tessimo Agency",
    "AI automation agency",
    "Creative technology company",
    "Next.js web development",
    "Autonomous AI agents",
    "Workflow automation systems",
    "CRM integrations",
    "Enterprise digital platforms",
    "Voice AI agents",
    "B2B workflow orchestration",
  ],
  authors: [{ name: "Tessimo Agency", url: "https://tessimo.agency" }],
  creator: "Tessimo",
  publisher: "Tessimo Agency Inc.",
  icons: {
    icon: [
      { url: "/favicon.svg?v=3", type: "image/svg+xml" },
      { url: "/favicon.ico?v=3", sizes: "any" },
      { url: "/icon.svg?v=3", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png?v=3", sizes: "180x180" }],
    shortcut: ["/favicon.ico?v=3"],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Tessimo — Creative Technology & AI Automation Agency",
    description:
      "Digital experiences and intelligent systems for a smarter way forward. Less manual. More momentum.",
    url: "https://tessimo.agency",
    siteName: "Tessimo",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tessimo — Creative Technology & AI Automation Agency",
    description:
      "Digital experiences and intelligent systems for a smarter way forward. Less manual. More momentum.",
    creator: "@tessimoagency",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "US-CA, GB, AE, IN",
    "geo.placename": "Global Technology Headquarters",
    "ICBM": "37.7749, -122.4194",
    "DC.title": "Tessimo — Creative Technology & AI Automation Agency",
    "DC.creator": "Tessimo Technology",
    "DC.description": "Bespoke digital experiences and autonomous AI systems.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
    >
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=3" />
        <link rel="alternate icon" href="/favicon.ico?v=3" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=3" />
        <JsonLd />
      </head>
      <body className="min-h-screen bg-[#FAF9F5] text-[#191919] font-sans selection:bg-[#0D9488]/20 selection:text-[#191919] relative flex flex-col">
        <Navbar />
        <div className="flex-1 pt-12">{children}</div>
        <Footer />
        <TessimoAIWidget />
      </body>
    </html>
  );
}
