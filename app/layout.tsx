import type { Metadata } from "next";
import { Manrope, Inter, JetBrains_Mono } from "next/font/google";
import { siteConfig } from "@/content/site.config";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { MobileStickyCta } from "@/components/layout/MobileStickyCta";
import { CookieNotice } from "@/components/layout/CookieNotice";
import { IntroLoader } from "@/components/layout/IntroLoader";
import { SitewideJsonLd } from "@/components/seo/SitewideJsonLd";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.company.brandName} — AI Video Intelligence Platform for Existing CCTV`,
    template: `%s | ${siteConfig.company.brandName}`,
  },
  description: siteConfig.company.description,
  keywords: [
    "AI video analytics",
    "video surveillance analytics",
    "CCTV AI intelligence",
    "real-time detection",
    "restricted zone intrusion detection",
    "ANPR vehicle intelligence",
    "Kolkata video intelligence",
    "India AI surveillance",
  ],
  authors: [{ name: siteConfig.company.legalName }],
  creator: siteConfig.company.legalName,
  publisher: siteConfig.company.legalName,
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.siteUrl,
    siteName: siteConfig.company.brandName,
    title: `${siteConfig.company.brandName} — AI-Powered Video Intelligence Platform`,
    description: siteConfig.company.description,
    images: [
      {
        url: "/images/resurgenix-video-poster.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.company.brandName} Video Intelligence Platform`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.company.brandName} — AI-Powered Video Intelligence Platform`,
    description: siteConfig.company.description,
    images: ["/images/resurgenix-video-poster.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${manrope.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-charcoal font-sans selection:bg-[#2563EB] selection:text-white">
        {/* Sitewide Organization and WebSite Schema */}
        <SitewideJsonLd />

        {/* Privacy-Respecting, Consent-Aware Google Analytics */}
        <GoogleAnalytics />

        {/* Accessible Skip-to-Content Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#2563EB] focus:text-white focus:rounded-[10px] focus:shadow-md focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 text-sm font-semibold"
        >
          Skip to main content
        </a>

        {/* First-load Interactive Introduction Sequence */}
        <IntroLoader />

        {/* Global Sticky Header */}
        <Header />

        {/* Main Content Landmark */}
        <main id="main-content" className="flex-1 flex flex-col focus:outline-none" tabIndex={-1}>
          {children}
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Global Floating WhatsApp Direct Messaging Trigger */}
        <WhatsAppButton />

        {/* Mobile Sticky Conversion Action Bar */}
        <MobileStickyCta />

        {/* Privacy & Performance Consent Notice */}
        <CookieNotice />
      </body>
    </html>
  );
}
