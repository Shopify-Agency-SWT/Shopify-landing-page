import Image from "next/image";
import { brands, stats } from "@/content/site";
import { Container, Label, Title } from "./shared";
import { Reveal } from "./ui";

export function StatsBand() {
  return (
    <section className="bg-blue">
      <Container className="grid grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div key={s.label} className={`px-4 py-10 text-center text-white ${i ? "border-l border-white/15" : ""}`}>
            <p className="font-display text-[38px] font-extrabold leading-none">{s.value}</p>
            <p className="mt-2 text-[14px] text-white/80">{s.label}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}

export function Brands({ heading = true }: { heading?: boolean }) {
  return (
    <section id="work" className="scroll-mt-28 py-24">
      <Container>
        {heading && (
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <Label>Our Work</Label>
            <Title>Top brands that work with us</Title>
          </Reveal>
        )}
        <div className="grid gap-8 lg:grid-cols-2">
          {brands.map((b, i) => (
            <Reveal key={b.name} delay={i * 0.1}>
              <article className="group h-full overflow-hidden rounded-lg bg-white shadow-[0_4px_24px_rgba(15,23,42,0.08)] transition hover:shadow-[0_16px_40px_rgba(15,23,42,0.14)]">
                <div className="relative overflow-hidden">
                  <Image src={b.image} alt={`${b.name} Shopify store`} width={1440} height={900} className="h-auto w-full transition duration-700 group-hover:scale-[1.03]" />
                  <span className="absolute left-4 top-4 rounded-full bg-navy px-4 py-1.5 font-display text-[12px] font-bold uppercase tracking-[0.08em] text-white">{b.note}</span>
                </div>
                <div className="p-7">
                  <h3 className="text-[24px] font-extrabold text-navy">{b.name}</h3>
                  <p className="mt-3 text-[15px] leading-[1.75] text-ink-2">{b.story}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {b.tags.map((tag) => (
                      <li key={tag} className="rounded-full border border-line px-3 py-1 text-[12.5px] font-semibold text-navy">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  {b.url && (
                    <a href={b.url} target="_blank" rel="noopener" className="mt-6 inline-flex items-center gap-2 font-display text-[13px] font-bold uppercase tracking-[0.08em] text-blue">
                      Visit Store →
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
