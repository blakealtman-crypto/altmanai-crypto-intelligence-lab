const categories = [
  { name: "Layer 1 Blockchains", description: "Base-layer networks like Bitcoin and Ethereum that provide core settlement and security." },
  { name: "Stablecoins", description: "Assets designed to hold a stable value, typically pegged to a fiat currency." },
  { name: "DeFi Protocols", description: "Smart-contract-based lending, trading, and yield systems." },
  { name: "NFT Ecosystems", description: "Digital ownership and provenance systems built on token standards." },
];

/**
 * Educational market structure overview — NOT a live price feed or trading
 * dashboard. Categories are conceptual groupings for learning purposes.
 */
export default function MarketOverview() {
  return (
    <section className="px-6 py-16 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-2">Market Structure Overview</h2>
      <p className="text-muted-foreground mb-8 text-sm">
        Conceptual categories for understanding the digital asset landscape — not live pricing or trading data.
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        {categories.map((c) => (
          <div key={c.name} className="rounded-lg border p-5 bg-card">
            <h3 className="font-medium mb-1">{c.name}</h3>
            <p className="text-sm text-muted-foreground">{c.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
