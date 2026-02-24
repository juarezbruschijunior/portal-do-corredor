/* ============================================================
   PORTAL DO CORREDOR - JUAREZ BRUSCHI JUNIOR
   Versão Completa: Pace + Tiros + Metodologia + Zonas
   ============================================================ */

const app = document.getElementById('root');

// --- LÓGICA DE CÁLCULO ---
const formatTime = (s) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = Math.round(s % 60);
    return h > 0 ? `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}` : `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
};

window.calcularPace = () => {
    const dist = parseFloat(document.getElementById('distPace').value);
    const m = parseInt(document.getElementById('mPace').value || 0);
    const s = parseInt(document.getElementById('sPace').value || 0);
    const totalSecs = (m * 60) + s;
    if (dist > 0 && totalSecs > 0) {
        const pace = totalSecs / dist;
        document.getElementById('resPace').innerHTML = `Pace: <span style="color:#ffcc00">${Math.floor(pace / 60)}:${String(Math.round(pace % 60)).padStart(2, '0')} min/km</span>`;
    }
};

window.calcularTiros = () => {
    const pM = parseInt(document.getElementById('pMin').value || 0);
    const pS = parseInt(document.getElementById('pSec').value || 0);
    const paceRef = (pM * 60) + pS;
    const obj = document.getElementById('objTiro').value;
    const mults = { vo2: 0.92, limiar: 0.95, vel: 0.88 };
    
    if (paceRef > 0) {
        const target = paceRef * mults[obj];
        let html = '<table style="width:100%; margin-top:15px; border-collapse:collapse; font-size:14px">';
        [200, 400, 800, 1000].forEach(d => {
            html += `<tr style="border-bottom:1px solid #333; height:35px"><td>${d}m</td><td style="color:#ffcc00; text-align:right"><b>${formatTime(target * (d/1000))}</b></td></tr>`;
        });
        html += '</table>';
        document.getElementById('resTiros').innerHTML = html;
    }
};

// --- ESTRUTURA VISUAL (TODOS OS COMPONENTES) ---
app.innerHTML = `
<div style="font-family:'Inter', sans-serif; color:white; background:#080808; min-height:100vh;">
    
    <nav style="background:#111; padding:15px; text-align:center; border-bottom:2px solid #ffcc00">
        <b style="letter-spacing:2px">BIOTOOLS PREMIUM</b>
    </nav>

    <header style="padding:60px 20px; text-align:center; background:linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1532444458054-015fddf2b2ca?auto=format&fit=crop&q=80&w=1920'); background-size:cover;">
        <h1 style="font-family:'Barlow Condensed'; font-size:3.5rem; color:#ffcc00; margin:0">PORTAL DO CORREDOR</h1>
        <p style="font-size:1.2rem; color:#ccc">Alta Performance por <b>Juarez Bruschi Junior</b></p>
    </header>

    <div style="max-width:1100px; margin:0 auto; padding:40px 20px;">
        
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap:30px; margin-bottom:50px">
            <div style="background:#111; padding:30px; border-radius:15px; border:1px solid #222">
                <h3 style="color:#ffcc00; margin-top:0">RITMO (PACE)</h3>
                <input id="distPace" type="number" placeholder="Distância (km)" style="width:100%; background:#000; border:1px solid #333; color:white; padding:12px; margin:10px 0">
                <div style="display:flex; gap:10px">
                    <input id="mPace" placeholder="Min" type="number" style="width:50%; background:#000; border:1px solid #333; color:white; padding:12px">
                    <input id="sPace" placeholder="Seg" type="number" style="width:50%; background:#000; border:1px solid #333; color:white; padding:12px">
                </div>
                <button onclick="calcularPace()" style="width:100%; background:#ffcc00; border:none; padding:15px; margin-top:20px; font-weight:bold; cursor:pointer">CALCULAR PACE</button>
                <div id="resPace" style="margin-top:20px; text-align:center; font-weight:bold"></div>
            </div>

            <div style="background:#111; padding:30px; border-radius:15px; border:1px solid #222">
                <h3 style="color:#ffcc00; margin-top:0">TREINO DE TIROS</h3>
                <div style="display:flex; gap:10px">
                    <input id="pMin" placeholder="Pace Min" type="number" value="4" style="width:50%; background:#000; border:1px solid #333; color:white; padding:12px">
                    <input id="pSec" placeholder="Pace Seg" type="number" value="30" style="width:50%; background:#000; border:1px solid #333; color:white; padding:12px">
                </div>
                <select id="objTiro" style="width:100%; background:#000; border:1px solid #333; color:white; padding:12px; margin-top:10px">
                    <option value="vo2">Objetivo: VO2 Máx</option>
                    <option value="limiar">Objetivo: Limiar Anaeróbio</option>
                    <option value="vel">Objetivo: Velocidade</option>
                </select>
                <button onclick="calcularTiros()" style="width:100%; background:#ffcc00; border:none; padding:15px; margin-top:20px; font-weight:bold; cursor:pointer">GERAR PLANILHA</button>
                <div id="resTiros"></div>
            </div>
        </div>

        <section style="background:#111; padding:40px; border-radius:15px; margin-bottom:50px">
            <h2 style="color:#ffcc00; font-family:'Barlow Condensed'">NOSSA METODOLOGIA</h2>
            <p style="color:#888; line-height:1.6">Baseamos nossos cálculos em fisiologia do exercício de elite. O treinamento de tiros foca no desenvolvimento do sistema cardiovascular e na eficiência biomecânica.</p>
            <ul style="color:#ccc; padding-left:20px">
                <li>Zonas de Treinamento por Frequência Cardíaca</li>
                <li>Periodização Científica</li>
                <li>Recuperação Ativa</li>
            </ul>
        </section>

    </div>

    <footer style="background:#111; padding:40px; text-align:center; border-top:1px solid #222; color:#444">
        <p>Portal do Corredor © 2026 | Desenvolvido para <b>Juarez Bruschi Junior</b></p>
        <p style="font-size:10px">Hospedagem GitHub Pages - Custo: R$ 0,00</p>
    </footer>
</div>
`;
