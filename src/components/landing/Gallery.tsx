import { useScrollReveal } from "@/hooks/useScrollReveal";

const items = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwq1YUtGYJJmn0PM5UcwhkgJpKQeGhKpNLaRdkz5IOIPFWo39As9yjPlMvE0qkuRPZXHL_tnoxKg82kuTSn7MbFE-wOLtwT7MExVdWa92oQrv3yCfuXlPp3yBM7CoXYEeuU_gd3OB10VxIPkargvWsz6kUZxvGonTkyCw0WT-tmswR7hYCKPiefgxKQfaLgAO8mTzPPF4Vct2WkQSjGdB-JkWidNmSCKAGTn219nEwfJbOKUq7pahVcOJgeENPxgXxP5EdUbvMW6eH",
    label: "Imóvel de Alto Padrão",
    title: "Contemplado em 90 dias",
    span: "md:col-span-8",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBH7K0WklZyybzlJC7SyZlEE3cf64ZQA7kDYoX1am4OdZHjepo0NTDHMAiJkQbp8ctkhuSe_41JZouZPDxOEkukr1c_MIrpg_ojQmNek86xJBoaDgfsUzecHNAB4lHV7ktik_RyGQVauadvsvLUV_vkl5fhnX9LKnNYtqmNWEHrn3tyMVe6V9BQCsVYSyVYEqjxFku4gXP0fpqPejuFyA_qB5JwKNhWwM6JiBw2i0KhvO5W6CtK1DqtR7E95EbxJ87poBOH-tCtubHT",
    label: "Aquisição Veicular",
    title: "Lance estratégico vitorioso",
    span: "md:col-span-4",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAe7tYbeG380IS9J0xf4bXyQlxBKd90wNuKlramGQlKrhljrLRnp95L37G9EdkeGFcrHV-5i5Rwbt1YZNkIXoCgrTh3GlT7Fy8dOsVlsO2B9nenxw1w5UKItMS1G4GJoi_HeRQrj_udTYKTxZzHWHGZWyC8h_ZKwl30wewYuXrNsO9s5yuB61KOvOT7NlbnsyVHvfbPH6NAlO2-nWBjCgCnnr0rm0VqrrrHnmAUCSTamH4hY8roQHRm6LKbVJXPvYiNQzS1ab17GEXP",
    label: "Expansão de Patrimônio",
    title: "Zero juros abusivos",
    span: "md:col-span-4",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCagErNjbhurCmczFSnquxAvSoWCz_Fqswt5_vcZI62wlCUkaZbckZYD6TeN4vy2nnt7f1V3bQEJOqj4SE3pthdPlDXeEoNrE2kMyknN_NmaVzKrB2by2tusMEzCm0UDtLJl02O4EkoVbt6gqyds3FJyAb7tWqKPgnWworSg-ADzG9i5DKVSEDWmXMfgEcrFxbP3fLp30cu-iF7oSjG7tgXQErAv7P1eJlsnRLVFOR4XeZFa9HoOGRyMhEglMaH3voFY86ReAIJDs7M",
    label: "Sucesso de Consultoria",
    title: "Entrega de chaves exclusiva",
    span: "md:col-span-8",
  },
];

export default function Gallery() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="gallery" className="py-32 bg-surface">
      <div ref={ref} className="max-w-7xl mx-auto px-8">
        <div className={`flex flex-col md:flex-row justify-between items-end mb-16 gap-8 transition-all duration-700 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <div className="max-w-xl">
            <span className="text-primary font-label text-xs tracking-widest uppercase mb-4 block">
              Portfólio de Resultados
            </span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-surface">Galeria de Conquistas</h2>
          </div>
          <p className="text-on-surface-variant font-body italic">
            Onde o planejamento estratégico encontra a realidade tangível.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:h-[800px]">
          {items.map((item, i) => (
            <div
              key={i}
              className={`${item.span} relative group overflow-hidden rounded-xl ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.1 + i * 0.1}s` }}
            >
              <img
                alt={item.label}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 min-h-[250px]"
                src={item.src}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-10">
                <div>
                  <p className="text-primary font-label text-xs uppercase tracking-widest mb-2">{item.label}</p>
                  <h4 className="text-xl md:text-2xl font-headline italic text-on-surface">{item.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
