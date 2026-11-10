import { different } from "@/content/site";
import Image from "next/image";
import { Container, Icon, Label, Title } from "./shared";
import { Reveal } from "./ui";

const icons = ["quality", "price", "package", "clock", "chat", "lock", "team"] as const;

function Item({ i, align }: { i: number; align: "left" | "right" }) {
  const d = different[i];
  return (
    <div className={`flex gap-4 ${align === "left" ? "lg:flex-row-reverse lg:text-right" : ""}`}>
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-blue text-white shadow-[0_8px_18px_rgba(15,23,42,0.15)]">
        <Icon name={icons[i]} className="h-[22px] w-[22px]" />
      </span>
      <div>
        <h3 className="text-[17px] font-bold text-navy">{d.title}</h3>
        <p className="mt-1.5 text-[14.5px] leading-[1.7] text-ink-2">{d.text}</p>
      </div>
    </div>
  );
}

export default function Different() {
  return (
    <section id="different" className="scroll-mt-28 py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Label>Why Choose Us</Label>
          <Title>How are we different from others?</Title>
          <p className="mt-4 text-[16px] leading-[1.75] text-ink-2">Seven promises we keep on every project, so you never have to chase us for updates, deadlines or costs.</p>
        </Reveal>

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-[1fr_380px_1fr]">
          <div className="space-y-10">
            {[0, 1, 2].map((i) => (
              <Reveal key={i} delay={i * 0.06}>
                <Item i={i} align="left" />
              </Reveal>
            ))}
          </div>
          <Reveal className="order-first lg:order-none">
            <div className="relative mx-auto max-w-[380px]">
              <div className="relative aspect-square overflow-hidden rounded-full border-[10px] border-white bg-mist shadow-xl ring-1 ring-line">
                <Image src="/images/team.jpg" alt="Our team in a client meeting" fill sizes="380px" className="object-cover" />
              </div>
              <span className="absolute -right-2 top-8 grid h-16 w-16 place-items-center rounded-full bg-accent font-display text-[22px] font-extrabold text-navy shadow-lg">7</span>
            </div>
          </Reveal>
          <div className="space-y-10">
            {[3, 4, 5].map((i) => (
              <Reveal key={i} delay={(i - 3) * 0.06}>
                <Item i={i} align="right" />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mx-auto mt-12 max-w-xl">
          <div className="flex items-center justify-center gap-4 rounded-full border border-line bg-soft px-6 py-4 text-center">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent text-navy">
              <Icon name={icons[6]} className="h-5 w-5" />
            </span>
            <p className="text-left text-[14.5px] text-ink-2">
              <strong className="font-bold text-navy">{different[6].title}: </strong>
              {different[6].text}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
