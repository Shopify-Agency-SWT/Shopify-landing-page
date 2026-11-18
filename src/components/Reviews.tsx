"use client";

import { useState } from "react";
import { testimonials } from "@/content/site";
import { Container, Label, Title } from "./shared";
import { Reveal } from "./ui";

// Client reviews. Shows nothing until real reviews are added in content/site.ts.
export default function Reviews() {
  const [t, setT] = useState(0);
  if (!testimonials.length) return null;
  const review = testimonials[t];

  return (
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
          {testimonials.length > 1 && (
            <div className="mt-6 flex justify-center gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setT(i)} aria-label={`Review ${i + 1}`} className={`h-2.5 rounded-full transition-all ${i === t ? "w-8 bg-blue" : "w-2.5 bg-mist-2"}`} />
              ))}
            </div>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
