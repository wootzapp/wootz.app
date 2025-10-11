import type { Metadata } from "next";
import { Playfair_Display, Geist_Mono } from "next/font/google";
import "./globals.css";
import AnalyticsProvider from "@/components/analytics-provider";
import { GoogleTagManager, GoogleTagManagerNoscript } from "@/components/google-tag-manager";
// import { GoogleAnalytics } from "@/components/google-analytics"; // Disabled - using GTM instead

const playfair = Playfair_Display({
  variable: "--font-playfair",
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wootzapp Mobile Enterprise Browser",
  description: "Our battery optimised AI Agents, secure deskless & BYOD workforce",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleTagManagerNoscript />
        <GoogleTagManager />
        {/* <GoogleAnalytics /> */} {/* Disabled - using GTM instead to avoid duplicate tracking */}
        <AnalyticsProvider>
          {children}
        </AnalyticsProvider>
      </body>
    </html>
  );
}
