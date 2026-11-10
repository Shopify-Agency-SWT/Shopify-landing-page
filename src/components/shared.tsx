import type { ReactNode } from "react";
import { site, type IconKey } from "@/content/site";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function Label({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`inline-flex items-center gap-3 font-display text-[13px] font-bold uppercase tracking-[0.18em] ${light ? "text-white/75" : "text-blue"}`}>
      <span className={`h-[2px] w-8 ${light ? "bg-white/50" : "bg-blue"}`} />
      {children}
    </p>
  );
}

export function Title({ children, className = "", light = false }: { children: ReactNode; className?: string; light?: boolean }) {
  return <h2 className={`mt-3 text-[28px] font-bold leading-[1.2] tracking-[-0.01em] sm:text-[38px] ${light ? "text-white" : "text-navy"} ${className}`}>{children}</h2>;
}

export function Btn({ href, children, variant = "primary", className = "" }: { href: string; children: ReactNode; variant?: "primary" | "dark" | "ghost" | "white"; className?: string }) {
  const v = {
    primary: "bg-blue text-white hover:bg-navy",
    dark: "bg-navy text-white hover:bg-blue",
    ghost: "border border-line bg-white text-navy hover:border-navy",
    white: "bg-white text-navy hover:bg-mist",
  }[variant];
  return (
    <a href={href} className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-display text-[13.5px] font-bold uppercase tracking-[0.06em] transition ${v} ${className}`}>
      {children}
    </a>
  );
}

export function TextLink({ href, children, light = false }: { href: string; children: ReactNode; light?: boolean }) {
  return (
    <a href={href} className={`group inline-flex items-center gap-1.5 text-[15px] font-bold ${light ? "text-white" : "text-navy"}`}>
      <span className="border-b-2 border-current/0 pb-0.5 transition group-hover:border-current">{children}</span>
      <span className="transition group-hover:translate-x-1">→</span>
    </a>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  const initials = site.name
    .split(" ")
    .map((w) => w[0])
    .join("");
  return (
    <a href="#top" className={`flex items-center gap-2.5 ${light ? "text-white" : "text-navy"}`}>
      <span className={`grid h-10 w-10 place-items-center rounded-full font-display text-[15px] font-extrabold ${light ? "bg-white text-navy" : "bg-navy text-white"}`}>{initials}</span>
      <span className="leading-tight">
        <span className="block font-display text-[17px] font-extrabold tracking-[-0.01em]">{site.name}</span>
        <span className={`block text-[11px] font-semibold ${light ? "text-white/60" : "text-ink-2"}`}>Shopify Experts</span>
      </span>
    </a>
  );
}

type Glyph = IconKey | "talent" | "clock" | "price" | "check" | "quality" | "package" | "chat" | "lock" | "team" | "mail" | "phone" | "spark" | "search" | "target" | "rocket";

const paths: Record<Glyph, ReactNode> = {
  store: <><path d="M4 9.5V20h16V9.5" /><path d="M3 9.5l1.5-5h15l1.5 5a2.5 2.5 0 01-4.5 1.4 2.5 2.5 0 01-4.5 0 2.5 2.5 0 01-4.5 0A2.5 2.5 0 013 9.5z" /><path d="M10 20v-5h4v5" /></>,
  theme: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M9 9v11" /></>,
  app: <><rect x="4" y="4" width="7" height="7" rx="1.5" /><rect x="13" y="4" width="7" height="7" rx="1.5" /><rect x="4" y="13" width="7" height="7" rx="1.5" /><path d="M16.5 13v7M13 16.5h7" /></>,
  migrate: <path d="M4 7h13l-3-3M20 17H7l3 3" />,
  seo: <><circle cx="11" cy="11" r="6.5" /><path d="M20 20l-4.2-4.2M8.5 12l2-2 1.5 1.5 2.5-2.5" /></>,
  ads: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
  social: <><path d="M21 12a8 8 0 01-11.8 7L4 20l1.1-4.6A8 8 0 1121 12z" /><path d="M8.5 12h.01M12 12h.01M15.5 12h.01" /></>,
  cro: <path d="M3 4h18l-7 8.5V19l-4 2v-8.5L3 4z" />,
  plus: <path d="M12 3l2.6 5.6 6 .7-4.5 4.1 1.2 6L12 16.4 6.7 19.4l1.2-6L3.4 9.3l6-.7L12 3z" />,
  support: <><path d="M4 14v-2a8 8 0 0116 0v2" /><rect x="3" y="14" width="4" height="6" rx="1.5" /><rect x="17" y="14" width="4" height="6" rx="1.5" /></>,
  talent: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0116 0" /><path d="M17 4l1.5 1.5L21 3" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  price: <><path d="M20 12l-8 8-9-9V3h8l9 9z" /><circle cx="7.5" cy="7.5" r="1.5" /></>,
  check: <path d="M5 12l4.5 4.5L19 7" />,
  quality: <><circle cx="12" cy="9" r="6" /><path d="M8.5 14L7 21l5-2.5L17 21l-1.5-7" /></>,
  package: <><path d="M3 7.5L12 3l9 4.5v9L12 21l-9-4.5v-9z" /><path d="M3 7.5L12 12l9-4.5M12 12v9" /></>,
  chat: <><path d="M4 5h16v11H8l-4 4V5z" /><path d="M8 10h8M8 13h5" /></>,
  lock: <><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 018 0v4" /></>,
  team: <><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0113 0" /><circle cx="17" cy="9" r="2.5" /><path d="M16 14a5 5 0 016 5" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />,
  spark: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6" />,
  search: <><circle cx="11" cy="11" r="6.5" /><path d="M20 20l-4.2-4.2" /></>,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></>,
  rocket: <><path d="M12 15l-3-3c1.5-5 5-8 10-8 0 5-3 8.5-8 10z" /><path d="M9 12l-4 1-1 4 4-1M12 15l-1 4 4-1 1-4" /></>,
};

export function Icon({ name, className = "h-6 w-6" }: { name: Glyph; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {paths[name]}
    </svg>
  );
}

const social = {
  facebook: <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.6V21h2.9z" />,
  instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16.8" cy="7.2" r="1.1" />
    </>
  ),
  linkedin: <path d="M6.9 8.6H4.1V20h2.8V8.6zM5.5 4a1.6 1.6 0 100 3.2 1.6 1.6 0 000-3.2zM20 13.5c0-3-1.6-4.9-4.2-4.9-1.4 0-2.4.8-2.8 1.5V8.6h-2.7V20H13v-5.7c0-1.5.3-2.9 2.1-2.9 1.8 0 1.8 1.7 1.8 3V20H20v-6.5z" />,
  youtube: <path d="M21.6 7.2a2.5 2.5 0 00-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 002.4 7.2 26 26 0 002 12a26 26 0 00.4 4.8 2.5 2.5 0 001.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 001.8-1.8A26 26 0 0022 12a26 26 0 00-.4-4.8zM10 15V9l5.2 3L10 15z" />,
};

export function Socials() {
  return (
    <div className="flex items-center gap-2">
      {(Object.keys(social) as (keyof typeof social)[]).map((k) => (
        <a key={k} href={site.social[k]} aria-label={k} className="grid h-9 w-9 place-items-center rounded-lg border border-white/15 text-white/80 transition hover:border-white hover:text-white">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
            {social[k]}
          </svg>
        </a>
      ))}
    </div>
  );
}
