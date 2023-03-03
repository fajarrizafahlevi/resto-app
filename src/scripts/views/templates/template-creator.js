/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable prefer-template */
import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const START = 6;
const NUMBER_OF_IMAGES = 30;

const createNoRestaurantTemplate = () => `
  <div class="no-restaurant text-center">
    <p>Tidak ada restoran untuk ditampilkan</p>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <article class="restaurant-item" tabindex="0">
    <div class="restaurant-item__label">
      <p class="restaurant-item__city dark">${restaurant.city}</p>
    </div>
    <picture class="restaurant-item__thumbnail">
      <source
        media="(max-width: 600px)"
        data-srcset="${CONFIG.BASE_IMAGE_URL + '/small/' + restaurant.pictureId}"
      />
      <img class="lazyload restaurant-item__image" data-src="${
        CONFIG.BASE_IMAGE_URL + '/medium/' + restaurant.pictureId
      }" alt="${restaurant.name}">
    </picture>
    <div class="restaurant-item__content">
      <h3 class="restaurant-item__name">
        <a href="/#/detail/${restaurant.id}">${restaurant.name}</a>
      </h3>
      <p class="restaurant-item__rating">Rating: <span class="rating">${
        restaurant.rating
      }</span> ⭐️</p>
    </div>
  </article>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="text-center dark container">
    <h2 class="restaurant-detail__name">${restaurant.name}</h2>
    <p class="restaurant-detail__rating">Rating: <span class="rating">${restaurant.rating}</span> ⭐️</p>
    <p class="restaurant-detail__location">${restaurant.address}, ${restaurant.city}</p>
  </div>
  <p class="restaurant-detail__description container">${restaurant.description}</p>
`;

const createFoodMenuTemplate = (food) => `
  <li>${food.name}</li>
`;

const createDrinkMenuTemplate = (drink) => `
  <li>${drink.name}</li>
`;

const createCustomerReviewTemplate = (customerReview) => `
  <div class="review-item">
    <h4 class="review-item__name">${customerReview.name}</h4>
    <p class="review-item__date">${customerReview.date}</p>
    <p class="review-item__review">${customerReview.review}</p>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like dark">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like dark">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createNoRestaurantTemplate,
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createFoodMenuTemplate,
  createDrinkMenuTemplate,
  createCustomerReviewTemplate,
  createLikeButtonTemplate,
  createUnlikeButtonTemplate,
};
