/* ============================================================
   PORTAL BIOTOOLS PREMIUM — RECONSTRUÇÃO MANUS
   Autor: Juarez Bruschi Junior
   ============================================================ */

const app = document.getElementById('root');

// --- LÓGICA DAS CALCULADORAS (ORIGINAL MANUS) ---
const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = Math.round(s % 60);
    return `${m}:${String(sec).padStart(2, '0')}`;
};

window.gerarPlanilha = () => {
    const tMin = parseInt(document.getElementById('pMin').value || 4);
    const tSec = parseInt(document.getElementById('pSec').value || 30);
    const ref = (tMin * 60) + tSec;
    const obj = document.getElementById('objTiro').value;
    const mults = { vo2: 0.92, limiar: 0.95, vel: 0.88 };
    const target = ref * mults[obj];
    
    let html = '<div style="margin-top:30px; display:grid; gap:15px">';
    [200, 400, 800, 1000].forEach(d => {
        html += `
        <div style="background:#111; border:1px solid #222; border-radius:12px; padding:25px; border-left:6px solid #ffcc00; display:flex; justify-content:space-between; align-items:center; box-shadow:0 10px 20px rgba(0,0,0,0.4)">
            <div>
                <b style="color:#ffcc00; font-size:1.4rem; display:block">${d} METROS</b>
                <span style="color:#666; font-size:0.85rem; font-weight:bold; letter-spacing:1px">ESTÍMULO CONTROLADO</span>
            </div>
            <div style="text-align:right">
                <small style="color:#444; display:block; letter-spacing:2px; font-size:0.7rem">RITMO ALVO</small>
                <b style="color:#fff; font-size:2rem; font-family:monospace">${formatTime(target * (d/1000))}</b>
            </div>
        </div>`;
    });
    html += '</div>';
    document.getElementById('containerPlanilha').innerHTML = html;
};

// --- ESTRUTURA VISUAL (DESIGN MANUS ADAPTADO) ---
app.innerHTML = `
<div style="font-family:'Inter', sans-serif; color:white; background:#000; min-height:100vh;">
    
    <nav style="padding:25px; text-align:center; background:#000; border-bottom:1px solid #1a1a1a; position:sticky; top:0; z-index:100">
        <span style="letter-spacing:10px; font-weight:900; color:#ffcc00; font-size:1.1rem">BIOTOOLS PREMIUM</span>
    </nav>

    <header style="padding:120px 20px; text-align:center; background: radial-gradient(circle at center, #1a1a1a 0%, #000 100%);">
        <h1 style="font-family:'Barlow Condensed', sans-serif; font-size:6rem; margin:0; line-height:0.8; text-transform:uppercase; filter: drop-shadow(0 0 15px rgba(255,204,0,0.2))">PORTAL DO<br><span style="color:#ffcc00">CORREDOR</span></h1>
        <p style="margin-top:30px; color:#555; font-size:1.1rem; letter-spacing:5px; text-transform:uppercase">Alta Performance por <b>Juarez Bruschi Junior</b></p>
    </header>

    <main style="max-width:1100px; margin:-60px auto 100px; padding:0 20px;">
        
        <div style="background:#0a0a0a; border:1px solid #1a1a1a; padding:60px 40px; border-radius:40px; box-shadow:0 40px 100px rgba(0,0,0,0.9)">
            <div style="max-width:550px; margin:0 auto">
                <h2 style="font-family:'Barlow Condensed'; font-size:2.5rem; color:#ffcc00; text-align:center; margin-bottom:10px">SISTEMA DE TIROS</h2>
                <p style="text-align:center; color:#444; font-size:0.9rem; margin-bottom:40px">Cálculos baseados em limiar de lactato e VO2 máximo.</p>
                
                <div style="margin-bottom:30px">
                    <label style="font-size:10px; color:#333; letter-spacing:3px; display:block; margin-bottom:12px; text-transform:uppercase">Pace de Referência (Min : Seg)</label>
                    <div style="display:flex; gap:15px">
                        <input id="pMin" value="4" type="number" style="width:50%; background:#000; border:2px solid #222; color:white; padding:22px; border-radius:15px; font-size:2rem; text-align:center; font-weight:bold; outline:none">
                        <input id="pSec" value="30" type="number" style="width:50%; background:#000; border:2px solid #222; color:white; padding:22px; border-radius:15px; font-size:2rem; text-align:center; font-weight:bold; outline:none">
                    </div>
                </div>

                <div style="margin-bottom:40px">
                    <label style="font-size:10px; color:#333; letter-spacing:3px; display:block; margin-bottom:12px; text-transform:uppercase">Objetivo Fisiológico</label>
                    <select id="objTiro" style="width:100%; background:#000; border:2px solid #222; color:white; padding:22px; border-radius:15px; font-size:1.1rem; cursor:pointer; outline:none">
                        <option value="vo2">DESENVOLVIMENTO DE VO2 MÁXIMO</option>
                        <option value="limiar">LIMIAR ANAERÓBIO (RESISTÊNCIA)</option>
                        <option value="vel">SPRINTS E POTÊNCIA PURA</option>
                    </select>
                </div>

                <button onclick="gerarPlanilha()" style="width:100%; background:#ffcc00; color:#000; border:none; padding:28px; font-weight:900; cursor:pointer; border-radius:15px; font-size:1.3rem; text-transform:uppercase; letter-spacing:3px; transition:0.3s; box-shadow: 0 20px 40px rgba(255,204,0,0.15)">CALCULAR PERFORMANCE</button>
            </div>

            <div id="containerPlanilha" style="margin-top:50px"></div>
        </div>

        <section style="margin-top:80px; display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap:40px">
            <div style="background:#080808; padding:45px; border-radius:30px; border:1px solid #111">
                <h3 style="color:#ffcc00; font-family:'Barlow Condensed'; font-size:1.8rem; margin-top:0">METODOLOGIA</h3>
                <p style="color:#555; font-size:1rem; line-height:1.8">Integramos ciência esportiva para definir o ritmo exato do seu treino. Ao utilizar o Portal do Corredor no domínio <b>biotoolspremium.com.br</b>, você acessa a mesma tecnologia usada por atletas de elite para otimizar o seu desempenho.</p>
            </div>
            <div style="background:#080808; padding:45px; border-radius:30px; border:1px solid #111">
                <h3 style="color:#ffcc00; font-family:'Barlow Condensed'; font-size:1.8rem; margin-top:0">ZONAS DE TREINO</h3>
                <p style="color:#555; font-size:1rem; line-height:1.8">Do trote regenerativo ao esforço máximo, cada cálculo é pensado para respeitar a sua individualidade biológica. Juarez Bruschi Junior estruturou este portal para entregar resultados reais com custo zero de manutenção.</p>
            </div>
        </section>

    </main>

    <footer style="padding:100px 20px; text-align:center; background:#000; color:#222; font-size:0.8rem; letter-spacing:5px; text-transform:uppercase; border-top:1px solid #111">
        © 2026 BIOTOOLSPREMIUM.COM.BR | JUAREZ BRUSCHI JUNIOR | ECONOMIA: $34/MÊS
    </footer>
</div>
`;
