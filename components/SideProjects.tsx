import Image from "next/image";

const projects = [
  {
    name: "Victor",
    subtitle: "The CS bot that speaks to merchants.",
    diagram: "/diagrams/architecture.png",
    body: (
      <>
        Victor is a Crisp live-chat bot I built for AOV.ai support. It listens
        on the Crisp RTM WebSocket, reads customer messages, and answers
        straight from a knowledge base I wrote — short, chat-style, KB-first,
        never fabricating. If the KB doesn&apos;t have an answer, Victor
        hands off to the team instead of guessing. It replaced the repetitive
        80% of support work so the humans can handle the interesting 20%.
      </>
    ),
    highlights: [
      "Crisp RTM + REST API integration",
      "Claude API backbone via local billing proxy",
      "Hard rule: answer from KB or hand off — no hallucinations",
      "CS playbook codified in Markdown, loaded as system prompt",
    ],
    stack: ["anthropic", "nodedotjs", "vercel"],
    accent: "#0071e3",
  },
  {
    name: "Dev Dashboard",
    subtitle: "One page, the whole sprint.",
    body: (
      <>
        An internal Hono-on-Vercel dashboard that pulls from Notion and
        Mixpanel. Shows the current sprint, per-dev workload, open QA bugs,
        release tasks, and product analytics — all in a single scroll. Status
        badges follow a shadcn palette; each dev has an avatar, a workload
        bar, and their bug count next to their name. It turned the Monday
        standup from a slack-scroll into a glance at one page.
      </>
    ),
    highlights: [
      "Hono serverless on Vercel (Node runtime)",
      "Notion API: Tasks DB + Sprints DB + PRD DB + FAQ DB",
      "Mixpanel integration for product analytics",
      "Server-rendered HTML, shadcn-style charts via Chart.js",
    ],
    stack: ["hono", "notion", "mixpanel", "vercel"],
    accent: "#2997ff",
  },
];

export function SideProjects() {
  return (
    <section className="bg-[#f5f5f7] text-[#1d1d1f] py-24 md:py-32">
      <div className="max-w-[980px] mx-auto px-6">
        <p className="text-caption uppercase tracking-[0.2em] text-[#0066cc] mb-4">
          Side Projects
        </p>
        <h2 className="display-section mb-4 max-w-2xl">
          Bots and dashboards, built to free up brains.
        </h2>
        <p className="text-body-apple opacity-70 max-w-2xl mb-16">
          Outside the PRD pipeline I ship small tools that remove toil —
          automating support and sprint visibility so the team spends more
          time on the interesting work.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article
              key={p.name}
              className="relative bg-white rounded-3xl p-8 overflow-hidden"
              style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}
            >
              <div
                aria-hidden
                className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-20 blur-3xl"
                style={{ background: p.accent }}
              />
              <div className="relative">
                <h3 className="display-tile mb-1">{p.name}</h3>
                <p className="text-subheading opacity-70 mb-6">{p.subtitle}</p>
                {p.diagram && (
                  <div className="mb-6 bg-[#fafafa] rounded-xl overflow-hidden border border-black/5">
                    <Image
                      src={p.diagram}
                      alt={`${p.name} architecture diagram`}
                      width={1200}
                      height={650}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="w-full h-auto"
                    />
                  </div>
                )}
                <p className="text-body-apple opacity-80 mb-6">{p.body}</p>
                <ul className="space-y-2 mb-6">
                  {p.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="text-caption opacity-80 pl-5 relative before:content-['›'] before:absolute before:left-0 before:text-[#0071e3]"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-3 pt-4 border-t border-black/5">
                  {p.stack.map((slug) => (
                    <span
                      key={slug}
                      className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-black/[0.04]"
                      title={slug}
                    >
                      <Image
                        src={`/logos/tech/${slug}.svg`}
                        alt={slug}
                        width={20}
                        height={20}
                        className="opacity-80"
                      />
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

