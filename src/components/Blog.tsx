import { posts } from "@/content/site";
import Image from "next/image";
import { Container, Label, Title } from "./shared";
import { Reveal } from "./ui";

const photos = ["/images/blog-pricing.jpg", "/images/blog-migration.jpg", "/images/blog-ads.jpg"];

export default function Blog() {
  return (
    <section id="blog" className="scroll-mt-28 py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Label>From Our Blog</Label>
          <Title>Latest Shopify insights</Title>
        </Reveal>
        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07}>
              <article className="group h-full overflow-hidden rounded-lg bg-white shadow-[0_4px_24px_rgba(15,23,42,0.07)] transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,23,42,0.13)]">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={photos[i]} alt={p.title} fill sizes="(min-width:768px) 380px, 100vw" className="object-cover transition duration-500 group-hover:scale-[1.05]" />
                  <span className="absolute bottom-4 left-4 rounded bg-blue px-3 py-1 font-display text-[11.5px] font-bold uppercase tracking-[0.08em] text-white">{p.tag}</span>
                </div>
                <div className="p-6">
                  <p className="text-[13px] text-ink-2">Coming soon</p>
                  <h3 className="mt-2 text-[18px] font-bold leading-snug text-navy transition group-hover:text-blue">{p.title}</h3>
                  <p className="mt-5 font-display text-[13px] font-bold uppercase tracking-[0.08em] text-blue">Read More →</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
