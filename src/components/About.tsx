import Image from "next/image";
import { about, stats, why } from "@/content/site";
import { BadgeArt } from "./Art";
import { Btn, Container, Label, Title } from "./shared";
import { Reveal } from "./ui";

const whyArt = ["team", "store", "chart"] as const;

export default function About() {
  return (
    <section id="about" className="scroll-mt-28 bg-soft py-24">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Work collage with stats */}
          <Reveal className="relative pb-16 pr-6">
            <div className="overflow-hidden rounded-lg border-[6px] border-white shadow-xl">
              <Image src="/images/about.jpg" alt="Our team working together" width={1200} height={800} className="h-auto w-full" />
            </div>
            <div className="absolute bottom-0 right-0 w-[55%] overflow-hidden rounded-lg border-[6px] border-white shadow-xl">
              <Image src="/work/blinkdrop.png" alt="BlinkDrop store we built" width={1440} height={900} className="h-auto w-full" />
            </div>
            <div className="absolute -left-3 bottom-6 grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-white/20 shadow-xl">
              {stats.slice(0, 2).map((s) => (
                <div key={s.label} className="bg-blue px-5 py-4 text-white">
                  <p className="font-display text-[28px] font-extrabold leading-none">{s.value}</p>
                  <p className="mt-1 text-[12px] text-white/80">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <Label>About Us</Label>
            <Title>{about.title}</Title>
            {about.text.map((t) => (
              <p key={t} className="mt-5 text-[16px] leading-[1.75] text-ink-2">
                {t}
              </p>
            ))}
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-line pt-8">
              {stats.slice(2).map((s) => (
                <div key={s.label}>
                  <p className="font-display text-[32px] font-extrabold leading-none text-navy">{s.value}</p>
                  <p className="mt-2 text-[14px] text-ink-2">{s.label}</p>
                </div>
              ))}
            </div>
            <Btn href="#contact" variant="dark" className="mt-9">
              Know More About Us
            </Btn>
          </Reveal>
        </div>

        {/* Why we do what we do */}
        <Reveal className="mt-24">
          <div className="text-center">
            <Label>Our Purpose</Label>
            <Title>Why we do what we do</Title>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {why.map((w, i) => (
              <div key={w} className="rounded-lg bg-white p-8 text-center shadow-[0_4px_20px_rgba(15,23,42,0.06)]">
                <div className="mx-auto w-20">
                  <BadgeArt icon={whyArt[i]} />
                </div>
                <p className="mt-5 text-[15.5px] leading-[1.75] text-ink-2">{w}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
