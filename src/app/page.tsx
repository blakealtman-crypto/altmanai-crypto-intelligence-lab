import HeroSection from "@/components/HeroSection";
import MarketOverview from "@/components/MarketOverview";
import CryptoGlossary from "@/components/CryptoGlossary";
import ResearchCard from "@/components/ResearchCard";
import AIInsightPanel from "@/components/AIInsightPanel";
import RiskDisclosure from "@/components/RiskDisclosure";
import Footer from "@/components/Footer";
import { researchTopics } from "@/data/researchTopics";

const portfolioConcepts = [
  {
    name: "Diversification",
    description:
      "Spreading exposure across multiple assets or categories so that no single position determines the outcome of the whole portfolio.",
  },
  {
    name: "Position Sizing",
    description:
      "Deciding how much of a portfolio to allocate to any one asset, based on conviction and risk tolerance — not just excitement about the idea.",
  },
  {
    name: "Dollar-Cost Averaging",
    description:
      "Investing a fixed amount at regular intervals regardless of price, which reduces (but doesn't eliminate) the impact of timing any single entry point.",
  },
  {
    name: "Rebalancing",
    description:
      "Periodically adjusting a portfolio back to target allocations as prices move, rather than letting winners and losers silently reshape your risk exposure.",
  },
];

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

      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-2">Portfolio Education</h2>
        <p className="text-muted-foreground mb-6 text-sm">
          Core portfolio concepts for understanding risk exposure — educational only, not a recommendation for how to allocate any specific portfolio.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {portfolioConcepts.map((c) => (
            <div key={c.name} className="rounded-lg border p-5 bg-card">
              <h3 className="font-medium mb-1">{c.name}</h3>
              <p className="text-sm text-muted-foreground">{c.description}</p>
            </div>
          ))}
        </div>
      </section>

      <AIInsightPanel />
      <RiskDisclosure />
      <Footer />
    </main>
  );
}
