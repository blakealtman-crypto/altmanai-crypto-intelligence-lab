export interface GlossaryTerm {
  term: string;
  category: "Foundations" | "Assets" | "Infrastructure" | "DeFi" | "Risk";
  definition: string;
}

export const cryptoGlossary: GlossaryTerm[] = [
  {
    term: "Blockchain",
    category: "Foundations",
    definition:
      "A distributed, append-only ledger maintained across many computers, where new entries (blocks) are cryptographically linked to prior ones — making the history difficult to alter without detection.",
  },
  {
    term: "Bitcoin",
    category: "Assets",
    definition:
      "The first widely adopted cryptocurrency, designed as a peer-to-peer digital cash system with a fixed maximum supply of 21 million coins, secured by proof-of-work mining.",
  },
  {
    term: "Ethereum",
    category: "Assets",
    definition:
      "A blockchain platform that supports programmable 'smart contracts,' enabling applications beyond simple payments — including DeFi, NFTs, and decentralized organizations.",
  },
  {
    term: "Stablecoin",
    category: "Assets",
    definition:
      "A crypto asset designed to maintain a stable value, typically pegged to a fiat currency like the US dollar, through reserves, collateral, or algorithmic mechanisms.",
  },
  {
    term: "Wallet",
    category: "Infrastructure",
    definition:
      "Software or hardware that stores the private keys needed to access and authorize transactions for crypto assets. The wallet does not 'hold' coins so much as prove ownership of them on-chain.",
  },
  {
    term: "Exchange",
    category: "Infrastructure",
    definition:
      "A platform where users can buy, sell, or trade crypto assets — either centralized (custodial, run by a company) or decentralized (non-custodial, run by smart contracts).",
  },
  {
    term: "Smart Contract",
    category: "Infrastructure",
    definition:
      "Self-executing code deployed on a blockchain that runs automatically when predefined conditions are met, without a central intermediary enforcing the agreement.",
  },
  {
    term: "DeFi (Decentralized Finance)",
    category: "DeFi",
    definition:
      "Financial services — lending, borrowing, trading, earning yield — built on smart contracts instead of traditional financial institutions.",
  },
  {
    term: "NFT (Non-Fungible Token)",
    category: "Assets",
    definition:
      "A token representing unique ownership of a specific digital or digital-linked item, as opposed to fungible tokens like currencies where every unit is interchangeable.",
  },
  {
    term: "Tokenomics",
    category: "Foundations",
    definition:
      "The economic design of a token: its supply schedule, distribution, incentives, and utility — a major factor in evaluating a project beyond its underlying technology.",
  },
  {
    term: "Liquidity",
    category: "Risk",
    definition:
      "How easily an asset can be bought or sold without significantly moving its price. Low-liquidity assets can be far harder to exit than they were to enter.",
  },
  {
    term: "Market Capitalization",
    category: "Foundations",
    definition:
      "The total value of a crypto asset's circulating supply (price × circulating supply). Useful for scale comparison, but not a full picture of liquidity, risk, or fundamentals.",
  },
  {
    term: "Volatility",
    category: "Risk",
    definition:
      "The degree and speed of price fluctuation in an asset. Crypto markets are historically far more volatile than most traditional asset classes.",
  },
  {
    term: "Custody",
    category: "Risk",
    definition:
      "Who actually controls the private keys to an asset — you (self-custody) or a third party (custodial). 'Not your keys, not your coins' is the common shorthand for this distinction.",
  },
  {
    term: "Gas Fees",
    category: "Infrastructure",
    definition:
      "The transaction fee paid to a blockchain network's validators/miners to process and confirm a transaction or smart contract execution.",
  },
  {
    term: "Layer 2",
    category: "Infrastructure",
    definition:
      "A secondary protocol built on top of a base blockchain (Layer 1) to improve speed and reduce costs, while still inheriting the base layer's security guarantees.",
  },
];
