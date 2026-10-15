import './styles/main.css';
import { BaseComponent, defineComponent } from './components/base/BaseComponent.js';
import { html } from './utils/html.js';

const appRoot = document.querySelector('app-root');

if (!appRoot) {
  console.error('[MCQ] <app-root> não encontrado no HTML');
} else {
  appRoot.innerHTML = `
    <div class="container">
      <header style="text-align:center; color:white; margin-bottom:2rem;">
        <h1 style="font-size:2.5rem; text-shadow:2px 2px 4px rgba(0,0,0,0.3); margin-bottom:0.5rem;">
           Maya Cyber Quest
        </h1>
        <p style="opacity:0.9; font-size:1.1rem;">
          Uma aventura pela segurança na internet
        </p>
      </header>

      <div id="screen" style="
        background: white;
        border-radius: 20px;
        padding: 2rem;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
      ">
        <!-- Telas são renderizadas aqui -->
      </div>
    </div>
  `;

  renderIntro();
}



function renderIntro() {
  const screen = document.getElementById('screen');
  screen.innerHTML = `
    <div style="display:flex; align-items:center; gap:1rem; margin-bottom:1.5rem;">
      <div style="
        width:80px; height:80px; border-radius:50%;
        background: linear-gradient(135deg, #f093fb, #f5576c);
        display:grid; place-items:center; font-size:2.5rem;
        flex-shrink:0;
      ">👩‍💻</div>
      <div>
        <h2 style="font-size:1.5rem; color:#6366f1; margin:0;">Olá, eu sou a Maya!</h2>
        <p style="color:#6b7280; margin:0;">Estudante de 14 anos em missão digital</p>
      </div>
    </div>

    <p style="margin-bottom:1rem;">
      Acabei de ganhar meu primeiro computador, mas algo estranho está acontecendo:
      <strong>todos os sites da internet estão com problemas!</strong>
    </p>

    <p style="margin-bottom:2rem;">
      Preciso da sua ajuda para visitar três portais importantes e restaurar a conexão global. Você topa?
    </p>

    <div style="display:flex; gap:1rem; flex-wrap:wrap;">
      <button id="btn-start" style="
        background: linear-gradient(135deg, #6366f1, #4f46e5);
        color: white;
        border: none;
        padding: 0.9rem 1.8rem;
        border-radius: 12px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
        box-shadow: 0 4px 12px rgba(99,102,241,0.3);
      "> Começar Aventura</button>
    </div>
  `;

  document.getElementById('btn-start').addEventListener('click', renderMissionSelect);
}

function renderMissionSelect() {
  const screen = document.getElementById('screen');
  screen.innerHTML = `
    <h2 style="font-size:1.5rem; margin-bottom:0.5rem;"> Escolha sua missão</h2>
    <p style="color:#6b7280; margin-bottom:1.5rem;">
      Três portais estão esperando por você.
    </p>

    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:1rem;">
      ${missionCard('📰', 'Portal de Notícias', 'Identifique fontes confiáveis', 'news')}
      ${missionCard('🎓', 'Plataforma Educacional', 'Aprenda sobre senhas seguras', 'learning')}
      ${missionCard('📧', 'Cliente de Email', 'Detecte mensagens suspeitas', 'email')}
    </div>
  `;

  screen.querySelectorAll('[data-mission]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const id = btn.dataset.mission;
    console.log('[MCQ] Missão escolhida:', id);
    renderComingSoon(id);
  });
 });
}

function missionCard(icon, title, description, id) {
  return `
    <button
      data-mission="${id}"
      style="
        background: #f9fafb;
        border: 2px solid #e5e7eb;
        border-radius: 16px;
        padding: 1.5rem 1rem;
        text-align: center;
        cursor: pointer;
        transition: all 0.2s;
        font-family: inherit;
        font-size: inherit;
        color: inherit;
      "
      onmouseover="this.style.transform='translateY(-4px)'; this.style.borderColor='#6366f1'; this.style.boxShadow='0 8px 20px rgba(0,0,0,0.1)';"
      onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='#e5e7eb'; this.style.boxShadow='none';"
    >
      <div style="font-size:2.5rem; margin-bottom:0.5rem;">${icon}</div>
      <div style="font-weight:700; margin-bottom:0.25rem;">${title}</div>
      <div style="font-size:0.9rem; color:#6b7280;">${description}</div>
    </button>
  `;
}
function renderComingSoon(missionId) {
  const screen = document.getElementById('screen');

  const titles = {
    news: '📰 Portal de Notícias',
    learning: '🎓 Plataforma Educacional',
    email: '📧 Cliente de Email',
  };

  screen.innerHTML = `
    <h2 style="font-size:1.5rem; margin-bottom:1rem;">
      ${titles[missionId] ?? 'Missão'}
    </h2>

    <div style="
      background: #fef3c7;
      border-left: 4px solid #f59e0b;
      border-radius: 8px;
      padding: 1.5rem;
      margin-bottom: 1.5rem;
    ">
      <p style="margin:0; font-weight:600;">🚧 Em construção</p>
      <p style="margin:0.5rem 0 0; color:#6b7280;">
        Esta missão ainda está sendo implementada. Em breve você poderá jogá-la!
      </p>
    </div>

    <button id="btn-back" style="
      background: #6366f1;
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 12px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
    ">⬅ Voltar às missões</button>
  `;

  document.getElementById('btn-back').addEventListener('click', renderMissionSelect);
}
if (import.meta.env.DEV) {
  setTimeout(() => {
    myUndefinedFunction();
  }, 1000);
}