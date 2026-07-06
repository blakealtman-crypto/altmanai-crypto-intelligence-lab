export interface RoadmapItem {
  version: string;
  status: "Shipped" | "In Progress" | "Planned";
  title: string;
  items: string[];
}

export const roadmapItems: RoadmapItem[] = [
  {
    version: "v0.1.0-alpha",
    status: "Shipped",
    title: "Genesis Alpha — Foundation",
    items: [
      "Project vision, mission, and compliance-first documentation",
      "Starter dashboard architecture (Next.js + TypeScript + Tailwind)",
      "Educational crypto glossary structure",
      "Risk-awareness framework (7 core risk categories)",
      "Founder-led governance and roadmap",
    ],
  },
  {
    version: "v0.2.0",
    status: "Planned",
    title: "Educational Content Expansion",
    items: [
      "Expanded glossary and blockchain research library",
      "Deeper research cards per major ecosystem (BTC, ETH, L2s, DeFi)",
      "Improved accessibility and mobile experience",
    ],
  },
  {
    version: "v0.3.0",
    status: "Planned",
    title: "AI Research Assistant Integration",
    items: [
      "AltmanAI-powered plain-English topic summaries",
      "Human-reviewed content pipeline (no unreviewed AI publishing)",
      "PAIHI-aligned proof-of-content-integrity for AI-assisted research notes",
    ],
  },
  {
    version: "v1.0.0",
    status: "Planned",
    title: "Public Dashboard Launch",
    items: [
      "Public-facing educational dashboard at a dedicated domain",
      "Expanded risk-awareness tooling",
      "Formal compliance and legal review prior to any public financial-adjacent claims",
    ],
  },
];
