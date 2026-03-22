import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MessageSquare } from "lucide-react";

const objectives = ["Imóveis de Luxo", "Frotas e Esportivos", "Alavancagem de Capital", "Holding Patrimonial"];

export default function TriageForm() {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const { ref, isVisible } = useScrollReveal();

  const handleSubmit = () => {
    if (!selected) return;
    // In production, this would redirect to WhatsApp with the selected objective
    const msg = encodeURIComponent(`Olá, tenho interesse em: ${selected}`);
    window.open(`https://wa.me/?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="triagem" className="py-32 bg-background relative overflow-hidden">
      <div ref={ref} className="max-w-4xl mx-auto px-8 text-center relative z-10">
        <div className={`mb-16 transition-all duration-700 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6 text-on-surface">Sistema de Triagem</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Devido à natureza personalizada da nossa consultoria, operamos com um número limitado de assessorias mensais.
            Verifique se o seu perfil se enquadra em nossa expertise.
          </p>
        </div>

        <div
          className={`glass-card p-12 rounded-xl border border-outline-variant/20 gold-halo text-left transition-all duration-700 ${
            isVisible ? "animate-reveal-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.15s" }}
        >
          {/* Step indicator */}
          <div className="mb-12 flex justify-between items-center border-b border-outline-variant/10 pb-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                1
              </div>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
                  selected ? "bg-primary text-primary-foreground" : "border border-outline text-outline"
                }`}
              >
                2
              </div>
            </div>
            <span className="text-xs font-label uppercase tracking-widest text-primary">Qualificação de Perfil</span>
          </div>

          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <MessageSquare className="text-primary w-12 h-12 mx-auto" />
              <h3 className="text-2xl font-headline font-bold text-on-surface">Solicitação Enviada</h3>
              <p className="text-on-surface-variant">Entraremos em contato em até 45 minutos.</p>
            </div>
          ) : (
            <div className="space-y-8">
              <div>
                <label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant mb-4">
                  Qual seu objetivo principal?
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {objectives.map((obj) => (
                    <button
                      key={obj}
                      onClick={() => setSelected(obj)}
                      className={`p-4 border rounded text-left transition-all flex justify-between items-center group active:scale-[0.97] ${
                        selected === obj
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-outline-variant/30 text-on-surface hover:border-primary"
                      }`}
                    >
                      <span>{obj}</span>
                      <svg
                        className={`w-5 h-5 transition-opacity ${selected === obj ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={handleSubmit}
                  disabled={!selected}
                  className={`w-full py-5 font-bold uppercase tracking-widest text-sm rounded-xl flex items-center justify-center gap-4 transition-colors active:scale-[0.97] ${
                    selected
                      ? "bg-primary text-primary-foreground hover:opacity-90"
                      : "bg-muted text-muted-foreground cursor-not-allowed"
                  }`}
                >
                  <MessageSquare size={18} />
                  Solicitar Acesso via WhatsApp
                </button>
                <p className="text-center text-[10px] text-on-surface-variant uppercase tracking-[0.2em] mt-6 opacity-60">
                  Resposta estimada em 45 minutos durante horário comercial.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
