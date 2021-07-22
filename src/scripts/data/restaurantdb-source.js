import API_ENDPOINT from '../globals/api-endpoints';

const restaurantApi = async () => {
  const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
  return response.json();
};

const restaurantDetailApi = async (id) => {
  const response = await fetch(API_ENDPOINT.RESTAURANT_DETAIL(id));
  return response.json();
};

export {
  restaurantApi,
  restaurantDetailApi,
};
