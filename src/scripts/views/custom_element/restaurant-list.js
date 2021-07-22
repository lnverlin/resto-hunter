class RestaurantList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="container" tabindex="0">
            <div id="restaurants" class="cards">
              <div></div>
            </div>
        </div>
        `;
  }
}

customElements.define('restaurant-list', RestaurantList);
