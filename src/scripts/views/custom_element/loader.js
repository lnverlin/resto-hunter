class LoaderContainer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <pre-loader>
            <div class="loader">
              <div class="circle__loader"></div>
            </div>
        </pre-loader>
            `;
  }
}

customElements.define('loader-container', LoaderContainer);
