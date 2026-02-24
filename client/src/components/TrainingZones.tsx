/* ============================================================
   TRAINING ZONES — Heart rate zones with visual indicators
   Background: training-zones.jpg
   ============================================================ */

import { Heart } from "lucide-react";
import AdSpace from "./AdSpace";

const ZONES_BG = "https://private-us-east-1.manuscdn.com/sessionFile/BKG7CZoAezfcuL3rAVVaz5/sandbox/BChzLmFXmewCAijFo9bGl7-img-3_1771956719000_na1fn_dHJhaW5pbmctem9uZXM.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQktHN0Nab0FlemZjdUwzckFWVmF6NS9zYW5kYm94L0JDaHpMbUZYbWV3Q0FpakZvOWJHbDctaW1nLTNfMTc3MTk1NjcxOTAwMF9uYTFmbl9kSEpoYVc1cGJtY3RlbTl1WlhNLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ocIV113Zm-t73sL9F1PnzfWV~E73597IxfSZ4uoqXuXrYQRqMP-rNqjeZ7SE8ex658-qV1fhiCEOrjJkGxtX123a7btt~ja5Z~YnlP0nh6AbnlfwDiPhpXoQNo-8iEDPs2WZ8m9c-mANBth4jeOQpzkQUmQstKj2I2WFzGdibz8gbHln51Ds0lpvxgaS7uRrVh8u3jO25p~QqgLruZjZgVWMAdtN-lJh2fHFVtqSKEA-PItosvFvkSRI71PO0--lFdDCfy7p9iWmG68JhxN~1hxvnLdQN3oan~qF96cWGwOj2ZHf1WrEw3ffDIR1VqSN-3FVelv9g5fMUqTWh~uT~Q__";

const zones = [
  {
    number: 1,
    name: "Recuperação Ativa",
    fcPercent: "50–60%",
    description: "Corrida muito leve para recuperação. Estimula o sistema aeróbio sem estresse adicional.",
    benefits: ["Recuperação muscular", "Melhora da circulação", "Queima de gordura"],
    color: "from-blue-600 to-blue-500",
    barColor: "bg-blue-500",
    barWidth: "20%",
    textColor: "text-blue-400",
  },
  {
    number: 2,
    name: "Base Aeróbia",
    fcPercent: "60–70%",
    description: "Zona de desenvolvimento aeróbio fundamental. Deve compor 70–80% do volume total de treino.",
    benefits: ["Eficiência aeróbia", "Economia de corrida", "Resistência de base"],
    color: "from-green-600 to-green-500",
    barColor: "bg-green-500",
    barWidth: "40%",
    textColor: "text-green-400",
  },
  {
    number: 3,
    name: "Aeróbio Moderado",
    fcPercent: "70–80%",
    description: "Ritmo de corrida confortável mas desafiador. Melhora a capacidade aeróbia e o limiar de lactato.",
    benefits: ["Capacidade aeróbia", "Limiar de lactato", "Resistência muscular"],
    color: "from-yellow-600 to-yellow-500",
    barColor: "bg-yellow-500",
    barWidth: "60%",
    textColor: "text-yellow-400",
  },
  {
    number: 4,
    name: "Limiar Anaeróbio",
    fcPercent: "80–90%",
    description: "Treino no limiar lactato. Melhora a capacidade de sustentar ritmos elevados por mais tempo.",
    benefits: ["Limiar anaeróbio", "Tolerância ao lactato", "Velocidade de prova"],
    color: "from-orange-600 to-orange-500",
    barColor: "bg-orange-500",
    barWidth: "80%",
    textColor: "text-orange-400",
  },
  {
    number: 5,
    name: "VO₂ Máx / Anaeróbio",
    fcPercent: "90–100%",
    description: "Intensidade máxima. Estimula o VO₂ máx e a potência anaeróbia. Usado em tiros e sprints.",
    benefits: ["VO₂ máximo", "Potência anaeróbia", "Velocidade máxima"],
    color: "from-red-700 to-red-500",
    barColor: "bg-red-500",
    barWidth: "100%",
    textColor: "text-red-400",
  },
];

export default function TrainingZones() {
  return (
    <section id="zonas" className="py-20 bg-[oklch(0.08_0.005_285)]">
      {/* Background image strip */}
      <div
        className="relative h-64 mb-16 overflow-hidden"
        style={{
          backgroundImage: `url('${ZONES_BG}')`,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.08_0.005_285)] via-transparent to-[oklch(0.08_0.005_285)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="section-divider mx-auto" />
            <div className="flex items-center justify-center gap-3 mb-2">
              <Heart className="w-7 h-7 text-orange" />
              <h2 className="font-display text-4xl md:text-5xl text-white">
                ZONAS DE <span className="text-orange">TREINAMENTO</span>
              </h2>
            </div>
            <p className="text-[oklch(0.75_0.01_285)] text-sm">Baseadas em % da Frequência Cardíaca Máxima</p>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Zones grid */}
        <div className="space-y-4 mb-12">
          {zones.map((zone) => (
            <div
              key={zone.number}
              className="bg-[oklch(0.11_0.005_285)] border border-[oklch(0.22_0.006_285)] rounded-lg overflow-hidden hover:border-[oklch(0.35_0.006_285)] transition-colors group"
            >
              <div className="flex flex-col md:flex-row">
                {/* Zone number & name */}
                <div className={`flex items-center gap-4 p-5 md:w-72 bg-gradient-to-r ${zone.color} bg-opacity-20`}>
                  <div className="w-12 h-12 rounded-full bg-black/30 flex items-center justify-center shrink-0">
                    <span className="font-display text-2xl text-white">{zone.number}</span>
                  </div>
                  <div>
                    <div className="font-display text-lg text-white uppercase tracking-wider">{zone.name}</div>
                    <div className={`font-mono-data text-sm ${zone.textColor}`}>{zone.fcPercent} FCmax</div>
                  </div>
                </div>

                {/* Description & benefits */}
                <div className="flex-1 p-5">
                  <p className="text-sm text-[oklch(0.7_0.01_285)] mb-3">{zone.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {zone.benefits.map((b) => (
                      <span
                        key={b}
                        className={`text-xs px-2 py-1 rounded border ${zone.textColor} border-current/30 bg-current/5`}
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Visual bar */}
                <div className="p-5 flex items-center md:w-48">
                  <div className="w-full">
                    <div className="text-[10px] text-[oklch(0.45_0.01_285)] uppercase tracking-widest font-mono-data mb-2">Intensidade</div>
                    <div className="h-2 bg-[oklch(0.18_0.006_285)] rounded-full overflow-hidden">
                      <div
                        className={`h-full ${zone.barColor} rounded-full transition-all duration-1000`}
                        style={{ width: zone.barWidth }}
                      />
                    </div>
                    <div className={`font-mono-data text-xs mt-1 ${zone.textColor}`}>{zone.fcPercent}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ad space between sections */}
        <AdSpace size="leaderboard" className="rounded-lg" />
      </div>
    </section>
  );
}
