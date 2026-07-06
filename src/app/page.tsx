import HeroSection from "@/components/HeroSection";
import MarketOverview from "@/components/MarketOverview";
import CryptoGlossary from "@/components/CryptoGlossary";
import ResearchCard from "@/components/ResearchCard";
import AIInsightPanel from "@/components/AIInsightPanel";
import RiskDisclosure from "@/components/RiskDisclosure";
import Footer from "@/components/Footer";
import { researchTopics } from "@/data/researchTopics";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MarketOverview />

      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-2">Digital Asset Research</h2>
        <p className="text-muted-foreground mb-6 text-sm">
          Structured research topics on major blockchain ecosystems and market concepts.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {researchTopics.map((t) => (
            <ResearchCard key={t.title} topic={t} />
          ))}
        </div>
      </section>

      <CryptoGlossary />
      <AIInsightPanel />
      <RiskDisclosure />
      <Footer />
    </main>
  );
}
