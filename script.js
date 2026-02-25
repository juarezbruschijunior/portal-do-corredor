/* ============================================================
   PORTAL BIOTOOLS PREMIUM — CONSULTORIA DE ALTA PERFORMANCE
   Idealizado por Juarez Bruschi Junior
   ============================================================ */

const app = document.getElementById('root');

// --- MOTOR DE TREINAMENTO CIENTÍFICO ---
const getPlanilhaData = (obj, dist) => {
    const dados = {
        vo2: { 200: "12 tiros | 1'30 descanso", 400: "10 tiros | 2' descanso", 800: "6 tiros | 3' descanso", 1000: "5 tiros | 4' descanso" },
        limiar: { 200: "20 tiros | 45'' descanso", 400: "15 tiros | 1' descanso", 800: "10 tiros | 1'30 descanso", 1000: "8 tiros | 2' descanso" },
        vel: { 200: "10 tiros | 3' descanso", 400: "8 tiros | 5' descanso", 800: "4 tiros | 6' descanso", 1000: "3 tiros | 8' descanso" }
    };
    return dados[obj][dist] || "";
};

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
                <span style="color:#666; font-size:0.85rem; font-weight:bold; letter-spacing:1px; text-transform:uppercase">${getPlanilhaData(obj, d)}</span>
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

// --- ESTRUTURA VISUAL DE ALTA AUTORIDADE ---
app.innerHTML = `
<div style="font-family:'Inter', sans-serif; color:white; background:#000; min-height:100vh;">
    
    <nav style="padding:25px; text-align:center; background:#000; border-bottom:1px solid #1a1a1a; position:sticky; top:0; z-index:100">
        <span style="letter-spacing:10px; font-weight:900; color:#ffcc00; font-size:1.1rem">BIOTOOLS PREMIUM</span>
    </nav>

    <header style="padding:100px 20px; text-align:center; background: radial-gradient(circle at center, #181818 0%, #000 100%);">
        <h1 style="font-family:'Barlow Condensed', sans-serif; font-size:5rem; margin:0; line-height:0.8; text-transform:uppercase; color:#fff">PORTAL DO<br><span style="color:#ffcc00">CORREDOR</span></h1>
        <p style="margin-top:25px; color:#444; font-size:1rem; letter-spacing:5px; text-transform:uppercase">Ciência e Performance por <b>Juarez Bruschi Junior</b></p>
    </header>

    <main style="max-width:1100px; margin:-40px auto 100px; padding:0 20px;">
        
        <div style="background:#0a0a0a; border:1px solid #1a1a1a; padding:60px 40px; border-radius:40px; box-shadow:0 40px 100px rgba(0,0,0,0.9)">
            <div style="max-width:550px; margin:0 auto">
                <h2 style="font-family:'Barlow Condensed'; font-size:2.5rem; color:#ffcc00; text-align:center; margin-bottom:10px">PLANILHA DE TIROS</h2>
                <p style="text-align:center; color:#444; font-size:0.9rem; margin-bottom:40px">Gere seu treino baseado em fisiologia cardiovascular avançada.</p>
                
                <div style="margin-bottom:30px">
                    <label style="font-size:11px; color:#333; letter-spacing:3px; display:block; margin-bottom:12px; text-transform:uppercase">Seu Pace Atual (Min : Seg)</label>
                    <div style="display:flex; gap:15px">
                        <input id="pMin" value="4" type="number" style="width:50%; background:#000; border:2px solid #222; color:white; padding:22px; border-radius:15px; font-size:2rem; text-align:center; font-weight:bold; outline:none">
                        <input id="pSec" value="30" type="number" style="width:50%; background:#000; border:2px solid #222; color:white; padding:22px; border-radius:15px; font-size:2rem; text-align:center; font-weight:bold; outline:none">
                    </div>
                </div>

                <div style="margin-bottom:40px">
                    <label style="font-size:11px; color:#333; letter-spacing:3px; display:block; margin-bottom:12px; text-transform:uppercase">Objetivo do Estímulo</label>
                    <select id="objTiro" style="width:100%; background:#000; border:2px solid #222; color:white; padding:22px; border-radius:15px; font-size:1.1rem; cursor:pointer; outline:none">
                        <option value="vo2">ESTÍMULO DE VO2 MÁXIMO (HIIT)</option>
                        <option value="limiar">RESISTÊNCIA DE VELOCIDADE (LIMIAR)</option>
                        <option value="vel">SPRINTS E POTÊNCIA ANAERÓBIA</option>
                    </select>
                </div>

                <button onclick="gerarPlanilha()" style="width:100%; background:#ffcc00; color:#000; border:none; padding:28px; font-weight:900; cursor:pointer; border-radius:15px; font-size:1.3rem; text-transform:uppercase; letter-spacing:3px; transition:0.3s; box-shadow: 0 20px 40px rgba(255,204,0,0.15)">CALCULAR TREINO</button>
            </div>

            <div id="containerPlanilha" style="margin-top:50px"></div>
        </div>

        <section style="margin-top:80px; display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap:40px">
            <div style="background:#080808; padding:40px; border-radius:25px; border:1px solid #151515">
                <h3 style="color:#ffcc00; font-family:'Barlow Condensed'; font-size:1.8rem; margin-top:0">METODOLOGIA CIENTÍFICA</h3>
                <p style="color:#555; font-size:1rem; line-height:1.8">Nossos cálculos integram os princípios da <b>Fisiologia do Exercício</b> para determinar a carga interna ideal. Ao utilizar o pace de referência, o Portal do Corredor define as zonas de intensidade necessárias para a evolução do VO2 Máx e a economia de corrida, fundamentais para atletas que buscam recordes pessoais.</p>
            </div>
            <div style="background:#080808; padding:40px; border-radius:25px; border:1px solid #151515">
                <h3 style="color:#ffcc00; font-family:'Barlow Condensed'; font-size:1.8rem; margin-top:0">CONTROLE DE CARGA</h3>
                <p style="color:#555; font-size:1rem; line-height:1.8">A prescrição de tiros de 200m a 1000m segue o protocolo de recuperação ativa e passiva. <b>Juarez Bruschi Junior</b> estruturou estas ferramentas no domínio <b>biotoolspremium.com.br</b> para garantir que corredores amadores tenham acesso a dados de elite sem os altos custos de plataformas proprietárias.</p>
            </div>
        </section>

    </main>

    <footer style="padding:100px 20px; text-align:center; background:#000; color:#222; font-size:0.8rem; letter-spacing:5px; text-transform:uppercase; border-top:1px solid #111">
        © 2026 BIOTOOLSPREMIUM.COM.BR | JUAREZ BRUSCHI JUNIOR | ECONOMIA: $34/MÊS
    </footer>
</div>
`;
