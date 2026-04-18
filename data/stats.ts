export type Stat = {
  value: string;
  label: string;
  detail?: string;
};

export const q1Stats: Stat[] = [
  {
    value: "64+",
    label: "PRDs written",
    detail: "36 for Checkout Upsell · 28+ for Post Purchase",
  },
  {
    value: "70+",
    label: "HTML mockup sets",
    detail: "Polaris for admin · checkout tokens for buyer",
  },
  {
    value: "~869",
    label: "Engineering commits supported",
    detail: "on Checkout Upsell alone",
  },
  {
    value: "10",
    label: "QA bug patterns codified",
    detail: "turned into a pre-launch checklist",
  },
  {
    value: "6+",
    label: "Automation scripts built",
    detail: "Notion sync, screenshot pipeline, GitBook auto-sync",
  },
];
