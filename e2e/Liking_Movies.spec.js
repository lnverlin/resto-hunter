const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Showing empty restaurant favorite list', ({ I }) => {
  I.see('Pick your favorite.!', '.none__favorit');
});

Scenario('Add a favorite restaurant', async ({ I }) => {
  I.see('Pick your favorite.!', '.none__favorit');

  I.amOnPage('/');

  I.seeElement('.container');

  const firstRestaurant = locate('.title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('article');

  const fullRestaurantTitle = await I.grabTextFrom('.title');

  assert.strictEqual(firstRestaurantTitle, fullRestaurantTitle);
});

Scenario('Add and then remove restaurant from favorite restaurant list', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.container');

  const firstRestaurant = locate('.title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('article');

  const fullRestaurantTitle = await I.grabTextFrom('.title');

  assert.strictEqual(firstRestaurantTitle, fullRestaurantTitle);

  I.click(firstRestaurant);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Pick your favorite.!', '.none__favorit');
});
