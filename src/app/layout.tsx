import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TessimoAIWidget } from "@/components/ai/TessimoAIWidget";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
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
  themeColor: "#FBFBFD",
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
    "Creative technology studio",
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
    "geo.placename": "Global Agency Studio",
    "ICBM": "37.7749, -122.4194",
    "DC.title": "Tessimo — Creative Technology & AI Automation Agency",
    "DC.creator": "Tessimo Agency",
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
      className={`${spaceGrotesk.variable} ${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
    >
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=3" />
        <link rel="alternate icon" href="/favicon.ico?v=3" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=3" />
        <JsonLd />
      </head>
      <body className="min-h-screen bg-[#FBFBFD] text-[#1D1D1F] font-sans selection:bg-[#0D9488]/20 selection:text-[#1D1D1F] relative flex flex-col">
        <Navbar />
        <div className="flex-1 pt-12">{children}</div>
        <Footer />
        <TessimoAIWidget />
      </body>
    </html>
  );
}
