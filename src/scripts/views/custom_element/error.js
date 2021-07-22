class ErrorMsg extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <h2 class="error-msg">Data failed to load</h2>
          `;
  }
}

customElements.define('error-msg', ErrorMsg);
