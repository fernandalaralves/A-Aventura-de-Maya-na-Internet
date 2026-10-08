import { eventBus } from './EventBus.js';

/**
 * Router — Roteamento por hash (#/mission/news).
 * Mantém URL compartilhável e histórico do navegador.
 */
export class Router {
  #routes = new Map();
  #current = null;

  register(path, handler) {
    this.#routes.set(path, handler);
    return this;
  }

  navigate(path, params = {}) {
    window.location.hash = `#${path}`;
    this.#resolve(path, params);
  }

  start() {
    window.addEventListener('hashchange', () => {
      const path = window.location.hash.slice(1) || '/';
      this.#resolve(path, {});
    });
    const initial = window.location.hash.slice(1) || '/';
    this.#resolve(initial, {});
  }

  #resolve(path, params) {
    const handler = this.#routes.get(path);
    if (!handler) { console.warn(`Rota não encontrada: ${path}`); return; }
    this.#current = path;
    eventBus.emit('route:changed', { from: this.#current, to: path });
    handler(params);
  }

  get current() { return this.#current; }
}