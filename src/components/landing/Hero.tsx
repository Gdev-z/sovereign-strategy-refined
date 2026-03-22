import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight, Wallet } from "lucide-react";

export default function Hero() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Luxury Car and Mansion Background"
          className="w-full h-full object-cover opacity-30 grayscale"
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <div
          className={`max-w-4xl space-y-8 transition-all duration-700 ${
            isVisible ? "animate-reveal-up" : "opacity-0"
          }`}
        >
          <span className="inline-block text-primary font-label text-sm tracking-[0.3em] uppercase opacity-80 mb-4">
            The Sovereign Method
          </span>
          <h1 className="text-5xl md:text-7xl font-headline font-bold leading-[1.05] tracking-tight text-on-surface">
            A Estratégia dos <span className="text-primary italic">Grandes Patrimônios</span>: Alavancagem Inteligente
            via Consórcio.
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant font-light max-w-2xl leading-relaxed">
            Sua consultoria de elite para contemplação estratégica, lances embutidos e zero juros abusivos.
          </p>
          <div className="pt-8 flex flex-wrap gap-6">
            <a
              href="#triagem"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#triagem")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-primary text-primary-foreground px-10 py-5 font-bold uppercase tracking-widest text-sm rounded-xl hover:scale-[1.03] active:scale-[0.97] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-[0_0_30px_rgba(242,202,80,0.2)]"
            >
              Inicie sua Estratégia
            </a>
            <a
              href="#pillars"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#pillars")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-3 text-primary border-b border-primary/20 hover:border-primary pb-1 transition-all"
            >
              Descubra o Método
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Floating stat card */}
      <div className="hidden lg:block absolute right-8 bottom-24 glass-card p-10 rounded-xl border border-outline-variant/15 gold-halo max-w-sm animate-reveal-up" style={{ animationDelay: "0.4s" }}>
        <div className="space-y-6">
          <Wallet className="text-primary w-10 h-10" />
          <div className="relative">
            <div className="absolute inset-0 bg-secondary/10 blur-2xl -z-10" />
            <p className="text-4xl font-headline font-bold text-on-surface leading-none">R$ 2.4B+</p>
            <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant mt-2">
              Em Ativos Gerenciados
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
