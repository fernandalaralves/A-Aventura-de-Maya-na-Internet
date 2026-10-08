/**
 * Persistence — Abstração sobre LocalStorage.
 * Fácil de trocar por IndexedDB ou backend.
 */
export class LocalPersistence {
  #key;

  constructor(key = 'maya-cyber-quest') {
    this.#key = key;
  }

  load() {
    try {
      const raw = localStorage.getItem(this.#key);
      return raw ? JSON.parse(raw) : null;
    } catch { return null; }
  }

  save(state) {
    try {
      localStorage.setItem(this.#key, JSON.stringify(state));
    } catch (e) { console.warn('Falha ao salvar:', e); }
  }

  clear() { localStorage.removeItem(this.#key); }
}