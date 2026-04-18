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
  { law: "Fogg's Model", cue: "Every CTA needs Motivation + Ability + a clear Prompt." },
  { law: "Peak–End Rule", cue: "Success moments get their peak — a toast, a confetti, a visible before/after." },
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
          propose; I decide, cut, and sign. Here&apos;s the two parts of that
          split.
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
        <div>
          <div className="flex items-baseline gap-4 mb-6">
            <span className="text-caption font-mono text-[#0066cc]">02</span>
            <h3 className="display-tile">UX audit before the mockups ship</h3>
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

          <div className="mt-10">
            <div
              className="bg-white rounded-2xl p-4 inline-block"
              style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}
            >
              <Image
                src="/diagrams/feature-lifecycle.png"
                alt="Feature lifecycle diagram — where UX audit sits"
                width={620}
                height={960}
                sizes="(max-width: 768px) 100vw, 620px"
                className="w-full max-w-[620px] h-auto rounded-lg"
              />
            </div>
            <p className="text-caption opacity-60 mt-3">
              Feature lifecycle — research, audit, mockup, build, release.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
