const groups = [
  {
    title: "Research · Spec · Review",
    caption:
      "The core loop for every feature — gather, write, verify against Shopify's bar.",
    skills: [
      {
        name: "prd-research",
        blurb:
          "Six-phase research brief — feature context, similar PRDs, codebase scan, Shopify platform fit, competitive analysis, design direction.",
      },
      {
        name: "prd-writing",
        blurb:
          "End-to-end PRD workflow — from brief to Notion. Enforces the WHO → WHY → WHAT structure and keeps every section under its size budget.",
      },
      {
        name: "ux-audit",
        blurb:
          "Five-criteria scorecard plus a 10-item UX psychology checklist. Flags anything below 4/5 with severity tagging.",
      },
      {
        name: "bfs-check",
        blurb:
          "Built for Shopify compliance — 10 categories, outputs PASS · CONDITIONAL · FAIL with an action list.",
      },
    ],
  },
  {
    title: "Mockups & Assets",
    caption:
      "Visual output that has to match the PRD exactly — and match Shopify's design systems.",
    skills: [
      {
        name: "mockup-rules",
        blurb:
          "Polaris CDN component patterns (s-switch, s-choice-list, s-select) and admin-vs-checkout design-system rules.",
      },
      {
        name: "checkout-figma-tokens",
        blurb:
          "Figma-exported design tokens for buyer-facing checkout preview — colors, typography, spacing.",
      },
      {
        name: "screenshot-capture",
        blurb:
          "Playwright + annotate pipeline that handles Shopify Admin iframe, Polaris shadow DOM, and React synthetic events.",
      },
      {
        name: "excalidraw",
        blurb:
          "Excalidraw scene authoring rules — my architecture and flow diagrams come out of this.",
      },
    ],
  },
  {
    title: "Launch · Comms",
    caption:
      "Everything that happens after the feature is built — announcements, support, app store.",
    skills: [
      {
        name: "app-listing",
        blurb:
          "Shopify App Store listing copy — title, tagline, description, key-benefit blocks, FAQ.",
      },
      {
        name: "app-listing-design",
        blurb:
          "App Store screenshots and feature graphics — composition rules and size specs.",
      },
      {
        name: "release-note",
        blurb:
          "Release note drafting for features shipped — merchant-facing tone, before/after framing.",
      },
      {
        name: "email-template",
        blurb:
          "Transactional and announcement email HTML — onboarding, feature launches, win-back.",
      },
      {
        name: "video-tutorial",
        blurb:
          "Remotion-based feature demo videos — scripted storyboards and render configs.",
      },
    ],
  },
  {
    title: "Ops · Meta",
    caption:
      "The skills that keep the loop tight — they run on the other skills, or on the team.",
    skills: [
      {
        name: "push-prd",
        blurb:
          "Push a finished PRD markdown file into a Notion task — properties, assignees, sprint, all pre-filled.",
      },
      {
        name: "social-insights",
        blurb:
          "Pull merchant pain, competitor feedback, and market trends from Reddit, X, Shopify forums, and App Store reviews.",
      },
      {
        name: "skill-creator",
        blurb:
          "Meta-skill for authoring new skills — the one that built most of the others.",
      },
    ],
  },
];

export function Skills() {
  const total = groups.reduce((sum, g) => sum + g.skills.length, 0);

  return (
    <section className="bg-black text-white py-24 md:py-32">
      <div className="max-w-[1120px] mx-auto px-6">
        <p className="text-caption uppercase tracking-[0.2em] text-[#2997ff] mb-4">
          Skill library
        </p>
        <h2 className="display-section mb-4 max-w-3xl">
          {total} Claude skills I wrote to move faster.
        </h2>
        <p className="text-body-apple text-white/70 max-w-2xl mb-16">
          A skill is a small, reusable Markdown file that teaches Claude a
          specific job — from researching a feature to checking it against
          Shopify&apos;s compliance rules. I built one per recurring task.
          They all live in <code className="bg-white/10 px-1.5 rounded text-[0.9em]">.claude/skills/</code> and run on demand.
        </p>

        <div className="space-y-16">
          {groups.map((g) => (
            <div key={g.title}>
              <div className="mb-6 pb-3 border-b border-white/10">
                <h3 className="text-subheading font-semibold">{g.title}</h3>
                <p className="text-caption text-white/50 mt-1">{g.caption}</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {g.skills.map((s) => (
                  <div
                    key={s.name}
                    className="bg-white/[0.04] border border-white/[0.06] rounded-2xl p-5 hover:bg-white/[0.07] transition-colors"
                  >
                    <code className="text-[0.9em] text-[#2997ff] font-mono mb-2 block">
                      {s.name}
                    </code>
                    <p className="text-caption text-white/75 leading-relaxed">
                      {s.blurb}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
