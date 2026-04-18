import Image from "next/image";
import { experience } from "@/data/experience";

export function Timeline() {
  return (
    <section className="bg-black text-white py-24 md:py-32">
      <div className="max-w-[980px] mx-auto px-6">
        <p className="text-caption uppercase tracking-[0.2em] text-[#2997ff] mb-4">
          Journey
        </p>
        <h2 className="display-section mb-16 max-w-2xl">
          Four years, four teams — each one a little bigger.
        </h2>

        <ol className="relative border-l border-white/15 pl-8 space-y-12">
          {experience.map((job) => (
            <li key={job.start} className="relative">
              <span
                className={`absolute -left-[41px] top-2 w-4 h-4 rounded-full ring-4 ring-black ${
                  job.current ? "bg-[#0071e3]" : "bg-white/40"
                }`}
              />
              <div className="flex flex-col md:flex-row md:items-baseline md:gap-4 mb-4">
                <span className="text-caption text-white/50 font-mono tracking-wide">
                  {job.start} — {job.end}
                </span>
                {job.current && (
                  <span className="text-caption text-[#2997ff] uppercase tracking-[0.15em]">
                    Now
                  </span>
                )}
              </div>
              <div className="flex items-center gap-3 mb-4">
                {job.logo && (
                  <span className="w-10 h-10 rounded-xl bg-white flex items-center justify-center overflow-hidden ring-1 ring-white/10">
                    <Image
                      src={job.logo}
                      alt={`${job.company} logo`}
                      width={36}
                      height={36}
                      className="object-contain"
                    />
                  </span>
                )}
                <div>
                  <h3 className="display-tile leading-none">{job.role}</h3>
                  <p className="text-caption text-white/60 mt-1">{job.company}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {job.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="text-body-apple text-white/80 pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-white/30"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
