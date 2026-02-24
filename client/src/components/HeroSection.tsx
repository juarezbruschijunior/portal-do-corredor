/* ============================================================
   HERO SECTION — Full-bleed dark athletic hero
   Background: Generated hero-runner.jpg
   Text: White on dark overlay, orange accents
   ============================================================ */

import { ChevronDown, Timer, Zap } from "lucide-react";

const HERO_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/BKG7CZoAezfcuL3rAVVaz5/sandbox/BChzLmFXmewCAijFo9bGl7-img-1_1771956721000_na1fn_aGVyby1ydW5uZXI.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQktHN0Nab0FlemZjdUwzckFWVmF6NS9zYW5kYm94L0JDaHpMbUZYbWV3Q0FpakZvOWJHbDctaW1nLTFfMTc3MTk1NjcyMTAwMF9uYTFmbl9hR1Z5YnkxeWRXNXVaWEkuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Gu1zgC5C3S~KWLcf3V9MdCi-FuP8pbsm6FmUzA0aXxuc45YFEH-NYBx3AQMv9VTqaPIrJYGxNslfQqJUG9te43vYxH6HMjGQjqc2aQqnBe2cW1kpfELtcIoT6H5VyyXhz5HnS1Al0FdkQVQifWFLuduYk8sh3OsKjmY3pX1Z6~bz9jZcDqRx2iG-Fx1NaGI4nI9mlAwmXqabEz8k~-1kh~Zd-IGZhc9zWt8-29Knc7Z3~xeB6Ov3EHf~8lK5HEwybwSbESvDS5k9fxwb1Hy4FIBn8FbUyVliP0ySPR2YM7fqLIrRykagaCczSlk0MnGuDzp-YFH2MtMw27f~nXo71Q__";

export default function HeroSection() {
  const scrollToCalc = () => {
    document.querySelector("#calc-pace")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-start overflow-hidden"
      style={{
        backgroundImage: `url('${HERO_IMAGE}')`,
        backgroundSize: "cover",
        backgroundPosition: "center 30%",
      }}
    >
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.04_0.005_285/0.92)] via-[oklch(0.04_0.005_285/0.7)] to-[oklch(0.04_0.005_285/0.2)]" />

      {/* Diagonal track stripe decoration */}
      <div className="absolute inset-0 track-stripe opacity-30" />

      {/* Content */}
      <div className="relative z-10 container pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange/20 border border-orange/40 text-orange px-3 py-1 rounded-full text-xs font-mono-data tracking-widest uppercase mb-6">
            <Zap className="w-3 h-3" fill="currentColor" />
            Treinamento de Alta Performance
          </div>

          {/* Main headline */}
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-white leading-[0.9] mb-6">
            PORTAL DO
            <br />
            <span className="text-orange">CORREDOR</span>
          </h1>

          {/* Subheadline */}
          <p className="font-body text-lg md:text-xl text-[oklch(0.8_0.01_285)] max-w-xl mb-8 leading-relaxed">
            Ferramentas profissionais de cálculo de pace, planilhas de tiros e metodologias baseadas em fisiologia do exercício para atletas de alto rendimento.
          </p>

          {/* Stats bar */}
          <div className="flex flex-wrap gap-6 mb-10">
            {[
              { label: "Calculadoras", value: "2" },
              { label: "Distâncias de Tiro", value: "5" },
              { label: "Zonas de Treino", value: "5" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-display text-4xl text-orange">{stat.value}</span>
                <span className="text-xs text-[oklch(0.6_0.01_285)] uppercase tracking-widest font-mono-data">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={scrollToCalc}
              className="flex items-center gap-2 bg-orange text-white font-display text-lg px-8 py-4 rounded hover:bg-[oklch(0.55_0.22_35)] transition-all duration-200 uppercase tracking-wider shadow-lg shadow-orange/30 hover:shadow-orange/50 hover:-translate-y-0.5"
            >
              <Timer className="w-5 h-5" />
              Calcular Pace Agora
            </button>
            <button
              onClick={() => document.querySelector("#calc-tiros")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 border border-white/30 text-white font-display text-lg px-8 py-4 rounded hover:border-orange hover:text-orange transition-all duration-200 uppercase tracking-wider"
            >
              Calculadora de Tiros
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToCalc}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-orange transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
