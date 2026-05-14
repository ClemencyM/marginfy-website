import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@/components/analytics/Analytics";
import { JsonLd } from "@/components/schema/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import "./globals.css";

const poppins = localFont({
  src: [
    { path: "../public/fonts/Poppins-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/Poppins-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../public/fonts/Poppins-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-poppins",
  display: "swap",
});

const karla = localFont({
  src: [
    { path: "../public/fonts/Karla-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/Karla-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-karla",
  display: "swap",
});

export const metadata: Metadata = buildMetadata({});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className={`${poppins.variable} ${karla.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/images/marginfy-icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/marginfy-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3D55D6" />
        <meta name="google-site-verification" content="YOUR_SEARCH_CONSOLE_TOKEN" />
        <JsonLd schema={[organizationSchema, websiteSchema]} />
      </head>
      <body className="min-h-screen bg-white font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
