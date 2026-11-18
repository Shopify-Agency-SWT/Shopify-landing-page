import type { Metadata } from "next";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us about your Shopify store. We reply within one working day, and the first 30-minute call is free.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="Let's talk about your store" text="Share a few details and we will reply with next steps or a time for a free 30-minute call. No obligation." crumbs={[{ label: "Contact" }]} />
      <Contact />
      <Faq />
    </>
  );
}
