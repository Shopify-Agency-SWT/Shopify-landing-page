import type { IconKey } from "@/content/site";

// Flat illustrations drawn for this site. All colours come from the theme
// (fill-navy, fill-blue, fill-accent, fill-mist...), so they follow the theme picker.

const glyphs: Record<IconKey | "ai" | "chart" | "team", React.ReactNode> = {
  store: (
    <>
      <path d="M-26 -10h52l-6 -16h-40z" className="fill-blue" />
      <rect x="-24" y="-10" width="48" height="34" rx="3" fill="#fff" strokeWidth="3" className="stroke-navy" />
      <rect x="-8" y="6" width="16" height="18" className="fill-accent" />
    </>
  ),
  theme: (
    <>
      <rect x="-30" y="-24" width="26" height="20" rx="3" className="fill-blue" />
      <rect x="2" y="-24" width="28" height="9" rx="3" fill="#ffb547" />
      <rect x="2" y="-11" width="28" height="7" rx="3" className="fill-mist-2" />
      <rect x="-30" y="2" width="60" height="22" rx="3" className="fill-accent" />
    </>
  ),
  app: (
    <>
      <rect x="-30" y="-26" width="24" height="24" rx="6" className="fill-blue" />
      <rect x="6" y="-26" width="24" height="24" rx="6" fill="#ffb547" />
      <rect x="-30" y="2" width="24" height="24" rx="6" className="fill-accent" />
      <rect x="6" y="2" width="24" height="24" rx="6" className="fill-navy" />
    </>
  ),
  migrate: (
    <>
      <rect x="-34" y="-18" width="24" height="34" rx="4" className="fill-mist-2" />
      <rect x="10" y="-18" width="24" height="34" rx="4" className="fill-accent" />
      <path d="M-8 -2h14m-5 -6l6 6l-6 6" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" className="stroke-navy" />
    </>
  ),
  seo: (
    <>
      <circle cx="-6" cy="-6" r="16" fill="#fff" strokeWidth="5" className="stroke-blue" />
      <path d="M6 6l16 16" strokeWidth="7" strokeLinecap="round" className="stroke-navy" />
      <path d="M-14 -4l5 -6l5 4l6 -8" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" className="stroke-accent" />
    </>
  ),
  ads: (
    <>
      <rect x="-30" y="6" width="12" height="18" rx="2" className="fill-mist-2" />
      <rect x="-12" y="-6" width="12" height="30" rx="2" className="fill-blue" />
      <rect x="6" y="-20" width="12" height="44" rx="2" className="fill-accent" />
      <path d="M-30 -8l16 -10l12 6l20 -14" stroke="#ffb547" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  social: (
    <>
      <rect x="-32" y="-24" width="40" height="28" rx="8" className="fill-blue" />
      <path d="M-22 4l-4 10l12 -10z" className="fill-blue" />
      <rect x="-6" y="-2" width="38" height="26" rx="8" fill="#ffb547" />
      <path d="M-4 -12a5 5 0 017 7l-7 7l-7 -7a5 5 0 017 -7z" fill="#fff" transform="translate(17 13)" />
    </>
  ),
  cro: (
    <>
      <path d="M-30 -24h60l-22 24v22l-16 6v-28z" className="fill-blue" />
      <circle cx="20" cy="16" r="10" className="fill-accent" />
      <path d="M15 16l4 4l6 -7" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  plus: (
    <>
      <path d="M0 -28l8 16l18 3l-13 12l3 18l-16 -8l-16 8l3 -18l-13 -12l18 -3z" fill="#ffb547" />
      <circle cx="0" cy="2" r="7" className="fill-navy" />
    </>
  ),
  support: (
    <>
      <path d="M-22 4v-6a22 22 0 0144 0v6" strokeWidth="5" fill="none" className="stroke-navy" />
      <rect x="-28" y="0" width="12" height="20" rx="4" className="fill-blue" />
      <rect x="16" y="0" width="12" height="20" rx="4" className="fill-blue" />
    </>
  ),
  ai: (
    <>
      <rect x="-22" y="-22" width="44" height="40" rx="10" className="fill-navy" />
      <circle cx="-8" cy="-4" r="5" className="fill-accent" />
      <circle cx="8" cy="-4" r="5" className="fill-accent" />
      <rect x="-9" y="8" width="18" height="4" rx="2" fill="#fff" />
      <path d="M0 -22v-8" strokeWidth="3" className="stroke-navy" />
      <circle cx="0" cy="-32" r="4" fill="#ffb547" />
    </>
  ),
  chart: (
    <>
      <path d="M-30 20l14 -14l10 8l22 -24" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="stroke-blue" />
      <circle cx="16" cy="-10" r="6" className="fill-accent" />
      <path d="M-32 26h64" strokeWidth="3" className="stroke-mist-2" />
    </>
  ),
  team: (
    <>
      <circle cx="-14" cy="-10" r="9" className="fill-blue" />
      <circle cx="14" cy="-10" r="9" fill="#ffb547" />
      <path d="M-30 22a16 16 0 0132 0z" className="fill-blue" />
      <path d="M-2 22a16 16 0 0132 0z" fill="#ffb547" />
    </>
  ),
};

export type ArtKey = keyof typeof glyphs;

/** Card illustration: a browser window with a themed icon, on a soft background. */
export function SceneArt({ icon }: { icon: ArtKey }) {
  return (
    <svg viewBox="0 0 360 210" className="h-auto w-full" role="presentation">
      <rect width="360" height="210" className="fill-mist" />
      <circle cx="306" cy="40" r="30" className="fill-mist-2" opacity=".6" />
      <circle cx="40" cy="170" r="46" className="fill-mist-2" opacity=".45" />
      <circle cx="58" cy="44" r="5" className="fill-blue" opacity=".35" />
      <circle cx="80" cy="28" r="3" className="fill-blue" opacity=".35" />
      <g transform="translate(95 42)">
        <rect x="4" y="6" width="170" height="118" rx="10" className="fill-navy" opacity=".12" />
        <rect width="170" height="118" rx="10" fill="#fff" />
        <rect width="170" height="20" rx="10" className="fill-navy" />
        <rect y="10" width="170" height="10" className="fill-navy" />
        <circle cx="13" cy="10" r="3" fill="#ff6b6b" />
        <circle cx="23" cy="10" r="3" fill="#ffb547" />
        <circle cx="33" cy="10" r="3" className="fill-accent" />
        <rect x="14" y="100" width="56" height="6" rx="3" className="fill-mist-2" />
        <rect x="100" y="100" width="56" height="6" rx="3" className="fill-mist-2" />
        <g transform="translate(85 62)">{glyphs[icon]}</g>
      </g>
      <g transform="translate(288 128)">
        <path d="M10 40c-6-18-20-22-22-36 10 4 20 14 22 36zM12 40c2-20 12-30 22-34-2 14-14 20-22 34z" className="fill-navy" opacity=".8" />
        <rect x="0" y="38" width="22" height="22" rx="4" className="fill-blue" />
      </g>
    </svg>
  );
}

/** Small round badge with an icon, used for steps and lists. */
export function BadgeArt({ icon }: { icon: ArtKey }) {
  return (
    <svg viewBox="-50 -50 100 100" className="h-auto w-full" role="presentation">
      <circle r="48" className="fill-mist" />
      <circle r="36" fill="#fff" />
      <g transform="scale(.9)">{glyphs[icon]}</g>
    </svg>
  );
}

/** Large hero illustration: desktop store, phone, and floating cards. */
export function HeroArt() {
  return (
    <svg viewBox="0 0 560 460" className="h-auto w-full" role="presentation">
      {/* backdrop */}
      <circle cx="300" cy="230" r="210" fill="#fff" opacity=".08" />
      <circle cx="300" cy="230" r="150" fill="#fff" opacity=".06" />
      {/* desk */}
      <rect x="40" y="392" width="480" height="12" rx="6" fill="#fff" opacity=".25" />
      {/* monitor */}
      <rect x="80" y="70" width="360" height="250" rx="14" className="fill-navy-2" />
      <rect x="92" y="82" width="336" height="226" rx="6" fill="#fff" />
      <rect x="230" y="320" width="60" height="50" className="fill-navy-2" />
      <rect x="190" y="366" width="140" height="14" rx="7" className="fill-navy-2" />
      {/* store page on screen */}
      <rect x="92" y="82" width="336" height="26" rx="6" className="fill-blue" />
      <rect x="92" y="96" width="336" height="12" className="fill-blue" />
      <rect x="106" y="90" width="40" height="8" rx="4" fill="#fff" opacity=".9" />
      <rect x="330" y="90" width="84" height="8" rx="4" fill="#fff" opacity=".6" />
      <rect x="106" y="122" width="150" height="16" rx="4" className="fill-navy" />
      <rect x="106" y="146" width="120" height="8" rx="4" className="fill-mist-2" />
      <rect x="106" y="160" width="100" height="8" rx="4" className="fill-mist-2" />
      <rect x="106" y="178" width="70" height="20" rx="10" className="fill-accent" />
      <rect x="276" y="118" width="138" height="86" rx="8" className="fill-mist" />
      <circle cx="345" cy="160" r="26" fill="#ffb547" />
      <rect x="330" y="140" width="30" height="40" rx="6" fill="#fff" />
      {/* product grid */}
      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(${106 + i * 80} 218)`}>
          <rect width="68" height="76" rx="6" className="fill-soft" />
          <rect x="14" y="10" width="40" height="34" rx="4" className={i % 2 ? "fill-mist-2" : "fill-mist"} />
          <rect x="10" y="52" width="40" height="6" rx="3" className="fill-navy" opacity=".7" />
          <rect x="10" y="62" width="24" height="6" rx="3" className="fill-blue" />
        </g>
      ))}
      {/* phone */}
      <rect x="400" y="190" width="104" height="196" rx="18" className="fill-navy" />
      <rect x="408" y="202" width="88" height="172" rx="10" fill="#fff" />
      <rect x="408" y="202" width="88" height="22" rx="10" className="fill-blue" />
      <rect x="408" y="214" width="88" height="10" className="fill-blue" />
      <rect x="418" y="234" width="68" height="56" rx="6" className="fill-mist" />
      <circle cx="452" cy="262" r="16" fill="#ffb547" />
      <rect x="418" y="300" width="56" height="7" rx="3.5" className="fill-navy" opacity=".7" />
      <rect x="418" y="313" width="34" height="7" rx="3.5" className="fill-blue" />
      <rect x="418" y="334" width="68" height="22" rx="11" className="fill-accent" />
      {/* card: sales chart */}
      <g transform="translate(20 150)">
        <rect width="130" height="92" rx="12" fill="#fff" />
        <rect x="14" y="14" width="56" height="7" rx="3.5" className="fill-mist-2" />
        <path d="M16 72l24-18 18 10 24-24 30-12" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" className="stroke-blue" />
        <circle cx="112" cy="28" r="6" className="fill-accent" />
      </g>
      {/* card: order received */}
      <g transform="translate(330 24)">
        <rect width="170" height="58" rx="12" fill="#fff" />
        <circle cx="30" cy="29" r="15" className="fill-accent" />
        <path d="M23 29l5 5l9 -10" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="54" y="18" width="90" height="8" rx="4" className="fill-navy" opacity=".8" />
        <rect x="54" y="33" width="60" height="7" rx="3.5" className="fill-mist-2" />
      </g>
      {/* card: rating */}
      <g transform="translate(40 290)">
        <rect width="120" height="44" rx="12" fill="#fff" />
        {[0, 1, 2, 3, 4].map((i) => (
          <path key={i} transform={`translate(${18 + i * 20} 22) scale(.36)`} d="M0 -20l6 12l13 2l-9.5 9l2.3 13L0 10l-11.8 6l2.3 -13l-9.5 -9l13 -2z" fill="#ffb547" />
        ))}
      </g>
      {/* plant */}
      <g transform="translate(500 330)">
        <path d="M14 56c-8-26-28-30-30-50 14 6 28 20 30 50zM16 56c3-28 17-42 31-48-3 20-20 28-31 48z" fill="#fff" opacity=".35" />
        <rect x="0" y="54" width="30" height="10" rx="3" fill="#fff" opacity=".35" />
      </g>
    </svg>
  );
}
