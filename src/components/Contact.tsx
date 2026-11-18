"use client";

import { services, site } from "@/content/site";
import { Container, Icon, Label, Title } from "./shared";

const field = "w-full rounded-lg border border-line bg-white px-4 py-3.5 text-[15px] text-ink outline-none transition placeholder:text-ink-2/60 focus:border-blue focus:ring-4 focus:ring-blue/10";

// `need` pre-selects a service in the form (set when a visitor arrives from a service page)
export default function Contact({ need }: { need?: string }) {
  // Until a form service is connected, the form opens the visitor's email app
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = `Name: ${d.get("name")}\nEmail: ${d.get("email")}\nPhone: ${d.get("phone")}\nStore: ${d.get("site")}\nService: ${d.get("need")}\n\n${d.get("message")}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`New enquiry: ${d.get("need")}`)}&body=${encodeURIComponent(body)}`;
  }

  const info = [
    { icon: "mail" as const, label: "Email", value: site.email, href: `mailto:${site.email}` },
    // The phone row only shows once a number is added in content/site.ts
    ...(site.phone ? [{ icon: "phone" as const, label: "Phone / WhatsApp", value: site.phone, href: `tel:${site.phone}` }] : []),
    { icon: "clock" as const, label: "Reply time", value: "Within one working day", href: "" },
  ];

  return (
    <section id="contact" className="scroll-mt-28 bg-mist py-24">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.25fr]">
        <div>
          <Label>Contact us</Label>
          <Title>Tell us about your store</Title>
          <p className="mt-5 max-w-md text-[16.5px] leading-[1.7] text-ink-2">Share a few details and we will reply with next steps or a time for a free 30-minute call. No obligation.</p>
          <ul className="mt-10 space-y-4">
            {info.map((c) => (
              <li key={c.label}>
                <a href={c.href || undefined} className="flex items-center gap-4 rounded-xl border border-line bg-white p-4">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-navy text-white">
                    <Icon name={c.icon} className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[13px] font-semibold text-ink-2">{c.label}</span>
                    <span className="block text-[15.5px] font-extrabold text-navy">{c.value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={onSubmit} className="grid gap-4 rounded-2xl border border-line bg-white p-6 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.25)] sm:p-10">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-1.5 text-[13.5px] font-bold text-navy">
              Full name *
              <input name="name" required autoComplete="name" className={field} />
            </label>
            <label className="grid gap-1.5 text-[13.5px] font-bold text-navy">
              Email *
              <input name="email" type="email" required autoComplete="email" className={field} />
            </label>
            <label className="grid gap-1.5 text-[13.5px] font-bold text-navy">
              Phone / WhatsApp
              <input name="phone" autoComplete="tel" className={field} />
            </label>
            <label className="grid gap-1.5 text-[13.5px] font-bold text-navy">
              Store or website
              <input name="site" placeholder="yourstore.com" className={field} />
            </label>
          </div>
          <label className="grid gap-1.5 text-[13.5px] font-bold text-navy">
            What do you need?
            <select name="need" defaultValue={need} className={field}>
              {services.map((s) => (
                <option key={s.title}>{s.title}</option>
              ))}
              <option>AI &amp; automation</option>
              <option>Something else</option>
            </select>
          </label>
          <label className="grid gap-1.5 text-[13.5px] font-bold text-navy">
            Message
            <textarea name="message" rows={4} className={field} />
          </label>
          <button type="submit" className="mt-2 rounded-lg bg-blue py-4 text-[15px] font-bold text-white transition hover:bg-navy">
            Send message
          </button>
        </form>
      </Container>
    </section>
  );
}
