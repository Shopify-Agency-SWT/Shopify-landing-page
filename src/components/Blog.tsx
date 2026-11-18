import { posts } from "@/content/site";
import Image from "next/image";
import { Container, Label, Title } from "./shared";
import { Reveal } from "./ui";

const photos = ["/images/blog-pricing.jpg", "/images/blog-migration.jpg", "/images/blog-ads.jpg"];

// Articles we are writing. They are marked "Coming soon" and are not links until the posts exist.
export default function Blog({ heading = true }: { heading?: boolean }) {
  return (
    <section id="blog" className="scroll-mt-28 py-24">
      <Container>
        {heading && (
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <Label>From Our Blog</Label>
            <Title>Latest Shopify insights</Title>
          </Reveal>
        )}
        <div className="grid gap-7 md:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07}>
              <article className="h-full overflow-hidden rounded-lg bg-white shadow-[0_4px_24px_rgba(15,23,42,0.07)]">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={photos[i]} alt={p.title} fill sizes="(min-width:768px) 380px, 100vw" className="object-cover" />
                  <span className="absolute bottom-4 left-4 rounded bg-blue px-3 py-1 font-display text-[11.5px] font-bold uppercase tracking-[0.08em] text-white">{p.tag}</span>
                </div>
                <div className="p-6">
                  <p className="inline-block rounded-full bg-mist px-3 py-1 text-[12.5px] font-semibold text-navy">Coming soon</p>
                  <h3 className="mt-3 text-[18px] font-bold leading-snug text-navy">{p.title}</h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
