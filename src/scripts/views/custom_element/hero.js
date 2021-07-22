class HeroList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero" id="my-hero" tabindex="0"> 
            <picture>
              <source media="(max-width: 600px)" srcset="./images/hero-image_4-small.jpg" alt="hero image">
              <img src='./images/hero-image_4-large.jpg' alt="hero image">
            </picture>
            <div class="hero_text">
                <p class="hero_title">Find the delicious food</p>
                <p class="hero_deskrip">with</p>
                <p class="hero_title">the best Place and View</p>
            </div
        </div>
        `;
  }
}

customElements.define('hero-list', HeroList);
