export type Metric = {
  label: string;
  value: string;
  context?: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  metrics: Metric[];
  contributions: string[];
  stack: string[];
  theme: "dark" | "light";
};

export const projects: Project[] = [
  {
    slug: "aov-post-purchase",
    name: "AOV.ai Post Purchase Upsell",
    tagline: "One-click upsells, right after checkout.",
    summary:
      "A Shopify app that shows AI-driven upsell offers on the post-purchase, thank-you, and order status pages. Zero risk to checkout conversion, measurable lift to AOV. Climbed to the #2 Post Purchase Upsell app on the Shopify App Store in Q1 2026.",
    metrics: [
      {
        label: "Active merchant installs",
        value: "3,853",
        context: "Live on Shopify as of 2026-04-18",
      },
      {
        label: "Merchants on paid plans",
        value: "962",
        context: "25% of active installs · April 2026",
      },
      {
        label: "Orders generated (Mar 2026)",
        value: "1,588",
        context: "Upsell orders tracked in Firestore",
      },
      {
        label: "Upsell revenue (Apr MTD)",
        value: "$53.7k",
        context: "942 upsell orders · avg $57 each · through Apr 18",
      },
      {
        label: "Trial → Paid",
        value: "65.1%",
        context: "March 2026 · from 241 trial starters",
      },
      {
        label: "All-time platform revenue",
        value: "$20.3k",
        context: "1,169 charges across 238 paying shops since Aug 2025",
      },
    ],
    contributions: [
      "Owned the 2026 roadmap across four pillars: Acquisition, Core Product, Trust, and Monetization.",
      "Wrote 28+ PRDs in Q1 spanning post-purchase offers, thank-you page upsells, and order-status upsells.",
      "Shipped A/B testing, unit pricing display, and merchant-uploadable offer images.",
      "Built the funnel instrumentation in Mixpanel and PostHog; defined the North Star metric as revenue generated via orders.",
      "Drove cross-app growth through Boost Sales and AOV Bundle partnerships.",
    ],
    stack: [
      "Shopify Post-Purchase UI Extensions",
      "React + Shopify Polaris",
      "Node.js + Firebase Functions",
      "Firestore + BigQuery",
      "PostHog, Mixpanel",
      "Brevo (lifecycle email)",
    ],
    theme: "dark",
  },
  {
    slug: "aov-checkout-upsell",
    name: "AOV Checkout Upsell",
    tagline: "Checkout customization for Shopify Plus.",
    summary:
      "A Shopify Plus app that places upsell, validation, and payment/delivery customization logic directly inside checkout. Covers 24 features across eight categories — from upsell blocks and volume savings to VAT validation and order limits.",
    metrics: [
      { label: "PRDs written (Q1 2026)", value: "36" },
      { label: "Features scoped", value: "24", context: "across 8 categories" },
      { label: "Engineering commits (Q1)", value: "~869" },
      { label: "Phase", value: "Phase 2", context: "active development" },
    ],
    contributions: [
      "Owned feature specs end-to-end — research, UX spec, PRD, HTML mockups, dev handoff.",
      "Coordinated a team of 3 developers, 1 designer, and 1 QA across weekly sprints.",
      "Established the handlers → services → repositories backend pattern and shared React hook extractions on the frontend.",
      "Validated the Shopify Plus vs all-plans feature split — Plus for revenue, all-plans for volume — with B2B/B2C research.",
      "Mapped checkout anatomy and documented Polaris Web Components rules (s-choice-list, s-select, s-switch).",
    ],
    stack: [
      "Shopify Checkout UI Extensions",
      "Shopify Functions — Payment, Delivery, Discount",
      "React + Polaris Web Components",
      "Node.js + Firebase Functions",
      "Firestore",
    ],
    theme: "light",
  },
];
