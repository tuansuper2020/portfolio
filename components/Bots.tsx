import Image from "next/image";

export function Bots() {
  return (
    <section className="bg-black text-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1120px] mx-auto px-6">
        <p className="text-caption uppercase tracking-[0.2em] text-[#2997ff] mb-4">
          Bots I built
        </p>
        <h2 className="display-section mb-4 max-w-3xl">
          Two bots, one rule: never fabricate.
        </h2>
        <p className="text-body-apple text-white/70 max-w-2xl mb-20">
          Customer support and internal Q&amp;A are where bad answers cost the
          most — so every answer has to come from something I actually wrote
          down, not something an LLM made up. Here are the two I shipped.
        </p>

        {/* HERMES — Telegram CKU guide bot */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-start mb-10">
            <div>
              <p className="text-caption text-[#2997ff] mb-3 tracking-wide">
                01 · Telegram · Internal CKU guide
              </p>
              <h3 className="display-tile mb-4">Hermes</h3>
              <p className="text-body-apple text-white/80 mb-4">
                Hermes answers questions about our Shopify apps on Telegram —
                CS teammates chat with it in a group and in DMs when they&apos;re
                stuck on a merchant issue. It knows every feature in
                Checkout Upsell, Free Gift, Bundle Upsell, Post-Purchase, and
                Cart Drawer because the entire knowledge base is indexed at
                startup.
              </p>
              <p className="text-body-apple text-white/80">
                The trick isn&apos;t the LLM — it&apos;s the routing. A question
                mentioning &ldquo;trust badge&rdquo; loads the CKU quick-ref;
                &ldquo;buy X get Y&rdquo; pulls in Free Gift. Anything about
                discount stacking always mounts the Shopify discount
                combinations doc. When the KB has no answer, Hermes says
                &ldquo;escalate dev check nhé&rdquo; instead of guessing.
              </p>
            </div>
            <div
              className="rounded-2xl overflow-hidden bg-white/[0.04] p-4"
              style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}
            >
              <Image
                src="/screenshots/telegram-bot.jpg"
                alt="Hermes Telegram bot screenshot"
                width={1154}
                height={843}
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="w-full h-auto rounded-xl"
                priority
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 items-start">
            <div
              className="rounded-2xl bg-white p-4"
              style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
            >
              <Image
                src="/diagrams/hermes-bot-architecture.png"
                alt="Hermes architecture diagram"
                width={1090}
                height={600}
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <h4 className="text-subheading font-semibold">How it&apos;s wired</h4>
              <dl className="space-y-3 text-body-apple text-white/80">
                <div className="flex gap-3">
                  <dt className="text-caption text-[#2997ff] w-28 shrink-0 pt-1">
                    Gateway
                  </dt>
                  <dd>
                    Three Telegram sources — CS group, DMs, and photo
                    uploads with captions.
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="text-caption text-[#2997ff] w-28 shrink-0 pt-1">
                    LLM
                  </dt>
                  <dd>
                    Groq hosted Llama 3.3 70B. Fast, cheap, free tier is
                    enough for the volume. $0 run-cost.
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="text-caption text-[#2997ff] w-28 shrink-0 pt-1">
                    Knowledge
                  </dt>
                  <dd>
                    220+ Markdown files — quick refs per app, full FAQ
                    trees, discount combination matrix. Personality loaded
                    from <code className="bg-white/10 px-1.5 rounded text-[0.85em]">SOUL.md</code> +{" "}
                    <code className="bg-white/10 px-1.5 rounded text-[0.85em]">
                      IDENTITY.md
                    </code>
                    .
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="text-caption text-[#2997ff] w-28 shrink-0 pt-1">
                    Routing
                  </dt>
                  <dd>
                    Keyword classifier maps each question to the right app
                    (CKU, FG, BU, PPU, CD) and only loads that app&apos;s
                    context — keeps the prompt small.
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="text-caption text-[#2997ff] w-28 shrink-0 pt-1">
                    Commands
                  </dt>
                  <dd>
                    <code className="bg-white/10 px-1.5 rounded text-[0.85em]">
                      /start
                    </code>
                    ,{" "}
                    <code className="bg-white/10 px-1.5 rounded text-[0.85em]">
                      /reset
                    </code>
                    ,{" "}
                    <code className="bg-white/10 px-1.5 rounded text-[0.85em]">
                      /apps
                    </code>
                    ,{" "}
                    <code className="bg-white/10 px-1.5 rounded text-[0.85em]">
                      /help
                    </code>
                    . Session history capped at 20 messages.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* VICTOR — Crisp live chat */}
        <div>
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 items-start mb-10">
            <div
              className="rounded-2xl overflow-hidden bg-white p-4 order-2 lg:order-1"
              style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
            >
              <Image
                src="/screenshots/crisp-bot.jpg"
                alt="Victor Crisp live-chat bot screenshot"
                width={1792}
                height={1583}
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-caption text-[#2997ff] mb-3 tracking-wide">
                02 · Crisp · Live merchant chat
              </p>
              <h3 className="display-tile mb-4">Victor</h3>
              <p className="text-body-apple text-white/80 mb-4">
                Victor is a Crisp live-chat agent that talks to merchants on
                the AOV.ai storefront. He opens with &ldquo;Hey! Victor from
                AOV.ai here 👋&rdquo;, runs through an identify-then-confirm
                flow, answers from the knowledge base, and escalates cleanly
                when the question is outside his scope.
              </p>
              <p className="text-body-apple text-white/80">
                The whole behaviour is codified in a 122-line playbook I
                wrote: short chat-style messages, no formal phrases, no
                fabricated answers, and a hard list of &ldquo;never mention
                these internal features&rdquo; guardrails. When Victor
                doesn&apos;t know, he writes a conversation summary and hands
                off with context — no re-explaining for the human agent.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
            <div className="space-y-4">
              <h4 className="text-subheading font-semibold">The playbook rules</h4>
              <ul className="space-y-3 text-body-apple text-white/80">
                <li className="pl-5 relative before:content-['›'] before:absolute before:left-0 before:text-[#2997ff]">
                  <strong>Answer from the KB first.</strong> If the answer is
                  in the loaded files, reply directly — not &ldquo;let me
                  check.&rdquo;
                </li>
                <li className="pl-5 relative before:content-['›'] before:absolute before:left-0 before:text-[#2997ff]">
                  <strong>Identify, confirm, then solve.</strong> Describe
                  what you see, ask the merchant to confirm, only then
                  answer — no premature solutions.
                </li>
                <li className="pl-5 relative before:content-['›'] before:absolute before:left-0 before:text-[#2997ff]">
                  <strong>Vary the wording.</strong> Never repeat the same
                  phrase twice in a conversation.
                </li>
                <li className="pl-5 relative before:content-['›'] before:absolute before:left-0 before:text-[#2997ff]">
                  <strong>Never fabricate.</strong> If the KB doesn&apos;t
                  cover it, say so and escalate — a confident wrong answer
                  is worse than &ldquo;I don&apos;t know.&rdquo;
                </li>
                <li className="pl-5 relative before:content-['›'] before:absolute before:left-0 before:text-[#2997ff]">
                  <strong>Clean handoffs.</strong> When handing to a human,
                  include: what the merchant asked, what was tried, what&apos;s
                  unresolved, and the collaborator code if shared.
                </li>
                <li className="pl-5 relative before:content-['›'] before:absolute before:left-0 before:text-[#2997ff]">
                  <strong>Guardrails.</strong> Never mention internal-only
                  features, never promise dev timelines, always escalate
                  billing or review threats.
                </li>
              </ul>
            </div>
            <div
              className="rounded-2xl bg-white p-4"
              style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
            >
              <Image
                src="/diagrams/architecture.png"
                alt="Victor Crisp bot architecture diagram"
                width={1570}
                height={830}
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
