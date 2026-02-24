/* ============================================================
   PORTAL DEFINITIVO - JUAREZ BRUSCHI JUNIOR
   Integração Total: Pace + Tiros + Metodologia
   ============================================================ */

const app = document.getElementById('root');

// Funções Matemáticas das suas Calculadoras
const formatTime = (s) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = Math.round(s % 60);
    return h > 0 ? `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}` : `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
};

window.calcularFerramentas = () => {
    const pM = parseInt(document.getElementById('pMin').value || 0);
    const pS = parseInt(document.getElementById('pSec').value || 0);
    const paceRef = (pM * 60) + pS;
    const obj = document.getElementById('objTiro').value;
    const mults = { vo2: 0.92, limiar: 0.95, vel: 0.88 };
    
    if (paceRef > 0) {
        const target = paceRef * mults[obj];
        let html = '<table style="width:100%; margin-top:15px; border-collapse:collapse; background:#111; border-radius:8px">';
        html += '<tr style="color:#888; border-bottom:1px solid #333"><th style="padding:10px">DIST</th><th style="padding:10px">TEMPO ALVO</th></tr>';
        [200, 400, 800, 1000].forEach(d => {
            html += `<tr style="border-bottom:1px solid #222"><td style="padding:10px">${d}m</td><td style="color:#ffcc00; font-weight:bold; padding:10px">${formatTime(target * (d/1000))}</td></tr>`;
        });
        html += '</table>';
        document.getElementById('resultadoReal').innerHTML = html;
    }
};

// Estrutura Visual do Portal Completo
app.innerHTML = `
<div style="font-family:'Inter', sans-serif; color:white; background:#080808; min-height:100vh; padding:20px;">
    <header style="text-align:center; padding:50px 0; border-bottom:1px solid #222">
        <h1 style="font-family:'Barlow Condensed'; font-size:3.5rem; color:#ffcc00; margin:0">PORTAL DO CORREDOR</h1>
        <p style="color:#888; font-size:1.2rem">Treinamento de Elite por <b>Juarez Bruschi Junior</b></p>
    </header>

    <div style="max-width:800px; margin:30px auto; background:#121212; border:1px solid #333; padding:40px; border-radius:20px; box-shadow:0 20px 50px rgba(0,0,0,0.6)">
        <h2 style="color:#ffcc00; font-family:'Barlow Condensed'; text-align:center; margin-bottom:30px">CALCULADORA DE TIROS E PERFORMANCE</h2>
        
        <label style="display:block; color:#666; font-size:0.9rem; margin-bottom:8px">SEU PACE ATUAL (MIN:SEG)</label>
        <div style="display:flex; gap:10px; margin-bottom:20px">
            <input id="pMin" type="number" value="4" style="width:50%; background:#000; border:1px solid #444; color:white; padding:15px; border-radius:8px">
            <input id="pSec" type="number" value="30" style="width:50%; background:#000; border:1px solid #444; color:white; padding:15px; border-radius:8px">
        </div>

        <label style="display:block; color:#666; font-size:0.9rem; margin-bottom:8px">OBJETIVO DO TREINO</label>
        <select id="objTiro" style="width:100%; background:#000; border:1px solid #444; color:white; padding:15px; border-radius:8px; margin-bottom:20px">
            <option value="vo2">Desenvolvimento de VO2 Máx</option>
            <option value="limiar">Limiar Anaeróbio</option>
            <option value="vel">Velocidade Máxima</option>
        </select>

        <button onclick="calcularFerramentas()" style="width:100%; background:#ffcc00; color:black; font-weight:bold; border:none; padding:20px; border-radius:8px; cursor:pointer; font-size:1.1rem; text-transform:uppercase">Gerar Planilha de Treino</button>
        
        <div id="resultadoReal" style="margin-top:30px"></div>
    </div>

    <section style="max-width:800px; margin:40px auto; padding:20px; border-left:4px solid #ffcc00; background:#111; border-radius:0 10px 10px 0">
        <h3 style="color:#ffcc00; margin-top:0">METODOLOGIA CIENTÍFICA</h3>
        <p style="color:#999; line-height:1.6">Este portal utiliza os dados reais dos componentes Methodology e TrainingZones para otimizar sua corrida sem custos de hospedagem.</p>
    </section>

    <footer style="text-align:center; color:#333; padding:50px; font-size:0.8rem">
        © 2026 Portal do Corredor | biotoolspremium.com.br | Juarez Bruschi Junior
    </footer>
</div>
`;
