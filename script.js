/* ============================================================
   PORTAL BIOTOOLS PREMIUM — PERFORMANCE CIENTÍFICA
   Idealizado por Juarez Bruschi Junior
   ============================================================ */

const app = document.getElementById('root');

// --- MOTOR DE CÁLCULO ---
const formatTime = (s) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = Math.round(s % 60);
    return h > 0 ? `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}` : `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
};

window.calcularTudo = () => {
    // Lógica Pace
    const dP = parseFloat(document.getElementById('distPace').value);
    const mP = parseInt(document.getElementById('mPace').value || 0);
    const sP = parseInt(document.getElementById('sPace').value || 0);
    if (dP > 0 && (mP + sP) > 0) {
        const paceSecs = ((mP * 60) + sP) / dP;
        document.getElementById('resPace').innerHTML = `<small>PACE:</small> ${Math.floor(paceSecs / 60)}:${String(Math.round(paceSecs % 60)).padStart(2, '0')} <small>min/km</small>`;
    }

    // Lógica Tiros
    const tMin = parseInt(document.getElementById('pMin').value || 4);
    const tSec = parseInt(document.getElementById('pSec').value || 30);
    const ref = (tMin * 60) + tSec;
    const mults = { vo2: 0.92, limiar: 0.95, vel: 0.88 };
    const obj = document.getElementById('objTiro').value;
    const target = ref * mults[obj];
    
    let html = '<div style="margin-top:20px; display:grid; gap:10px">';
    [200, 400, 800, 1000].forEach(d => {
        html += `<div style="display:flex; justify-content:space-between; padding:12px; background:#111; border-radius:6px; border-left:3px solid #ffcc00">
                    <span style="color:#666">${d}m</span>
                    <b style="color:#ffcc00">${formatTime(target * (d/1000))}</b>
                 </div>`;
    });
    html += '</div>';
    document.getElementById('resTiros').innerHTML = html;
};

// --- ESTRUTURA VISUAL (DESIGN DE ALTA PERFORMANCE) ---
app.innerHTML = `
<div style="font-family:'Inter', sans-serif; color:white; background:#000; min-height:100vh;">
    
    <nav style="padding:20px; text-align:center; border-bottom:1px solid #111; background:rgba(0,0,0,0.9); position:sticky; top:0; z-index:10">
        <span style="letter-spacing:5px; font-weight:900; color:#ffcc00; font-size:1.2rem">BIOTOOLS PREMIUM</span>
    </nav>

    <header style="padding:100px 20px; text-align:center; background: radial-gradient(circle at center, #111 0%, #000 100%);">
        <h1 style="font-family:'Barlow Condensed'; font-size:5rem; margin:0; line-height:0.9; text-transform:uppercase">Portal do<br><span style="color:#ffcc00">Corredor</span></h1>
        <p style="margin-top:20px; color:#666; font-size:1.2rem; letter-spacing:1px">Sistemas de Treinamento por <b>Juarez Bruschi Junior</b></p>
    </header>

    <main style="max-width:1200px; margin:0 auto; padding:0 20px 100px;">
        
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap:30px">
            
            <div style="background:#080808; border:1px solid #151515; padding:40px; border-radius:24px; position:relative; overflow:hidden">
                <div style="position:absolute; top:0; right:0; padding:10px; color:#111; font-weight:900; font-size:4rem; line-height:1">01</div>
                <h2 style="font-family:'Barlow Condensed'; font-size:2rem; color:#ffcc00; position:relative">ANÁLISE DE RITMO</h2>
                <div style="margin-top:30px">
                    <label style="font-size:10px; color:#444; letter-spacing:2px; display:block; margin-bottom:5px">DISTÂNCIA DA PROVA (KM)</label>
                    <input id="distPace" type="number" value="10" style="width:100%; background:#000; border:1px solid #222; color:white; padding:15px; border-radius:8px; margin-bottom:20px">
                    
                    <label style="font-size:10px; color:#444; letter-spacing:2px; display:block; margin-bottom:5px">TEMPO ALVO (MIN:SEG)</label>
                    <div style="display:flex; gap:10px">
                        <input id="mPace" value="50" type="number" style="width:50%; background:#000; border:1px solid #222; color:white; padding:15px; border-radius:8px">
                        <input id="sPace" value="0" type="number" style="width:50%; background:#000; border:1px solid #222; color:white; padding:15px; border-radius:8px">
                    </div>
                </div>
                <button onclick="calcularTudo()" style="width:100%; background:#ffcc00; border:none; padding:20px; margin-top:30px; font-weight:900; cursor:pointer; border-radius:8px; transition:0.3s">CALCULAR PACE</button>
                <div id="resPace" style="margin-top:30px; font-size:2.5rem; font-family:'Barlow Condensed'; text-align:center; color:#ffcc00"></div>
            </div>

            <div style="background:#080808; border:1px solid #151515; padding:40px; border-radius:24px; position:relative; overflow:hidden">
                <div style="position:absolute; top:0; right:0; padding:10px; color:#111; font-weight:900; font-size:4rem; line-height:1">02</div>
                <h2 style="font-family:'Barlow Condensed'; font-size:2rem; color:#ffcc00; position:relative">TIROS CIENTÍFICOS</h2>
                <div style="margin-top:30px">
                    <label style="font-size:10px; color:#444; letter-spacing:2px; display:block; margin-bottom:5px">PACE DE REFERÊNCIA</label>
                    <div style="display:flex; gap:10px">
                        <input id="pMin" value="4" type="number" style="width:50%; background:#000; border:1px solid #222; color:white; padding:15px; border-radius:8px">
                        <input id="pSec" value="30" type="number" style="width:50%; background:#000; border:1px solid #222; color:white; padding:15px; border-radius:8px">
                    </div>
                    
                    <label style="font-size:10px; color:#444; letter-spacing:2px; display:block; margin-bottom:5px; margin-top:20px">OBJETIVO FISIOLÓGICO</label>
                    <select id="objTiro" style="width:100%; background:#000; border:1px solid #222; color:white; padding:15px; border-radius:8px">
                        <option value="vo2">VO2 MÁX (STIMULUS)</option>
                        <option value="limiar">THRESHOLD (LIMIAR)</option>
                        <option value="vel">SPRINT (VELOCIDADE)</option>
                    </select>
                </div>
                <button onclick="calcularTudo()" style="width:100%; background:#fff; color:#000; border:none; padding:20px; margin-top:30px; font-weight:900; cursor:pointer; border-radius:8px">GERAR TIROS</button>
                <div id="resTiros"></div>
            </div>

        </div>

        <section style="margin-top:100px; display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap:50px">
            <div>
                <h3 style="color:#ffcc00; font-family:'Barlow Condensed'; font-size:1.5rem">METODOLOGIA</h3>
                <p style="color:#444; line-height:1.6; font-size:0.9rem">Algoritmos baseados
