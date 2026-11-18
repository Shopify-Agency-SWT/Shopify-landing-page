import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/PageHero";
import Reviews from "@/components/Reviews";
import { Brands, StatsBand } from "@/components/Work";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Shopify stores we have designed, built and grown, from a UK grocery delivery business to an Ayurvedic beauty brand in India.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        title="Shopify stores we have built"
        text="From a grocery delivery business with custom apps, a headless website and a mobile app, to a handmade beauty brand selling across India."
        crumbs={[{ label: "Our Work" }]}
      />
      <Brands heading={false} />
      <StatsBand />
      <Reviews />
      <CtaBand title="Want your store to be next?" />
    </>
  );
}
