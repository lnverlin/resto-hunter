import favoriteRestaurantIdb from '../src/scripts/data/favoriteresto-idb';
import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Unliking A Movie', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await favoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await favoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="Unlike this restaurant"]')).toBeTruthy();
  });

  it('should not display like widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="Like this restaurant"]')).toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    document.querySelector('[aria-label="Unlike this restaurant"]').dispatchEvent(new Event('click'));

    expect(await favoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    // hapus film dari daftar restaurant yang disuka
    await favoriteRestaurantIdb.deleteRestaurant(1);

    // simulasi user menekan widget batal menyukai restaurant
    document.querySelector('[aria-label="Unlike this restaurant"]').dispatchEvent(new Event('click'));

    expect(await favoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
