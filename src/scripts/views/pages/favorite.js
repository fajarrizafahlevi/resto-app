/* eslint-disable indent */
/* eslint-disable no-unused-expressions */
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import {
  createNoRestaurantTemplate,
  createRestaurantItemTemplate,
} from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="content">
        <h2 class="text-center">Restoran Favoritmu</h2>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');

    restaurants.length === 0
      ? (restaurantsContainer.innerHTML += createNoRestaurantTemplate())
      : restaurants.forEach((restaurant) => {
          restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
  },
};

export default Favorite;
