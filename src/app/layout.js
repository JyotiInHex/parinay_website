// src/app/layout.js
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import ClientWrapper from "@/components/global/ClientWrapper"; // Create this

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const trap = localFont({
  src: [
    { path: "/fonts/trap/Trap-Light.woff", weight: "300", style: "normal" },
    { path: "/fonts/trap/Trap-Regular.woff", weight: "400", style: "normal" },
    { path: "/fonts/trap/Trap-Medium.woff", weight: "500", style: "normal" },
    { path: "/fonts/trap/Trap-SemiBold.woff", weight: "600", style: "normal" },
    { path: "/fonts/trap/Trap-ExtraBold.woff", weight: "800", style: "normal" },
    { path: "/fonts/trap/Trap-Black.woff", weight: "900", style: "normal" },
  ],
  variable: "--font-trap",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Parinay",
    template: "%s • Parinay",
  },
  description: "A beautifully crafted dating and matrimonial website built with ❤️ for Assam.",
  keywords: ["Parinay", "Matrimony", "Wedding", "Love", "Connection"],
  authors: [{ name: "CEO & Founder - Gayatri Duwarah, Co-Founder - ParagJyoti Das" }],
  creator: "CEO & Founder - Gayatri Duwarah, Co-Founder - ParagJyoti Das",
  openGraph: {
    title: "Parinay - Built For Love, Designed For Tradition.",
    description: "Join Parinay and start your story of togetherness.",
    url: "https://parinay.com",
    siteName: "Parinay",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parinay - Built For Love, Designed For Tradition.",
    description: "Discover a place where hearts meet – Parinay.",
    creator: "@parinay_app",
  },
  metadataBase: new URL("https://parinay.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${trap.variable} antialiased`}>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
