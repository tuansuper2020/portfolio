import Image from "next/image";

const mockups = [
  {
    src: "/mockups/checkout-upsell.png",
    label: "Checkout Upsell",
    caption: "Block flow — entry point, editor, buyer preview on Shopify Plus checkout.",
  },
  {
    src: "/mockups/dashboard.png",
    label: "Dashboard",
    caption: "Merchant home — app-block status, analytics help, quickstart detail.",
  },
  {
    src: "/mockups/volume-savings.png",
    label: "Volume Savings",
    caption: "Tiered discount offer on cart and checkout surfaces.",
  },
  {
    src: "/mockups/trust-badges.png",
    label: "Trust Badges",
    caption: "Customizable trust signals placed in checkout for assurance.",
  },
  {
    src: "/mockups/discount-list.png",
    label: "Discount List",
    caption: "Admin list + rule editor for discount functions across checkout.",
  },
  {
    src: "/mockups/image-carousel.png",
    label: "Image Carousel",
    caption: "Rotating merchandise spots inside checkout blocks.",
  },
];

export function MockupGallery() {
  return (
    <section className="bg-[#f5f5f7] text-[#1d1d1f] py-24 md:py-32">
      <div className="max-w-[1120px] mx-auto px-6">
        <p className="text-caption uppercase tracking-[0.2em] text-[#0066cc] mb-4">
          Feature mockups
        </p>
        <h2 className="display-section mb-4 max-w-2xl">
          Real PRDs, real mockups.
        </h2>
        <p className="text-body-apple opacity-70 max-w-2xl mb-16">
          Each feature ships with a flow-overview image that matches the PRD
          text one-to-one. These are from the Checkout Upsell app — a small
          slice of the 70+ mockup sets produced in Q1.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockups.map((m) => (
            <figure
              key={m.src}
              className="mockup-card bg-white rounded-2xl overflow-hidden"
              style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}
            >
              <div className="aspect-[2400/1640] relative bg-[#fafafa]">
                <Image
                  src={m.src}
                  alt={`${m.label} mockup`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="p-5">
                <p className="text-subheading font-semibold mb-1">{m.label}</p>
                <p className="text-caption opacity-70">{m.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
