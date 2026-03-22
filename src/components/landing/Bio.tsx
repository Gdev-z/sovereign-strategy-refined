import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CheckCircle } from "lucide-react";

const expertise = [
  {
    title: "Consultoria de Contemplação",
    desc: "Análise de grupos e comportamento de lances em tempo real.",
  },
  {
    title: "Engenharia de Crédito",
    desc: "Maximização do poder de compra com as menores taxas do mercado.",
  },
  {
    title: "Rede de Sucesso",
    desc: "Acesso exclusivo a grupos de investidores de alta performance.",
  },
];

export default function Bio() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="bio" className="py-32 bg-surface-container-low border-y border-outline-variant/10">
      <div ref={ref} className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <div className={`relative transition-all duration-700 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 blur-3xl rounded-full" />
            <img
              alt="Lead Consultant"
              className="relative z-10 w-full rounded-lg shadow-2xl grayscale"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWelMlsWPhLE2gI8ODgRco2xjBXP5UgPWMmQjoK8vGLe1ZhSeV-6FcYRXeIBt5bj8LgyWhK684n9_gHnL-UjJvhlNoWe6uR2MWcVkJJGPM42hhoNTcmKXkRxCWhj0MbKls4MSnNxmFboO9MtEY6j7mRcFkUDOwPzxILTlCeOMu_L_jp7GzLE2SlYSIkOoyG_mv3Vxw7O1jq4n8fQL7l0yTmqjgsUdcDLuXCOOIunyv_Z-MkxG4aZ4LD5oq8Tbbt2RvwQgygq0IM_Ix"
            />
            <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-lg border border-primary/20 z-20">
              <p className="font-headline italic text-primary text-lg">
                "Estratégia é a arte de antecipar o sucesso."
              </p>
            </div>
          </div>

          {/* Text */}
          <div className={`space-y-10 transition-all duration-700 ${isVisible ? "animate-reveal-up" : "opacity-0"}`} style={{ animationDelay: "0.15s" }}>
            <div>
              <span className="text-primary font-label text-xs tracking-widest uppercase mb-4 block">
                The Specialist
              </span>
              <h2 className="text-4xl md:text-5xl font-headline font-bold leading-tight text-on-surface">
                O Diferencial Técnico
              </h2>
            </div>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              Especialista em alavancagem patrimonial com mais de 15 anos de atuação no mercado de luxo. Minha missão é
              transformar o consórcio em uma ferramenta de precisão cirúrgica para aquisição de ativos.
            </p>
            <ul className="space-y-6">
              {expertise.map((e) => (
                <li key={e.title} className="flex items-start gap-4">
                  <CheckCircle className="text-primary mt-1 w-5 h-5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-on-surface">{e.title}</h4>
                    <p className="text-sm text-on-surface-variant">{e.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
