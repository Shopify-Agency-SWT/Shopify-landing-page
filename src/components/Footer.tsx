import Link from "next/link";
import { services, site } from "@/content/site";
import { Container, Logo, Socials } from "./shared";

const company = [
  ["About us", "/about"],
  ["Why choose us", "/about#different"],
  ["Our work", "/work"],
  ["Blog", "/blog"],
  ["FAQ", "/contact#faq"],
  ["Contact", "/contact"],
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white/65">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-6 max-w-xs text-[14.5px] leading-relaxed">Shopify design, development, apps and marketing for brands in the UK, India and worldwide.</p>
          <div className="mt-6">
            <Socials />
          </div>
        </div>
        <div>
          <h4 className="text-[15px] font-extrabold text-white">Services</h4>
          <ul className="mt-4 space-y-2.5 text-[14.5px]">
            {services.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-white">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[15px] font-extrabold text-white">More services</h4>
          <ul className="mt-4 space-y-2.5 text-[14.5px]">
            {services.slice(5).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-white">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[15px] font-extrabold text-white">Company</h4>
          <ul className="mt-4 space-y-2.5 text-[14.5px]">
            {company.map(([l, h]) => (
              <li key={l}>
                <Link href={h} className="hover:text-white">{l}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col justify-between gap-2 py-6 text-[13.5px] sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>
            <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
          </p>
        </Container>
      </div>
    </footer>
  );
}
