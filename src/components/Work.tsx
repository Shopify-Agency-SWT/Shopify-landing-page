"use client";

import Image from "next/image";
import { useState } from "react";
import { brands, testimonials } from "@/content/site";
import { Container, Label, Title } from "./shared";
import { Reveal } from "./ui";

export default function Work() {
  const [t, setT] = useState(0);
  const review = testimonials[t];

  return (
    <>
      {/* Stats band */}
      <section className="bg-blue">
        <Container className="grid grid-cols-2 lg:grid-cols-4">
          {[
            ["10", "Shopify services"],
            ["2", "Countries with live stores"],
            ["100%", "Fixed-price quotes"],
            ["24x7", "Support"],
          ].map(([v, l], i) => (
            <div key={l} className={`px-4 py-10 text-center text-white ${i ? "border-l border-white/15" : ""}`}>
              <p className="font-display text-[38px] font-extrabold leading-none">{v}</p>
              <p className="mt-2 text-[14px] text-white/80">{l}</p>
            </div>
          ))}
        </Container>
      </section>

      {/* Brands */}
      <section id="work" className="scroll-mt-28 py-24">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <Label>Our Work</Label>
            <Title>Top brands that work with us</Title>
          </Reveal>
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
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

      {/* Reviews */}
      <section id="reviews" className="scroll-mt-28 bg-mist py-24">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Label>Clients&apos; Love</Label>
            <Title>What our clients say</Title>
            <figure className="relative mt-12 rounded-lg bg-white px-8 pb-10 pt-14 shadow-[0_8px_30px_rgba(15,23,42,0.08)] sm:px-14">
              <span className="absolute -top-7 left-1/2 grid h-14 w-14 -translate-x-1/2 place-items-center rounded-full bg-blue font-display text-[34px] font-extrabold leading-none text-white">&ldquo;</span>
              <blockquote className="text-[18px] italic leading-[1.8] text-ink-2">{review.quote}</blockquote>
              <figcaption className="mt-7">
                <p className="font-display text-[16px] font-bold text-navy">{review.name}</p>
                <p className="text-[14px] text-blue">{review.role}</p>
              </figcaption>
            </figure>
            <div className="mt-6 flex justify-center gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setT(i)} aria-label={`Review ${i + 1}`} className={`h-2.5 rounded-full transition-all ${i === t ? "w-8 bg-blue" : "w-2.5 bg-mist-2"}`} />
              ))}
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
