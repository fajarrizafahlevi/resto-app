const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('show empty favorite restaurant', ({ I }) => {
  I.see('Restoran Favoritmu');
  I.waitForElement('.no-restaurant');
  I.see('Tidak ada restoran untuk ditampilkan');
});

Scenario('liking then unliking a restaurant', async ({ I }) => {
  // Menyukai restoran

  I.see('Restoran Favoritmu');

  I.amOnPage('/');
  I.waitForElement('.restaurant-item__name a');

  const firstRestaurant = locate('.restaurant-item__name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurant-item');
  const likedRestaurantName = await I.grabTextFrom('.restaurant-item__name a');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  // Batal menyukai restoran

  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurant-item');
  I.click(locate('.restaurant-item__name a').first());

  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Restoran Favoritmu');
  I.waitForElement('.no-restaurant');
  I.see('Tidak ada restoran untuk ditampilkan');
});
