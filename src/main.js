// src/main.js
import './styles/main.css';

class AppRoot extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="container">
        <header style="text-align:center;color:white;padding:2rem;">
          <h1>🛡️ Maya Cyber Quest</h1>
          <p>Jogo carregado com sucesso!</p>
          <p style="font-size:0.9em;opacity:0.8;">Vite: ${import.meta.env.MODE}</p>
        </header>
        <div style="background:white;border-radius:16px;padding:2rem;box-shadow:0 10px 25px rgba(0,0,0,0.15);">
          <h2>✅ Setup funcionando</h2>
          <ul>
            <li>Vite rodando</li>
            <li>Web Component registrado</li>
            <li>CSS carregado</li>
          </ul>
          <p>Próximo passo: implementar <code>domain/</code> e <code>components/</code>.</p>
        </div>
      </div>
    `;
  }
}

customElements.define('app-root', AppRoot);