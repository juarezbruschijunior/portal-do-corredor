/* ============================================================
   METHODOLOGY — Scientific approach section
   Background: methodology-bg.jpg
   ============================================================ */

import { BookOpen, FlaskConical, Target, TrendingUp } from "lucide-react";

const METHODOLOGY_BG = "https://private-us-east-1.manuscdn.com/sessionFile/BKG7CZoAezfcuL3rAVVaz5/sandbox/BChzLmFXmewCAijFo9bGl7-img-5_1771956723000_na1fn_bWV0aG9kb2xvZ3ktYmc.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQktHN0Nab0FlemZjdUwzckFWVmF6NS9zYW5kYm94L0JDaHpMbUZYbWV3Q0FpakZvOWJHbDctaW1nLTVfMTc3MTk1NjcyMzAwMF9uYTFmbl9iV1YwYUc5a2IyeHZaM2t0WW1jLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=G9Xz9UaMoGk5raA5BeJaz23GIyio8AIXdRfiMTDyrZAQFPyVcTbi8PciJgfhoCF~iPdocwnxgVCfDYEsoP~TuZAef6BhS9WLzOUpo9Nra~e4P9pXdtvoSf7qbcs-qwXKECsxbSTm5qTDH2G0zdOkr-ykm0viHbzlCrKSxwnU8f6KggMkBAwYYDyDFZxVIKxMXQenaXHWn948yfEwUId8h8PqAzEX3SKFgEZXpTIfLLV2GGkaV-wsCqcqjxL0F~cR6JmiNrB95fCOA-hlidOuK~Ab3cSsEH8KQLNuNkOVdhiWQPknhplD7mGxkF-Uuom1Be2tDQmid3u5nnW9ET2Fiw__";

const principles = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Periodização Científica",
    description: "Os planos de treinamento seguem princípios de periodização linear e ondulatória, baseados nas obras de Tudor Bompa e Vladimir Platonov, garantindo progressão segura e eficiente.",
  },
  {
    icon: <FlaskConical className="w-6 h-6" />,
    title: "Fisiologia do Exercício",
    description: "As calculadoras e zonas de treino são fundamentadas em estudos de fisiologia do exercício, incluindo os trabalhos de Jack Daniels (VDOT), Peter Coe e Arthur Lydiard.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Progressão Individual",
    description: "Cada atleta possui características únicas. As ferramentas permitem personalização baseada no pace atual, possibilitando adaptação progressiva da carga de treinamento.",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Evidência Científica",
    description: "Todos os protocolos de tiros e intensidades são respaldados por literatura científica de atletismo de alto rendimento e fisiologia do esforço físico.",
  },
];

export default function Methodology() {
  return (
    <section id="metodologia" className="py-20 bg-[oklch(0.06_0.005_285)]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div
              className="rounded-lg overflow-hidden h-80 lg:h-[500px] bg-cover bg-center"
              style={{ backgroundImage: `url('${METHODOLOGY_BG}')` }}
            />
            {/* Overlay badge */}
            <div className="absolute bottom-6 left-6 right-6 bg-[oklch(0.06_0.005_285/0.9)] backdrop-blur-sm border border-orange/30 rounded-lg p-4">
              <div className="font-display text-orange text-sm uppercase tracking-widest mb-1">Baseado em Ciência</div>
              <div className="text-white text-sm">
                Metodologias de fisiologia do exercício e atletismo de alto rendimento aplicadas ao treinamento do corredor moderno.
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="section-divider" />
            <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
              METODOLOGIA DE <span className="text-orange">ALTA PERFORMANCE</span>
            </h2>
            <p className="text-[oklch(0.65_0.01_285)] mb-8 leading-relaxed">
              As ferramentas e calculadoras do Portal do Corredor são desenvolvidas com base em décadas de pesquisa em fisiologia do exercício e atletismo de alto rendimento, adaptadas para corredores de todos os níveis.
            </p>

            <div className="space-y-5">
              {principles.map((p) => (
                <div key={p.title} className="flex gap-4 group">
                  <div className="w-12 h-12 bg-orange/10 border border-orange/20 rounded-lg flex items-center justify-center text-orange shrink-0 group-hover:bg-orange/20 transition-colors">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-white uppercase tracking-wider mb-1">{p.title}</h3>
                    <p className="text-sm text-[oklch(0.65_0.01_285)] leading-relaxed">{p.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
