"use client";

import { motion } from "framer-motion";
import { hero } from "@/content/site";
import Image from "next/image";
import Link from "next/link";
import { Container, Icon } from "./shared";

const promiseIcons = ["talent", "clock", "price"] as const;

export default function Hero() {
  return (
    <section className="relative mb-24 bg-navy text-white md:mb-14">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="absolute -left-24 -top-24 h-72 w-72 rounded-full border-[40px] border-white/[0.04]" />
        <span className="absolute bottom-24 right-[45%] h-4 w-4 rounded-full bg-accent" />
        <span className="absolute left-[48%] top-16 h-3 w-3 rotate-45 bg-blue" />
      </div>

      <Container className="relative grid items-center gap-10 pb-36 pt-14 lg:grid-cols-[1fr_1.05fr] lg:pb-44 lg:pt-20">
        <div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-3 font-display text-[13px] font-bold uppercase tracking-[0.18em] text-white/75">
            <span className="h-[2px] w-8 bg-accent" /> Your Shopify Partner
          </motion.p>
          <h1 className="mt-5 text-[34px] font-extrabold leading-[1.15] sm:text-[48px]">
            {hero.promises.map((p, i) => (
              <motion.span key={p.title} className="block" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}>
                {i === 1 ? <span className="text-accent">{p.title}.</span> : `${p.title}.`}
              </motion.span>
            ))}
          </h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }} className="mt-6 max-w-lg text-[16.5px] leading-[1.75] text-white/75">
            {hero.text}
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.65 }} className="mt-9 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-full bg-accent px-7 py-3.5 font-display text-[13.5px] font-bold uppercase tracking-[0.06em] text-navy transition hover:bg-white">
              Connect With Us
            </Link>
            <Link href="/services" className="rounded-full border-2 border-white/30 px-7 py-3 font-display text-[13.5px] font-bold uppercase tracking-[0.06em] text-white transition hover:border-white">
              Our Services
            </Link>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative mx-auto w-full max-w-[560px] pb-8 pl-8">
          <div className="absolute bottom-0 left-0 right-10 top-10 rounded-xl border-2 border-white/15" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-2xl">
            <Image src="/images/hero.jpg" alt="Our Shopify team at work" fill priority sizes="(min-width:1024px) 540px, 100vw" className="object-cover" />
          </div>
          <div className="absolute -left-2 top-1/3 flex items-center gap-3 rounded-lg bg-white px-4 py-3 text-ink shadow-xl">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-white">
              <Icon name="check" className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-[12px] text-ink-2">Store launched</span>
              <span className="block font-display text-[14px] font-bold text-navy">Ready to take orders</span>
            </span>
          </div>
          <div className="absolute -right-3 bottom-0 rounded-lg bg-blue px-5 py-4 text-white shadow-xl">
            <span className="block font-display text-[22px] font-extrabold leading-none">UK &amp; India</span>
            <span className="mt-1 block text-[12px] text-white/80">Stores live today</span>
          </div>
        </motion.div>
      </Container>

      {/* wave edge */}
      <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="absolute bottom-0 h-[70px] w-full fill-white">
        <path d="M0 60c240 30 480 40 720 18S1200 0 1440 30v60H0z" />
      </svg>

      {/* promise strip overlapping the wave */}
      <div className="absolute inset-x-0 bottom-0 z-10 translate-y-1/2">
        <Container>
          <div className="grid overflow-hidden rounded-lg bg-white shadow-[0_18px_40px_rgba(15,23,42,0.12)] md:grid-cols-3">
            {hero.promises.map((p, i) => (
              <div key={p.title} className={`flex items-center gap-4 p-6 ${i === 1 ? "bg-blue text-white" : ""}`}>
                <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-full ${i === 1 ? "bg-white/15 text-white" : "bg-mist text-blue"}`}>
                  <Icon name={promiseIcons[i]} className="h-7 w-7" />
                </span>
                <div>
                  <h3 className={`text-[16px] font-bold ${i === 1 ? "text-white" : "text-navy"}`}>{p.title}</h3>
                  <p className={`mt-1 text-[14px] leading-snug ${i === 1 ? "text-white/80" : "text-ink-2"}`}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
