/* ============================================================
   PORTAL COMPLETO - JUAREZ BRUSCHI JUNIOR
   Integração: Pace + Tiros + Zonas + Metodologia
   ============================================================ */

const app = document.getElementById('root');

// --- LÓGICA DAS CALCULADORAS ---
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
        document.getElementById('resPace').innerHTML = `RITMO: <span style="color:#ffcc00; font-size:1.5rem">${Math.floor(pace / 60)}:${String(Math.round(pace % 60)).padStart(2, '0')} min/km</span>`;
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
        let html = '<table style="width:100%; margin-top:15px; border-collapse:collapse;">';
        [200, 400, 800, 1000].forEach(d => {
            html += `<tr style="border-bottom:1px solid #333; height:45px"><td>${d}m</td><td style="color:#ffcc00; text-align:right"><b>${formatTime(target * (d/1000))}</b></td></tr>`;
        });
        html += '</table>';
        document.getElementById('resTiros').innerHTML = html;
    }
};

// --- DESIGN DO PORTAL ---
app.innerHTML = `
<div style="font-family:'Inter', sans-serif; color:white; background:#080808; min-height:100vh;">
    
    <nav style="background:#111; padding:20px; text-align:center; border-bottom:2px solid #ffcc00">
        <b style="letter-spacing:3px; font-size:1.2rem">BIOTOOLS PREMIUM</b>
    </nav>

    <header style="padding:80px 20px; text-align:center; background:linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url('https://images.unsplash.com/photo-1532444458054-015fddf2b2ca?auto=format&fit=crop&q=80&w=1920'); background-size:cover;">
        <h1 style="font-family:'Barlow Condensed'; font-size:4rem; color:#ffcc00; margin:0">PORTAL DO CORREDOR</h1>
        <p style="font-size:1.3rem; color:#aaa; margin-top:10px">Treinamento de Elite por <b>Juarez Bruschi Junior</b></p>
    </header>

    <div style="max-width:1100px; margin:0 auto; padding:40px 20px;">
        
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap:30px; margin-bottom:60px">
            <div style="background:#121212; padding:35px; border-radius:15px; border:1px solid #222; box-shadow:0 10px 30px rgba(0,0,0,0.5)">
                <h3 style="color:#ffcc00; margin-top:0; font-family:'Barlow Condensed'; font-size:1.8rem">CALCULADORA DE PACE</h3>
                <label style="color:#666; font-size:0.8rem">DISTÂNCIA (KM)</label>
                <input id="distPace" type="number" value="10" style="width:100%; background:#000; border:1px solid #333; color:white; padding:12px; margin:8px 0">
                <label style="color:#666; font-size:0.8rem">TEMPO (MIN / SEG)</label>
                <div style="display:flex; gap:10px">
                    <input id="mPace" placeholder="Min" type="number" value="50" style="width:50%; background:#000; border:1px solid #333; color:white; padding:12px">
                    <input id="sPace" placeholder="Seg" type="number" value="0" style="width:50%; background:#000; border:1px solid #333; color:white; padding:12px">
                </div>
                <button onclick="calcularPace()" style="width:100%; background:#ffcc00; border:none; padding:18px; margin-top:25px; font-weight:bold; cursor:pointer; border-radius:5px">CALCULAR RITMO</button>
                <div id="resPace" style="margin-top:25px; text-align:center;"></div>
            </div>

            <div style="background:#121212; padding:35px; border-radius:15px; border:1px solid #222; box-shadow:0 10px 30px rgba(0,0,0,0.5)">
                <h3 style="color:#ffcc00; margin-top:0; font-family:'Barlow Condensed'; font-size:1.8rem">TREINO DE TIROS</h3>
                <label style="color:#666; font-size:0.8rem">PACE DE REFERÊNCIA</label>
                <div style="display:flex; gap:10px">
                    <input id="pMin" type="number" value="4" style="width:50%; background:#000; border:1px solid #333; color:white; padding:12px">
                    <input id="pSec" type="number" value="30" style="width:50%; background:#000; border:1px solid #333; color:white; padding:12px">
                </div>
                <label style="color:#666; font-size:0.8rem; margin-top:10px; display:block">OBJETIVO</label>
                <select id="objTiro" style="width:100%; background:#000; border:1px solid #333; color:white; padding:12px; margin-top:8px">
                    <option value="vo2">VO2 Máx (Intenso)</option>
                    <option value="limiar">Limiar Anaeróbio</option>
                    <option value="vel">Velocidade Máxima</option>
                </select>
                <button onclick="calcularTiros()" style="width:100%; background:#ffcc00; border:none; padding:18px; margin-top:25px; font-weight:bold; cursor:pointer; border-radius:5px">GERAR PLANILHA</button>
                <div id="resTiros" style="margin-top:15px"></div>
            </div>
        </div>

        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap:30px">
            <section style="background:#111; padding:40px; border-radius:15px; border-left:4px solid #ffcc00">
                <h2 style="color:#ffcc00; font-family:'Barlow Condensed'; margin-top:0">METODOLOGIA</h2>
                <p style="color:#999; line-height:1.7">Treinamento baseado em fisiologia de alta performance. Ajuste seus tiros para evoluir seu VO2 Máx e economia de corrida.</p>
            </section>
            
            <section style="background:#111; padding:40px; border-radius:15px; border-left:4px solid #ffcc00">
                <h2 style="color:#ffcc00; font-family:'Barlow Condensed'; margin-top:0">ZONAS DE TREINO</h2>
                <p style="color:#999; line-height:1.7">Z1: Recuperação | Z2: Aeróbico | Z3: Limiar | Z4: Intervalado | Z5: Esforço Máximo.</p>
            </section>
        </div>

    </div>

    <footer style="background:#0a0a0a; padding:60px 20px; text-align:center; border-top:1px solid #222; color:#444">
        <p>Portal do Corredor © 2026 | Domínio Oficial: <b>biotoolspremium.com.br</b></p>
        <p style="font-size:11px; margin-top:10px">Hospedagem Gratuita via GitHub Pages | Economia: $34/mês</p>
    </footer>
</div>
`;
