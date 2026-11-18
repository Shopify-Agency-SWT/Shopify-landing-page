import type { Metadata } from "next";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import { PageHero } from "@/components/PageHero";
import { services } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us about your Shopify store. We reply within one working day, and the first 30-minute call is free.",
};

// /contact?service=<slug> arrives from a service page and pre-selects that service in the form
export default async function ContactPage({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const { service } = await searchParams;
  const need = service === "ai" ? "AI & automation" : services.find((s) => s.slug === service)?.title;

  return (
    <>
      <PageHero title="Let's talk about your store" text="Share a few details and we will reply with next steps or a time for a free 30-minute call. No obligation." crumbs={[{ label: "Contact" }]} />
      <Contact need={need} />
      <Faq />
    </>
  );
}
