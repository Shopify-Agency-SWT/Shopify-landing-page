// All website text lives here, so it can be changed without touching the design.

export const site = {
  name: "Shopify Agency",
  email: "hello@example.com", // TODO: real agency email
  phone: "", // TODO: business phone / WhatsApp
  social: { facebook: "#", instagram: "#", linkedin: "#", youtube: "#" },
};

export type IconKey = "store" | "theme" | "app" | "migrate" | "seo" | "ads" | "social" | "cro" | "plus" | "support";

export const hero = {
  promises: [
    { title: "Expert Shopify Talent", text: "Designers, developers and marketers who work only on Shopify." },
    { title: "24x7 Support", text: "Help when you need it, by message, call or ticket." },
    { title: "Fixed Price", text: "A clear quote up front. Delays and bugs are on us." },
  ],
  title: "Shopify stores built by experts, and grown with care.",
  text: "Tired of juggling freelancers, agencies and app developers? Get one team for design, development, apps, SEO and ads, with clear timelines and a fixed price.",
};

export const services: { title: string; text: string; icon: IconKey }[] = [
  { title: "Store Design & Build", text: "Complete Shopify stores designed around your brand and ready to sell from day one.", icon: "store" },
  { title: "Theme Development", text: "Custom themes or changes to Dawn and premium themes. Fast, mobile-first, easy to edit.", icon: "theme" },
  { title: "Custom Apps & Headless", text: "Private apps, integrations, headless Next.js stores and mobile apps connected to Shopify.", icon: "app" },
  { title: "Migration to Shopify", text: "Move from WooCommerce, Magento or Wix with products, customers, orders and SEO intact.", icon: "migrate" },
  { title: "Shopify SEO", text: "Technical SEO, structured data and product content that helps you rank on Google.", icon: "seo" },
  { title: "Meta & Google Ads", text: "Facebook, Instagram and Google Shopping ads, measured on sales, not clicks.", icon: "ads" },
  { title: "Social Media Management", text: "Content, posting and community management for Instagram and Facebook.", icon: "social" },
  { title: "Conversion Rate Optimization", text: "Find what stops visitors buying and fix it: speed, product pages, cart and checkout.", icon: "cro" },
  { title: "Shopify Plus", text: "Checkout extensions, B2B, multiple stores and Shopify Flow automations.", icon: "plus" },
  { title: "Maintenance & Support", text: "Monthly care plans for fixes, updates, new products and steady improvements.", icon: "support" },
];

export const nowWhat = {
  title: "You have a beautiful Shopify store. Now what?",
  intro: "A fast, good-looking store is important, but it is only the beginning. Thousands of new stores launch every day, and a great theme alone does not bring traffic, orders or repeat customers.",
  steps: [
    { title: "Study", text: "We study your business, customers, competitors and how people use your store." },
    { title: "Find the leaks", text: "We find what stops visitors from becoming customers." },
    { title: "Improve", text: "We keep improving your store, ads and customer journey, month after month." },
    { title: "Grow", text: "Your store becomes a steady sales and growth engine, not just an online presence." },
  ],
};

export const ai = {
  title: "Leaving money on the table by ignoring AI?",
  text: [
    "AI is no longer something online stores can watch from the sidelines. Brands are already using it to write product content, answer customers faster, personalise shopping and automate daily work.",
    "Stores that adopt the right AI tools early will move faster and spend less. We study your business and add AI and automation where it actually pays off.",
  ],
  uses: ["AI product descriptions & SEO content", "Customer support chatbots", "Shopify Flow automations", "Smart search & recommendations", "Order, stock & report automation", "AI ad creatives & testing"],
};

export const about = {
  title: "Who are we?",
  text: [
    "We are a team of Shopify designers, developers and marketers. We build and grow Shopify stores for brands in the UK, India and around the world.",
    "Our work ranges from handmade beauty brands to a full grocery delivery business with custom Shopify apps, a headless website and a mobile app.",
    "Our team has the skills to take on projects of any size, complexity and urgency, from a single theme fix to a complete store build.",
  ],
};

export const why = [
  "Business owners often struggle with freelancers and agencies because of missing processes and poor communication. We want to end that.",
  "We aim to give you expert Shopify work at a fair price, with the best possible experience.",
  "We give every client a clear, reliable system for delivery, so quality, cost and time targets are met.",
];

export const different = [
  { title: "Best Quality", text: "Every project follows the same steps: analysis, planning, build, quality checks, timely delivery and feedback." },
  { title: "Fixed Pricing", text: "You get a fixed quote. Extra costs from delays or bugs are on us, not you." },
  { title: "Services as Packages", text: "Ready-made Shopify packages with clear scope cut delivery time and cost." },
  { title: "24x7 Support", text: "We are always ready to help, just a message, call or ticket away." },
  { title: "Clear Communication", text: "Regular calls, weekly updates and a client chat group, so you always know where things stand." },
  { title: "NDA & Privacy", text: "Your data and ideas stay private. We are happy to sign an NDA." },
  { title: "A Happy Team", text: "A team that is looked after does better work. We invest in our people, so the same faces stay on your project." },
];

export const stats = [
  { value: "10", label: "Shopify services" },
  { value: "2", label: "Countries with live stores" },
  { value: "100%", label: "Fixed-price quotes" },
  { value: "24x7", label: "Support" },
];

// TODO: replace with real client reviews before going live
export const testimonials = [
  { quote: "Client review goes here. Ask BlinkDrop for a short quote about working with us.", name: "Client name", role: "Role, BlinkDrop" },
  { quote: "Client review goes here. Ask Swayogi for a short quote about the new store.", name: "Client name", role: "Role, Swayogi" },
];

export const brands = [
  {
    name: "BlinkDrop",
    note: "Grocery delivery · United Kingdom",
    image: "/work/blinkdrop.png",
    url: "https://blinkdrop.co.uk",
    story: "BlinkDrop delivers groceries, snacks and drinks in 20–60 minutes. We built the Shopify store, custom apps for offers and live carts, a headless website, a mobile app and the product catalogue behind them.",
    tags: ["Theme development", "Custom apps", "Headless Next.js", "Mobile app", "SEO", "GA4 & Meta"],
  },
  {
    name: "Swayogi",
    note: "Ayurvedic beauty · India",
    image: "/work/swayogi.png",
    url: "",
    story: "Swayogi makes handmade ubtans, creams and herbal hair care. We designed the store, set up products and collections by skin concern, added UPI and cash on delivery, and made the site ready for Google.",
    tags: ["Store design", "Theme customisation", "Collections", "SEO"],
  },
];

export const posts = [
  { tag: "Pricing", title: "How much does a Shopify store cost in 2026?" },
  { tag: "Migration", title: "WooCommerce to Shopify: a step-by-step migration guide" },
  { tag: "Marketing", title: "Meta ads for new Shopify stores: what to spend first" },
];
