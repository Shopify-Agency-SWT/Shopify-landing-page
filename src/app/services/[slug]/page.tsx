import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand, PageHero } from "@/components/PageHero";
import { Btn, Container, Icon, Label, Title } from "@/components/shared";
import { Reveal } from "@/components/ui";
import { hero, howWeWork, services } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

// One page per service in content/site.ts
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return s ? { title: s.title, description: s.text } : {};
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const index = services.findIndex((x) => x.slug === slug);
  if (index < 0) notFound();
  const s = services[index];
  // The next three services, wrapping round to the start of the list
  const others = [1, 2, 3].map((n) => services[(index + n) % services.length]);

  return (
    <>
      <PageHero title={s.title} text={s.text} crumbs={[{ label: "Services", href: "/services" }, { label: s.title }]}>
        <Btn href={`/contact?service=${s.slug}`} variant="white">
          Get a Fixed Quote
        </Btn>
      </PageHero>

      {/* What it is and what is included */}
      <section className="py-24">
        <Container className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg shadow-xl">
              <Image src={`/images/svc-${s.icon}.jpg`} alt={s.title} fill priority sizes="(min-width:1024px) 640px, 100vw" className="object-cover" />
            </div>
            <div className="mt-10">
              <Label>The Service</Label>
              <Title>What we do</Title>
              <p className="mt-5 text-[16.5px] leading-[1.8] text-ink-2">{s.intro}</p>
            </div>
            <h3 className="mt-10 text-[20px] font-bold text-navy">What is included</h3>
            <ul className="mt-5 grid gap-3.5 sm:grid-cols-2">
              {s.includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15.5px] font-semibold text-navy">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent text-navy">
                    <Icon name="check" className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Quote card */}
          <Reveal delay={0.1} className="lg:sticky lg:top-36">
            <aside className="rounded-xl bg-navy p-8 text-white shadow-xl">
              <h2 className="text-[22px] font-bold leading-snug">Get a fixed quote for {s.title}</h2>
              <p className="mt-3 text-[15px] leading-[1.7] text-white/75">Tell us about your store and we will reply within one working day. The first 30-minute call is free.</p>
              <ul className="mt-6 space-y-4 border-t border-white/15 pt-6">
                {hero.promises.map((p) => (
                  <li key={p.title} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent text-navy">
                      <Icon name="check" className="h-3 w-3" />
                    </span>
                    <span>
                      <span className="block text-[15px] font-bold">{p.title}</span>
                      <span className="block text-[14px] leading-snug text-white/70">{p.text}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <Btn href={`/contact?service=${s.slug}`} variant="white" className="mt-8 w-full">
                Free Consultation
              </Btn>
            </aside>
          </Reveal>
        </Container>
      </section>

      {/* How we work */}
      <section className="bg-mist py-24">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <Label>How We Work</Label>
            <Title>The same clear steps on every project</Title>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {howWeWork.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.07}>
                <div className="h-full rounded-lg bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.06)]">
                  <span className="font-display text-[40px] font-extrabold leading-none text-mist-2">0{i + 1}</span>
                  <h3 className="mt-3 text-[18px] font-bold text-navy">{step.title}</h3>
                  <p className="mt-2 text-[15px] leading-[1.7] text-ink-2">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Other services */}
      <section className="py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Label>More Services</Label>
              <Title>You might also need</Title>
            </div>
            <Link href="/services" className="font-display text-[13px] font-bold uppercase tracking-[0.08em] text-blue hover:text-navy">
              All Services →
            </Link>
          </div>
          <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => (
              <Link key={o.slug} href={`/services/${o.slug}`} className="group flex h-full flex-col rounded-lg bg-white p-3 shadow-[0_4px_24px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(15,23,42,0.13)]">
                <div className="relative aspect-[16/10] overflow-hidden rounded-md">
                  <Image src={`/images/svc-${o.icon}.jpg`} alt={o.title} fill sizes="(min-width:1024px) 380px, (min-width:640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-[1.05]" />
                </div>
                <div className="flex flex-1 flex-col px-4 pb-4 pt-6">
                  <h3 className="text-[19px] font-bold text-navy transition group-hover:text-blue">{o.title}</h3>
                  <p className="mt-2.5 flex-1 text-[15px] leading-[1.7] text-ink-2">{o.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand title={`Need help with ${s.title}?`} />
    </>
  );
}
