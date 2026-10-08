/**
 * AudioManager — Sons com fallback para Web Audio API.
 * Respeita preferências do usuário (silencioso).
 */
export class AudioManager {
  #enabled = true;
  #cache = new Map();

  constructor({ enabled = true } = {}) {
    this.#enabled = enabled && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  async play(name, { volume = 0.5 } = {}) {
    if (!this.#enabled) return;
    try {
      let audio = this.#cache.get(name);
      if (!audio) {
        audio = new Audio(`/sounds/${name}.mp3`);
        this.#cache.set(name, audio);
      }
      audio.volume = volume;
      audio.currentTime = 0;
      await audio.play();
    } catch { /* ignora se o som falhar */ }
  }

  toggle(force) { this.#enabled = force ?? !this.#enabled; }
  get enabled() { return this.#enabled; }
}