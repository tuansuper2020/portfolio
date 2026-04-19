import type { Locale } from "@/lib/i18n";

export type Experience = {
  start: string;
  end: string;
  company: string;
  role: string;
  highlights: string[];
  current?: boolean;
  logo?: string;
};

const en: Experience[] = [
  {
    start: "07/2025",
    end: "Present",
    company: "Avada Group",
    role: "Product Owner",
    logo: "/logos/companies/avada.png",
    current: true,
    highlights: [
      "Own roadmap for AOV.ai Post Purchase Upsell and AOV Checkout Upsell — two Shopify apps for merchant AOV growth.",
      "Lead a cross-functional team across engineering, design, and QA through the research → PRD → mockup → dev pipeline.",
      "Drive pricing, funnel design, and cross-app growth strategy with Boost Sales and AOV Bundle.",
    ],
  },
  {
    start: "10/2024",
    end: "06/2025",
    company: "Viettel Digital",
    role: "Product Owner",
    logo: "/logos/companies/viettel.png",
    highlights: [
      "Launched Game Hub on Viettel Money — 230,000 organic users in 3 months.",
      "Wrote PRDs for payment, reward, and mission systems; prioritized backlog and ran daily standups.",
      "Reorganized 207 services into 18 search-friendly groups.",
    ],
  },
  {
    start: "01/2023",
    end: "09/2024",
    company: "BSS Group — SBC Division",
    role: "Business Analyst, Product Owner",
    logo: "/logos/companies/bsscommerce.png",
    highlights: [
      "Led BSS B2B Portal (B2B order management app on Shopify) from requirements through QA handoff.",
      "Ran the Built for Shopify (BFS) badge project end-to-end.",
      "Monitored ROAS, PCR, and in-app sessions to steer roadmap decisions.",
    ],
  },
  {
    start: "03/2022",
    end: "12/2022",
    company: "Pinetree Securities JSC",
    role: "Platform Strategic Intern",
    logo: "/logos/companies/pinetree.png",
    highlights: [
      "Designed prototype features for the Pine X app in Figma.",
      "Researched the financial platform landscape and wrote meeting summaries for senior management.",
    ],
  },
];

const vi: Experience[] = [
  {
    start: "07/2025",
    end: "Hiện tại",
    company: "Avada Group",
    role: "Product Owner",
    logo: "/logos/companies/avada.png",
    current: true,
    highlights: [
      "Sở hữu roadmap cho AOV.ai Post Purchase Upsell và AOV Checkout Upsell — hai ứng dụng Shopify giúp merchant tăng AOV.",
      "Dẫn dắt team cross-functional gồm engineering, design, QA qua pipeline research → PRD → mockup → dev.",
      "Định hướng pricing, funnel, và chiến lược cross-app growth với Boost Sales và AOV Bundle.",
    ],
  },
  {
    start: "10/2024",
    end: "06/2025",
    company: "Viettel Digital",
    role: "Product Owner",
    logo: "/logos/companies/viettel.png",
    highlights: [
      "Launch Game Hub trên Viettel Money — 230.000 người dùng tự nhiên trong 3 tháng.",
      "Viết PRD cho hệ thống thanh toán, reward và mission; ưu tiên backlog và chủ trì daily standup.",
      "Tái tổ chức 207 dịch vụ thành 18 nhóm dễ tìm kiếm.",
    ],
  },
  {
    start: "01/2023",
    end: "09/2024",
    company: "BSS Group — SBC Division",
    role: "Business Analyst, Product Owner",
    logo: "/logos/companies/bsscommerce.png",
    highlights: [
      "Dẫn BSS B2B Portal (app quản lý đơn B2B trên Shopify) từ requirement đến handoff QA.",
      "Chạy dự án huy hiệu Built for Shopify (BFS) từ đầu đến cuối.",
      "Theo dõi ROAS, PCR và session trong app để điều hướng roadmap.",
    ],
  },
  {
    start: "03/2022",
    end: "12/2022",
    company: "Pinetree Securities JSC",
    role: "Platform Strategic Intern",
    logo: "/logos/companies/pinetree.png",
    highlights: [
      "Thiết kế prototype tính năng cho app Pine X trên Figma.",
      "Nghiên cứu bức tranh nền tảng tài chính và viết meeting summary cho ban điều hành.",
    ],
  },
];

export function getExperience(lang: Locale): Experience[] {
  return lang === "vi" ? vi : en;
}

export const education = {
  en: {
    school: "Foreign Trade University",
    program: "High Quality International Business Program",
    years: "2019 – 2023",
    gpa: "3.69 / 4.00",
  },
  vi: {
    school: "Đại học Ngoại Thương (FTU)",
    program: "Chương trình Chất lượng cao — Kinh doanh quốc tế",
    years: "2019 – 2023",
    gpa: "3.69 / 4.00",
  },
};

export const certifications = {
  en: [
    "PSPO I — Professional Scrum Product Owner",
    "APTIS C1 (English proficiency)",
    "PM Foundations — LinkedIn Learning",
    "Top 30 Into The Case — YRC FTU",
  ],
  vi: [
    "PSPO I — Professional Scrum Product Owner",
    "APTIS C1 (Tiếng Anh)",
    "PM Foundations — LinkedIn Learning",
    "Top 30 Into The Case — YRC FTU",
  ],
};
