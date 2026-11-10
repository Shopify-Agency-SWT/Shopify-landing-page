import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", weight: ["500", "600", "700", "800"] });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-opensans" });

export const metadata: Metadata = {
  title: "Shopify Agency | Shopify Design, Development, Apps & Marketing",
  description:
    "Expert Shopify team for store design, theme development, custom apps, migrations, SEO, Meta and Google ads, AI automation and 24x7 support. Fixed price.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${openSans.variable} font-sans`}>{children}</body>
    </html>
  );
}
