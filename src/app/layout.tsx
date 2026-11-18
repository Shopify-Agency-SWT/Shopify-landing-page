import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ThemePicker from "@/components/ThemePicker";
import { site } from "@/content/site";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", weight: ["500", "600", "700", "800"] });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-opensans" });

export const metadata: Metadata = {
  // Inner pages set their own title, shown as "Page | Site name"
  title: { default: `${site.name} | Shopify Design, Development, Apps & Marketing`, template: `%s | ${site.name}` },
  description:
    "Expert Shopify team for store design, theme development, custom apps, migrations, SEO, Meta and Google ads, AI automation and 24x7 support. Fixed price.",
};

// Header, footer and the colour picker wrap every page
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${openSans.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <ThemePicker />
      </body>
    </html>
  );
}
