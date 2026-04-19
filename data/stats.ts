import type { Locale } from "@/lib/i18n";

export type Stat = { value: string; label: string; detail?: string };

const en: Stat[] = [
  { value: "64+", label: "PRDs written", detail: "36 for Checkout Upsell · 28+ for Post Purchase" },
  { value: "70+", label: "HTML mockup sets", detail: "Polaris for admin · checkout tokens for buyer" },
  { value: "~869", label: "Engineering commits supported", detail: "on Checkout Upsell alone" },
  { value: "10", label: "QA bug patterns codified", detail: "turned into a pre-launch checklist" },
  { value: "6+", label: "Automation scripts built", detail: "Notion sync, screenshot pipeline, GitBook auto-sync" },
];

const vi: Stat[] = [
  { value: "64+", label: "PRD đã viết", detail: "36 cho Checkout Upsell · 28+ cho Post Purchase" },
  { value: "70+", label: "Bộ mockup HTML", detail: "Polaris cho admin · checkout token cho buyer" },
  { value: "~869", label: "Commit engineering đã hỗ trợ", detail: "chỉ riêng Checkout Upsell" },
  { value: "10", label: "Pattern bug QA đã đúc kết", detail: "thành checklist trước khi launch" },
  { value: "6+", label: "Script tự động đã build", detail: "Notion sync, pipeline screenshot, GitBook auto-sync" },
];

export function getStats(lang: Locale): Stat[] {
  return lang === "vi" ? vi : en;
}
