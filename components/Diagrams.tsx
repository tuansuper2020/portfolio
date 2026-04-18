import Image from "next/image";

const diagrams = [
  {
    src: "/diagrams/feature-lifecycle.png",
    label: "Feature lifecycle",
    caption:
      "End-to-end stages a Checkout Upsell feature travels through — from idea to release.",
  },
  {
    src: "/diagrams/po-designer-workflow.png",
    label: "PO × Designer workflow",
    caption:
      "The sync points between Product and Design. Who hands off what, and when.",
  },
  {
    src: "/diagrams/team-collaboration.png",
    label: "Team collaboration",
    caption:
      "Cross-role ownership map — PO, three devs, designer, QA. Where decisions land.",
  },
  {
    src: "/diagrams/agent-team-flow.png",
    label: "Agent team flow",
    caption:
      "How AI agents plug into the team — scoping, mockups, drafts, reviews.",
  },
  {
    src: "/diagrams/preconfig-pipeline.png",
    label: "Preconfig pipeline (PPU)",
    caption:
      "Preconfigured offer templates — the data path from template → merchant → buyer.",
  },
  {
    src: "/diagrams/health-score-before-after.png",
    label: "Health score redesign",
    caption:
      "A before/after of the PPU merchant dashboard health score treatment.",
  },
];

export function Diagrams() {
  return (
    <section className="bg-[#f5f5f7] text-[#1d1d1f] py-24 md:py-32">
      <div className="max-w-[1120px] mx-auto px-6">
        <p className="text-caption uppercase tracking-[0.2em] text-[#0066cc] mb-4">
          Diagrams
        </p>
        <h2 className="display-section mb-4 max-w-2xl">
          Whiteboards I keep coming back to.
        </h2>
        <p className="text-body-apple opacity-70 max-w-2xl mb-16">
          When a system gets complex, I draw it. These are a few of the
          Excalidraw boards I made this year — the ones I share with new
          teammates on day one so they have the map before the details.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {diagrams.map((d) => (
            <figure
              key={d.src}
              className="mockup-card bg-white rounded-2xl overflow-hidden"
              style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.06)" }}
            >
              <div className="relative bg-[#fcfcfc] flex items-center justify-center p-4 aspect-[16/10] overflow-hidden">
                <Image
                  src={d.src}
                  alt={`${d.label} diagram`}
                  width={1200}
                  height={750}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain max-h-full w-auto"
                />
              </div>
              <figcaption className="p-5 border-t border-black/5">
                <p className="text-subheading font-semibold mb-1">{d.label}</p>
                <p className="text-caption opacity-70">{d.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
