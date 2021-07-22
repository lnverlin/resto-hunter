import { restaurantApi } from '../../data/restaurantdb-source';
import { createRestaurantListTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <loader-container></loader-container>
    <hero-list></hero-list>
    <div class="main_txt">
      <h1 class="main_title">Restaurant List</h1>
      <p>Find your favorite restaurant and the delicious food with the best Place and View.!</p>
    </div>
    <restaurant-list></restaurant-list>
    `;
  },

  async afterRender() {
    const restaurantElement = document.querySelector('#restaurants');
    const loading = document.querySelector('.loader');

    try {
      const restaurantsList = await restaurantApi();
      loading.style.display = 'none';
      restaurantElement.innerHTML = '';

      if (restaurantsList.restaurants.length > 0) {
        restaurantsList.restaurants.forEach((restaurant) => {
          restaurantElement.innerHTML += createRestaurantListTemplate(restaurant);
        });
      } else {
        restaurantElement.innerHTML = `
        <h2>
          Tidak terdapat data
        </h2>
        `;
      }
    } catch (error) {
      loading.style.display = 'none';
      restaurantElement.innerHTML = `
      <error-msg></error-msg>
      `;
      console.log(error);
    }
  },
};

export default Home;
