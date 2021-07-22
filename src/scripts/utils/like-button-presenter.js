import { createLikeRestaurantButtonTemplate, createUnlikeRestaurantButtonTemplate } from '../views/templates/template-creator';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, favoriteRestaurant, restaurantDetail }) {
    this.likeButtonContainer = likeButtonContainer;
    this.restaurantDetail = restaurantDetail;
    this._favoriteRestaurants = favoriteRestaurant;

    await this.render();
  },

  async render() {
    const { id } = this.restaurantDetail;

    if (await this.isRestaurantExist(id)) {
      this.renderUnlike();
    } else {
      this.renderLike();
    }
  },

  async isRestaurantExist(id) {
    const restaurant = await this._favoriteRestaurants.getRestaurant(id);
    return !!restaurant;
  },

  renderLike() {
    this.likeButtonContainer.innerHTML = createLikeRestaurantButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', () => {
      this._favoriteRestaurants.putRestaurant(this.restaurantDetail);
      this.render();
    });
  },

  renderUnlike() {
    this.likeButtonContainer.innerHTML = createUnlikeRestaurantButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.deleteRestaurant(this.restaurantDetail.id);
      this.render();
    });
  },
};

export default LikeButtonPresenter;
