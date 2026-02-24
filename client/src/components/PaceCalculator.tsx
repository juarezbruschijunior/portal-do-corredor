/* ============================================================
   CALCULADORA DE PACE — Functional pace calculator
   Modes: Time→Pace, Pace→Time, Distance→Time
   Background: pace-calculator-bg.jpg
   ============================================================ */

import { useState } from "react";
import { Timer, ArrowRight, RotateCcw } from "lucide-react";
import AdSpace from "./AdSpace";

const PACE_BG = "https://private-us-east-1.manuscdn.com/sessionFile/BKG7CZoAezfcuL3rAVVaz5/sandbox/BChzLmFXmewCAijFo9bGl7-img-2_1771956727000_na1fn_cGFjZS1jYWxjdWxhdG9yLWJn.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQktHN0Nab0FlemZjdUwzckFWVmF6NS9zYW5kYm94L0JDaHpMbUZYbWV3Q0FpakZvOWJHbDctaW1nLTJfMTc3MTk1NjcyNzAwMF9uYTFmbl9jR0ZqWlMxallXeGpkV3hoZEc5eUxXSm4uanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=v9QUyhmcYBx7gtAbdxVfSWT73A4uXGXe0uGFPtkGfCCI2-yUoVeQV~25HOYcbjSdb77UqjaKYE6Sg-pqNXpsFpxB0JF16CduRiGM3yVUfFl5CaKkec8pusQDWSffNmeIC09~eaHlPYiBQJqvXSLTEREO-ZRezKEUqtJEHyArcvlz0-nDM0O3zE2NIkyKz2Oc3tP2NE~xQrk5tVGShYcxt19ogh1dYoQWq7NofYrAtxVebxYU9cRmiVZNBncF6EXx3H1CcE~k9lQhcJg6Nq9B0JSA0F8WBieBRfgI4hfFe9FwTyRf2-TYWy89xKklgKzXETWKtpvBSLDjyGz5kRgKtg__";

type CalcMode = "time-to-pace" | "pace-to-time" | "speed-to-pace";

const commonDistances = [
  { label: "1 km", value: 1 },
  { label: "5 km", value: 5 },
  { label: "10 km", value: 10 },
  { label: "21,1 km", value: 21.0975 },
  { label: "42,2 km", value: 42.195 },
];

function padZero(n: number) {
  return String(Math.floor(n)).padStart(2, "0");
}

function formatPace(secondsPerKm: number): string {
  const mins = Math.floor(secondsPerKm / 60);
  const secs = Math.round(secondsPerKm % 60);
  return `${padZero(mins)}:${padZero(secs)} min/km`;
}

function formatTime(totalSeconds: number): string {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = Math.round(totalSeconds % 60);
  if (h > 0) return `${padZero(h)}:${padZero(m)}:${padZero(s)}`;
  return `${padZero(m)}:${padZero(s)}`;
}

