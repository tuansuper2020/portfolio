import Image from "next/image";

export function DevDashboard() {
  return (
    <section className="bg-[#f5f5f7] text-[#1d1d1f] py-24 md:py-32">
      <div className="max-w-[1120px] mx-auto px-6">
        <p className="text-caption uppercase tracking-[0.2em] text-[#0066cc] mb-4">
          Internal tool
        </p>
        <h2 className="display-section mb-4 max-w-3xl">
          Dev Dashboard — one page, the whole sprint.
        </h2>
        <p className="text-body-apple opacity-75 max-w-2xl mb-16">
          A Hono-on-Vercel app I built to pull sprint and analytics data out
          of Notion and Mixpanel into a single scrollable page. It replaced
          the Monday standup &ldquo;let me check Notion&rdquo; ritual with a
          glance. Two routes, two screenshots below.
        </p>

        <div className="space-y-12">
          <figure
            className="bg-white rounded-2xl overflow-hidden"
            style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }}
          >
            <div className="p-3 bg-[#fafafa] border-b border-black/5 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-caption text-black/50 font-mono">
                /sprint
              </span>
            </div>
            <Image
              src="/screenshots/dev-dashboard-sprint.png"
              alt="Dev Dashboard sprint page"
              width={1440}
              height={1300}
              sizes="(max-width: 1024px) 100vw, 1120px"
              className="w-full h-auto"
            />
            <figcaption className="p-6 border-t border-black/5">
              <p className="text-subheading font-semibold mb-2">
                Sprint view
              </p>
              <p className="text-caption opacity-70">
                Current sprint with tasks grouped by role, status badges
                following a shadcn palette, per-dev workload bars, open QA
                bugs next to each dev&apos;s avatar, and release tasks with
                missing-date flags. All pulled live from Notion.
              </p>
            </figcaption>
          </figure>

          <figure
            className="bg-white rounded-2xl overflow-hidden"
            style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }}
          >
            <div className="p-3 bg-[#fafafa] border-b border-black/5 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-caption text-black/50 font-mono">
                /analytics
              </span>
            </div>
            <Image
              src="/screenshots/dev-dashboard-analytics.png"
              alt="Dev Dashboard analytics page"
              width={1440}
              height={1300}
              sizes="(max-width: 1024px) 100vw, 1120px"
              className="w-full h-auto"
            />
            <figcaption className="p-6 border-t border-black/5">
              <p className="text-subheading font-semibold mb-2">
                Analytics view
              </p>
              <p className="text-caption opacity-70">
                Product analytics built on Mixpanel — funnel conversion,
                offer performance, merchant activation. Chart.js with the
                same shadcn palette as the sprint view so the two pages
                feel like one tool.
              </p>
            </figcaption>
          </figure>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-4">
          <div
            className="bg-white rounded-2xl p-6"
            style={{ boxShadow: "0 6px 24px rgba(0,0,0,0.05)" }}
          >
            <h4 className="text-subheading font-semibold mb-2">Stack</h4>
            <p className="text-caption opacity-70 leading-relaxed">
              Hono on the Vercel Node runtime · Notion API (Tasks DB, Sprint
              DB, PRD DB, FAQ DB) · Mixpanel export API · Chart.js for the
              charts · shadcn-style server-rendered HTML · deployed in one
              file from{" "}
              <code className="bg-black/5 px-1 rounded text-[0.85em]">
                api/index.js
              </code>
              .
            </p>
          </div>
          <div
            className="bg-white rounded-2xl p-6"
            style={{ boxShadow: "0 6px 24px rgba(0,0,0,0.05)" }}
          >
            <h4 className="text-subheading font-semibold mb-2">
              Why I built it
            </h4>
            <p className="text-caption opacity-70 leading-relaxed">
              Sprint status lived in Notion. Product health lived in
              Mixpanel. Bugs lived in a third filter. The team was
              tab-hopping every standup. A single stitched page killed the
              tab-hop and cut 10 minutes from every sync.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
