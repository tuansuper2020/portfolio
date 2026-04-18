import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
