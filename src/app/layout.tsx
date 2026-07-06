import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AltmanAI Crypto Intelligence Lab",
  description:
    "Human-first crypto intelligence powered by AltmanAI — educational blockchain and digital asset research. Not financial advice.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
