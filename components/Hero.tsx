import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0b0f] to-black" />
      <div className="relative z-10 max-w-[980px] w-full px-6 py-32 flex flex-col items-center text-center">
        <div className="mb-10 relative">
          <div className="absolute inset-0 rounded-full blur-3xl bg-[#0071e3]/20" />
          <Image
            src="/portrait.jpg"
            alt="Portrait of Vũ Mạnh Tuấn"
            width={180}
            height={180}
            priority
            className="relative rounded-full object-cover shadow-[0_20px_60px_rgba(0,113,227,0.25)] ring-1 ring-white/10"
            style={{ width: 180, height: 180 }}
          />
        </div>

        <p className="text-caption uppercase tracking-[0.2em] text-[#2997ff] mb-4">
          Product Owner · Avada Group
        </p>

        <h1 className="display-hero text-white max-w-3xl">
          Vũ Mạnh Tuấn.
          <br />
          Shipping Shopify apps that grow merchant AOV.
        </h1>

        <p className="text-subheading text-white/70 mt-6 max-w-xl">
          I build post-purchase and checkout upsell products for Shopify
          merchants — currently ranked #2 on the App Store.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-10">
          <Link href="#work" className="pill pill-filled">
            View work
          </Link>
          <Link href="#contact" className="pill pill-outline-dark">
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
