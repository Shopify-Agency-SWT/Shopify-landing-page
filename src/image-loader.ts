// The site is published as static files under a sub-folder on GitHub Pages
// (https://shopify-agency-swt.github.io/Shopify-landing-page/), so every image path needs that prefix.
// `w` is only there because Next.js requires loaders to use the width; the static host ignores it.
export default function imageLoader({ src, width }: { src: string; width: number }) {
  if (/^https?:\/\//.test(src)) return src;
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${src}?w=${width}`;
}
