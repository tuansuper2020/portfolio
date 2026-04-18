import Image from "next/image";
import { education, certifications } from "@/data/experience";

export function About() {
  return (
    <section
      id="about"
      className="bg-[#f5f5f7] text-[#1d1d1f] py-24 md:py-32"
    >
      <div className="max-w-[980px] mx-auto px-6">
        <p className="text-caption uppercase tracking-[0.2em] text-[#0066cc] mb-4">
          About
        </p>
        <h2 className="display-section mb-12 max-w-2xl">
          A product owner who ships — and writes down what works.
        </h2>

        <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 items-start">
          <div className="relative">
            <Image
              src="/portrait-alt.png"
              alt="Portrait of Vũ Mạnh Tuấn"
              width={500}
              height={500}
              className="rounded-[12px] w-full h-auto object-cover"
              style={{ boxShadow: "0 5px 30px rgba(0,0,0,0.22)" }}
            />
          </div>

          <div className="space-y-6 text-body-apple">
            <p>
              I&apos;m a Product Owner at Avada Group, where I own two Shopify
              apps that help merchants grow their Average Order Value: AOV.ai
              Post Purchase Upsell (ranked #2 on the App Store in Q1 2026) and
              AOV Checkout Upsell.
            </p>
            <p>
              Before Avada I was a Product Owner at Viettel Digital — the team
              behind Viettel Money — where I launched Game Hub and attracted
              230,000 organic users in its first three months. Earlier I was a
              Business Analyst at BSS Group, leading the Built for Shopify
              badge project and the BSS B2B Portal app.
            </p>
            <p>
              I like turning repetitive work into pipelines, keeping PRDs short
              enough to actually be read, and grounding every product decision
              in numbers merchants feel.
            </p>

            <div className="pt-6 grid sm:grid-cols-2 gap-6 border-t border-black/10">
              <div>
                <h3 className="text-subheading mb-2">Education</h3>
                <p className="text-caption text-black/70">
                  {education.school}
                  <br />
                  {education.program}
                  <br />
                  {education.years} · GPA {education.gpa}
                </p>
              </div>
              <div>
                <h3 className="text-subheading mb-2">Certifications</h3>
                <ul className="text-caption text-black/70 space-y-1">
                  {certifications.map((cert) => (
                    <li key={cert}>{cert}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
