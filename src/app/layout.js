import "./globals.css";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import ClientWrapper from "@/global/ClientWrapper";
import ToastProvider from "@/context/ToastContext";
import PopupProvider from "@/context/PopUpContext";


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const porinoi_sans = localFont({
  src: [
    { path: "./fonts/porinoi_sans/Porinoi-Sans-Light.woff", weight: "300", style: "normal" },
    { path: "./fonts/porinoi_sans/Porinoi-Sans-Regular.woff", weight: "400", style: "normal" },
    { path: "./fonts/porinoi_sans/Porinoi-Sans-Medium.woff", weight: "500", style: "normal" },
    { path: "./fonts/porinoi_sans/Porinoi-Sans-SemiBold.woff", weight: "600", style: "normal" },
    { path: "./fonts/porinoi_sans/Porinoi-Sans-ExtraBold.woff", weight: "800", style: "normal" },
    { path: "./fonts/porinoi_sans/Porinoi-Sans-Black.woff", weight: "900", style: "normal" },
  ],
  variable: "--font-porinoi-sans",
  display: "swap",
});

const porinoi_display = localFont({
  src: [
    { path: "./fonts/porinoi_display/Porinoi-Display-Regular.woff", weight: "400", style: "normal" },
  ],
  variable: "--font-porinoi-display",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Porinoi",
    template: "%s • Porinoi",
  },
  description:
    "A beautifully crafted dating and matrimonial website built with for Assam.",
  keywords: ["Porinoi", "Matrimony", "Wedding", "Love", "Connection"],
  authors: [{ name: "CEO & Founder - Gayatri Duwarah, Co-Founder - ParagJyoti Das" }],
  creator: "CEO & Founder - Gayatri Duwarah, Co-Founder - ParagJyoti Das",
  openGraph: {
    title: "Porinoi - Built For Love, Designed For Tradition.",
    description: "Join Porinoi and start your story of togetherness.",
    url: "https://porinoi.com",
    siteName: "Porinoi",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Porinoi - Built For Love, Designed For Tradition.",
    description: "Discover a place where hearts meet – Porinoi.",
    creator: "@porinoi_app",
  },
  metadataBase: new URL("https://porinoi.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistMono.variable} ${porinoi_sans.variable} ${porinoi_display.variable} `}>
      <body className="antialiased">
        <ToastProvider>
          <PopupProvider>
            <ClientWrapper>{children}</ClientWrapper>
          </PopupProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
