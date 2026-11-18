import { AboutIntro } from "@/components/About";
import { NowWhat } from "@/components/Growth";
import Hero from "@/components/Hero";
import { CtaBand } from "@/components/PageHero";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import { Brands, StatsBand } from "@/components/Work";

// Home: a short overview. Each part links to its own full page.
export default function Home() {
  return (
    <>
      <Hero />
      <Services limit={6} />
      <NowWhat />
      <AboutIntro more />
      <StatsBand />
      <Brands />
      <Reviews />
      <CtaBand />
    </>
  );
}
