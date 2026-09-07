import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://mezustudio.com"),
  title: {
    default: "Free AI Marketing Consultation | MezuStudio",
    template: "%s | MezuStudio"
  },
  description:
    "Book a free AI marketing consultation and receive a customized digital marketing plan for your business.",
  openGraph: {
    title: "Free AI Marketing Consultation | MezuStudio",
    description:
      "Get a clear AI marketing plan made for your business and learn how to bring in more customer inquiries online.",
    url: "https://mezustudio.com",
    siteName: "MezuStudio",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Marketing Consultation | MezuStudio",
    description:
      "Book a free consultation and get a customized AI marketing plan for your business."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