export default function PaceCalculator() {
  const [mode, setMode] = useState<CalcMode>("time-to-pace");
  const [distance, setDistance] = useState("10");
  const [hours, setHours] = useState("0");
  const [minutes, setMinutes] = useState("50");
  const [seconds, setSeconds] = useState("0");
  const [paceMin, setPaceMin] = useState("5");
  const [paceSec, setPaceSec] = useState("0");
  const [speed, setSpeed] = useState("12");
  const [result, setResult] = useState<string | null>(null);
  const [extraResults, setExtraResults] = useState<{ label: string; value: string }[]>([]);
  const [animated, setAnimated] = useState(false);

  const triggerAnimation = () => {
    setAnimated(false);
    setTimeout(() => setAnimated(true), 10);
  };

  const calculate = () => {
    const dist = parseFloat(distance);
    if (!dist || dist <= 0) return;

    if (mode === "time-to-pace") {
      const totalSecs = parseInt(hours || "0") * 3600 + parseInt(minutes || "0") * 60 + parseInt(seconds || "0");
      if (totalSecs <= 0) return;
      const paceSecsPerKm = totalSecs / dist;
      const speedKmh = (dist / totalSecs) * 3600;
      setResult(formatPace(paceSecsPerKm));
      setExtraResults([
        { label: "Velocidade média", value: `${speedKmh.toFixed(2)} km/h` },
        { label: "Tempo total", value: formatTime(totalSecs) },
      ]);
    } else if (mode === "pace-to-time") {
      const paceTotalSecs = parseInt(paceMin || "0") * 60 + parseInt(paceSec || "0");
      if (paceTotalSecs <= 0) return;
      const totalSecs = paceTotalSecs * dist;
      const speedKmh = 3600 / paceTotalSecs;
      setResult(formatTime(totalSecs));
      setExtraResults([
        { label: "Velocidade", value: `${speedKmh.toFixed(2)} km/h` },
        { label: "Pace", value: formatPace(paceTotalSecs) },
      ]);
    } else {
      const spd = parseFloat(speed);
      if (!spd || spd <= 0) return;
      const paceSecsPerKm = 3600 / spd;
      const totalSecs = (dist / spd) * 3600;
      setResult(formatPace(paceSecsPerKm));
      setExtraResults([
        { label: "Tempo total", value: formatTime(totalSecs) },
        { label: "Velocidade", value: `${spd.toFixed(2)} km/h` },
      ]);
    }
    triggerAnimation();
  };

  const reset = () => {
    setResult(null);
    setExtraResults([]);
    setHours("0");
    setMinutes("50");
    setSeconds("0");
    setPaceMin("5");
    setPaceSec("0");
    setSpeed("12");
    setDistance("10");
  };

  const inputClass = "w-full bg-[oklch(0.1_0.005_285)] border border-[oklch(0.25_0.006_285)] text-white font-mono-data text-lg px-3 py-2 rounded focus:outline-none focus:border-orange transition-colors";
  const labelClass = "text-xs text-[oklch(0.55_0.01_285)] uppercase tracking-widest font-mono-data mb-1 block";

  return (
    <section id="calc-pace" className="py-20 bg-[oklch(0.08_0.005_285)]">
      <div className="container">
        {/* Section header */}
        <div className="mb-10">
          <div className="section-divider" />
          <div className="flex items-center gap-3 mb-3">
            <Timer className="w-7 h-7 text-orange" />
            <h2 className="font-display text-4xl md:text-5xl text-white">
              CALCULADORA DE <span className="text-orange">PACE</span>
            </h2>
          </div>
          <p className="text-[oklch(0.65_0.01_285)] max-w-2xl">
            Calcule seu pace, velocidade e tempo de prova com precisão. Insira seus dados e obtenha resultados instantâneos baseados em fisiologia do exercício.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_300px] gap-8">
          {/* Main calculator */}
          <div className="bg-[oklch(0.11_0.005_285)] border border-[oklch(0.22_0.006_285)] rounded-lg overflow-hidden">
            {/* Mode tabs */}
            <div className="flex border-b border-[oklch(0.22_0.006_285)]">
              {[
                { key: "time-to-pace", label: "Tempo → Pace" },
                { key: "pace-to-time", label: "Pace → Tempo" },
                { key: "speed-to-pace", label: "Velocidade → Pace" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => { setMode(tab.key as CalcMode); setResult(null); setExtraResults([]); }}
                  className={`flex-1 font-display text-sm py-3 px-2 uppercase tracking-wider transition-colors ${
                    mode === tab.key
                      ? "bg-orange text-white"
                      : "text-[oklch(0.55_0.01_285)] hover:text-white hover:bg-[oklch(0.16_0.006_285)]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="p-6">
              {/* Distance selector */}
              <div className="mb-6">
                <label className={labelClass}>Distância</label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {commonDistances.map((d) => (
                    <button
                      key={d.value}
                      onClick={() => setDistance(String(d.value))}
                      className={`font-mono-data text-sm px-3 py-1.5 rounded border transition-colors ${
                        parseFloat(distance) === d.value
                          ? "bg-orange border-orange text-white"
                          : "border-[oklch(0.25_0.006_285)] text-[oklch(0.65_0.01_285)] hover:border-orange hover:text-orange"
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                    className={inputClass}
                    placeholder="Distância em km"
                    min="0.1"
                    step="0.1"
                  />
                  <span className="text-[oklch(0.55_0.01_285)] font-mono-data text-sm whitespace-nowrap">km</span>
                </div>
              </div>

              {/* Mode-specific inputs */}
              {mode === "time-to-pace" && (
                <div className="mb-6">
                  <label className={labelClass}>Tempo de Prova</label>
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="text-[10px] text-[oklch(0.45_0.01_285)] uppercase tracking-widest font-mono-data mb-1 block">Horas</label>
                      <input type="number" value={hours} onChange={(e) => setHours(e.target.value)} className={inputClass} min="0" max="24" />
                    </div>
                    <div>
                      <label className="text-[10px] text-[oklch(0.45_0.01_285)] uppercase tracking-widest font-mono-data mb-1 block">Minutos</label>
                      <input type="number" value={minutes} onChange={(e) => setMinutes(e.target.value)} className={inputClass} min="0" max="59" />
                    </div>
                    <div>
                      <label className="text-[10px] text-[oklch(0.45_0.01_285)] uppercase tracking-widest font-mono-data mb-1 block">Segundos</label>
                      <input type="number" value={seconds} onChange={(e) => setSeconds(e.target.value)} className={inputClass} min="0" max="59" />
                    </div>
                  </div>
                </div>
              )}

              {mode === "pace-to-time" && (
                <div className="mb-6">
                  <label className={labelClass}>Pace (min/km)</label>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] text-[oklch(0.45_0.01_285)] uppercase tracking-widest font-mono-data mb-1 block">Minutos</label>
                      <input type="number" value={paceMin} onChange={(e) => setPaceMin(e.target.value)} className={inputClass} min="0" max="30" />
                    </div>
                    <div>
                      <label className="text-[10px] text-[oklch(0.45_0.01_285)] uppercase tracking-widest font-mono-data mb-1 block">Segundos</label>
                      <input type="number" value={paceSec} onChange={(e) => setPaceSec(e.target.value)} className={inputClass} min="0" max="59" />
                    </div>
                  </div>
                </div>
              )}

              {mode === "speed-to-pace" && (
                <div className="mb-6">
                  <label className={labelClass}>Velocidade (km/h)</label>
                  <input
                    type="number"
                    value={speed}
                    onChange={(e) => setSpeed(e.target.value)}
                    className={inputClass}
                    min="1"
                    max="50"
                    step="0.1"
                  />
                </div>
              )}

              {/* Calculate button */}
              <div className="flex gap-3">
                <button
                  onClick={calculate}
                  className="flex-1 flex items-center justify-center gap-2 bg-orange text-white font-display text-lg py-3 rounded hover:bg-[oklch(0.55_0.22_35)] transition-all duration-200 uppercase tracking-wider shadow-lg shadow-orange/20"
                >
                  <ArrowRight className="w-5 h-5" />
                  Calcular
                </button>
                <button
                  onClick={reset}
                  className="px-4 py-3 border border-[oklch(0.25_0.006_285)] text-[oklch(0.55_0.01_285)] rounded hover:border-orange hover:text-orange transition-colors"
                  aria-label="Limpar"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
              </div>

              {/* Result display */}
              {result && (
                <div className={`mt-6 p-5 bg-[oklch(0.08_0.005_285)] border border-orange/30 rounded-lg ${animated ? "result-animate" : ""}`}>
                  <div className="text-xs text-[oklch(0.55_0.01_285)] uppercase tracking-widest font-mono-data mb-2">
                    {mode === "time-to-pace" ? "Pace Calculado" : mode === "pace-to-time" ? "Tempo de Prova" : "Pace Equivalente"}
                  </div>
                  <div className="calc-result text-4xl md:text-5xl mb-4">{result}</div>
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-[oklch(0.22_0.006_285)]">
                    {extraResults.map((r) => (
                      <div key={r.label}>
                        <div className="text-[10px] text-[oklch(0.45_0.01_285)] uppercase tracking-widest font-mono-data">{r.label}</div>
                        <div className="font-mono-data text-white text-lg">{r.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar with image + ad */}
          <div className="flex flex-col gap-4">
            <div
              className="rounded-lg overflow-hidden h-48 lg:h-64 bg-cover bg-center"
              style={{ backgroundImage: `url('${PACE_BG}')` }}
            />
            <AdSpace size="sidebar" />
            <div className="bg-[oklch(0.11_0.005_285)] border border-[oklch(0.22_0.006_285)] rounded-lg p-4">
              <h3 className="font-display text-lg text-orange mb-3 uppercase">Referência de Pace</h3>
              <div className="space-y-2">
                {[
                  { level: "Iniciante", pace: "7:00–9:00", color: "text-green-400" },
                  { level: "Intermediário", pace: "5:30–7:00", color: "text-yellow-400" },
                  { level: "Avançado", pace: "4:00–5:30", color: "text-orange-400" },
                  { level: "Elite", pace: "< 4:00", color: "text-red-400" },
                ].map((item) => (
                  <div key={item.level} className="flex justify-between items-center py-1 border-b border-[oklch(0.18_0.006_285)]">
                    <span className="text-sm text-[oklch(0.7_0.01_285)]">{item.level}</span>
                    <span className={`font-mono-data text-sm ${item.color}`}>{item.pace}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
