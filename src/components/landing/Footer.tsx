export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/15 bg-background">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 gap-8 max-w-7xl mx-auto">
        <div className="space-y-4">
          <div className="font-headline text-primary text-lg italic">Sovereign Strategy</div>
          <p className="font-label text-xs tracking-widest uppercase text-muted-foreground max-w-sm">
            © 2024 Sovereign Strategy. The Digital Concierge for High-Net-Worth Individuals.
          </p>
        </div>
        <div className="flex gap-8 flex-wrap justify-center">
          <a className="font-label text-xs tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors" href="#">
            Privacy Policy
          </a>
          <a className="font-label text-xs tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors" href="#">
            Terms of Service
          </a>
          <a className="font-label text-xs tracking-widest uppercase text-primary hover:opacity-80 transition-opacity font-bold" href="#">
            Exclusive WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
