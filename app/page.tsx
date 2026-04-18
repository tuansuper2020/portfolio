import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Timeline } from "@/components/Timeline";
import { ProductChapter } from "@/components/ProductChapter";
import { StatsGrid } from "@/components/StatsGrid";
import { WritingsList } from "@/components/WritingsList";
import { Contact, Footer } from "@/components/Contact";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <Hero />
        <About />
        <Timeline />
        <section id="work">
          {projects.map((p) => (
            <ProductChapter key={p.slug} project={p} />
          ))}
        </section>
        <StatsGrid />
        <WritingsList />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
