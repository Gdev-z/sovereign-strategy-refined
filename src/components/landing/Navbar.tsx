import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Strategy", href: "#hero" },
  { label: "Pillars", href: "#pillars" },
  { label: "Gallery", href: "#gallery" },
  { label: "Bio", href: "#bio" },
  { label: "Consultancy", href: "#triagem" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/40 backdrop-blur-xl shadow-[0_0_40px_rgba(212,175,55,0.05)]">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-24">
        <div className="text-2xl font-headline italic text-primary">Sovereign Strategy</div>

        {/* Desktop */}
        <div className="hidden md:flex gap-10 items-center">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-neutral-400 hover:text-neutral-200 transition-colors duration-300 font-headline tracking-tight"
            >
              {l.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollTo("#triagem")}
          className="hidden md:block bg-primary text-primary-foreground px-8 py-3 font-label text-xs tracking-widest uppercase font-bold hover:opacity-80 transition-opacity rounded-xl"
        >
          Elite Access
        </button>

        {/* Mobile toggle */}
        <button className="md:hidden text-primary" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface/95 backdrop-blur-xl border-t border-outline-variant/10 px-8 pb-8 space-y-4">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="block w-full text-left text-neutral-400 hover:text-primary font-headline py-2 transition-colors"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#triagem")}
            className="w-full bg-primary text-primary-foreground py-3 font-label text-xs tracking-widest uppercase font-bold rounded-xl mt-4"
          >
            Elite Access
          </button>
        </div>
      )}
    </nav>
  );
}
