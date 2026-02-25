/* ============================================================
   PORTAL BIOTOOLS PREMIUM — VERSÃO MANUS COMPLETA
   Autor: Juarez Bruschi Junior
   ============================================================ */

const app = document.getElementById('root');

// --- CÁLCULOS TÉCNICOS ---
const getTreino = (obj, dist) => {
    const tab = {
        vo2: { 200: "12 tiros | 1'30 rest", 400: "10 tiros | 2' rest", 800: "6 tiros | 3' rest", 1000: "5 tiros | 4' rest" },
        limiar: { 200: "20 tiros | 45'' rest", 400: "15 tiros | 1' rest", 800: "10 tiros | 1'30 rest", 1000: "8 tiros | 2' rest" },
        vel: { 200: "10 tiros | 3' rest", 400: "8 tiros | 5' rest", 800: "4 tiros | 6' rest", 1000: "3 tiros | 8' rest" }
    };
    return tab[obj][dist] || "";
};

window.calcularTudo = () => {
    const tM = parseInt(document.getElementById('pMin').value || 4);
    const tS = parseInt(document.getElementById('pSec').value || 30);
    const ref = (tM * 60) + tS;
    const obj = document.getElementById('objTiro').value;
    const mults = { vo2: 0.92, limiar: 0.95, vel: 0.88 };
    const target = ref * mults[obj];
    
    let html = '<div style="margin-top:30px; display:grid; gap:15px">';
    [200, 400, 800, 1000].forEach(d => {
        html += `<div style="background:#111; border:1px solid #222; border-radius:12px; padding:20px; border-left:6px solid #ffcc00; display:flex; justify-content:space-between; align-items:center;">
            <div><b style="color:#ffcc00; font-size:1.2rem">${d}M</b><br><small style="color:#555">${getTreino(obj, d)}</small></div>
            <b style="color:#fff; font-size:1.6rem; font-family:monospace">${Math.floor(target*(d/1000)/60)}:${String(Math.round(target*(d/1000)%60)).padStart(2, '0')}</b>
        </div>`;
    });
    html += '</div>';
    document.getElementById('resTiros').innerHTML = html;
};

// --- DESIGN INTEGRADO (NAVBAR + HERO + CALC + ZONAS) ---
app.innerHTML = `
<div style="font-family:'Inter', sans-serif; color:white; background:#000; min-height:100vh;">
    <nav style="padding:20px; text-align:center; border-bottom:1px solid #111;">
        <span style="letter-spacing:8px; font-weight:900; color:#ffcc00">BIOTOOLS PREMIUM</span>
    </nav>

    <header style="padding:100px 20px; text-align:center; background: radial-gradient(circle, #151515 0%, #000 100%);">
        <h1 style="font-family:'Barlow Condensed', sans-serif; font-size:5rem; margin:0; line-height:0.8; text-transform:uppercase">PORTAL DO<br><span style="color:#ffcc00">CORREDOR</span></h1>
        <p style="margin-top:20px; color:#444; letter-spacing:4px">Treinamento por <b>Juarez Bruschi Junior</b></p>
    </header>

    <main style="max-width:1100px; margin:-40px auto 100px; padding:0 20px;">
        <div style="background:#0a0a0a; border:1px solid #1a1a1a; padding:50px; border-radius:40px; box-shadow:0 40px 100px rgba(0,0,0,0.9)">
            <div style="max-width:500px; margin:0 auto">
                <label style="font-size:10px; color:#333; letter-spacing:3px; display:block; margin-bottom:10px">PACE ATUAL (MIN:SEG)</label>
                <div style="display:flex; gap:10px; margin-bottom:20px">
                    <input id="pMin" value="4" type="number" style="width:50%; background:#000; border:2px solid #222; color:white; padding:15px; border-radius:12px; font-size:1.5rem; text-align:center">
                    <input id="pSec" value="30" type="number" style="width:50%; background:#000; border:2px solid #222; color:white; padding:15px; border-radius:12px; font-size:1.5rem; text-align:center">
                </div>
                <select id="objTiro" style="width:100%; background:#000; border:2px solid #222; color:white; padding:20px; border-radius:12px; margin-bottom:20px">
                    <option value="vo2">OBJETIVO: VO2 MÁXIMO</option>
                    <option value="limiar">OBJETIVO: LIMIAR ANAERÓBIO</option>
                    <option value="vel">OBJETIVO: VELOCIDADE</option>
                </select>
                <button onclick="calcularTudo()" style="width:100%; background:#ffcc00; color:#000; border:none; padding:25px; font-weight:900; cursor:pointer; border-radius:12px; font-size:1.1rem; text-transform:uppercase">Gerar Planilha Profissional</button>
            </div>
            <div id="resTiros"></div>
        </div>

        <section style="margin-top:60px; display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap:30px">
            <div style="background:#080808; padding:30px; border-radius:20px; border:1px solid #111">
                <h3 style="color:#ffcc00">METODOLOGIA</h3>
                <p style="color:#444; font-size:0.9rem">Treinamento baseado em fisiologia de alta performance para otimizar seu VO2 Máx.</p>
            </div>
            <div style="background:#080808; padding:30px; border-radius:20px; border:1px solid #111">
                <h3 style="color:#ffcc00">ZONAS DE TREINO</h3>
                <p style="color:#444; font-size:0.9rem">Do regenerativo ao esforço máximo, calculado pelo portal biotoolspremium.com.br.</p>
            </div>
        </section>
    </main>

    <footer style="padding:100px 20px; text-align:center; color:#222; font-size:0.7rem; border-top:1px solid #111; letter-spacing:3px">
        © 2026 JUAREZ BRUSCHI JUNIOR | ECONOMIA: $34/MÊS
    </footer>
</div>
`;
