import Image from "next/image";

const researchPhases = [
  {
    title: "Feature context",
    body: "Where does this fit? I map the feature against our catalog (2.x Upsell, 3.x Widgets, 4.x Checkout Customization, 5.x Rules) and flag siblings or prior PRDs before anything else.",
  },
  {
    title: "Similar PRDs",
    body: "Read two or three PRDs from the same category. Match their WHO/WHY/WHAT rhythm, their acceptance-criteria shape, and their out-of-scope decisions. Consistency beats cleverness.",
  },
  {
    title: "Codebase",
    body: "Grep `extensions/`, `services/`, the frontend — what already exists? Nine out of ten features have a seed in the repo; finding it saves a week.",
  },
  {
    title: "Shopify platform",
    body: "Which surface does this belong to — Checkout UI Extension, a Shopify Function, the Admin GraphQL API, metafields? Decide before writing, not during.",
  },
  {
    title: "Competitive analysis",
    body: "Three to five App Store competitors. Features, pricing, merchant reviews. I mine the reviews for the exact phrasing merchants use about pain — that phrasing becomes the PRD's WHY section.",
  },
  {
    title: "Design direction",
    body: "Admin editor layout (2:1 settings/preview), checkout positions, condition model, edge cases. Nothing invented — anchored in Polaris patterns and our existing design system.",
  },
];

const auditCriteria = [
  {
    letter: "A",
    title: "Ease of Use",
    body: "Labels speak for themselves, errors are prevented not caught, help is contextual. Cognitive load gets counted: decisions per screen, fields per form, steps per task.",
  },
  {
    letter: "B",
    title: "Setup Speed",
    body: "Target: first value in under two minutes. Smart defaults. Templates. No detours through external tools.",
  },
  {
    letter: "C",
    title: "Space Optimization",
    body: "Key actions above the fold. Empty states with a guided CTA, not a void. Responsive behaviour that doesn't break the primary flow.",
  },
  {
    letter: "D",
    title: "Visual Appeal",
    body: "Clear hierarchy — eyes land on the right thing first. Polaris compliance in components, colors, and typography. No one-off patterns.",
  },
  {
    letter: "E",
    title: "Accessibility",
    body: "WCAG AA contrast, 44×44 touch targets, keyboard focus paths, aria labels for every interactive element.",
  },
];

const psychologyLenses = [
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
];

const bfsCategories = [
  {
    title: "Navigation & Structure",
    cues: "s-app-nav for primary nav (never a custom sidebar); breadcrumbs on sub-pages; s-page for titles.",
  },
  {
    title: "Forms & Data Entry",
    cues: "Contextual Save Bar on every unsaved-changes form; inline validation on blur; errors under the field, not just a toast; confirmation modal for destructive actions.",
  },
  {
    title: "Modals & Overlays",
    cues: "s-modal with heading attribute; close via X, Escape, and backdrop; never a modal for a settings page.",
  },
  {
    title: "Colors & Visual",
    cues: "Semantic only — red means error, not a countdown or highlight. Polaris color tokens, never hard-coded values. WCAG AA contrast.",
  },
  {
    title: "Premium & Pricing",
    cues: "Premium features disabled and labeled with their tier; Shopify Plus features hidden from non-Plus stores; pricing page honest and scannable.",
  },
  {
    title: "Promotions & Cross-sell",
    cues: "Cross-app banners are dismissible and stay dismissed. No pressure tactics — no fake urgency, no shame copy. No unverifiable claims.",
  },
  {
    title: "Loading & Feedback",
    cues: "Skeleton screens, not blank pages. Toasts for save/delete. Optimistic UI where it fits.",
  },
  {
    title: "Live Preview & Customization",
    cues: "Visual customization shows a live preview. Editor and preview visible at once on desktop.",
  },
  {
    title: "Accessibility",
    cues: "44×44 touch targets, keyboard navigation, focus management inside modals.",
  },
  {
    title: "Content & Copy",
    cues: "No typos in headings, nav, or CTAs. Consistent terminology. Tab interactions modify content below the tabs — never above.",
  },
];

