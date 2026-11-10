import { services } from "@/content/site";
import Image from "next/image";
import { Container, Label, Title } from "./shared";
import { Reveal } from "./ui";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-28 pb-24 pt-20">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Label>What We Offer</Label>
          <Title>Shopify services that cover everything, end to end</Title>
          <p className="mt-4 text-[16px] leading-[1.75] text-ink-2">Design, development, support and marketing, all handled by one dedicated team.</p>
        </Reveal>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.07} className={i === 9 ? "sm:col-span-2 lg:col-span-3" : ""}>
              {i === 9 ? (
                <a href="#contact" className="group grid items-center gap-6 rounded-lg bg-mist p-6 transition hover:shadow-lg sm:grid-cols-[200px_1fr_auto]">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-md">
                    <Image src={`/images/svc-${s.icon}.jpg`} alt={s.title} fill sizes="200px" className="object-cover" />
                  </div>
                  <div>
                    <h3 className="text-[19px] font-bold text-navy">{s.title}</h3>
                    <p className="mt-2 text-[15px] leading-[1.7] text-ink-2">{s.text}</p>
                  </div>
                  <span className="rounded-full bg-navy px-6 py-3 text-center font-display text-[13px] font-bold uppercase tracking-[0.06em] text-white transition group-hover:bg-blue">Learn More</span>
                </a>
              ) : (
                <a href="#contact" className="group flex h-full flex-col rounded-lg bg-white p-3 shadow-[0_4px_24px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(15,23,42,0.13)]">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-md">
                    <Image src={`/images/svc-${s.icon}.jpg`} alt={s.title} fill sizes="(min-width:1024px) 380px, (min-width:640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-[1.05]" />
                  </div>
                  <div className="flex flex-1 flex-col px-4 pb-4 pt-6">
                    <h3 className="text-[19px] font-bold text-navy transition group-hover:text-blue">{s.title}</h3>
                    <p className="mt-2.5 flex-1 text-[15px] leading-[1.7] text-ink-2">{s.text}</p>
                    <span className="mt-5 inline-flex items-center gap-2 font-display text-[13px] font-bold uppercase tracking-[0.08em] text-blue">
                      Learn More <span className="transition group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </a>
              )}
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
