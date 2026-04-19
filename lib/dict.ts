import type { Locale } from "./i18n";

export const dict = {
  en: {
    nav: { work: "Work", about: "About", writings: "Writings", contact: "Contact" },
    hero: {
      kicker: "Product Owner · Avada Group",
      title: "Vũ Mạnh Tuấn.",
      subtitle: "Shipping Shopify apps that grow merchant AOV.",
      description:
        "I build post-purchase and checkout upsell products for Shopify merchants — currently ranked #2 on the App Store.",
      ctaWork: "View work",
      ctaContact: "Get in touch",
    },
    about: {
      kicker: "About",
      heading: "A product owner who ships — and writes down what works.",
      p1: "I'm a Product Owner at Avada Group, where I own two Shopify apps that help merchants grow their Average Order Value: AOV.ai Post Purchase Upsell (ranked #2 on the App Store in Q1 2026) and AOV Checkout Upsell.",
      p2: "Before Avada I was a Product Owner at Viettel Digital — the team behind Viettel Money — where I launched Game Hub and attracted 230,000 organic users in its first three months. Earlier I was a Business Analyst at BSS Group, leading the Built for Shopify badge project and the BSS B2B Portal app.",
      p3: "I like turning repetitive work into pipelines, keeping PRDs short enough to actually be read, and grounding every product decision in numbers merchants feel.",
      educationTitle: "Education",
      certsTitle: "Certifications",
    },
    timeline: {
      kicker: "Journey",
      heading: "Four years, four teams — each one a little bigger.",
      now: "Now",
    },
    work: {
      kicker: "Featured Work",
      contributions: "What I contributed",
      stack: "Stack",
    },
    aiWorkflow: {
      kicker: "How the PRDs actually get made",
      heading: "AI does the reading. I do the calling.",
      intro:
        "Sixty-four PRDs in a quarter isn't a human pace. What made it possible was splitting the job cleanly: agents read, gather, and propose; I decide, cut, and sign. Here are the three gates every feature walks through before it ships.",
      researchTitle: "Research before writing",
      researchLead:
        "Every PRD starts as a Research Brief — a structured document that answers six fixed questions. The brief feeds directly into the PRD sections, so writing becomes translation, not invention. A Claude skill (prd-research) runs the six phases in parallel, then I review and prune before the brief becomes a PRD.",
      uxTitle: "UX audit — does it feel right?",
      uxLead:
        "Every feature goes through a five-criteria scorecard and a UX psychology pass before handoff. A Claude skill (ux-audit) does the first read and flags anything that scores below 4 out of 5; I follow up on each flag and rate severity myself (🔴 critical, 🟡 major, 🟢 minor).",
      bfsTitle: "BFS check — does Shopify approve?",
      bfsLead:
        "Built for Shopify is the App Store's compliance badge — shops trust it, and apps without it get buried. Every PRD and every mockup goes through a separate bfs-check skill before leaving my desk. The skill reads a set of BFS rules loaded as context, then scores the feature across ten categories and returns PASS · CONDITIONAL · FAIL with an action list.",
      psychologyTitle: "UX psychology checklist",
      warningsTitle: "AOV.ai-specific warnings",
      exampleTitle: "Example · Translation feature research brief",
    },
    skills: {
      kicker: "Skill library",
      heading: "Claude skills I wrote to move faster.",
      lead: "A skill is a small, reusable Markdown file that teaches Claude a specific job — from researching a feature to checking it against Shopify's compliance rules. I built one per recurring task. They all live in .claude/skills/ and run on demand.",
    },
    bots: {
      kicker: "Bots I built",
      heading: "Two bots, one rule: never fabricate.",
      lead: "Customer support and internal Q&A are where bad answers cost the most — so every answer has to come from something I actually wrote down, not something an LLM made up. Here are the two I shipped.",
      hermesSubtitle: "01 · Telegram · Internal CKU guide",
      hermesBody1:
        "Hermes answers questions about our Shopify apps on Telegram — CS teammates chat with it in a group and in DMs when they're stuck on a merchant issue. It knows every feature in Checkout Upsell, Free Gift, Bundle Upsell, Post-Purchase, and Cart Drawer because the entire knowledge base is indexed at startup.",
      hermesBody2:
        "The trick isn't the LLM — it's the routing. A question mentioning \"trust badge\" loads the CKU quick-ref; \"buy X get Y\" pulls in Free Gift. Anything about discount stacking always mounts the Shopify discount combinations doc. When the KB has no answer, Hermes says \"escalate dev check nhé\" instead of guessing.",
      howItsWired: "How it's wired",
      victorSubtitle: "02 · Crisp · Live merchant chat",
      victorBody1:
        "Victor is a Crisp live-chat agent that talks to merchants on the AOV.ai storefront. He opens with \"Hey! Victor from AOV.ai here 👋\", runs through an identify-then-confirm flow, answers from the knowledge base, and escalates cleanly when the question is outside his scope.",
      victorBody2:
        "The whole behaviour is codified in a 122-line playbook I wrote: short chat-style messages, no formal phrases, no fabricated answers, and a hard list of \"never mention these internal features\" guardrails. When Victor doesn't know, he writes a conversation summary and hands off with context — no re-explaining for the human agent.",
      playbookTitle: "The playbook rules",
    },
    devDashboard: {
      kicker: "Internal tool",
      heading: "Dev Dashboard — one page, the whole sprint.",
      lead: "A Hono-on-Vercel app I built to pull sprint and analytics data out of Notion and Mixpanel into a single scrollable page. It replaced the Monday standup \"let me check Notion\" ritual with a glance. Two routes, two screenshots below.",
      sprintTitle: "Sprint view",
      sprintCaption:
        "Current sprint with tasks grouped by role, status badges following a shadcn palette, per-dev workload bars, open QA bugs next to each dev's avatar, and release tasks with missing-date flags. All pulled live from Notion.",
      analyticsTitle: "Analytics view",
      analyticsCaption:
        "Product analytics built on Mixpanel — funnel conversion, offer performance, merchant activation. Chart.js with the same shadcn palette as the sprint view so the two pages feel like one tool.",
      stackTitle: "Stack",
      stackBody:
        "Hono on the Vercel Node runtime · Notion API (Tasks DB, Sprint DB, PRD DB, FAQ DB) · Mixpanel export API · Chart.js for the charts · shadcn-style server-rendered HTML · deployed in one file from api/index.js.",
      whyTitle: "Why I built it",
      whyBody:
        "Sprint status lived in Notion. Product health lived in Mixpanel. Bugs lived in a third filter. The team was tab-hopping every standup. A single stitched page killed the tab-hop and cut 10 minutes from every sync.",
    },
    pipeline: {
      kicker: "Pipeline",
      heading: "A PO pipeline, crank-ready.",
      lead: "I turned research-to-dev-task into a single pipeline. Each step has its own rule. None of them gets skipped.",
    },
    stack: {
      kicker: "Stack",
      heading: "The tools I ship with.",
    },
    stats: {
      kicker: "Q1 2026 · By the numbers",
      heading: "A quarter of shipping, measured.",
      lead: "These numbers come from my own product retrospective — one source of truth, not a highlight reel.",
    },
    writings: {
      kicker: "Writings",
      heading: "Notes from the job.",
      lead: "Short essays on product ownership, shipping on Shopify, and turning repeat work into pipelines. Written for anyone curious about the craft, not just engineers.",
      readMore: "Read",
      back: "‹ Back to writings",
      more: "More writings",
    },
    contact: {
      kicker: "Contact",
      heading: "Let's build something that moves the needle.",
      lead: "I'm open to product conversations — Shopify apps, e-commerce growth, fintech, or anything where shipping beats talking.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      linkedinLabel: "LinkedIn",
    },
    footer: "Built with Next.js, hosted on Vercel.",
    langSwitch: { en: "EN", vi: "VI" },
    pipelineSteps: [
      { label: "Research", detail: "Six passes — context, patterns, codebase, platform, competition, design." },
      { label: "UX Spec", detail: "Screen inventory. Flow map. Before a single line of the PRD." },
      { label: "PRD", detail: "250–350 lines. Business flow only. No tech." },
      { label: "HTML Mockups", detail: "Polaris CDN for admin. Checkout tokens for buyer." },
      { label: "PNG Export", detail: "Playwright batch. Exact body dimensions. No crops." },
      { label: "Notion + Dev Tasks", detail: "Scripted push. Assignee, sprint, links — all pre-filled." },
    ],
    researchPhases: [
      { title: "Feature context", body: "Where does this fit? I map the feature against our catalog (2.x Upsell, 3.x Widgets, 4.x Checkout Customization, 5.x Rules) and flag siblings or prior PRDs before anything else." },
      { title: "Similar PRDs", body: "Read two or three PRDs from the same category. Match their WHO/WHY/WHAT rhythm, their acceptance-criteria shape, and their out-of-scope decisions. Consistency beats cleverness." },
      { title: "Codebase", body: "Grep extensions/, services/, the frontend — what already exists? Nine out of ten features have a seed in the repo; finding it saves a week." },
      { title: "Shopify platform", body: "Which surface does this belong to — Checkout UI Extension, a Shopify Function, the Admin GraphQL API, metafields? Decide before writing, not during." },
      { title: "Competitive analysis", body: "Three to five App Store competitors. Features, pricing, merchant reviews. I mine the reviews for the exact phrasing merchants use about pain — that phrasing becomes the PRD's WHY section." },
      { title: "Design direction", body: "Admin editor layout (2:1 settings/preview), checkout positions, condition model, edge cases. Nothing invented — anchored in Polaris patterns and our existing design system." },
    ],
    auditCriteria: [
      { letter: "A", title: "Ease of Use", body: "Labels speak for themselves, errors are prevented not caught, help is contextual. Cognitive load gets counted: decisions per screen, fields per form, steps per task." },
      { letter: "B", title: "Setup Speed", body: "Target: first value in under two minutes. Smart defaults. Templates. No detours through external tools." },
      { letter: "C", title: "Space Optimization", body: "Key actions above the fold. Empty states with a guided CTA, not a void. Responsive behaviour that doesn't break the primary flow." },
      { letter: "D", title: "Visual Appeal", body: "Clear hierarchy — eyes land on the right thing first. Polaris compliance in components, colors, and typography. No one-off patterns." },
      { letter: "E", title: "Accessibility", body: "WCAG AA contrast, 44×44 touch targets, keyboard focus paths, aria labels for every interactive element." },
    ],
    psychologyLenses: [
      { law: "Hick's Law", cue: "More than five options needs grouping or a recommendation." },
      { law: "Miller's Law", cue: "Chunk information in sets of seven or fewer." },
      { law: "Progressive Disclosure", cue: "Advanced features live behind a click, not in the main view." },
      { law: "Default Effect", cue: "The default value matches the majority use case." },
      { law: "Paradox of Choice", cue: "Too many options without guidance — add presets or recommendations." },
      { law: "Fogg's Model", cue: "Every CTA needs Motivation + Ability + a clear Prompt." },
      { law: "Endowed Progress", cue: "Give setup a head start — auto-complete step 1 where possible." },
      { law: "Zeigarnik Effect", cue: "Incomplete tasks stay visible with progress indicators." },
      { law: "Feedback Loops", cue: "Toggle → instant preview update. Save → toast. Always acknowledge." },
      { law: "Peak–End Rule", cue: "Success moments get their peak — a toast, confetti, a visible before/after." },
    ],
    bfsCategories: [
      { title: "Navigation & Structure", cues: "s-app-nav for primary nav (never a custom sidebar); breadcrumbs on sub-pages; s-page for titles." },
      { title: "Forms & Data Entry", cues: "Contextual Save Bar on every unsaved-changes form; inline validation on blur; errors under the field, not just a toast; confirmation modal for destructive actions." },
      { title: "Modals & Overlays", cues: "s-modal with heading attribute; close via X, Escape, and backdrop; never a modal for a settings page." },
      { title: "Colors & Visual", cues: "Semantic only — red means error, not a countdown or highlight. Polaris color tokens, never hard-coded values. WCAG AA contrast." },
      { title: "Premium & Pricing", cues: "Premium features disabled and labeled with their tier; Shopify Plus features hidden from non-Plus stores; pricing page honest and scannable." },
      { title: "Promotions & Cross-sell", cues: "Cross-app banners are dismissible and stay dismissed. No pressure tactics — no fake urgency, no shame copy. No unverifiable claims." },
      { title: "Loading & Feedback", cues: "Skeleton screens, not blank pages. Toasts for save/delete. Optimistic UI where it fits." },
      { title: "Live Preview & Customization", cues: "Visual customization shows a live preview. Editor and preview visible at once on desktop." },
      { title: "Accessibility", cues: "44×44 touch targets, keyboard navigation, focus management inside modals." },
      { title: "Content & Copy", cues: "No typos in headings, nav, or CTAs. Consistent terminology. Tab interactions modify content below the tabs — never above." },
    ],
    translationExample: [
      "Scope mapped: 12+ translatable text fields across checkout upsell, discount list, custom buttons, validation rules.",
      "Codebase leverage: locale files already exist (en.default.json, fr.json); 250+ countries mapped in countryLocaleMapping.js; a translation: {} field already reserved in the data model.",
      "Competitors surveyed: Qikify (9 languages, AI auto-translate), Checkout Blocks (free manual), Rebuy (per-widget), AfterSell (1 language only).",
      "Design direction: side-by-side editor, left = default read-only, right = editable target language; protected placeholders so merchants can't break them.",
      "Success metrics: >20% store adoption, 80% completion rate, -5% checkout abandonment in non-English stores.",
    ],
    aovWarnings: [
      "Campaign and rule setup forms must use the Contextual Save Bar.",
      "Red is reserved for errors. Countdown timers and \"Popular\" highlights painted red = instant BFS violation.",
      "Cross-app banners promoting other AOV apps must be dismissible and stay dismissed.",
      "Extension status must come from app.extensions(), not from a stored flag that can drift.",
    ],
    playbookRules: [
      "**Answer from the KB first.** If the answer is in the loaded files, reply directly — not \"let me check.\"",
      "**Identify, confirm, then solve.** Describe what you see, ask the merchant to confirm, only then answer — no premature solutions.",
      "**Vary the wording.** Never repeat the same phrase twice in a conversation.",
      "**Never fabricate.** If the KB doesn't cover it, say so and escalate — a confident wrong answer is worse than \"I don't know.\"",
      "**Clean handoffs.** When handing to a human, include: what the merchant asked, what was tried, what's unresolved, and the collaborator code if shared.",
      "**Guardrails.** Never mention internal-only features, never promise dev timelines, always escalate billing or review threats.",
    ],
    hermesWiring: [
      { term: "Gateway", body: "Three Telegram sources — CS group, DMs, and photo uploads with captions." },
      { term: "LLM", body: "Groq hosted Llama 3.3 70B. Fast, cheap, free tier is enough for the volume. $0 run-cost." },
      { term: "Knowledge", body: "220+ Markdown files — quick refs per app, full FAQ trees, discount combination matrix. Personality loaded from SOUL.md + IDENTITY.md." },
      { term: "Routing", body: "Keyword classifier maps each question to the right app (CKU, FG, BU, PPU, CD) and only loads that app's context — keeps the prompt small." },
      { term: "Commands", body: "/start, /reset, /apps, /help. Session history capped at 20 messages." },
    ],
    skillGroups: [
      {
        title: "Research · Spec · Review",
        caption: "The core loop for every feature — gather, write, verify against Shopify's bar.",
        skills: [
          { name: "prd-research", blurb: "Six-phase research brief — feature context, similar PRDs, codebase scan, Shopify platform fit, competitive analysis, design direction." },
          { name: "prd-writing", blurb: "End-to-end PRD workflow — from brief to Notion. Enforces the WHO → WHY → WHAT structure and keeps every section under its size budget." },
          { name: "ux-audit", blurb: "Five-criteria scorecard plus a 10-item UX psychology checklist. Flags anything below 4/5 with severity tagging." },
          { name: "bfs-check", blurb: "Built for Shopify compliance — 10 categories, outputs PASS · CONDITIONAL · FAIL with an action list." },
        ],
      },
      {
        title: "Mockups & Assets",
        caption: "Visual output that has to match the PRD exactly — and match Shopify's design systems.",
        skills: [
          { name: "mockup-rules", blurb: "Polaris CDN component patterns (s-switch, s-choice-list, s-select) and admin-vs-checkout design-system rules." },
          { name: "checkout-figma-tokens", blurb: "Figma-exported design tokens for buyer-facing checkout preview — colors, typography, spacing." },
          { name: "screenshot-capture", blurb: "Playwright + annotate pipeline that handles Shopify Admin iframe, Polaris shadow DOM, and React synthetic events." },
          { name: "excalidraw", blurb: "Excalidraw scene authoring rules — my architecture and flow diagrams come out of this." },
        ],
      },
      {
        title: "Launch · Comms",
        caption: "Everything that happens after the feature is built — announcements, support, app store.",
        skills: [
          { name: "app-listing", blurb: "Shopify App Store listing copy — title, tagline, description, key-benefit blocks, FAQ." },
          { name: "app-listing-design", blurb: "App Store screenshots and feature graphics — composition rules and size specs." },
          { name: "release-note", blurb: "Release note drafting for features shipped — merchant-facing tone, before/after framing." },
          { name: "email-template", blurb: "Transactional and announcement email HTML — onboarding, feature launches, win-back." },
          { name: "video-tutorial", blurb: "Remotion-based feature demo videos — scripted storyboards and render configs." },
        ],
      },
      {
        title: "Ops · Meta",
        caption: "The skills that keep the loop tight — they run on the other skills, or on the team.",
        skills: [
          { name: "push-prd", blurb: "Push a finished PRD markdown file into a Notion task — properties, assignees, sprint, all pre-filled." },
          { name: "social-insights", blurb: "Pull merchant pain, competitor feedback, and market trends from Reddit, X, Shopify forums, and App Store reviews." },
          { name: "skill-creator", blurb: "Meta-skill for authoring new skills — the one that built most of the others." },
        ],
      },
    ],
  },

  vi: {
    nav: {
      work: "Sản phẩm",
      about: "Giới thiệu",
      writings: "Bài viết",
      contact: "Liên hệ",
    },
    hero: {
      kicker: "Product Owner · Avada Group",
      title: "Vũ Mạnh Tuấn.",
      subtitle: "Xây các ứng dụng Shopify giúp merchant tăng AOV.",
      description:
        "Tôi làm sản phẩm upsell sau thanh toán và trong checkout cho Shopify — hiện xếp hạng #2 trên App Store ở category Post Purchase Upsell.",
      ctaWork: "Xem sản phẩm",
      ctaContact: "Liên hệ",
    },
    about: {
      kicker: "Về tôi",
      heading: "Một product owner ship đều tay — và ghi lại những gì hiệu quả.",
      p1: "Tôi là Product Owner tại Avada Group, phụ trách hai ứng dụng Shopify giúp merchant tăng giá trị đơn hàng trung bình: AOV.ai Post Purchase Upsell (xếp hạng #2 trên App Store, Q1 2026) và AOV Checkout Upsell.",
      p2: "Trước Avada tôi là PO tại Viettel Digital — đội ngũ đằng sau Viettel Money — nơi tôi launched Game Hub và thu hút 230.000 người dùng tự nhiên trong 3 tháng đầu. Trước đó là Business Analyst tại BSS Group, dẫn dự án Built for Shopify badge và ứng dụng BSS B2B Portal.",
      p3: "Tôi thích biến công việc lặp lại thành pipeline, giữ PRD đủ ngắn để thực sự được đọc, và mọi quyết định sản phẩm đều neo vào con số merchant cảm nhận được.",
      educationTitle: "Học vấn",
      certsTitle: "Chứng chỉ",
    },
    timeline: {
      kicker: "Hành trình",
      heading: "Bốn năm, bốn đội — mỗi đội một nấc thang.",
      now: "Hiện tại",
    },
    work: {
      kicker: "Sản phẩm tiêu biểu",
      contributions: "Tôi đã đóng góp gì",
      stack: "Tech stack",
    },
    aiWorkflow: {
      kicker: "PRD thực ra được làm thế nào",
      heading: "AI đọc, tôi quyết.",
      intro:
        "64 PRD trong một quý không phải tốc độ của con người. Bí quyết là chia việc rạch ròi: agent đọc, gom, đề xuất; tôi quyết, cắt, ký. Mỗi feature đi qua ba cửa ải trước khi ship.",
      researchTitle: "Research trước khi viết",
      researchLead:
        "Mỗi PRD bắt đầu bằng một Research Brief — tài liệu có cấu trúc trả lời sáu câu hỏi cố định. Brief đi thẳng vào các section của PRD, nên viết PRD trở thành dịch lại, không phải sáng tạo từ đầu. Một Claude skill (prd-research) chạy sáu pha song song, tôi review và cắt gọt trước khi brief trở thành PRD.",
      uxTitle: "UX audit — trải nghiệm đã ổn chưa?",
      uxLead:
        "Mỗi feature đi qua scorecard năm tiêu chí và một vòng UX psychology trước khi handoff. Claude skill (ux-audit) đọc trước và flag mọi thứ dưới 4/5; tôi follow-up từng flag và gán mức severity (🔴 nghiêm trọng, 🟡 đáng kể, 🟢 polish).",
      bfsTitle: "BFS check — Shopify có duyệt không?",
      bfsLead:
        "Built for Shopify là huy hiệu compliance của App Store — shop tin nó, app không có nó sẽ bị chôn. Mỗi PRD và mỗi mockup đi qua skill bfs-check riêng trước khi rời bàn tôi. Skill đọc bộ BFS rules làm context, chấm feature qua mười hạng mục rồi trả về PASS · CONDITIONAL · FAIL kèm action list.",
      psychologyTitle: "UX psychology checklist",
      warningsTitle: "Cảnh báo dành riêng cho AOV.ai",
      exampleTitle: "Ví dụ · Research brief cho feature Translation",
    },
    skills: {
      kicker: "Thư viện skill",
      heading: "Claude skill tôi viết để đi nhanh hơn.",
      lead: "Một skill là file Markdown nhỏ, tái sử dụng, dạy Claude một việc cụ thể — từ research feature đến check compliance Shopify. Cứ công việc nào lặp lại là tôi viết một skill. Tất cả nằm ở .claude/skills/ và chạy theo nhu cầu.",
    },
    bots: {
      kicker: "Những con bot tôi build",
      heading: "Hai con bot, một nguyên tắc: không bịa.",
      lead: "Customer support và nội bộ Q&A là nơi câu trả lời sai trả giá đắt nhất — nên mọi câu trả lời phải đến từ thứ tôi thật sự viết ra, không phải từ thứ LLM bịa. Đây là hai con bot tôi đã ship.",
      hermesSubtitle: "01 · Telegram · CKU guide nội bộ",
      hermesBody1:
        "Hermes trả lời câu hỏi về các ứng dụng Shopify của team trên Telegram — các bạn CS chat với nó trong group và DM khi gặp tình huống của merchant. Nó biết mọi feature trong Checkout Upsell, Free Gift, Bundle Upsell, Post-Purchase và Cart Drawer vì toàn bộ knowledge base được index lúc khởi động.",
      hermesBody2:
        "Điểm hay không nằm ở LLM — mà ở routing. Câu hỏi nhắc \"trust badge\" sẽ load CKU quick-ref; \"buy X get Y\" kéo Free Gift vào. Bất kỳ thứ gì liên quan đến discount stacking đều mount tài liệu Shopify discount combinations. Khi KB không có câu trả lời, Hermes nói \"escalate dev check nhé\" thay vì đoán.",
      howItsWired: "Bên trong thế nào",
      victorSubtitle: "02 · Crisp · Chat trực tiếp với merchant",
      victorBody1:
        "Victor là một agent chat Crisp trò chuyện với merchant trên storefront AOV.ai. Nó mở đầu bằng \"Hey! Victor from AOV.ai here 👋\", đi qua flow identify-then-confirm, trả lời từ knowledge base, và escalate gọn gàng khi câu hỏi vượt phạm vi.",
      victorBody2:
        "Toàn bộ hành vi được codify trong playbook 122 dòng tôi viết: tin nhắn ngắn kiểu chat, không dùng câu formal, không bịa câu trả lời, và một danh sách cứng \"không bao giờ nhắc đến những feature nội bộ này\". Khi Victor không biết, nó viết tóm tắt cuộc trò chuyện và handoff kèm context — không bắt bạn CS giải thích lại.",
      playbookTitle: "Playbook rules",
    },
    devDashboard: {
      kicker: "Tool nội bộ",
      heading: "Dev Dashboard — một trang, cả sprint.",
      lead: "App Hono trên Vercel tôi build để kéo dữ liệu sprint và analytics từ Notion và Mixpanel về một trang cuộn. Nó thay thế nghi thức \"để mình check Notion\" trong daily standup bằng một cái liếc mắt. Hai route, hai screenshot bên dưới.",
      sprintTitle: "Sprint view",
      sprintCaption:
        "Sprint hiện tại với task nhóm theo role, status badge theo bảng màu shadcn, workload bar cho từng dev, QA bug đang mở bên cạnh avatar mỗi dev, và release task có flag thiếu ngày. Dữ liệu pull live từ Notion.",
      analyticsTitle: "Analytics view",
      analyticsCaption:
        "Product analytics dựng trên Mixpanel — funnel conversion, offer performance, merchant activation. Chart.js cùng bảng màu shadcn với sprint view để hai trang trông như một tool duy nhất.",
      stackTitle: "Stack",
      stackBody:
        "Hono trên Vercel Node runtime · Notion API (Tasks DB, Sprint DB, PRD DB, FAQ DB) · Mixpanel export API · Chart.js cho biểu đồ · HTML server-rendered kiểu shadcn · deploy trong một file duy nhất api/index.js.",
      whyTitle: "Tại sao tôi build nó",
      whyBody:
        "Sprint status ở Notion. Product health ở Mixpanel. Bug ở filter thứ ba. Team tab-hop mỗi standup. Một trang ghép lại đã giết tab-hop và cắt 10 phút mỗi buổi sync.",
    },
    pipeline: {
      kicker: "Pipeline",
      heading: "Một pipeline PO, chỉ cần quay tay.",
      lead: "Tôi biến research-đến-dev-task thành một pipeline duy nhất. Mỗi bước có quy tắc riêng. Không bước nào bị bỏ qua.",
    },
    stack: {
      kicker: "Stack",
      heading: "Những công cụ tôi ship cùng.",
    },
    stats: {
      kicker: "Q1 2026 · Con số",
      heading: "Một quý ship hàng, đo được.",
      lead: "Những con số này đến từ retro sản phẩm của chính tôi — một nguồn sự thật, không phải highlight reel.",
    },
    writings: {
      kicker: "Bài viết",
      heading: "Ghi chép từ công việc.",
      lead: "Bài viết ngắn về product ownership, ship hàng trên Shopify, và biến việc lặp lại thành pipeline. Viết cho bất kỳ ai tò mò về nghề, không chỉ engineer.",
      readMore: "Đọc",
      back: "‹ Quay lại bài viết",
      more: "Đọc thêm",
    },
    contact: {
      kicker: "Liên hệ",
      heading: "Hãy cùng build thứ tạo ra sự khác biệt.",
      lead: "Tôi cởi mở với các cuộc trò chuyện về sản phẩm — Shopify app, e-commerce growth, fintech, hoặc bất cứ thứ gì mà ship quan trọng hơn bàn.",
      emailLabel: "Email",
      phoneLabel: "Số điện thoại",
      linkedinLabel: "LinkedIn",
    },
    footer: "Dựng bằng Next.js, host trên Vercel.",
    langSwitch: { en: "EN", vi: "VI" },
    pipelineSteps: [
      { label: "Research", detail: "Sáu lần rà — context, pattern, codebase, platform, cạnh tranh, design." },
      { label: "UX Spec", detail: "Liệt kê màn hình. Vẽ flow. Trước khi viết một dòng PRD nào." },
      { label: "PRD", detail: "250–350 dòng. Chỉ luồng nghiệp vụ. Không tech detail." },
      { label: "HTML Mockup", detail: "Polaris CDN cho admin. Token checkout cho buyer." },
      { label: "Export PNG", detail: "Playwright batch. Kích thước body đúng tuyệt đối. Không crop." },
      { label: "Notion + Dev Task", detail: "Script đẩy. Assignee, sprint, link — pre-fill hết." },
    ],
    researchPhases: [
      { title: "Feature context", body: "Feature này nằm ở đâu? Tôi map feature vào catalog (2.x Upsell, 3.x Widget, 4.x Checkout Customization, 5.x Rules) và cờ lên các sibling hoặc PRD cũ trước tiên." },
      { title: "PRD tương tự", body: "Đọc hai đến ba PRD cùng hạng mục. Bắt đúng nhịp WHO/WHY/WHAT, khuôn acceptance criteria, và các out-of-scope của chúng. Nhất quán thắng thông minh." },
      { title: "Codebase", body: "Grep extensions/, services/, frontend — đã có gì? Chín trên mười feature đã có hạt giống trong repo; tìm được là tiết kiệm một tuần." },
      { title: "Shopify platform", body: "Feature thuộc bề mặt nào — Checkout UI Extension, Shopify Function, Admin GraphQL, metafield? Quyết trước khi viết, không phải trong khi viết." },
      { title: "Phân tích cạnh tranh", body: "Ba đến năm app cùng loại trên App Store. Feature, pricing, review. Tôi đào review để lấy chính cụm từ merchant dùng khi đau — đó là lời dẫn cho phần WHY của PRD." },
      { title: "Định hướng design", body: "Layout admin editor (2:1 settings/preview), vị trí trên checkout, mô hình condition, edge case. Không tự chế — neo vào pattern Polaris và design system đang có." },
    ],
    auditCriteria: [
      { letter: "A", title: "Dễ dùng", body: "Label tự nói, lỗi được phòng chứ không bắt, help theo ngữ cảnh. Cognitive load được đếm: số quyết định mỗi màn, số field mỗi form, số bước mỗi task." },
      { letter: "B", title: "Tốc độ setup", body: "Mục tiêu: giá trị đầu tiên trong dưới hai phút. Default thông minh. Template. Không bắt merchant rời app." },
      { letter: "C", title: "Tối ưu không gian", body: "Action chính trên đỉnh fold. Empty state có CTA dẫn dắt, không trống rỗng. Responsive không phá flow chính." },
      { letter: "D", title: "Visual", body: "Hierarchy rõ — mắt nhìn đúng chỗ trước. Tuân Polaris ở component, màu, typography. Không pattern tự chế." },
      { letter: "E", title: "Accessibility", body: "Contrast WCAG AA, touch target 44×44, path focus cho keyboard, aria label cho mọi element tương tác." },
    ],
    psychologyLenses: [
      { law: "Hick's Law", cue: "Hơn năm lựa chọn cần nhóm hoặc đề xuất." },
      { law: "Miller's Law", cue: "Chia thông tin thành bộ bảy hoặc ít hơn." },
      { law: "Progressive Disclosure", cue: "Feature nâng cao ẩn sau một click, không show hết ngay." },
      { law: "Default Effect", cue: "Default phải khớp với use case số đông." },
      { law: "Paradox of Choice", cue: "Quá nhiều lựa chọn không dẫn dắt — thêm preset hoặc recommendation." },
      { law: "Fogg's Model", cue: "Mỗi CTA cần Motivation + Ability + Prompt rõ." },
      { law: "Endowed Progress", cue: "Cho setup một lợi thế — tự hoàn thành bước 1 nếu có thể." },
      { law: "Zeigarnik Effect", cue: "Task dang dở phải hiện trong progress indicator." },
      { law: "Feedback Loops", cue: "Toggle → preview update ngay. Save → toast. Luôn xác nhận." },
      { law: "Peak–End Rule", cue: "Khoảnh khắc thành công cần đỉnh — toast, confetti, before/after nhìn thấy được." },
    ],
    bfsCategories: [
      { title: "Navigation & Structure", cues: "Dùng s-app-nav cho nav chính (không custom sidebar); breadcrumb ở sub-page; s-page cho title." },
      { title: "Forms & Data Entry", cues: "Contextual Save Bar cho mọi form có unsaved change; validation inline on blur; lỗi hiện dưới field, không chỉ toast; confirm modal cho action destructive." },
      { title: "Modals & Overlays", cues: "Dùng s-modal với thuộc tính heading; đóng bằng X, Escape, và backdrop; đừng dùng modal cho trang settings." },
      { title: "Colors & Visual", cues: "Chỉ semantic — đỏ nghĩa là error, không dùng cho countdown hay highlight. Polaris color token, không hard-code. Contrast WCAG AA." },
      { title: "Premium & Pricing", cues: "Feature premium disabled và label tier rõ; feature Shopify Plus ẩn với shop không-Plus; trang pricing trung thực, dễ đọc." },
      { title: "Promotions & Cross-sell", cues: "Banner cross-app dismissible và stay dismissed. Không pressure tactics — không urgency giả, không shame copy. Không claim không verify được." },
      { title: "Loading & Feedback", cues: "Skeleton screen, không để trang trắng. Toast cho save/delete. Optimistic UI khi phù hợp." },
      { title: "Live Preview & Customization", cues: "Tùy biến visual phải có live preview. Editor và preview hiện đồng thời trên desktop." },
      { title: "Accessibility", cues: "Touch target 44×44, navigation bằng keyboard, quản lý focus trong modal." },
      { title: "Content & Copy", cues: "Không typo ở heading, nav, CTA. Thuật ngữ nhất quán. Tab interaction chỉ đổi content phía DƯỚI tab — không phía trên." },
    ],
    translationExample: [
      "Scope được map: 12+ field text cần dịch trên checkout upsell, discount list, custom button, validation rule.",
      "Tận dụng codebase: file locale đã có sẵn (en.default.json, fr.json); 250+ quốc gia được map trong countryLocaleMapping.js; field translation: {} đã dành sẵn trong data model.",
      "Đối thủ khảo sát: Qikify (9 ngôn ngữ, AI auto-translate), Checkout Blocks (free manual), Rebuy (per-widget), AfterSell (chỉ 1 ngôn ngữ).",
      "Design direction: editor side-by-side, trái = default read-only, phải = target language edit được; placeholder bảo vệ để merchant không phá được.",
      "Success metric: >20% shop adopt, 80% complete rate, -5% abandonment ở shop không tiếng Anh.",
    ],
    aovWarnings: [
      "Form setup campaign và rule phải có Contextual Save Bar.",
      "Đỏ dành riêng cho error. Countdown timer và highlight \"Popular\" tô đỏ = vi phạm BFS ngay lập tức.",
      "Banner cross-app quảng cáo các app AOV khác phải dismissible và stay dismissed.",
      "Extension status phải lấy từ app.extensions(), không từ flag lưu sẵn có thể lệch.",
    ],
    playbookRules: [
      "**Trả lời từ KB trước.** Nếu câu trả lời có trong file đã load, trả lời trực tiếp — không \"để mình check\".",
      "**Identify, confirm, rồi solve.** Mô tả thứ bạn thấy, hỏi merchant xác nhận, rồi mới trả lời — không đưa giải pháp sớm.",
      "**Đa dạng cách nói.** Không lặp lại cùng một cụm hai lần trong cuộc trò chuyện.",
      "**Không bịa.** Nếu KB không có, nói vậy và escalate — câu sai tự tin tệ hơn \"tôi không biết\".",
      "**Handoff sạch.** Khi đẩy cho người, gồm: merchant hỏi gì, đã thử gì, còn tồn gì, và collaborator code nếu có.",
      "**Guardrail.** Không nhắc feature nội bộ, không hứa timeline dev, luôn escalate khi có billing hoặc đe doạ review.",
    ],
    hermesWiring: [
      { term: "Gateway", body: "Ba nguồn Telegram — group CS, DM, và ảnh upload kèm caption." },
      { term: "LLM", body: "Groq host Llama 3.3 70B. Nhanh, rẻ, free tier đủ cho volume. Chi phí chạy $0." },
      { term: "Knowledge", body: "220+ file Markdown — quick ref mỗi app, cây FAQ đầy đủ, ma trận discount combination. Personality load từ SOUL.md + IDENTITY.md." },
      { term: "Routing", body: "Keyword classifier map mỗi câu hỏi vào đúng app (CKU, FG, BU, PPU, CD) và chỉ load context của app đó — giữ prompt gọn." },
      { term: "Commands", body: "/start, /reset, /apps, /help. Lịch sử session giới hạn 20 tin nhắn." },
    ],
    skillGroups: [
      {
        title: "Research · Spec · Review",
        caption: "Vòng lặp cốt lõi của mỗi feature — gom, viết, verify theo bar Shopify.",
        skills: [
          { name: "prd-research", blurb: "Research brief sáu pha — feature context, PRD tương tự, quét codebase, phù hợp Shopify platform, phân tích cạnh tranh, định hướng design." },
          { name: "prd-writing", blurb: "Workflow PRD end-to-end — từ brief đến Notion. Ép cấu trúc WHO → WHY → WHAT và giữ mỗi section trong ngân sách size." },
          { name: "ux-audit", blurb: "Scorecard năm tiêu chí cộng checklist UX psychology 10 mục. Flag mọi thứ dưới 4/5 kèm severity." },
          { name: "bfs-check", blurb: "Compliance Built for Shopify — 10 hạng mục, trả về PASS · CONDITIONAL · FAIL kèm action list." },
        ],
      },
      {
        title: "Mockup & Asset",
        caption: "Output visual phải match PRD chính xác — và match design system của Shopify.",
        skills: [
          { name: "mockup-rules", blurb: "Pattern component Polaris CDN (s-switch, s-choice-list, s-select) và rule design-system admin-vs-checkout." },
          { name: "checkout-figma-tokens", blurb: "Design token export từ Figma cho preview checkout buyer — màu, typography, spacing." },
          { name: "screenshot-capture", blurb: "Pipeline Playwright + annotate xử lý iframe Shopify Admin, shadow DOM Polaris, và React synthetic event." },
          { name: "excalidraw", blurb: "Rule authoring scene Excalidraw — các sơ đồ architecture và flow của tôi ra từ đây." },
        ],
      },
      {
        title: "Launch · Comms",
        caption: "Mọi thứ xảy ra sau khi feature được build — announcement, support, app store.",
        skills: [
          { name: "app-listing", blurb: "Copy listing Shopify App Store — title, tagline, description, block key-benefit, FAQ." },
          { name: "app-listing-design", blurb: "Screenshot và feature graphic App Store — rule composition và spec size." },
          { name: "release-note", blurb: "Soạn release note cho feature đã ship — tone với merchant, framing before/after." },
          { name: "email-template", blurb: "HTML email transactional và announcement — onboarding, feature launch, win-back." },
          { name: "video-tutorial", blurb: "Video demo feature dựng trên Remotion — storyboard có script và config render." },
        ],
      },
      {
        title: "Ops · Meta",
        caption: "Skill giữ vòng lặp chặt — chúng chạy trên skill khác, hoặc trên team.",
        skills: [
          { name: "push-prd", blurb: "Đẩy file PRD markdown hoàn thiện vào một Notion task — property, assignee, sprint đều pre-fill." },
          { name: "social-insights", blurb: "Kéo pain merchant, feedback đối thủ, và xu hướng thị trường từ Reddit, X, Shopify forum, và review App Store." },
          { name: "skill-creator", blurb: "Meta-skill để tạo skill mới — chính là skill đã build phần lớn các skill khác." },
        ],
      },
    ],
  },
} satisfies Record<Locale, Record<string, unknown>>;

export type Dict = (typeof dict)[Locale];
