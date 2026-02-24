// O motor do seu Portal do Corredor - Juarez Bruschi Junior
console.log("Portal carregado com sucesso!");

document.getElementById('root').innerHTML = `
  <div style="font-family: 'Inter', sans-serif; color: white; background: #0a0a0a; min-height: 100vh; padding: 20px; text-align: center;">
    <header style="margin-bottom: 40px;">
      <h1 style="font-family: 'Barlow Condensed', sans-serif; font-size: 3.5rem; color: #ffcc00; margin: 0; text-transform: uppercase; letter-spacing: 2px;">
        PORTAL DO CORREDOR
      </h1>
      <p style="font-size: 1.2rem; color: #888; margin-top: 10px;">
        Treinamento de Alta Performance por <strong>Juarez Bruschi Junior</strong>
      </p>
    </header>

    <main style="max-width: 800px; margin: 0 auto; background: #1a1a1a; border: 2px solid #333; border-radius: 15px; padding: 40px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
      <h2 style="color: #ffcc00; margin-bottom: 20px;">Calculadora de Performance Ativa</h2>
      <p style="color: #ccc; line-height: 1.6; margin-bottom: 30px;">
        O seu portal oficial está online e livre de erros. Agora, todas as suas ferramentas de cálculo de tiros e pace estão sendo integradas para rodar sem custo de hospedagem.
      </p>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        <div style="background: #222; padding: 20px; border-radius: 8px;">
          <h3 style="color: #ffcc00; font-size: 1rem;">Cálculo de Tiros</h3>
          <p style="font-size: 0.9rem; color: #888;">Configure seus intervalos de alta intensidade.</p>
        </div>
        <div style="background: #222; padding: 20px; border-radius: 8px;">
          <h3 style="color: #ffcc00; font-size: 1rem;">Ritmo (Pace)</h3>
          <p style="font-size: 0.9rem; color: #888;">Descubra o tempo exato para sua prova.</p>
        </div>
      </div>

      <button onclick="alert('Sistema de Performance Ativado!')" style="background: #ffcc00; color: black; border: none; padding: 15px 30px; font-size: 1.1rem; font-weight: bold; cursor: pointer; border-radius: 5px; margin-top: 30px; transition: 0.3s; width: 100%;">
        ACESSAR CALCULADORAS COMPLETAS
      </button>
    </main>
  </div>
`;
