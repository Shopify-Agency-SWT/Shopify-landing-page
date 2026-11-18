// All website text lives here, so it can be changed without touching the design.

export const site = {
  name: "Shopify Agency",
  email: "hello@example.com", // TODO: real agency email
  phone: "", // TODO: business phone / WhatsApp
  // TODO: add real profile links. Icons only show for links that are filled in.
  social: { facebook: "", instagram: "", linkedin: "", youtube: "" },
  // Colour theme visitors see. Ids are listed in components/ThemePicker.tsx.
  theme: "navy",
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

// Each service has its own page at /services/<slug>.
// `text` is the short card text, `intro` opens the service page, `includes` is the checklist on it.
export type Service = { slug: string; title: string; text: string; icon: IconKey; intro: string; includes: string[] };

export const services: Service[] = [
  {
    slug: "store-design-build",
    title: "Store Design & Build",
    text: "Complete Shopify stores designed around your brand and ready to sell from day one.",
    icon: "store",
    intro: "We design and build your whole Shopify store, from the first page layout to the day you take your first order. You get a store that matches your brand, loads fast on phones and is easy for your team to run.",
    includes: ["Store design around your brand", "Home, collection, product and cart pages", "Product and collection setup", "Payments, shipping and tax settings", "Mobile-first build and speed checks", "Training so your team can run the store"],
  },
  {
    slug: "theme-development",
    title: "Theme Development",
    text: "Custom themes or changes to Dawn and premium themes. Fast, mobile-first, easy to edit.",
    icon: "theme",
    intro: "Whether you need a fully custom theme or changes to Dawn or a premium theme, we write clean theme code that stays fast and that you can keep editing yourself in the theme editor.",
    includes: ["Custom theme builds", "Changes to Dawn and premium themes", "New sections and blocks you can edit", "Mobile-first layouts", "Speed improvements", "Theme bug fixes"],
  },
  {
    slug: "custom-apps-headless",
    title: "Custom Apps & Headless",
    text: "Private apps, integrations, headless Next.js stores and mobile apps connected to Shopify.",
    icon: "app",
    intro: "When Shopify and the App Store cannot do what your business needs, we build it. For BlinkDrop we built custom apps for offers and live carts, a headless Next.js website and a mobile app, all connected to Shopify.",
    includes: ["Private Shopify apps", "Integrations with your other systems", "Headless storefronts in Next.js", "Mobile apps connected to Shopify", "Custom offers and cart features", "Ongoing app support"],
  },
  {
    slug: "migration-to-shopify",
    title: "Migration to Shopify",
    text: "Move from WooCommerce, Magento or Wix with products, customers, orders and SEO intact.",
    icon: "migrate",
    intro: "Moving platforms should not cost you customers or rankings. We move your store from WooCommerce, Magento or Wix to Shopify with your products, customers, orders and SEO intact.",
    includes: ["Product, customer and order migration", "URL redirects to protect your SEO", "Theme setup or redesign on Shopify", "Payments, shipping and tax setup", "Checks before and after the switch", "Support after go-live"],
  },
  {
    slug: "shopify-seo",
    title: "Shopify SEO",
    text: "Technical SEO, structured data and product content that helps you rank on Google.",
    icon: "seo",
    intro: "A store nobody can find does not sell. We fix the technical basics, add structured data and improve your product and collection content, so Google understands your store and shoppers can find it.",
    includes: ["Technical SEO audit and fixes", "Structured data for products and collections", "Product and collection content", "Site speed improvements", "Keyword research for your products", "Regular updates on what changed"],
  },
  {
    slug: "meta-google-ads",
    title: "Meta & Google Ads",
    text: "Facebook, Instagram and Google Shopping ads, measured on sales, not clicks.",
    icon: "ads",
    intro: "We run Facebook, Instagram and Google Shopping ads for Shopify stores and judge them on one thing: sales. Tracking is set up properly first, so you can see what every campaign brings in.",
    includes: ["Facebook and Instagram campaigns", "Google Shopping and Search ads", "Product feed setup", "Pixel, GA4 and conversion tracking", "Ad creatives and testing", "Reports based on sales, not clicks"],
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    text: "Content, posting and community management for Instagram and Facebook.",
    icon: "social",
    intro: "We plan, create and post content for your Instagram and Facebook pages and look after the people who reply. Your brand stays active and consistent without taking up your day.",
    includes: ["Content planning", "Posts for Instagram and Facebook", "A regular posting schedule", "Replies to comments and messages", "Community management", "Content that matches your brand"],
  },
  {
    slug: "conversion-rate-optimization",
    title: "Conversion Rate Optimization",
    text: "Find what stops visitors buying and fix it: speed, product pages, cart and checkout.",
    icon: "cro",
    intro: "If people visit but do not buy, more traffic will not fix it. We study how visitors use your store, find where they drop off and fix it: speed, product pages, cart and checkout.",
    includes: ["Review of how visitors use your store", "Speed improvements", "Product page improvements", "Cart and checkout fixes", "Testing of changes", "Month-by-month improvements"],
  },
  {
    slug: "shopify-plus",
    title: "Shopify Plus",
    text: "Checkout extensions, B2B, multiple stores and Shopify Flow automations.",
    icon: "plus",
    intro: "Shopify Plus opens up features that larger brands need. We set up checkout extensions, B2B selling, multiple stores and Shopify Flow automations, so your team spends less time on manual work.",
    includes: ["Checkout extensions", "B2B and wholesale setup", "Multiple stores", "Shopify Flow automations", "Custom apps and integrations", "Ongoing support"],
  },
  {
    slug: "maintenance-support",
    title: "Maintenance & Support",
    text: "Monthly care plans for fixes, updates, new products and steady improvements.",
    icon: "support",
    intro: "A store needs looking after once it is live. Our monthly care plans cover fixes, updates, new products and steady improvements, with help a message, call or ticket away.",
    includes: ["Bug fixes and theme updates", "New products and collections added", "App updates and checks", "Small design and content changes", "Steady month-by-month improvements", "Help by message, call or ticket"],
  },
];

// How every project runs. Shown on each service page.
export const howWeWork = [
  { title: "Analysis", text: "We learn about your business, your customers and what you need the store to do." },
  { title: "Plan & quote", text: "You get a clear scope, a timeline and a fixed price before any work starts." },
  { title: "Build & check", text: "We build, test on real devices and share progress with you every week." },
  { title: "Deliver & support", text: "We launch on time, collect your feedback and stay on hand afterwards." },
];

// Questions clients ask before they get in touch. Shown on the Services and Contact pages.
export const faqs = [
  { q: "How much does a Shopify project cost?", a: "It depends on what you need, so we start with a free 30-minute call. After that you get a fixed quote with a clear scope. Extra costs from delays or bugs are on us, not you." },
  { q: "How long will my project take?", a: "A single theme fix is quick, and a complete store build takes longer. You get a timeline together with your quote, and weekly updates so you always know where things stand." },
  { q: "Can you work on a store I already have?", a: "Yes. We take on anything from a single theme fix to a complete rebuild, and we also offer monthly care plans for stores that are already live." },
  { q: "Will I lose products, customers or rankings if I move to Shopify?", a: "No. We move your products, customers and orders across and set up redirects from your old pages, so your SEO stays intact." },
  { q: "Will you sign an NDA?", a: "Yes. Your data and ideas stay private, and we are happy to sign an NDA before you share any details." },
  { q: "What happens after my store goes live?", a: "We stay with you. Our care plans cover fixes, updates, new products and steady improvements, and support is a message, call or ticket away." },
  { q: "Which countries do you work with?", a: "We build and grow Shopify stores for brands in the UK, India and around the world." },
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

// TODO: add real client reviews (ask BlinkDrop and Swayogi for a short quote).
// The "What our clients say" section and its menu links stay hidden while this list is empty.
// Format: { quote: "…", name: "Client name", role: "Role, Company" }
export const testimonials: { quote: string; name: string; role: string }[] = [];

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
