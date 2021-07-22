import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import favoriteRestaurantIdb from '../../src/scripts/data/favoriteresto-idb';

const createLikeButtonPresenterWithResto = async (restaurantDetail) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurant: favoriteRestaurantIdb,
    restaurantDetail,
  });
};

export { createLikeButtonPresenterWithResto };
