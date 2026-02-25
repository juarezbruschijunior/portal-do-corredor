/* ============================================================
   PORTAL BIOTOOLS PREMIUM — DESIGN CYBER PERFORMANCE
   Idealizado por Juarez Bruschi Junior
   ============================================================ */

const app = document.getElementById('root');

// MOTOR DE CÁLCULO PROFISSIONAL
const formatTime = (s) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = Math.round(s % 60);
    return h > 0 ? `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}` : `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
};

window.calcularTudo = () => {
    const tMin = parseInt(document.getElementById('pMin').value || 4);
    const tSec = parseInt(document.getElementById('pSec').value || 30);
    const ref = (tMin * 60) + tSec;
    const obj = document.getElementById('objTiro').value;
    const mults = { vo2: 0.92, limiar: 0.95, vel: 0.88 };
    const target = ref * mults[obj];
    
    let html = '<div style="margin-top:25px; display:grid; gap:12px">';
    [200, 400, 800, 1000].forEach(d => {
        html += `<div style="display:flex; justify-content:space-between; padding:15px; background:#111; border-radius:10px; border-right:4px solid #ffcc00; box-shadow: 0 4px 15px rgba(0,0,0,0.3)">
                    <span style="color:#888; font-weight:bold; letter-spacing:1px">${d} METROS</span>
                    <b style="color:#ffcc00; font-size:1.2rem">${formatTime(target * (d/1000))}</b>
                 </div>`;
    });
    html += '</div>';
    document.getElementById('resTiros').innerHTML = html;
};

// ESTRUTURA VISUAL IMPACTANTE
app.innerHTML = `
<div style="font-family:'Inter', sans-serif; color:white; background:#000; min-height:100vh; line-height:1.6">
    <nav style="padding:25px; text-align:center; background:#000; border-bottom:1px solid #222; position:sticky; top:0; z-index:100">
        <span style="letter-spacing:8px; font-weight:900; color:#ffcc00; font-size:1.3rem">BIOTOOLS PREMIUM</span>
    </nav>

    <header style="padding:120px 20px; text-align:center; background: radial-gradient(circle at center, #1a1a1a 0%, #000 100%); border-bottom:1px solid #111">
        <h1 style="font-family:'Barlow Condensed'; font-size:6rem; margin:0; line-height:0.8; text-transform:uppercase; filter: drop-shadow(0 0 10px rgba(255,204,0,0.3))">PORTAL DO<br><span style="color:#ffcc00">CORREDOR</span></h1>
        <p style="margin-top:30px; color:#555; font-size:1.3rem; letter-spacing:3px; text-transform:uppercase">Ciência por <b>Juarez Bruschi Junior</b></p>
    </header>

    <main style="max-width:1100px; margin:-50px auto 100px; padding:0 20px;">
        <div style="background:#0a0a0a; border:1px solid #222; padding:50px; border-radius:30px; box-shadow:0 30px 60px rgba(0,0,0,0.8)">
            <h2 style="font-family:'Barlow Condensed'; font-size:2.5rem; color:#ffcc00; text-align:center; margin-bottom:40px">LABORATÓRIO DE PERFORMANCE</h2>
            
            <div style="max-width:600px; margin:0 auto">
                <label style="font-size:11px; color:#444; letter-spacing:3px; display:block; margin-bottom:10px; text-transform:uppercase">Pace de Referência (Min:Seg)</label>
                <div style="display:flex; gap:15px; margin-bottom:25px">
                    <input id="pMin" value="4" type="number" style="width:50%; background:#000; border:2px solid #222; color:white; padding:20px; border-radius:12px; font-size:1.5rem; text-align:center">
                    <input id="pSec" value="30" type="number" style="width:50%; background:#000; border:2px solid #222; color:white; padding:20px; border-radius:12px; font-size:1.5rem; text-align:center">
                </div>

                <label style="font-size:11px; color:#444; letter-spacing:3px; display:block; margin-bottom:10px; text-transform:uppercase">Objetivo do Estímulo</label>
                <select id="objTiro" style="width:100%; background:#000; border:2px solid #222; color:white; padding:20px; border-radius:12px; font-size:1.1rem; margin-bottom:30px; appearance:none">
                    <option value="vo2">VO2 MÁXIMO (ALTA INTENSIDADE)</option>
                    <option value="limiar">LIMIAR DE LACTATO (RESISTÊNCIA)</option>
                    <option value="vel">SPRINTS (POTÊNCIA PURA)</option>
                </select>

                <button onclick="calcularTudo()" style="width:100%; background:#ffcc00; color:#000; border:none; padding:25px; font-weight:900; cursor:pointer; border-radius:12px; font-size:1.2rem; text-transform:uppercase; letter-spacing:2px; transition:0.3s">GERAR PLANILHA AGORA</button>
            </div>

            <div id="resTiros" style="margin-top:40px"></div>
        </div>
    </main>

    <footer style="padding:100px 20px; text-align:center; background:#050505; color:#222; font-size:0.8rem; letter-spacing:4px; text-transform:uppercase">
        © 2026 BIOTOOLSPREMIUM.COM.BR | JUAREZ BRUSCHI JUNIOR
    </footer>
</div>
`;
