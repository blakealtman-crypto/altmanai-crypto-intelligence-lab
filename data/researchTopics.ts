export interface ResearchTopic {
  title: string;
  category: string;
  summary: string;
}

export const researchTopics: ResearchTopic[] = [
  {
    title: "Bitcoin & Digital Scarcity",
    category: "Layer 1",
    summary:
      "How a fixed, algorithmically enforced supply schedule creates a fundamentally different monetary asset than fiat currency — and what that does and doesn't guarantee about value.",
  },
  {
    title: "Ethereum & Smart Contract Platforms",
    category: "Layer 1",
    summary:
      "Programmable blockchains as the foundation for DeFi, NFTs, and decentralized applications — and the tradeoffs between security, speed, and decentralization.",
  },
  {
    title: "Stablecoins & Price Stability Mechanisms",
    category: "Assets",
    summary:
      "Fiat-collateralized, crypto-collateralized, and algorithmic approaches to stability — and the real-world failure modes each design has historically faced.",
  },
  {
    title: "DeFi: Decentralized Finance Primitives",
    category: "DeFi",
    summary:
      "Lending protocols, automated market makers, and yield mechanisms — how they replicate (and sometimes fail to replicate) traditional financial guardrails.",
  },
  {
    title: "NFTs & Digital Ownership",
    category: "Assets",
    summary:
      "What a non-fungible token actually proves ownership of, common misconceptions, and the difference between the token and the underlying asset it references.",
  },
  {
    title: "Layer 2 Scaling & Rollups",
    category: "Infrastructure",
    summary:
      "Why base blockchains struggle to scale directly, and how rollups and sidechains attempt to solve throughput without sacrificing security guarantees.",
  },
  {
    title: "Regulatory Landscape Overview",
    category: "Compliance",
    summary:
      "A high-level, non-legal-advice overview of how different jurisdictions are approaching digital asset classification, exchange licensing, and consumer protection.",
  },
];
