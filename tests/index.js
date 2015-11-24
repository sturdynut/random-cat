'use strict';

var randomCat = require('..');
var expect = require('expect.js');

describe('random-cat', function () {
  it('can get a random cat with no options', function () {
    var catUrl = randomCat.get();

    expect(catUrl).to.match(/http:\/\/lorempixel.com\/(\d+)\/(\d+)\/cats/);
  });

  it('can get a random cat with a width and height', function () {
    var catUrl = randomCat.get({
      width: 120,
      height: 500
    });

    expect(catUrl).to.match(/http:\/\/lorempixel.com\/120\/500\/cats/);
  });

  it('can get a random picture with a category', function () {
    var catUrl = randomCat.get({
      width: 120,
      height: 500,
      category: 'people'
    });

    expect(catUrl).to.match(/http:\/\/lorempixel.com\/120\/500\/people/);
  });

  it('can get a random picture with an image index', function () {
    var catUrl = randomCat.get({
      width: 120,
      height: 500,
      imageIndex: '2'
    });

    expect(catUrl).to.match(/http:\/\/lorempixel.com\/120\/500\/cats\/2/);
  });

  it('can get a random picture with dummy text', function () {
    var catUrl = randomCat.get({
      width: 120,
      height: 500,
      dummyText: 'avocados are awesome'
    });

    expect(catUrl).to.match(/http:\/\/lorempixel.com\/120\/500\/cats\/avocados%20are%20awesome/);
  });

  it('can get a gray-scale, random picture with width, height, category, image index and dummy text', function () {
    var catUrl = randomCat.get({
      gray: true,
      width: 200,
      height: 700,
      category: 'people',
      imageIndex: 2,
      dummyText: 'people are awesome'
    });
    expect(catUrl).to.match(/http:\/\/lorempixel.com\/g\/200\/700\/people\/2\/people%20are%20awesome/);
  });
})