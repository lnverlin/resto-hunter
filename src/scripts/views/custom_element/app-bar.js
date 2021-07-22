class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <nav id="nav-list" tabindex="0">
        <h1 class="logo">Resto Hunt</h1>
            <button id="menu" class="hamburger" aria-label="Slider navigation menu">☰</button>
            <ul class="drawers">
                <li><a href="#/home">Home</a></li>
                <li><a href="#/favorite">Favorite</a></li>
                <li><a href="https://www.facebook.com/just.verlin">About Us</a></li>
            </ul>
        </nav>
        `;
  }
}

customElements.define('app-bar', AppBar);
