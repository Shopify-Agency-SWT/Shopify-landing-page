import { ai, nowWhat } from "@/content/site";
import Image from "next/image";
import { BadgeArt } from "./Art";
import { Btn, Container, Icon, Label, Title } from "./shared";
import { Reveal } from "./ui";

const stepArt = ["seo", "cro", "chart", "ads"] as const;

export default function Growth() {
  return (
    <>
      {/* You have a store. Now what? */}
      <section className="bg-mist py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <Label>Beyond the Build</Label>
              <Title>{nowWhat.title}</Title>
              <p className="mt-5 text-[16px] leading-[1.75] text-ink-2">{nowWhat.intro}</p>
              <p className="mt-4 border-l-4 border-blue bg-white px-5 py-4 text-[15.5px] font-semibold leading-relaxed text-navy">
                Our goal is simple: turn your Shopify store from an online presence into a steady sales engine.
              </p>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {nowWhat.steps.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.08}>
                  <div className="h-full rounded-lg bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.06)]">
                    <div className="flex items-center justify-between">
                      <div className="w-16">
                        <BadgeArt icon={stepArt[i]} />
                      </div>
                      <span className="font-display text-[40px] font-extrabold leading-none text-mist-2">0{i + 1}</span>
                    </div>
                    <h3 className="mt-4 text-[18px] font-bold text-navy">{s.title}</h3>
                    <p className="mt-2 text-[15px] leading-[1.7] text-ink-2">{s.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* AI */}
      <section id="ai" className="scroll-mt-28 py-24">
        <Container>
          <Reveal>
            <div className="grid overflow-hidden rounded-xl bg-navy lg:grid-cols-[1.1fr_1fr]">
              <div className="p-8 text-white sm:p-12">
                <Label light>AI &amp; Automation</Label>
                <Title light>{ai.title}</Title>
                {ai.text.map((t) => (
                  <p key={t} className="mt-5 text-[16px] leading-[1.75] text-white/75">
                    {t}
                  </p>
                ))}
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {ai.uses.map((u) => (
                    <li key={u} className="flex items-start gap-2.5 text-[15px] font-semibold">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent text-navy">
                        <Icon name="check" className="h-3 w-3" />
                      </span>
                      {u}
                    </li>
                  ))}
                </ul>
                <Btn href="#contact" variant="white" className="mt-9">
                  Add AI to My Store
                </Btn>
              </div>
              <div className="relative hidden min-h-[420px] lg:block">
                <Image src="/images/ai.jpg" alt="AI and automation" fill sizes="560px" className="object-cover" />
                <div className="absolute bottom-8 left-8 flex items-center gap-3 rounded-lg bg-white px-5 py-4 shadow-xl">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-navy">
                    <Icon name="spark" className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[12px] text-ink-2">Less manual work</span>
                    <span className="block font-display text-[15px] font-bold text-navy">AI working for your store</span>
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
