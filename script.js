/* ============================================================
   PORTAL 100% COMPLETO - JUAREZ BRUSCHI JUNIOR
   ============================================================ */

const app = document.getElementById('root');

// --- CÁLCULOS MATEMÁTICOS ---
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
        document.getElementById('resPace').innerHTML = `RITMO: <span style="color:#ffcc00">${Math.floor(pace / 60)}:${String(Math.round(pace % 60)).padStart(2, '0')} min/km</span>`;
    }
};

window.calcularTiros = () => {
    const pM = parseInt(document.getElementById('pMin').value || 4);
    const pS = parseInt(document.getElementById('pSec').value || 30);
    const paceRef = (pM * 60) + pS;
    const obj = document.getElementById('objTiro').value;
    const mults = { vo2: 0.92, limiar: 0.95, vel: 0.88 };
    const target = paceRef * mults[obj];
    let html = '<table style="width:100%; margin-top:15px; border-collapse:collapse; font-size:14px">';
    [200, 400, 800, 1000].forEach(d => {
        html += `<tr style="border-bottom:1px solid #333; height:35px"><td>${d}m</td><td style="color:#ffcc00; text-align:right"><b>${formatTime(target * (d/1000))}</b></td></tr>`;
    });
    html += '</table>';
    document.getElementById('resTiros').innerHTML = html;
};

// --- ESTRUTURA VISUAL COMPLETA ---
app.innerHTML = `
<div style="font-family:'Inter', sans-serif; color:white; background:#080808; min-height:100vh;">
    
    <nav style="background:#111; padding:20px; text-align:center; border-bottom:2px solid #ffcc00">
        <b style="letter-spacing:3px">BIOTOOLS PREMIUM</b>
    </nav>

    <header style="padding:80px 20px; text-align:center; background:linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1532444458054-015fddf2b2ca?auto=format&fit=crop&q=80&w=1920'); background-size:cover;">
        <h1 style="font-family:'Barlow Condensed'; font-size:4rem; color:#ffcc00; margin:0">PORTAL DO CORREDOR</h1>
        <p style="font-size:1.2rem; color:#888">Alta Performance por <b>Juarez Bruschi Junior</b></p>
    </header>

    <div style="max-width:1100px; margin:0 auto; padding:40px 20px;">
        
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap:30px; margin-bottom:50px">
            <div style="background:#111; padding:30px; border-radius:15px; border:1px solid #222">
                <h3 style="color:#ffcc00; margin-top:0">RITMO (PACE)</h3>
                <input id="distPace" type="number" value="10" style="width:100%; background:#000; border:1px solid #333; color:white; padding:12px; margin-bottom:10px">
                <div style="display:flex; gap:10px">
                    <input id="mPace" value="50" type="number" style="width:50%; background:#000; border:1px solid #333; color:white; padding:12px">
                    <input id="sPace" value="0" type="number" style="width:50%; background:#000; border:1px solid #333; color:white; padding:12px">
                </div>
                <button onclick="calcularPace()" style="width:100%; background:#ffcc00; border:none; padding:15px; margin-top:20px; font-weight:bold; cursor:pointer">CALCULAR PACE</button>
                <div id="resPace" style="margin-top:20px; text-align:center; font-weight:bold"></div>
            </div>

            <div style="background:#111; padding:30px; border-radius:15px; border:1px solid #222">
                <h3 style="color:#ffcc00; margin-top:0">TREINO DE TIROS</h3>
                <div style="display:flex; gap:10px">
                    <input id="pMin" value="4" type="number" style="width:50%; background:#000; border:1px solid #333; color:white; padding:12px">
                    <input id="pSec" value="30" type="number" style="width:50%; background:#000; border:1px solid #333; color:white; padding:12px">
                </div>
                <select id="objTiro" style="width:100%; background:#000; border:1px solid #333; color:white; padding:12px; margin-top:10px">
                    <option value="vel">Velocidade Máxima</option>
                    <option value="vo2">VO2 Máx</option>
                    <option value="limiar">Limiar Anaeróbio</option>
                </select>
                <button onclick="calcularTiros()" style="width:100%; background:#ffcc00; border:none; padding:15px; margin-top:20px; font-weight:bold; cursor:pointer">GERAR PLANILHA</button>
                <div id="resTiros"></div>
            </div>
        </div>

        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:30px; margin-bottom:50px">
            <section style="background:#111; padding:30px; border-radius:15px; border-left:4px solid #ffcc00">
                <h3 style="color:#ffcc00; margin-top:0">METODOLOGIA</h3>
                <p style="color:#888; font-size:14px">Treinamento baseado em fisiologia de elite. Ajuste seus tiros para evoluir seu VO2 Máx e economia de corrida.</p>
            </section>
            <section style="background:#111; padding:30px; border-radius:15px; border-left:4px solid #ffcc00">
                <h3 style="color:#ffcc00; margin-top:0">ZONAS DE TREINO</h3>
                <p style="color:#888; font-size:14px">Z1: Recuperação | Z2: Aeróbico | Z3: Limiar | Z4: Intervalado | Z5: Esforço Máximo.</p>
            </section>
        </div>

        <section style="background:#111; padding:30px; border-radius:15px; margin-bottom:50px; border:1px solid #222">
            <h3 style="color:#ffcc00; margin-top:0">REFERÊNCIAS CIENTÍFICAS</h3>
            <ul style="color:#666; font-size:13px; line-height:1.8">
                <li>American College of Sports Medicine (ACSM) - Guidelines for Exercise Testing</li>
                <li>Jack Daniels' Running Formula - VDOT Tables</li>
                <li>Fisiologia do Exercício: Energia, Nutrição e Desempenho Humano (McArdle)</li>
            </ul>
        </section>

    </div>

    <footer style="background:#111; padding:60px 20px; text-align:center; border-top:1px solid #222; color:#555">
        <div style="margin-bottom:20px">
            <b style="color:#ffcc00; font-size:1.2rem">PORTAL DO CORREDOR</b><br>
            Treinamento de Alta Performance
        </div>
        <p style="max-width:600px; margin:0 auto 20px; font-size:14px">
            Ferramentas desenvolvidas para otimizar o desempenho de corredores de todos os níveis, do iniciante ao atleta de elite.
        </p>
        <div style="border-top:1px solid #222; padding-top:20px; font-size:12px">
            © 2026 biotoolspremium.com.br | Autor: Juarez Bruschi Junior<br>
            <span style="color:#333">Hospedagem Gratuita via GitHub Pages | Economia de $34/mês</span>
        </div>
    </footer>
</div>
`;
