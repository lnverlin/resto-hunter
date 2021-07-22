class footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer tabindex="0">
            <p>Copyright &#169; 2021 - Resto Hunt</p>
        </footer>
        `;
  }
}

customElements.define('my-footer', footer);
