import CONFIG from '../../globals/config';

const createRestaurantListTemplate = (restaurant) => {
  const {
    id, city, rating, pictureId, name, description,
  } = restaurant;
  return `
<div class="card" tabindex="0">
  <article>
      <figure>
          <div class="figure__txt">
              <p>${city} &nbsp;|&nbsp;</p>
              <p><span class="material-icons">grade</span></p>
              <p>${rating}</p>
          </div>
          <img data-src="${CONFIG.BASE_IMAGE_URL}medium/${pictureId}" alt="restaurant ${name}" class="image__homepage lazyload">
      </figure>
      <div class="content">
          <h2 class="title"><a href="${`/#/detail/${id}`}">${name}</a></h2>
          <p class="description">${description}</p>
      </div>
  </article>
</div>
`;
};

const convertArrayToElementLi = (Result) => Result.map((menu) => menu.name).join('</li><li>');
const convertArrayToElementSpan = (Result) => Result.map((menu) => menu.name).join('</span><span>');

const convertArrayFromReview = (Result) => Result.map((review) => (`
    <article class="restaurant__container">
      <h3 class="name__reviewer"> ${review.name}</h3>
      <p class="review__result"> ${review.review}</p>
      <time class="date__reviewer"> ${review.date}</time>
    </article>
    `)).join(' ');

const createRestaurantDetailTemplate = async (restaurants) => {
  const {
    address, categories, city, description,
    menus, name, pictureId, rating, customerReviews,
  } = restaurants.restaurant;

  const {
    drinks, foods,
  } = menus;

  const elementDrink = await convertArrayToElementLi(drinks);
  const elementFood = await convertArrayToElementLi(foods);
  const elementCategorie = await convertArrayToElementSpan(categories);
  const elementReviewResult = await convertArrayFromReview(customerReviews);

  return `
  <article>
    <figure>
      <h2 class="title__detail">${name}</h2>
      <div class="centered__img">
        <div class="max__width">
          <p class="grade__restaurant"><span class="material-icons">grade</span>
          ${rating}
          </p>
          <img src="${CONFIG.BASE_IMAGE_URL}small/${pictureId}" alt="restaurant ${name}" class="images__detail">
        </div>
      </div>
    </figure>

    <div class="content__detail">
      <p class="description__detail firstletter">${description}</p>
      <p class="address__detail"><span class="material-icons">location_on</span>
      ${address}, &nbsp; ${city}</p>

      <h3>Categories</h3>
      <p class="categories__detail"><span>${elementCategorie}</span></p>

      <div class="list__menu">
        <h4 class="title__menu">Our Menu</h4>
        <div class="cards__menu">
          <div class="card__food">
            <p class="title__list">Food</p>
            <ul>
            <li>${elementFood}</li>
            </ul>
          </div>
          <div class="card__drink">
            <p class="title__list">Drink</p>
            <ul>
            <li>${elementDrink}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </article>
    
  <h4 class="review__title">Restaurant Review</h4>
  <div class="review">
    <div class="restaurant__review">
      ${elementReviewResult}
    </div>
  </div>
  
  <div id="likeButtonContainer"></div>
  `;
};

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="Like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="Unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantListTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
