import type { Locale } from "@/lib/i18n";

export type Writing = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readingTime: string;
};

const en: Writing[] = [
  {
    slug: "first-quarter-as-product-owner",
    title: "What I learned in my first quarter as a Product Owner",
    date: "April 2026",
    excerpt:
      "Three months owning two Shopify apps. What worked, what I'd change, and the numbers behind the shipping.",
    readingTime: "6 min read",
  },
  {
    slug: "prds-that-dont-confuse-engineers",
    title: "How I write PRDs that don't confuse engineers",
    date: "April 2026",
    excerpt:
      "A six-phase workflow, a tight section structure, and one rule about tech details that saves hours per PRD.",
    readingTime: "5 min read",
  },
  {
    slug: "shipping-on-shopify",
    title: "Shipping on Shopify: the non-obvious things",
    date: "April 2026",
    excerpt:
      "Ten bug patterns we keep seeing across checkout and post-purchase — and the checklist we now run before every launch.",
    readingTime: "7 min read",
  },
  {
    slug: "po-automation-playbook",
    title: "Turning repetitive PO work into a pipeline",
    date: "April 2026",
    excerpt:
      "From research to Notion in one flow: how to automate the boring parts of being a Product Owner so you can think about the work, not chase it.",
    readingTime: "5 min read",
  },
];

const vi: Writing[] = [
  {
    slug: "first-quarter-as-product-owner",
    title: "Những gì tôi học được trong quý đầu làm Product Owner",
    date: "Tháng 4/2026",
    excerpt:
      "Ba tháng sở hữu hai ứng dụng Shopify. Điều gì hiệu quả, điều gì tôi sẽ thay đổi, và con số đằng sau việc ship hàng.",
    readingTime: "6 phút đọc",
  },
  {
    slug: "prds-that-dont-confuse-engineers",
    title: "Cách tôi viết PRD không làm engineer bối rối",
    date: "Tháng 4/2026",
    excerpt:
      "Một workflow sáu pha, cấu trúc section gọn, và một quy tắc về tech detail tiết kiệm hàng giờ mỗi PRD.",
    readingTime: "5 phút đọc",
  },
  {
    slug: "shipping-on-shopify",
    title: "Ship trên Shopify: những thứ không-hiển-nhiên",
    date: "Tháng 4/2026",
    excerpt:
      "Mười pattern bug lặp lại ở checkout và post-purchase — cùng checklist chúng tôi chạy trước mỗi lần launch.",
    readingTime: "7 phút đọc",
  },
  {
    slug: "po-automation-playbook",
    title: "Biến công việc PO lặp lại thành pipeline",
    date: "Tháng 4/2026",
    excerpt:
      "Từ research đến Notion trong một flow: tự động hoá phần buồn tẻ của công việc PO để dành đầu óc cho thứ quan trọng.",
    readingTime: "5 phút đọc",
  },
];

export function getWritings(lang: Locale): Writing[] {
  return lang === "vi" ? vi : en;
}

export const contact = {
  email: "vumanhtuanftuk58@gmail.com",
  phone: "+84 366 893 089",
  linkedin: "https://www.linkedin.com/in/tu%E1%BA%A5n-v%C5%A9-b268171b0/",
  linkedinDisplay: "linkedin.com/in/tuấn-vũ",
};
