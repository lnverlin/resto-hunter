import { itActAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';
import favoriteRestaurantIdb from '../src/scripts/data/favoriteresto-idb';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await favoriteRestaurantIdb.getAllRestaurants()).forEach(async (restaurants) => {
      await favoriteRestaurantIdb.deleteRestaurant(restaurants.id);
    });
  });

  itActAsFavoriteRestaurantModel(favoriteRestaurantIdb);
});
