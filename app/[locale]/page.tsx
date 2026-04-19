import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Timeline } from "@/components/Timeline";
import { ProductChapter } from "@/components/ProductChapter";
import { Bots } from "@/components/Bots";
import { DevDashboard } from "@/components/DevDashboard";
import { AIWorkflow } from "@/components/AIWorkflow";
import { Skills } from "@/components/Skills";
import { Pipeline } from "@/components/Pipeline";
import { StackStrip } from "@/components/StackStrip";
import { StatsGrid } from "@/components/StatsGrid";
import { WritingsList } from "@/components/WritingsList";
import { Contact, Footer } from "@/components/Contact";
import { getProjects } from "@/data/projects";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const projects = getProjects(locale);

  return (
    <>
      <Navigation lang={locale} />
      <main className="flex-1">
        <Hero lang={locale} />
        <About lang={locale} />
        <Timeline lang={locale} />
        <section id="work">
          {projects.map((p) => (
            <ProductChapter key={p.slug} project={p} lang={locale} />
          ))}
        </section>
        <AIWorkflow lang={locale} />
        <Skills lang={locale} />
        <Bots lang={locale} />
        <DevDashboard lang={locale} />
        <Pipeline lang={locale} />
        <StackStrip lang={locale} />
        <StatsGrid lang={locale} />
        <WritingsList lang={locale} />
        <Contact lang={locale} />
      </main>
      <Footer lang={locale} />
    </>
  );
}
