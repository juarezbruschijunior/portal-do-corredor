/* ============================================================
   NAVBAR — Athletic Dark Performance
   Sticky top navigation with orange accent and track-inspired design
   ============================================================ */

import { useState } from "react";
import { Menu, X, Timer, Zap } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Calculadora de Pace", href: "#calc-pace" },
  { label: "Calculadora de Tiros", href: "#calc-tiros" },
  { label: "Zonas de Treino", href: "#zonas" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Referências", href: "#referencias" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[oklch(0.06_0.005_285/0.97)] backdrop-blur-md border-b border-[oklch(0.22_0.006_285)]">
      {/* Top ad banner */}
      <div className="ad-space h-10 w-full text-xs">
        <span>Espaço para Publicidade — Google AdSense (728×90)</span>
      </div>

      <div className="container flex items-center justify-between py-3">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleClick("#hero"); }}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 bg-orange rounded flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" fill="white" />
          </div>
          <div>
            <span className="font-display text-xl text-white leading-none block">
              PORTAL DO <span className="text-orange">CORREDOR</span>
            </span>
            <span className="text-[10px] text-[oklch(0.55_0.01_285)] font-mono-data tracking-widest uppercase">
              Alta Performance
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
              className="font-display text-sm text-[oklch(0.75_0.01_285)] hover:text-orange transition-colors duration-200 tracking-wider uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#calc-pace"
            onClick={(e) => { e.preventDefault(); handleClick("#calc-pace"); }}
            className="hidden md:flex items-center gap-2 bg-orange text-white font-display text-sm px-4 py-2 rounded hover:bg-[oklch(0.55_0.22_35)] transition-colors duration-200 uppercase tracking-wider"
          >
            <Timer className="w-4 h-4" />
            Calcular Pace
          </a>
          <button
            className="lg:hidden text-white p-1"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[oklch(0.08_0.005_285)] border-t border-[oklch(0.22_0.006_285)] px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
              className="font-display text-base text-[oklch(0.75_0.01_285)] hover:text-orange transition-colors py-1 border-b border-[oklch(0.18_0.006_285)] uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
