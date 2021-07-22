import UrlParser from '../../routes/url-parser';
import { restaurantDetailApi } from '../../data/restaurantdb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import favoriteRestaurantIdb from '../../data/favoriteresto-idb';

const restaurantDetail = {
  async render() {
    return `
      <loader-container></loader-container>
      <div class="container__detail">
        <div class="restaurant__detail" id="restaurant_detail"></div>
        </div>
      </div>
      
        `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('#restaurant_detail');
    const loading = document.querySelector('.loader');
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      loading.style.display = 'none';
      const restaurantData = await restaurantDetailApi(url.id);
      restaurantContainer.innerHTML = await createRestaurantDetailTemplate(restaurantData);

      LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurant: favoriteRestaurantIdb,
        restaurantDetail: restaurantData.restaurant,
      });
    } catch (error) {
      loading.style.display = 'none';
      restaurantContainer.innerHTML = `
      <error-msg></error-msg>
      `;
      console.log(error);
    }
  },
};

export default restaurantDetail;
