/* ============================================================
   CALCULADORA DE TIROS — Sprint interval calculator
   Distances: 200m, 400m, 800m, 1000m, 3000m
   Features: target times, quantity by objective, rest intervals
   Background: tiros-training.jpg
   ============================================================ */

import { useState } from "react";
import { Zap, ArrowRight, RotateCcw, Info } from "lucide-react";
import AdSpace from "./AdSpace";

const TIROS_BG = "https://private-us-east-1.manuscdn.com/sessionFile/BKG7CZoAezfcuL3rAVVaz5/sandbox/BChzLmFXmewCAijFo9bGl7-img-4_1771956722000_na1fn_dGlyb3MtdHJhaW5pbmc.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQktHN0Nab0FlemZjdUwzckFWVmF6NS9zYW5kYm94L0JDaHpMbUZYbWV3Q0FpakZvOWJHbDctaW1nLTRfMTc3MTk1NjcyMjAwMF9uYTFmbl9kR2x5YjNNdGRISmhhVzVwYm1jLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=BODlRTvbuLn-T6nadNu3Lit0SGoVmmp2c~UdmpfwkYWHIJZEME5im0ik5YrqYcYcE0HnT8cskTVO8q0emowwoYTKCfjjeBA9OB16obD372OP0Rpa-pWGrarL8yx5miqHS5TOhiT64jd1F0sJGjETpRnb73khjHRqWCVvNe1DrTmluE52i1pbe-V2HsTCRaS9DvvcmNWkF7PAAk8LGg63qurkBfmLI93rYhdBwRx8vLqG2yWI8-toytH7ZhgbNT5sGRd2GIKBuCc1jun1b4kFcFBKSCAxnFGhFMwjiTmV7uMcV4GgXt0tkbrmYNn3pP2mp1KSCOLed2yWfXHeacgKcA__";

type Objective = "velocidade" | "resistencia" | "limiar" | "vo2max" | "base";

const objectives: { key: Objective; label: string; description: string; color: string }[] = [
  { key: "velocidade", label: "Velocidade Máxima", description: "Desenvolvimento de potência anaeróbia alática", color: "text-red-400" },
  { key: "vo2max", label: "VO₂ Máx", description: "Estímulo do consumo máximo de oxigênio", color: "text-orange-400" },
  { key: "limiar", label: "Limiar Anaeróbio", description: "Treino no limiar lactato (85-92% FCmax)", color: "text-yellow-400" },
  { key: "resistencia", label: "Resistência de Velocidade", description: "Manutenção de velocidade por mais tempo", color: "text-green-400" },
  { key: "base", label: "Base Aeróbia", description: "Desenvolvimento da capacidade aeróbia", color: "text-blue-400" },
];

const distances = [200, 400, 800, 1000, 3000];