export function AIWorkflow() {
  return (
    <section className="bg-[#f5f5f7] text-[#1d1d1f] py-24 md:py-32">
      <div className="max-w-[1120px] mx-auto px-6">
        <p className="text-caption uppercase tracking-[0.2em] text-[#0066cc] mb-4">
          How the PRDs actually get made
        </p>
        <h2 className="display-section mb-4 max-w-3xl">
          AI does the reading. I do the calling.
        </h2>
        <p className="text-body-apple opacity-75 max-w-2xl mb-20">
          Sixty-four PRDs in a quarter isn&apos;t a human pace. What made it
          possible was splitting the job cleanly: agents read, gather, and
          propose; I decide, cut, and sign. Here are the three gates every
          feature walks through before it ships.
        </p>

        {/* PRD Research */}
        <div className="mb-24">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="text-caption font-mono text-[#0066cc]">01</span>
            <h3 className="display-tile">Research before writing</h3>
          </div>
          <p className="text-body-apple opacity-80 max-w-3xl mb-10">
            Every PRD starts as a <em>Research Brief</em> — a structured
            document that answers six fixed questions. The brief feeds directly
            into the PRD sections, so writing becomes translation, not
            invention. A Claude skill (<code className="bg-black/5 px-1.5 rounded text-[0.9em]">prd-research</code>) runs the
            six phases in parallel, then I review and prune before the brief
            becomes a PRD.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {researchPhases.map((p, i) => (
              <div
                key={p.title}
                className="bg-white rounded-2xl p-6"
                style={{ boxShadow: "0 6px 24px rgba(0,0,0,0.05)" }}
              >
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-caption font-mono text-[#0071e3]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="text-subheading font-semibold">{p.title}</h4>
                </div>
                <p className="text-caption opacity-75 leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>

          <div
            className="bg-white rounded-2xl p-6 border-l-4 border-[#0071e3]"
            style={{ boxShadow: "0 6px 24px rgba(0,0,0,0.05)" }}
          >
            <p className="text-caption text-[#0066cc] uppercase tracking-[0.15em] mb-3">
              Example · Translation feature research brief
            </p>
            <ul className="text-body-apple opacity-80 space-y-2">
              <li className="pl-5 relative before:content-['›'] before:absolute before:left-0 before:text-[#0071e3]">
                <strong>Scope mapped:</strong> 12+ translatable text fields
                across checkout upsell, discount list, custom buttons,
                validation rules.
              </li>
              <li className="pl-5 relative before:content-['›'] before:absolute before:left-0 before:text-[#0071e3]">
                <strong>Codebase leverage:</strong> locale files already
                exist (<code className="bg-black/5 px-1 rounded text-[0.85em]">en.default.json</code>,
                <code className="bg-black/5 px-1 rounded text-[0.85em]">fr.json</code>);
                250+ countries mapped in{" "}
                <code className="bg-black/5 px-1 rounded text-[0.85em]">
                  countryLocaleMapping.js
                </code>
                ; a <code className="bg-black/5 px-1 rounded text-[0.85em]">translation: {}</code>
                field already reserved in the data model.
              </li>
              <li className="pl-5 relative before:content-['›'] before:absolute before:left-0 before:text-[#0071e3]">
                <strong>Competitors surveyed:</strong> Qikify (9 languages,
                AI auto-translate), Checkout Blocks (free manual), Rebuy
                (per-widget), AfterSell (1 language only).
              </li>
              <li className="pl-5 relative before:content-['›'] before:absolute before:left-0 before:text-[#0071e3]">
                <strong>Design direction:</strong> side-by-side editor, left
                = default read-only, right = editable target language;
                protected placeholders so merchants can&apos;t break them.
              </li>
              <li className="pl-5 relative before:content-['›'] before:absolute before:left-0 before:text-[#0071e3]">
                <strong>Success metrics:</strong> &gt;20% store adoption, 80%
                completion rate, -5% checkout abandonment in non-English
                stores.
              </li>
            </ul>
          </div>
        </div>

        {/* UX Audit */}
        <div className="mb-24">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="text-caption font-mono text-[#0066cc]">02</span>
            <h3 className="display-tile">UX audit — does it feel right?</h3>
          </div>
          <p className="text-body-apple opacity-80 max-w-3xl mb-10">
            Every feature goes through a five-criteria scorecard and a UX
            psychology pass before handoff. A Claude skill (
            <code className="bg-black/5 px-1.5 rounded text-[0.9em]">ux-audit</code>) does the first read and flags
            anything that scores below 4 out of 5; I follow up on each flag
            and rate severity myself (🔴 critical, 🟡 major, 🟢 minor).
          </p>

          <div className="grid md:grid-cols-5 gap-3 mb-10">
            {auditCriteria.map((c) => (
              <div
                key={c.letter}
                className="bg-white rounded-2xl p-5"
                style={{ boxShadow: "0 6px 24px rgba(0,0,0,0.05)" }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#0071e3] text-white flex items-center justify-center font-semibold text-sm">
                    {c.letter}
                  </span>
                  <h4 className="text-body-apple font-semibold">{c.title}</h4>
                </div>
                <p className="text-caption opacity-75 leading-relaxed">
                  {c.body}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-[#1d1d1f] text-white rounded-2xl p-8">
            <p className="text-caption uppercase tracking-[0.15em] text-[#2997ff] mb-6">
              UX psychology checklist
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {psychologyLenses.map((lens) => (
                <div key={lens.law}>
                  <p className="text-body-apple font-semibold mb-1">
                    {lens.law}
                  </p>
                  <p className="text-caption text-white/70 leading-relaxed">
                    {lens.cue}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* BFS check */}
        <div className="mb-24">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="text-caption font-mono text-[#0066cc]">03</span>
            <h3 className="display-tile">BFS check — does Shopify approve?</h3>
          </div>
          <p className="text-body-apple opacity-80 max-w-3xl mb-10">
            Built for Shopify is the App Store&apos;s compliance badge —
            shops trust it, and apps without it get buried. Every PRD and
            every mockup goes through a separate{" "}
            <code className="bg-black/5 px-1.5 rounded text-[0.9em]">bfs-check</code>{" "}
            skill before leaving my desk. The skill reads a set of BFS rules
            loaded as context, then scores the feature across ten categories
            and returns <strong>PASS · CONDITIONAL · FAIL</strong> with an
            action list.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {bfsCategories.map((c, i) => (
              <div
                key={c.title}
                className="bg-white rounded-2xl p-6"
                style={{ boxShadow: "0 6px 24px rgba(0,0,0,0.05)" }}
              >
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-caption font-mono text-[#0071e3]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="text-body-apple font-semibold">{c.title}</h4>
                </div>
                <p className="text-caption opacity-75 leading-relaxed">
                  {c.cues}
                </p>
              </div>
            ))}
          </div>

          <div
            className="bg-white rounded-2xl p-6 border-l-4 border-[#0071e3]"
            style={{ boxShadow: "0 6px 24px rgba(0,0,0,0.05)" }}
          >
            <p className="text-caption text-[#0066cc] uppercase tracking-[0.15em] mb-3">
              AOV.ai-specific warnings
            </p>
            <ul className="text-body-apple opacity-80 space-y-2">
              <li className="pl-5 relative before:content-['›'] before:absolute before:left-0 before:text-[#0071e3]">
                Campaign and rule setup forms <strong>must</strong> use the
                Contextual Save Bar.
              </li>
              <li className="pl-5 relative before:content-['›'] before:absolute before:left-0 before:text-[#0071e3]">
                Red is reserved for errors. Countdown timers and
                &ldquo;Popular&rdquo; highlights painted red = instant BFS
                violation.
              </li>
              <li className="pl-5 relative before:content-['›'] before:absolute before:left-0 before:text-[#0071e3]">
                Cross-app banners promoting other AOV apps must be
                dismissible and stay dismissed.
              </li>
              <li className="pl-5 relative before:content-['›'] before:absolute before:left-0 before:text-[#0071e3]">
                Extension status must come from{" "}
                <code className="bg-black/5 px-1 rounded text-[0.85em]">
                  app.extensions()
                </code>
                , not from a stored flag that can drift.
              </li>
            </ul>
          </div>
        </div>

        {/* Lifecycle diagram */}
        <div className="pt-8 border-t border-black/10">
          <p className="text-caption opacity-60 mb-4">
            All three gates in one picture — research, UX audit, BFS check,
            mockup, build, release.
          </p>
          <div
            className="bg-white rounded-2xl p-4 inline-block"
            style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}
          >
            <Image
              src="/diagrams/feature-lifecycle.png"
              alt="Feature lifecycle diagram"
              width={620}
              height={960}
              sizes="(max-width: 768px) 100vw, 620px"
              className="w-full max-w-[620px] h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
