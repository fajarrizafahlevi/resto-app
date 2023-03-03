/* eslint-disable prefer-template */
import DicodingRestaurantSource from '../../data/dicodingrestaurant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import {
  createCustomerReviewTemplate,
  createDrinkMenuTemplate,
  createFoodMenuTemplate,
  createRestaurantDetailTemplate,
} from '../templates/template-creator';
import CONFIG from '../../globals/config';

const Detail = {
  async render() {
    return `
      <article class="content">
        <section id="restaurant" class="restaurant-detail" tabindex="0"></section>
        <div id="menus" class="menus text-center">
          <section class="menus__foods">
            <h3 class="dark container">Daftar Makanan</h3>
            <ul id="foods" class="container"></ul>
          </section>
          <section class="menus__drinks">
            <h3 class="dark container">Daftar Minuman</h3>
            <ul id="drinks" class="container"></ul>
          </section>
        </div>
        <section class="customer-reviews">
          <h3 class="text-center dark container">Review Pelanggan</h3>
          <div id="reviews" class="container"></div>
        </section>
        <div id="likeButtonContainer"></div>
      </article>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await DicodingRestaurantSource.detailRestaurant(url.id);
    const foods = await restaurant.menus.foods;
    const drinks = await restaurant.menus.drinks;
    const customerReviews = await restaurant.customerReviews;

    const heroImage = document.querySelector('#heroImage');
    const heroImageSource = document.querySelector('#heroImageSource');
    const restaurantContainer = document.querySelector('#restaurant');
    const reviewsContainer = document.querySelector('#reviews');
    const foodsContainer = document.querySelector('#foods');
    const drinksContainer = document.querySelector('#drinks');

    heroImage.src = `${CONFIG.BASE_IMAGE_URL + '/large/' + restaurant.pictureId}`;
    heroImageSource.srcset = `${CONFIG.BASE_IMAGE_URL + '/small/' + restaurant.pictureId}`;

    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    foods.forEach((food) => {
      foodsContainer.innerHTML += createFoodMenuTemplate(food);
    });

    drinks.forEach((drink) => {
      drinksContainer.innerHTML += createDrinkMenuTemplate(drink);
    });

    customerReviews.forEach((customerReview) => {
      reviewsContainer.innerHTML += createCustomerReviewTemplate(customerReview);
    });

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        pictureId: restaurant.pictureId,
        name: restaurant.name,
        rating: restaurant.rating,
        city: restaurant.city,
        address: restaurant.address,
        description: restaurant.description,
        foods: restaurant.menus.foods,
        drinks: restaurant.menus.drinks,
        customerReviews: restaurant.customerReviews,
      },
    });
  },
};

export default Detail;
