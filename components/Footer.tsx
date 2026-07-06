export default function Footer() {
  return (
    <footer className="px-6 py-10 border-t text-sm text-muted-foreground">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between gap-4">
        <p>
          &copy; {new Date().getFullYear()} Altman Family Group LLC. AltmanAI
          Crypto Intelligence Lab is a research &amp; education initiative —
          not a licensed financial services product.
        </p>
        <div className="flex gap-4">
          <a href="https://www.altmanai.tech" className="hover:underline">AltmanAI</a>
          <a href="https://github.com/altmanAI" className="hover:underline">AltmanAI GitHub</a>
          <a href="/DISCLAIMER.md" className="hover:underline">Disclaimer</a>
        </div>
      </div>
    </footer>
  );
}
