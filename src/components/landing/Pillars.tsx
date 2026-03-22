import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Compass, Rocket, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: Compass,
    title: "Planejamento sob medida",
    desc: "Engenharia financeira desenhada para o fluxo de caixa de grandes investidores e holdings.",
  },
  {
    icon: Rocket,
    title: "Inteligência em Lances",
    desc: "Algoritmos de previsão de contemplação baseados em dados históricos de grupos de elite.",
  },
  {
    icon: ShieldCheck,
    title: "Pós-venda Premium",
    desc: "Acompanhamento contínuo da carta de crédito até a escritura ou entrega das chaves.",
  },
];

export default function Pillars() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="pillars" className="py-32 relative bg-surface-container-lowest">
      <div ref={ref} className="max-w-7xl mx-auto px-8">
        <div className={`mb-20 text-center md:text-left transition-all duration-700 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <h2 className="text-4xl font-headline font-bold mb-4 text-on-surface">Pilar de Autoridade</h2>
          <p className="text-on-surface-variant font-body max-w-xl">
            Nossa abordagem combina análise estatística rigorosa com atendimento de concierge exclusivo.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`glass-card p-12 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all duration-500 group ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.15 + i * 0.1}s` }}
            >
              <p.icon className="text-primary w-12 h-12 mb-8 transition-transform group-hover:scale-110" />
              <h3 className="text-2xl font-headline font-bold mb-4 text-on-surface">{p.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
