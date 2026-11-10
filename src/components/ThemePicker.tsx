"use client";

import { useEffect, useState } from "react";

// Colour themes for the site. Each one sets the site's colour tokens (see globals.css).
type Theme = { id: string; name: string; navy: string; navy2: string; blue: string; mist: string; mist2: string; soft: string; accent: string; ink: string };

export const themes: Theme[] = [
  { id: "navy", name: "Classic Navy", navy: "#0b1d51", navy2: "#13296b", blue: "#2f5bea", mist: "#e9eef7", mist2: "#c9d5ea", soft: "#f6f8fb", accent: "#95bf47", ink: "#1d2433" },
  { id: "shopify", name: "Shopify Green", navy: "#004c3f", navy2: "#006552", blue: "#008060", mist: "#e8f3ef", mist2: "#c4e0d6", soft: "#f5f9f7", accent: "#95bf47", ink: "#1a2b26" },
  { id: "royal", name: "Royal Blue", navy: "#1338be", navy2: "#2048d6", blue: "#0ea5e9", mist: "#e8eefc", mist2: "#c7d4f6", soft: "#f5f8fe", accent: "#22c55e", ink: "#121a33" },
  { id: "teal", name: "Deep Teal", navy: "#0b4f5c", navy2: "#0f6676", blue: "#14a3b8", mist: "#e5f3f5", mist2: "#c2e2e7", soft: "#f4f9fa", accent: "#f5a524", ink: "#13292e" },
  { id: "charcoal", name: "Charcoal & Orange", navy: "#1f2328", navy2: "#2d333b", blue: "#f26b1d", mist: "#f3efeb", mist2: "#e2d9d0", soft: "#faf8f6", accent: "#f26b1d", ink: "#1f2328" },
  { id: "maroon", name: "Maroon & Gold", navy: "#5a1325", navy2: "#741c32", blue: "#c8962e", mist: "#f6ece9", mist2: "#e8d3cc", soft: "#fbf7f5", accent: "#c8962e", ink: "#2a1218" },
  { id: "indigo", name: "Indigo & Pink", navy: "#2b2a78", navy2: "#3a3993", blue: "#e2457c", mist: "#eeedf8", mist2: "#d5d3ef", soft: "#f8f7fc", accent: "#e2457c", ink: "#1c1b3a" },
];

const KEY = "theme-choice";

function apply(id: string) {
  const t = themes.find((x) => x.id === id) ?? themes[0];
  const s = document.documentElement.style;
  s.setProperty("--color-navy", t.navy);
  s.setProperty("--color-navy-2", t.navy2);
  s.setProperty("--color-blue", t.blue);
  s.setProperty("--color-mist", t.mist);
  s.setProperty("--color-mist-2", t.mist2);
  s.setProperty("--color-soft", t.soft);
  s.setProperty("--color-accent", t.accent);
  s.setProperty("--color-ink", t.ink);
}

export default function ThemePicker() {
  const [active, setActive] = useState("navy");
  const [open, setOpen] = useState(true);

  useEffect(() => {
    let saved = "navy";
    try {
      saved = localStorage.getItem(KEY) || "navy";
    } catch {}
    if (!themes.some((t) => t.id === saved)) saved = "navy";
    setActive(saved);
    apply(saved);
  }, []);

  function pick(id: string) {
    setActive(id);
    apply(id);
    try {
      localStorage.setItem(KEY, id);
    } catch {}
  }

  return (
    <div className="fixed bottom-4 right-4 z-[100] w-[230px] rounded-xl border border-black/10 bg-white p-3 text-[#111] shadow-2xl">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between px-1 text-[13px] font-semibold">
        Colour theme
        <span className="text-[16px] leading-none">{open ? "–" : "+"}</span>
      </button>
      {open && (
        <ul className="mt-2 space-y-0.5">
          {themes.map((t) => (
            <li key={t.id}>
              <button
                onClick={() => pick(t.id)}
                className={`flex w-full items-center gap-3 rounded-md px-2 py-1.5 text-left text-[13px] transition ${active === t.id ? "bg-black/[0.06] font-semibold" : "hover:bg-black/[0.04]"}`}
              >
                <span className="flex overflow-hidden rounded ring-1 ring-black/10">
                  <i className="h-5 w-4" style={{ background: t.navy }} />
                  <i className="h-5 w-4" style={{ background: t.blue }} />
                  <i className="h-5 w-4" style={{ background: t.mist2 }} />
                </span>
                {t.name}
                {active === t.id && <span className="ml-auto text-[11px]">✓</span>}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
