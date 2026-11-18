import Link from "next/link";
import type { ReactNode } from "react";
import { Btn, Container } from "./shared";

// Navy title band at the top of every inner page
export function PageHero({ title, text, crumbs = [], children }: { title: string; text?: string; crumbs?: { label: string; href?: string }[]; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute -right-20 -top-28 h-72 w-72 rounded-full border-[40px] border-white/[0.04]" />
        <span className="absolute bottom-10 left-[58%] h-3 w-3 rotate-45 bg-blue" />
        <span className="absolute right-[12%] top-12 h-4 w-4 rounded-full bg-accent" />
      </div>
      <Container className="relative py-14 sm:py-20">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[13.5px] text-white/60">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-2">
              <span aria-hidden>/</span>
              {c.href ? (
                <Link href={c.href} className="hover:text-white">
                  {c.label}
                </Link>
              ) : (
                <span className="text-white/90">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        <h1 className="mt-4 max-w-3xl text-[32px] font-extrabold leading-[1.15] sm:text-[44px]">{title}</h1>
        {text && <p className="mt-5 max-w-2xl text-[16.5px] leading-[1.75] text-white/75">{text}</p>}
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </Container>
    </section>
  );
}

// Closing call-to-action band, used at the bottom of most pages
export function CtaBand({ title = "Ready to talk about your store?", text = "Tell us what you need and we will reply within one working day with next steps or a time for a free 30-minute call." }: { title?: string; text?: string }) {
  return (
    <section className="bg-blue">
      <Container className="flex flex-col items-start justify-between gap-6 py-14 text-white lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <h2 className="text-[26px] font-bold leading-tight sm:text-[32px]">{title}</h2>
          <p className="mt-3 text-[16px] leading-[1.7] text-white/85">{text}</p>
        </div>
        <Btn href="/contact" variant="white" className="shrink-0">
          Free Consultation
        </Btn>
      </Container>
    </section>
  );
}
