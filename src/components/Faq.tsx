import { faqs } from "@/content/site";
import { Container, Label, Title } from "./shared";

// Questions and answers. Also tells Google about them (FAQ structured data).
export default function Faq() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <section id="faq" className="scroll-mt-28 py-24">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Label>FAQ</Label>
          <Title>Questions we hear before every project</Title>
          <p className="mt-5 max-w-md text-[16px] leading-[1.75] text-ink-2">Not sure about something else? Ask us on a free 30-minute call.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-lg border border-line bg-white px-6 open:shadow-[0_8px_30px_rgba(15,23,42,0.08)]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-[16px] font-bold text-navy [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-mist text-[18px] leading-none text-blue transition group-open:rotate-45">+</span>
              </summary>
              <p className="pb-6 text-[15.5px] leading-[1.75] text-ink-2">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </section>
  );
}
