import type { Metadata } from "next";
import Blog from "@/components/Blog";
import { CtaBand, PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Blog",
  description: "Shopify guides on pricing, migration and marketing, written by the team that builds and grows the stores.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero title="Shopify insights" text="Practical guides on pricing, migration and marketing. Our first articles are on the way." crumbs={[{ label: "Blog" }]} />
      <Blog heading={false} />
      <CtaBand title="Have a question we have not written about yet?" text="Ask us directly. We reply within one working day, and the first 30-minute call is free." />
    </>
  );
}