// Quantity of shots by objective and distance
const quantityTable: Record<Objective, Record<number, { qty: string; rest: string; intensity: string }>> = {
  velocidade: {
    200: { qty: "8–12 tiros", rest: "3–4 min", intensity: "95–100% FCmax" },
    400: { qty: "6–10 tiros", rest: "4–6 min", intensity: "92–98% FCmax" },
    800: { qty: "4–6 tiros", rest: "5–8 min", intensity: "90–95% FCmax" },
    1000: { qty: "3–5 tiros", rest: "6–10 min", intensity: "88–93% FCmax" },
    3000: { qty: "2–3 tiros", rest: "8–12 min", intensity: "85–90% FCmax" },
  },
  vo2max: {
    200: { qty: "10–16 tiros", rest: "1–2 min", intensity: "95–100% FCmax" },
    400: { qty: "8–12 tiros", rest: "2–3 min", intensity: "95–100% FCmax" },
    800: { qty: "5–8 tiros", rest: "3–4 min", intensity: "92–97% FCmax" },
    1000: { qty: "4–6 tiros", rest: "3–5 min", intensity: "90–95% FCmax" },
    3000: { qty: "3–5 tiros", rest: "4–6 min", intensity: "88–93% FCmax" },
  },
  limiar: {
    200: { qty: "12–20 tiros", rest: "45–90 seg", intensity: "85–92% FCmax" },
    400: { qty: "8–15 tiros", rest: "60–120 seg", intensity: "85–92% FCmax" },
    800: { qty: "6–10 tiros", rest: "90–180 seg", intensity: "85–92% FCmax" },
    1000: { qty: "5–8 tiros", rest: "2–3 min", intensity: "85–90% FCmax" },
    3000: { qty: "3–5 tiros", rest: "3–5 min", intensity: "83–88% FCmax" },
  },
  resistencia: {
    200: { qty: "15–25 tiros", rest: "30–60 seg", intensity: "80–88% FCmax" },
    400: { qty: "10–16 tiros", rest: "60–90 seg", intensity: "80–88% FCmax" },
    800: { qty: "6–10 tiros", rest: "2–3 min", intensity: "80–88% FCmax" },
    1000: { qty: "5–8 tiros", rest: "2–4 min", intensity: "80–87% FCmax" },
    3000: { qty: "4–6 tiros", rest: "3–5 min", intensity: "78–85% FCmax" },
  },
  base: {
    200: { qty: "20–30 tiros", rest: "20–45 seg", intensity: "70–80% FCmax" },
    400: { qty: "12–20 tiros", rest: "45–90 seg", intensity: "70–80% FCmax" },
    800: { qty: "8–12 tiros", rest: "90–120 seg", intensity: "70–80% FCmax" },
    1000: { qty: "6–10 tiros", rest: "2–3 min", intensity: "70–78% FCmax" },
    3000: { qty: "4–6 tiros", rest: "3–4 min", intensity: "68–75% FCmax" },
  },
};

// Target time multipliers based on objective (relative to race pace)
const paceMultipliers: Record<Objective, number> = {
  velocidade: 0.88,
  vo2max: 0.92,
  limiar: 0.95,
  resistencia: 0.97,
  base: 1.05,
};

function padZero(n: number) {
  return String(Math.floor(n)).padStart(2, "0");
}

function formatTime(totalSeconds: number): string {
  if (totalSeconds < 60) {
    return `${totalSeconds.toFixed(1)}s`;
  }
  const m = Math.floor(totalSeconds / 60);
  const s = (totalSeconds % 60).toFixed(1);
  return `${m}:${parseFloat(s) < 10 ? "0" : ""}${s}`;
}

