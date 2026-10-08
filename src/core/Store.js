import { eventBus } from './EventBus.js';

/**
 * Store — Estado global reativo com Proxy.
 * Qualquer mudança emite evento "state:changed".
 */
function createReactive(target, onChange) {
  return new Proxy(target, {
    set(obj, prop, value) {
      const old = obj[prop];
      obj[prop] = value;
      if (old !== value) onChange(prop, value, old);
      return true;
    },
  });
}

class Store {
  #state;
  #persistence;

  constructor(persistence) {
    this.#persistence = persistence;
    const initial = persistence.load() ?? this.#defaultState();
    this.#state = createReactive(initial, (key, value) => {
      this.#persistence.save(this.#state);
      eventBus.emit('state:changed', { key, value, state: { ...this.#state } });
    });
  }

  #defaultState() {
    return {
      xp: 0,
      level: 1,
      completedMissions: [],
      badges: [],
      playerName: 'Maya',
      startedAt: Date.now(),
    };
  }

  get state() { return { ...this.#state }; }
  get(key) { return this.#state[key]; }
  set(key, value) { this.#state[key] = value; }
  update(patch) { Object.assign(this.#state, patch); }
  reset() {
    this.#state = createReactive(this.#defaultState(), (k, v) => {
      this.#persistence.save(this.#state);
      eventBus.emit('state:changed', { key: k, value: v, state: { ...this.#state } });
    });
  }
}

export { Store };