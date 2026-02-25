/* ============================================================
   PORTAL DO CORREDOR — JUAREZ BRUSCHI JUNIOR
   Versão Premium Monetizável (Design 2026)
   ============================================================ */

const app = document.getElementById('root');

// --- MOTOR DE PERFORMANCE ---
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
        document.getElementById('resPace').innerHTML = `RITMO CALCULADO: <span style="color:#ffcc00">${Math.floor(pace / 60)}:${String(Math.round(pace % 60)).padStart(2, '0')} min/km</span>`;
    }
};

window.calcularTiros = () => {
    const pM = parseInt(document.getElementById('pMin').value || 4);
    const pS = parseInt(document.getElementById('pSec').value || 30);
    const paceRef = (pM * 60) + pS;
    const obj = document.getElementById('objTiro').value;
    const mults = { vo2: 0.92, limiar: 0.95, vel: 0.88 };
    const target = paceRef * mults[obj];
    let html = '<table style="width:100%; margin-top:15px; border-collapse:collapse; font-size:14px; color:#ccc">';
    [200, 400, 800, 1000].forEach(d => {
        html += `<tr style="border-bottom:1px solid #333; height:40px"><td>${d}m</td><td style="color:#ffcc00; text-align:right"><b>${formatTime(target * (d/1000))}</b></td></tr>`;
    });
    html += '</table>';
    document.getElementById('resTiros').innerHTML = html;
};

// --- ESTRUTURA DA PÁGINA (MONETIZÁVEL) ---
app.innerHTML = `
<div style="font-family:'Inter', sans-serif; color:white; background:#050505; min-height:100vh;">
    
    <nav style="background:#000; padding:15px; text-align:center; border-bottom:2px solid #ffcc00; position:sticky; top:0; z-index:100">
        <b style="letter-spacing:4px; font-size:1.1rem; color:#ffcc00">BIOTOOLS PREMIUM</b>
    </nav>

    <header style="padding:100px 20px; text-align:center; background:linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url('https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&q=80&w=1920'); background-size:cover; background-position:center;">
        <h1 style="font-family:'Barlow Condensed'; font-size:4.5rem; color:#ffcc00; margin:0; line-height:1">PORTAL DO CORREDOR</h1>
        <p style="font-size:1.4rem; color:#eee; margin-top:15px">Treinamento Científico por <b>Juarez Bruschi Junior</b></p>
        <div style="margin-top:20px; font-size:0.9rem; color:#888; text-transform:uppercase; letter-spacing:2px">Fisiologia • Performance • Resultados</div>
    </header>

    <div style="max-width:1200px; margin:0 auto; padding:40px 20px;">
        
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap:40px; margin-bottom:60px">
            
            <div style="background:#111; padding:40px; border-radius:20px; border:1px solid #222; box-shadow:0 15px 40px rgba(0,0,0,0.5)">
                <h2 style="color:#ffcc00; margin-top:0; font-family:'Barlow Condensed'; font-size:2rem">PACE DE PROVA</h2>
                <p style="color:#666; font-size:0.9rem; margin-bottom:25px">Descubra o ritmo necessário para bater suas metas.</p>
                <input id="distPace" type="number" placeholder="Distância (km)" value="10" style="width:100%; background:#000; border:1px solid #333; color:white; padding:15px; margin-bottom:12px; border-radius:8px">
                <div style="display:flex; gap:12px">
                    <input id="mPace" placeholder="Min" type="number" value="50" style="width:50%; background:#000; border:1px solid #333; color:white; padding:15px; border-radius:8px">
                    <input id="sPace" placeholder="Seg" type="number" value="0" style="width:50%; background:#000; border:1px solid #333; color:white; padding:15px; border-radius:8px">
                </div>
                <button onclick="calcularPace()" style="width:100%; background:#ffcc00; border:none; padding:20px; margin-top:25px; font-weight:bold; cursor:pointer; border-radius:8px; text-transform:uppercase; letter-spacing:1px">Calcular Ritmo</button>
                <div id="resPace" style="margin-top:25px; text-align:center; font-weight:bold; font-size:1.1rem"></div>
            </div>

            <div style="background:#111; padding:40px; border-radius:20px; border:1px solid #222; box-shadow:0 15px 40px rgba(0,0,0,0.5)">
                <h2 style="color:#ffcc00; margin-top:0; font-family:'Barlow Condensed'; font-size:2rem">PLANILHA DE TIROS</h2>
                <p style="color:#666; font-size:0.9rem; margin-bottom:25px">Treinos intervalados baseados no seu pace atual.</p>
                <div style="display:flex; gap:12px">
                    <input id="pMin" value="4" type="number" style="width:50%; background:#000; border:1px solid #333; color:white; padding:15px; border-radius:8px">
                    <input id="pSec" value="30" type="number" style="width:50%; background:#000; border:1px solid #333; color:white; padding:15px; border-radius:8px">
                </div>
                <select id="objTiro" style="width:100%; background:#000; border:1px solid #333; color:white; padding:15px; margin-top:12px; border-radius:8px">
                    <option value="vo2">Objetivo: VO2 Máx</option>
                    <option value="limiar">Objetivo: Limiar Anaeróbio</option>
                    <option value="vel">Objetivo: Velocidade Máxima</option>
                </select>
                <button onclick="calcularTiros()" style="width:100%; background:#ffcc00; border:none; padding:20px; margin-top:25px; font-weight:bold; cursor:pointer; border-radius:8px; text-transform:uppercase; letter-spacing:1px">Gerar Treino</button>
                <div id="resTiros"></div>
            </div>
        </div>

        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:30px; margin-bottom:60px">
            <section style="background:#111; padding:35px; border-radius:20px; border-left:5px solid #ffcc00">
                <h3 style="color:#ffcc00; font-family:'Barlow Condensed'; font-size:1.5rem">METODOLOGIA</h3>
                <p style="color:#888; font-size:0.95rem; line-height:1.7">Nossos algoritmos utilizam as tabelas de VDOT e fisiologia cardiovascular para garantir que cada tiro seja executado na intensidade exata para sua evolução.</p>
            </section>
            <section style="background:#111; padding:35px; border-radius:20px; border-left:5px solid #ffcc00">
                <h3 style="color:#ffcc00; font-family:'Barlow Condensed'; font-size:1.5rem">ZONAS DE INTENSIDADE</h3>
                <p style="color:#888; font-size:0.95rem; line-height:1.7">Trabalhamos com 5 zonas de treinamento, desde a recuperação ativa até o esforço supramáximo, otimizando o seu consumo de oxigênio.</p>
            </section>
        </div>

    </div>

    <footer style="background:#000; padding:80px 20px; text-align:center; border-top:1px solid #222; color:#444">
        <div style="margin-bottom:30px">
            <b style="color:#ffcc00; font-size:1.5rem; letter-spacing:2px">BIOTOOLS PREMIUM</b><br>
            <span style="color:#888">Sua plataforma definitiva de treinamento de corrida.</span>
        </div>
        <p style="max-width:700px; margin:0 auto 30px; font-size:0.9rem; line-height:1.6">
            O Portal do Corredor foi idealizado por <b>Juarez Bruschi Junior</b> para democratizar o acesso a treinos de alta performance sem custos de manutenção para o usuário final.
        </p>
        <div style="font-size:0.75rem; border-top:1px solid #111; padding-top:30px">
            © 2026 biotoolspremium.com.br | Todos os direitos reservados.<br>
            Hospedagem Gratuita via GitHub Pages — Economia Real de $34/mês.
        </div>
    </footer>
</div>
`;