export default function TirosCalculator() {
  const [objective, setObjective] = useState<Objective>("vo2max");
  const [paceMin, setPaceMin] = useState("4");
  const [paceSec, setPaceSec] = useState("30");
  const [results, setResults] = useState<{ dist: number; time: string; qty: string; rest: string; intensity: string }[] | null>(null);
  const [animated, setAnimated] = useState(false);

  const calculate = () => {
    const paceSecs = parseInt(paceMin || "0") * 60 + parseInt(paceSec || "0");
    if (paceSecs <= 0) return;

    const multiplier = paceMultipliers[objective];
    const targetPace = paceSecs * multiplier;

    const res = distances.map((dist) => {
      const distKm = dist / 1000;
      const timeSecs = targetPace * distKm;
      const qtyData = quantityTable[objective][dist];
      return {
        dist,
        time: formatTime(timeSecs),
        qty: qtyData.qty,
        rest: qtyData.rest,
        intensity: qtyData.intensity,
      };
    });

    setResults(res);
    setAnimated(false);
    setTimeout(() => setAnimated(true), 10);
  };

  const reset = () => {
    setResults(null);
    setPaceMin("4");
    setPaceSec("30");
    setObjective("vo2max");
  };

  const inputClass = "w-full bg-[oklch(0.1_0.005_285)] border border-[oklch(0.25_0.006_285)] text-white font-mono-data text-lg px-3 py-2 rounded focus:outline-none focus:border-orange transition-colors";
  const labelClass = "text-xs text-[oklch(0.55_0.01_285)] uppercase tracking-widest font-mono-data mb-1 block";

  const selectedObj = objectives.find((o) => o.key === objective)!;

  return (
    <section id="calc-tiros" className="py-20 bg-[oklch(0.06_0.005_285)]">
      <div className="container">
        {/* Ad banner between sections */}
        <AdSpace size="leaderboard" className="mb-10 rounded-lg" />

        {/* Section header */}
        <div className="mb-10">
          <div className="section-divider" />
          <div className="flex items-center gap-3 mb-3">
            <Zap className="w-7 h-7 text-orange" />
            <h2 className="font-display text-4xl md:text-5xl text-white">
              CALCULADORA DE <span className="text-orange">TIROS</span>
            </h2>
          </div>
          <p className="text-[oklch(0.65_0.01_285)] max-w-2xl">
            Calcule os tempos alvo para cada distância de tiro com base no seu pace de referência e objetivo de treinamento. Inclui quantidade de repetições e intervalos de recuperação.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_300px] gap-8">
          {/* Main calculator */}
          <div className="space-y-6">
            {/* Objective selector */}
            <div className="bg-[oklch(0.11_0.005_285)] border border-[oklch(0.22_0.006_285)] rounded-lg p-6">
              <label className={labelClass}>Objetivo do Treino</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
                {objectives.map((obj) => (
                  <button
                    key={obj.key}
                    onClick={() => setObjective(obj.key)}
                    className={`text-left p-3 rounded border transition-all ${
                      objective === obj.key
                        ? "border-orange bg-orange/10"
                        : "border-[oklch(0.22_0.006_285)] hover:border-[oklch(0.35_0.006_285)]"
                    }`}
                  >
                    <div className={`font-display text-sm uppercase tracking-wider ${objective === obj.key ? "text-orange" : "text-white"}`}>
                      {obj.label}
                    </div>
                    <div className="text-[10px] text-[oklch(0.5_0.01_285)] mt-0.5">{obj.description}</div>
                  </button>
                ))}
              </div>

              {/* Selected objective info */}
              <div className="flex items-start gap-2 bg-[oklch(0.08_0.005_285)] rounded p-3 border border-[oklch(0.18_0.006_285)]">
                <Info className="w-4 h-4 text-orange mt-0.5 shrink-0" />
                <div>
                  <span className={`font-display text-sm uppercase ${selectedObj.color}`}>{selectedObj.label}</span>
                  <span className="text-xs text-[oklch(0.55_0.01_285)] ml-2">— {selectedObj.description}</span>
                </div>
              </div>
            </div>

            {/* Pace input */}
            <div className="bg-[oklch(0.11_0.005_285)] border border-[oklch(0.22_0.006_285)] rounded-lg p-6">
              <label className={labelClass}>Pace de Referência (min/km)</label>
              <p className="text-xs text-[oklch(0.5_0.01_285)] mb-4">
                Insira seu pace atual de corrida (ex: pace de 5km ou 10km) para calcular os tempos alvo.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="text-[10px] text-[oklch(0.45_0.01_285)] uppercase tracking-widest font-mono-data mb-1 block">Minutos</label>
                  <input type="number" value={paceMin} onChange={(e) => setPaceMin(e.target.value)} className={inputClass} min="1" max="20" />
                </div>
                <div>
                  <label className="text-[10px] text-[oklch(0.45_0.01_285)] uppercase tracking-widest font-mono-data mb-1 block">Segundos</label>
                  <input type="number" value={paceSec} onChange={(e) => setPaceSec(e.target.value)} className={inputClass} min="0" max="59" />
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={calculate}
                  className="flex-1 flex items-center justify-center gap-2 bg-orange text-white font-display text-lg py-3 rounded hover:bg-[oklch(0.55_0.22_35)] transition-all duration-200 uppercase tracking-wider shadow-lg shadow-orange/20"
                >
                  <ArrowRight className="w-5 h-5" />
                  Calcular Tiros
                </button>
                <button
                  onClick={reset}
                  className="px-4 py-3 border border-[oklch(0.25_0.006_285)] text-[oklch(0.55_0.01_285)] rounded hover:border-orange hover:text-orange transition-colors"
                  aria-label="Limpar"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Results table */}
            {results && (
              <div className={`bg-[oklch(0.11_0.005_285)] border border-orange/30 rounded-lg overflow-hidden ${animated ? "result-animate" : ""}`}>
                <div className="px-6 py-4 bg-orange/10 border-b border-orange/20 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-orange" />
                  <span className="font-display text-lg text-orange uppercase tracking-wider">
                    Plano de Tiros — {selectedObj.label}
                  </span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-[oklch(0.22_0.006_285)]">
                        <th className="text-left px-4 py-3 text-xs text-[oklch(0.5_0.01_285)] uppercase tracking-widest font-mono-data">Distância</th>
                        <th className="text-left px-4 py-3 text-xs text-[oklch(0.5_0.01_285)] uppercase tracking-widest font-mono-data">Tempo Alvo</th>
                        <th className="text-left px-4 py-3 text-xs text-[oklch(0.5_0.01_285)] uppercase tracking-widest font-mono-data">Qtd. Tiros</th>
                        <th className="text-left px-4 py-3 text-xs text-[oklch(0.5_0.01_285)] uppercase tracking-widest font-mono-data">Recuperação</th>
                        <th className="text-left px-4 py-3 text-xs text-[oklch(0.5_0.01_285)] uppercase tracking-widest font-mono-data">Intensidade</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.map((r, i) => (
                        <tr
                          key={r.dist}
                          className={`border-b border-[oklch(0.18_0.006_285)] hover:bg-[oklch(0.14_0.005_285)] transition-colors ${i % 2 === 0 ? "" : "bg-[oklch(0.09_0.005_285)]"}`}
                        >
                          <td className="px-4 py-4">
                            <span className="font-display text-xl text-white">{r.dist}m</span>
                          </td>
                          <td className="px-4 py-4">
                            <span className="calc-result text-2xl">{r.time}</span>
                          </td>
                          <td className="px-4 py-4">
                            <span className="font-mono-data text-sm text-white">{r.qty}</span>
                          </td>
                          <td className="px-4 py-4">
                            <span className="font-mono-data text-sm text-[oklch(0.7_0.01_285)]">{r.rest}</span>
                          </td>
                          <td className="px-4 py-4">
                            <span className={`font-mono-data text-xs ${selectedObj.color}`}>{r.intensity}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="px-6 py-3 bg-[oklch(0.08_0.005_285)] text-xs text-[oklch(0.45_0.01_285)]">
                  * Tempos calculados com base no pace de referência e multiplicador de intensidade para o objetivo selecionado. Ajuste conforme sua condição física atual.
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-4">
            <div
              className="rounded-lg overflow-hidden h-48 bg-cover bg-center"
              style={{ backgroundImage: `url('${TIROS_BG}')` }}
            />
            <AdSpace size="sidebar" />
            <div className="bg-[oklch(0.11_0.005_285)] border border-[oklch(0.22_0.006_285)] rounded-lg p-4">
              <h3 className="font-display text-lg text-orange mb-3 uppercase">Dica de Treinamento</h3>
              <div className="space-y-3 text-sm text-[oklch(0.65_0.01_285)]">
                <p>O aquecimento antes dos tiros deve durar no mínimo <strong className="text-white">15–20 minutos</strong> de corrida leve.</p>
                <p>Realize os tiros em pista ou superfície plana para garantir a precisão dos tempos.</p>
                <p>O volume total de tiros não deve exceder <strong className="text-white">10% do volume semanal</strong> de corrida.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
