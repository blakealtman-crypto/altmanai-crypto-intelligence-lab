export interface RiskPrinciple {
  name: string;
  description: string;
  considerations: string[];
}

export const riskPrinciples: RiskPrinciple[] = [
  {
    name: "Volatility Risk",
    description:
      "Crypto asset prices can move sharply in short periods, in either direction, often more severely than traditional asset classes.",
    considerations: [
      "Historical volatility is not a predictor of future volatility.",
      "Position sizing matters more than timing in volatile markets.",
    ],
  },
  {
    name: "Liquidity Risk",
    description:
      "Some assets are much harder to sell at a fair price than they were to buy, especially during periods of market stress.",
    considerations: [
      "Low trading volume can mean wide spreads and slippage.",
      "Liquidity can disappear quickly exactly when it's needed most.",
    ],
  },
  {
    name: "Custody Risk",
    description:
      "Who holds the private keys determines who actually controls an asset — a third party's insolvency or failure can mean total loss of access.",
    considerations: [
      "Self-custody removes counterparty risk but adds personal responsibility for key security.",
      "Custodial platforms have failed before, and can again.",
    ],
  },
  {
    name: "Smart Contract Risk",
    description:
      "Code bugs, exploits, or unaudited logic in a smart contract can result in irreversible loss of funds.",
    considerations: [
      "An audit reduces but does not eliminate risk.",
      "Newer, more complex, or less-tested protocols generally carry higher risk.",
    ],
  },
  {
    name: "Regulatory Risk",
    description:
      "Digital asset regulation is still evolving and varies significantly by jurisdiction, which can affect access, taxation, and legality of certain activities.",
    considerations: [
      "Rules can change with little notice.",
      "This is not legal or tax advice — consult a qualified professional for your jurisdiction.",
    ],
  },
  {
    name: "Emotional Decision Risk",
    description:
      "Fear of missing out and panic during drawdowns are common drivers of poor decision-making in volatile markets.",
    considerations: [
      "Decisions made under emotional stress are rarely your best decisions.",
      "Having a plan before volatility hits matters more than reacting to it.",
    ],
  },
  {
    name: "Concentration Risk",
    description:
      "Holding a large portion of exposure in a single asset, protocol, or platform magnifies the impact of anything going wrong with that one thing.",
    considerations: [
      "Diversification doesn't eliminate risk, but it changes its shape.",
      "Concentration can be a deliberate, informed choice — the risk is not knowing you've made it.",
    ],
  },
  {
    name: "Exchange Risk",
    description:
      "Centralized exchanges can fail, freeze withdrawals, be hacked, or become insolvent — exposing users who hold balances there rather than in self-custody.",
    considerations: [
      "An exchange balance is a claim on the exchange, not direct ownership of the underlying asset.",
      "Exchange history includes real, large-scale failures — this is a well-documented risk, not a hypothetical one.",
    ],
  },
];
