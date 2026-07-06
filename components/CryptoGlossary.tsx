"use client";

import { useState } from "react";
import { cryptoGlossary } from "@/data/cryptoGlossary";

export default function CryptoGlossary() {
  const [query, setQuery] = useState("");

  const filtered = cryptoGlossary.filter(
    (t) =>
      t.term.toLowerCase().includes(query.toLowerCase()) ||
      t.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="px-6 py-16 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-2">Crypto Glossary</h2>
      <p className="text-muted-foreground mb-6 text-sm">
        Plain-English explanations of core blockchain and digital asset concepts.
      </p>
      <input
        type="text"
        placeholder="Search terms (e.g. wallet, DeFi, volatility)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full mb-6 rounded-md border px-4 py-2 text-sm bg-background"
      />
      <div className="grid sm:grid-cols-2 gap-4">
        {filtered.map((t) => (
          <div key={t.term} className="rounded-lg border p-4 bg-card">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-medium">{t.term}</h3>
              <span className="text-xs text-muted-foreground">{t.category}</span>
            </div>
            <p className="text-sm text-muted-foreground">{t.definition}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
