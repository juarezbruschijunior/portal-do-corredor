/* ============================================================
   PORTAL BIOTOOLS PREMIUM — LABORATÓRIO DE ELITE
   Idealizado por Juarez Bruschi Junior
   ============================================================ */

const app = document.getElementById('root');

// --- MOTOR FISIOLÓGICO (TABELA DE QUANTIDADE E DESCANSO) ---
const getTreinoData = (obj, dist) => {
    const tabela = {
        vo2: { 200: "12 tiros | 1'30 rest", 400: "10 tiros | 2' rest", 800: "6 tiros | 3' rest", 1000: "5 tiros | 4' rest" },
        limiar: { 200: "20 tiros | 45'' rest", 400: "15 tiros | 1' rest", 800: "10 tiros | 1'30 rest", 1000: "8 tiros | 2' rest" },
        vel: { 200: "10 tiros | 3' rest", 400: "8 tiros | 5' rest", 800: "4 tiros | 6' rest", 1000: "3 tiros | 8' rest" }
    };
    return tabela[obj][dist] || "";
};

const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = Math.round(s % 60);
    return `${m}:${String(sec).padStart(2, '0')}`;
};

window.calcularTudo = () => {
    const tMin = parseInt(document.getElementById('pMin').value || 4);
    const tSec = parseInt(document.getElementById('pSec').value || 30);
    const ref = (tMin * 60) + tSec;
    const obj = document.getElementById('objTiro').value;
    const mults = { vo2: 0.92, limiar: 0.95, vel: 0.88 };
    const target = ref * mults[obj];
    
    let html = '<div style="margin-top:30px; display:grid; gap:15px">';
    [200, 400, 800, 1000].forEach(d => {
        html += `
        <div style="background:#111; border:1px solid #222; border-radius:12px; padding:20px; border-left:6px solid #ffcc00; display:flex; justify-content:space-between; align-items:center; box-shadow:0 10px 20px rgba(0,0,0,0.4)">
            <div>
                <b style="color:#ffcc00; font-size:1.3rem; display:block">${d} METROS</b>
                <span style="color:#555; font-size:0.8rem; font-weight:bold; letter-spacing:1px">${getTreinoData(obj, d)}</span>
            </div>
            <div style="text-align:right">
                <small style="color:#444; display:block; letter-spacing:2px">TEMPO ALVO</small>
                <b style="color:#fff; font-size:1.8rem; font-family:monospace">${formatTime(target * (d/1000))}</b>
            </div>
        </div>`;
    });
    html += '</div>';
    document.getElementById('resTiros').innerHTML = html;
};

// --- DESIGN DE ALTA PERFORMANCE (DARK & GOLD) ---
app.innerHTML = `
<div style="font-family:'Inter', sans-serif; color:white; background:#000; min-height:100vh;">
    <nav style="padding:25px; text-align:center; background:#000; border-bottom:1px solid #1a1a1a; position:sticky; top:0; z-index:100">
        <span style="letter-spacing:10px; font-weight:900; color:#ffcc00; font-size:1.1rem">BIOTOOLS PREMIUM</span>
    </nav>

    <header style="padding:100px 20px; text-align:center; background: radial-gradient(circle at center, #151515 0%, #000 100%);">
        <h1 style="font-family:'Barlow Condensed'; font-size:5.5rem; margin:0; line-height:0.8; text-transform:uppercase">Portal do<br><span style="color:#ffcc00">Corredor</span></h1>
        <p style="margin-top:25px; color:#444; font-size:1rem; letter-spacing:5px; text-transform:uppercase">Autoridade em Performance por <b>Juarez Bruschi Junior</b></p>
    </header>

    <main style="max-width:1000px; margin:-50px auto 100px; padding:0 20px;">
        <div style="background:#0a0a0a; border:1px solid #1a1a1a; padding:60px 40px; border-radius:40px; box-shadow:0 40px 100px rgba(0,0,0,0.8)">
            
            <div style="max-width:500px; margin:0 auto">
                <h2 style="font-family:'Barlow Condensed'; font-size:2.2rem; color:#ffcc00; text-align:center; margin-bottom:40px">LABORATÓRIO DE TREINAMENTO</h2>
                
                <div style="margin-bottom:30px">
                    <label style="font-size:10px; color:#333; letter-spacing:3px; display:block; margin-bottom:10px; text-transform:uppercase">Pace de Referência</label>
                    <div style="display:flex; gap:15px">
                        <input id="pMin" value="4" type="number" style="width:50%; background:#000; border:2px solid #222; color:white; padding:20px; border-radius:15px; font-size:1.8rem; text-align:center; font-weight:bold">
                        <input id="pSec" value="30" type="number" style="width:50%; background:#000; border:2px solid #222; color:white; padding:20px; border-radius:15px; font-size:1.8rem; text-align:center; font-weight:bold">
                    </div>
                </div>

                <div style="margin-bottom:40px">
                    <label style="font-size:10px; color:#333; letter-spacing:3px; display:block; margin-bottom:10px; text-transform:uppercase">Objetivo Fisiológico</label>
                    <select id="objTiro" style="width:100%; background:#000; border:2px solid #222; color:white; padding:22px; border-radius:15px; font-size:1rem; cursor:pointer">
                        <option value="vo2">ESTÍMULO DE VO2 MÁXIMO</option>
                        <option value="limiar">LIMIAR ANAERÓBIO (LACTATO)</option>
                        <option value="vel">POTÊNCIA E VELOCIDADE PURA</option>
                    </select>
                </div>

                <button onclick="calcularTudo()" style="width:100%; background:#ffcc00; color:#000; border:none; padding:28px; font-weight:900; cursor:pointer; border-radius:15px; font-size:1.2rem; text-transform:uppercase; letter-spacing:3px; transition:0.3s">GERAR PLANILHA CIENTÍFICA</button>
            </div>

            <div id="resTiros" style="margin-top:50px"></div>
        </div>

        <section style="margin-top:80px; display:grid; grid-template-columns: 1fr 1fr; gap:40px">
            <div style="background:#080808; padding:30px; border-radius:20px; border:1px solid #111">
                <h3 style="color:#ffcc00; font-family:'Barlow Condensed'">METODOLOGIA</h3>
                <p style="color:#444; font-size:0.9rem; line-height:1.7">Utilizamos os componentes de metodologia para calcular o estresse cardiovascular necessário, garantindo que o treinamento intervalado de alta intensidade (HIIT) seja otimizado para a sua fisiologia.</p>
            </div>
            <div style="background:#080808; padding:30px; border-radius:20px; border:1px solid #111">
                <h3 style="color:#ffcc00; font-family:'Barlow Condensed'">REFERÊNCIAS</h3>
                <p style="color:#444; font-size:0.9rem; line-height:1.7">Algoritmos baseados nas tabelas oficiais de ritmo de prova e fisiologia do exercício aplicadas por Juarez Bruschi Junior no domínio oficial biotoolspremium.com.br.</p>
            </div>
        </section>
    </main>

    <footer style="padding:100px 20px; text-align:center; background:#000; color:#222; font-size:0.75rem; letter-spacing:5px; text-transform:uppercase; border-top:1px solid #111">
        © 2026 BIOTOOLSPREMIUM.COM.BR | JUAREZ BRUSCHI JUNIOR | ECONOMIA: $34/MÊS
    </footer>
</div>
`;
