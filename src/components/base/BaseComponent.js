export class BaseComponent extends HTMLElement {
  static observedAttributes = [];

  #props = {};
  #mounted = false;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.props = new Proxy(this.#props, {
      set: (obj, key, value) => {
        const old = obj[key];
        obj[key] = value;
        if (this.#mounted && old !== value) this.render();
        return true;
      },
    });
  }

  connectedCallback() {
    this.#mounted = true;
    this.render();
    this.afterRender?.();
  }

  disconnectedCallback() {
    this.#mounted = false;
    this.onDestroy?.();
  }

  attributeChangedCallback(name, _old, newVal) {
    this.props[name] = newVal;
  }

  template() {
    return '';
  }

  render() {
    this.shadowRoot.innerHTML = this.template();
  }

  $(selector) {
    return this.shadowRoot.querySelector(selector);
  }

  $$(selector) {
    return [...this.shadowRoot.querySelectorAll(selector)];
  }

  // Emite CustomEvent que sobe a árvore (útil para o jogo)
  emit(event, detail) {
    this.dispatchEvent(
      new CustomEvent(event, { detail, bubbles: true, composed: true })
    );
  }
}

export function defineComponent(name, klass) {
  if (!customElements.get(name)) {
    customElements.define(name, klass);
  }
}
export { html } from '../../utils/html.js';