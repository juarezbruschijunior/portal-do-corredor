/* ============================================================
   REFERENCES — Scientific bibliography section
   ============================================================ */

import { BookMarked } from "lucide-react";

const references = [
  {
    authors: "Daniels, J.",
    year: "2014",
    title: "Daniels' Running Formula",
    publisher: "Human Kinetics",
    note: "Base para cálculo de VDOT, pace de treino e zonas de intensidade.",
  },
  {
    authors: "Bompa, T. O. & Buzzichelli, C.",
    year: "2019",
    title: "Periodization: Theory and Methodology of Training",
    publisher: "Human Kinetics",
    note: "Fundamentos de periodização linear e ondulatória aplicados ao atletismo.",
  },
  {
    authors: "McArdle, W. D., Katch, F. I. & Katch, V. L.",
    year: "2015",
    title: "Exercise Physiology: Nutrition, Energy, and Human Performance",
    publisher: "Lippincott Williams & Wilkins",
    note: "Fisiologia do exercício, metabolismo energético e zonas de frequência cardíaca.",
  },
  {
    authors: "Billat, V. L.",
    year: "2001",
    title: "Interval Training for Performance: A Scientific and Empirical Practice",
    publisher: "Sports Medicine, 31(1), 13–31",
    note: "Protocolo científico para treinos intervalados e tiros de alta intensidade.",
  },
  {
    authors: "Platonov, V. N.",
    year: "2008",
    title: "Sistema de Treinamento Esportivo",
    publisher: "Phorte Editora",
    note: "Metodologia de treinamento de alto rendimento para atletismo.",
  },
  {
    authors: "Lydiard, A. & Gilmour, G.",
    year: "2000",
    title: "Running with Lydiard",
    publisher: "Meyer & Meyer Sport",
    note: "Metodologia de base aeróbia e periodização para corredores de fundo.",
  },
  {
    authors: "Noakes, T.",
    year: "2003",
    title: "Lore of Running",
    publisher: "Human Kinetics",
    note: "Referência abrangente sobre fisiologia da corrida e treinamento de longa distância.",
  },
  {
    authors: "Canova, R.",
    year: "1999",
    title: "Marathon: A Scientific Approach",
    publisher: "Federazione Italiana di Atletica Leggera",
    note: "Metodologia de treinamento para maratonistas de elite, incluindo tiros e intervalados.",
  },
];

export default function References() {
  return (
    <section id="referencias" className="py-20 bg-[oklch(0.08_0.005_285)]">
      <div className="container">
        <div className="section-divider" />
        <div className="flex items-center gap-3 mb-4">
          <BookMarked className="w-7 h-7 text-orange" />
          <h2 className="font-display text-4xl md:text-5xl text-white">
            REFERÊNCIAS <span className="text-orange">CIENTÍFICAS</span>
          </h2>
        </div>
        <p className="text-[oklch(0.65_0.01_285)] max-w-2xl mb-10">
          Os treinamentos, calculadoras e metodologias apresentados neste portal são baseados em obras de referência de fisiologia do exercício e atletismo de alto rendimento, conforme listado abaixo.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {references.map((ref, i) => (
            <div
              key={i}
              className="bg-[oklch(0.11_0.005_285)] border border-[oklch(0.22_0.006_285)] rounded-lg p-5 hover:border-[oklch(0.35_0.006_285)] transition-colors"
            >
              <div className="flex items-start gap-3">
                <span className="font-mono-data text-orange text-sm shrink-0 mt-0.5">[{i + 1}]</span>
                <div>
                  <p className="text-white text-sm leading-relaxed">
                    <strong className="font-semibold">{ref.authors}</strong> ({ref.year}).{" "}
                    <em className="text-[oklch(0.75_0.01_285)]">{ref.title}</em>.{" "}
                    <span className="text-[oklch(0.6_0.01_285)]">{ref.publisher}.</span>
                  </p>
                  <p className="text-xs text-[oklch(0.5_0.01_285)] mt-2 italic">{ref.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-5 bg-[oklch(0.11_0.005_285)] border border-orange/20 rounded-lg">
          <p className="text-sm text-[oklch(0.65_0.01_285)] leading-relaxed">
            <strong className="text-orange">Nota metodológica:</strong> As calculadoras e planos de treinamento deste portal são desenvolvidos com base nas metodologias de fisiologia do exercício e atletismo de alto rendimento citadas acima. Os valores de intensidade, quantidade de tiros e intervalos de recuperação são diretrizes gerais e devem ser adaptados por um profissional de educação física ou treinador certificado conforme as características individuais de cada atleta.
          </p>
        </div>
      </div>
    </section>
  );
}
