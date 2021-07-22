import favoriteRestaurantIdb from '../../data/favoriteresto-idb';
import { createRestaurantListTemplate } from '../templates/template-creator';

const favoriteRestaurants = {
  async render() {
    return `
    <loader-container></loader-container>
    <div class="favorite">
      <div class="main_txt">
        <h2 class="main_title">Hunted Restaurant</h2>
      </div>
      <restaurant-list></restaurant-list>
    </div>
    `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('#restaurants');
    const loading = document.querySelector('.loader');
    try {
      const restaurantList = await favoriteRestaurantIdb.getAllRestaurants();
      restaurantContainer.innerHTML = '';
      loading.style.display = 'none';
      if (restaurantList.length > 0) {
        restaurantList.forEach((restaurant) => {
          restaurantContainer.innerHTML += createRestaurantListTemplate(restaurant);
        });
      } else {
        restaurantContainer.innerHTML = `
          <h2 class="none__favorit">
            Pick your favorite.!
          </h2>
        `;
      }
    } catch (error) {
      loading.style.display = 'none';
      restaurantContainer.innerHTML = `
        <error-msg></error-msg>
      `;
      console.log(error);
    }
  },
};

export default favoriteRestaurants;
