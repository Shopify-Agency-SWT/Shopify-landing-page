import type { Metadata } from "next";
import { AboutIntro, Purpose } from "@/components/About";
import Different from "@/components/Different";
import { CtaBand, PageHero } from "@/components/PageHero";
import { StatsBand } from "@/components/Work";

export const metadata: Metadata = {
  title: "About Us",
  description: "A team of Shopify designers, developers and marketers building and growing stores for brands in the UK, India and around the world.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="One Shopify team, from first design to steady growth"
        text="We are designers, developers and marketers who work only on Shopify, with a clear process, fixed prices and support whenever you need it."
        crumbs={[{ label: "About Us" }]}
      />
      <AboutIntro />
      <Different />
      <Purpose />
      <StatsBand />
      <CtaBand />
    </>
  );
}
