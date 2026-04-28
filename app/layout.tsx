import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { MouseSpotlight } from "@/components/MouseSpotlight";
import { ScrollProgress } from "@/components/ScrollProgress";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://proposal-site.vercel.app",
  ),
  title: "Vũ Mạnh Tuấn — Product Owner",
  description:
    "Product Owner at Avada Group building AI-driven Shopify upsell apps that grow merchant AOV.",
  openGraph: {
    title: "Vũ Mạnh Tuấn — Product Owner",
    description:
      "Shipping Shopify apps that grow merchant AOV. Currently at Avada Group.",
    images: ["/portrait.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col relative">
        <div className="aurora" aria-hidden />
        <ScrollProgress />
        <MouseSpotlight />
        <div className="relative z-[2] flex flex-col min-h-full">{children}</div>
      </body>
    </html>
  );
}
