import Link from "next/link";
import { writings } from "@/data/writings";

export function WritingsList() {
  return (
    <section
      id="writings"
      className="bg-black text-white py-24 md:py-32"
    >
      <div className="max-w-[980px] mx-auto px-6">
        <p className="text-caption uppercase tracking-[0.2em] text-[#2997ff] mb-4">
          Writings
        </p>
        <h2 className="display-section mb-4 max-w-2xl">
          Notes from the job.
        </h2>
        <p className="text-body-apple text-white/70 max-w-2xl mb-16">
          Short essays on product ownership, shipping on Shopify, and turning
          repeat work into pipelines. Written for anyone curious about the
          craft, not just engineers.
        </p>

        <div className="space-y-6">
          {writings.map((post) => (
            <Link
              key={post.slug}
              href={`/writings/${post.slug}`}
              className="block group rounded-2xl p-8 bg-[#1d1d1f] hover:bg-[#272729] transition-colors"
            >
              <div className="flex items-baseline gap-4 mb-3">
                <span className="text-caption text-white/40 font-mono">
                  {post.date}
                </span>
                <span className="text-caption text-white/40">·</span>
                <span className="text-caption text-white/40">
                  {post.readingTime}
                </span>
              </div>
              <h3 className="display-tile mb-3 group-hover:text-[#2997ff] transition-colors">
                {post.title}
              </h3>
              <p className="text-body-apple text-white/70">{post.excerpt}</p>
              <span className="inline-block mt-4 text-[#2997ff] text-caption arrow-chev">
                Read
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
