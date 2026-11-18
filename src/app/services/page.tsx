import type { Metadata } from "next";
import Faq from "@/components/Faq";
import { AiBand, NowWhat } from "@/components/Growth";
import { CtaBand, PageHero } from "@/components/PageHero";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Shopify Services",
  description: "Shopify store design, theme development, custom apps, migrations, SEO, ads, CRO, Shopify Plus, AI automation and support, all from one team at a fixed price.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Shopify services that cover everything, end to end"
        text="Design, development, support and marketing, all handled by one dedicated team. Pick a service to see what is included."
        crumbs={[{ label: "Services" }]}
      />
      <Services heading={false} />
      <NowWhat />
      <AiBand />
      <Faq />
      <CtaBand />
    </>
  );
}
