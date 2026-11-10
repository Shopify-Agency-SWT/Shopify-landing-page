"use client";

import { useState } from "react";
import { services, site } from "@/content/site";
import { Container, Icon, Logo } from "./shared";

type Item = { label: string; href: string; menu?: { label: string; href: string }[] };

const links: Item[] = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services", menu: services.map((s) => ({ label: s.title, href: "#services" })) },
  {
    label: "Company",
    href: "#about",
    menu: [
      { label: "About Us", href: "#about" },
      { label: "Why Choose Us", href: "#different" },
      { label: "Client Reviews", href: "#reviews" },
    ],
  },
  { label: "Our Work", href: "#work" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header id="top" className="sticky top-0 z-50 bg-white shadow-[0_2px_14px_rgba(15,23,42,0.07)]">
      {/* Light info strip */}
      <div className="hidden border-b border-line bg-soft md:block">
        <Container className="flex h-10 items-center justify-between text-[13px] text-ink-2">
          <p>Shopify design, development &amp; marketing for brands worldwide</p>
          <div className="flex items-center gap-5">
            <a href={`mailto:${site.email}`} className="flex items-center gap-1.5 hover:text-navy">
              <Icon name="mail" className="h-4 w-4 text-blue" /> {site.email}
            </a>
            <span className="flex items-center gap-1.5">
              <Icon name="clock" className="h-4 w-4 text-blue" /> 24x7 support
            </span>
          </div>
        </Container>
      </div>

      <Container className="flex h-[76px] items-center justify-between">
        <Logo />
        <nav className="hidden lg:block">
          <ul className="flex items-center">
            {links.map((l) => (
              <li key={l.label} className="group relative">
                <a href={l.href} className="flex items-center gap-1 px-4 py-7 font-display text-[14px] font-semibold text-navy transition hover:text-blue">
                  {l.label}
                  {l.menu && (
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M2 3.5l3 3 3-3" />
                    </svg>
                  )}
                </a>
                {l.menu && (
                  <div className="invisible absolute left-0 top-full opacity-0 transition group-hover:visible group-hover:opacity-100">
                    <div className={`grid border-t-[3px] border-blue bg-white py-2 shadow-xl ${l.menu.length > 5 ? "w-[520px] grid-cols-2" : "w-60"}`}>
                      {l.menu.map((m) => (
                        <a key={m.label} href={m.href} className="px-5 py-2.5 text-[14px] text-ink-2 transition hover:bg-mist hover:pl-6 hover:text-navy">
                          {m.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden rounded-full bg-blue px-6 py-3 font-display text-[13px] font-bold uppercase tracking-[0.06em] text-white transition hover:bg-navy sm:inline-block">
            Free Consultation
          </a>
          <button onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open} className="grid h-11 w-11 place-items-center rounded-full border border-line text-navy lg:hidden">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M3 3l12 12M15 3L3 15" /> : <path d="M2 5h14M2 9h14M2 13h14" />}
            </svg>
          </button>
        </div>
      </Container>

      {open && (
        <nav className="border-t border-line bg-white lg:hidden">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="block border-b border-line px-4 py-3.5 font-display text-[15px] font-semibold text-navy">
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
