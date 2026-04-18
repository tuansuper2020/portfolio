export type Experience = {
  start: string;
  end: string;
  company: string;
  role: string;
  highlights: string[];
  current?: boolean;
};

export const experience: Experience[] = [
  {
    start: "07/2025",
    end: "Present",
    company: "Avada Group",
    role: "Product Owner",
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
    highlights: [
      "Designed prototype features for the Pine X app in Figma.",
      "Researched the financial platform landscape and wrote meeting summaries for senior management.",
    ],
  },
];

export const education = {
  school: "Foreign Trade University",
  program: "High Quality International Business Program",
  years: "2019 – 2023",
  gpa: "3.69 / 4.00",
};

export const certifications = [
  "PSPO I — Professional Scrum Product Owner",
  "APTIS C1 (English proficiency)",
  "PM Foundations — LinkedIn Learning",
  "Top 30 Into The Case — YRC FTU",
];
