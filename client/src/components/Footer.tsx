/* ============================================================
   FOOTER — Credits, links and developer attribution
   ============================================================ */

import { Zap, Heart } from "lucide-react";
import AdSpace from "./AdSpace";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[oklch(0.05_0.005_285)] border-t border-[oklch(0.18_0.006_285)]">
      {/* Bottom ad banner */}
      <AdSpace size="leaderboard" className="border-b border-[oklch(0.18_0.006_285)] rounded-none" />

      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-orange rounded flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" fill="white" />
              </div>
              <div>
                <span className="font-display text-xl text-white leading-none block">
                  PORTAL DO <span className="text-orange">CORREDOR</span>
                </span>
                <span className="text-[10px] text-[oklch(0.45_0.01_285)] font-mono-data tracking-widest uppercase">
                  Alta Performance
                </span>
              </div>
            </div>
            <p className="text-sm text-[oklch(0.55_0.01_285)] leading-relaxed">
              Ferramentas profissionais de treinamento para corredores de todos os níveis, baseadas em metodologias científicas de fisiologia do exercício.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-sm text-orange uppercase tracking-widest mb-4">Ferramentas</h4>
            <ul className="space-y-2">
              {[
                { label: "Calculadora de Pace", href: "#calc-pace" },
                { label: "Calculadora de Tiros", href: "#calc-tiros" },
                { label: "Zonas de Treinamento", href: "#zonas" },
                { label: "Metodologia", href: "#metodologia" },
                { label: "Referências Científicas", href: "#referencias" },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-[oklch(0.55_0.01_285)] hover:text-orange transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-display text-sm text-orange uppercase tracking-widest mb-4">Sobre o Portal</h4>
            <p className="text-sm text-[oklch(0.55_0.01_285)] leading-relaxed mb-4">
              O Portal do Corredor é uma plataforma dedicada ao treinamento de alta performance, oferecendo ferramentas gratuitas baseadas em ciência para atletas e entusiastas da corrida.
            </p>
            <div className="flex items-center gap-2 text-xs text-[oklch(0.45_0.01_285)] font-mono-data">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Ferramentas disponíveis 24/7
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[oklch(0.18_0.006_285)] pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-xs text-[oklch(0.4_0.01_285)] font-mono-data text-center md:text-left">
              © {currentYear} Portal do Corredor — Treinamento de Alta Performance. Todos os direitos reservados.
            </div>

            {/* Developer credit */}
            <div className="flex items-center gap-1.5 text-xs text-[oklch(0.45_0.01_285)]">
              <span>Desenvolvido por</span>
              <span className="font-display text-sm text-orange uppercase tracking-wider">Juarez Bruschi Junior</span>
              <Heart className="w-3 h-3 text-orange" fill="currentColor" />
            </div>

            {/* Disclaimer */}
            <div className="text-xs text-[oklch(0.35_0.01_285)] text-center md:text-right max-w-xs">
              Conteúdo educacional. Consulte um profissional antes de iniciar qualquer programa de treinamento.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
