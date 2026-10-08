/**
 * EventBus — Pub/Sub desacoplado.
 * Permite que módulos se comuniquem sem dependências diretas.
 */
export class EventBus {
  #listeners = new Map();

  on(event, handler) {
    if (!this.#listeners.has(event)) this.#listeners.set(event, new Set());
    this.#listeners.get(event).add(handler);
    return () => this.off(event, handler);
  }

  off(event, handler) {
    this.#listeners.get(event)?.delete(handler);
  }

  emit(event, payload) {
    this.#listeners.get(event)?.forEach((h) => {
      try { h(payload); } catch (e) { console.error(`[EventBus] Erro em "${event}":`, e); }
    });
  }

  once(event, handler) {
    const unsub = this.on(event, (p) => { unsub(); handler(p); });
    return unsub;
  }
}

export const eventBus = new EventBus();