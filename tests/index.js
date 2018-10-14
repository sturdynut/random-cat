'use strict';

const RandomCat = require('../index');
const expect = require('expect.js');

describe('random-cat', function() {
	it('can get a random cat with no options', function() {
		const randomCat = new RandomCat();
		const catUrl = randomCat.getURL();

		expect(catUrl).to.match(/http:\/\/lorempixel.com\/(\d+)\/(\d+)\/cats/);
	});

	it('can get a random cat with a width and height', function() {
		const randomCat = new RandomCat();
		const catUrl = randomCat.getURL({
			width: 120,
			height: 500
		});

		expect(catUrl).to.match(/http:\/\/lorempixel.com\/120\/500\/cats/);
	});

	it('can get a random picture with an image index', function() {
		const randomCat = new RandomCat();
		const catUrl = randomCat.getURL({
			width: 120,
			height: 500,
			imageIndex: 0
		});

		expect(catUrl).to.match(/http:\/\/lorempixel.com\/120\/500\/cats\/2/);
	});

	it('can get a random picture with message text', function() {
		const randomCat = new RandomCat();
		const catUrl = randomCat.getURL({
			width: 120,
			height: 500,
			message: 'avocados are awesome'
		});

		expect(catUrl).to.match(/http:\/\/lorempixel.com\/120\/500\/cats\/avocados%20are%20awesome/);
	});

	it('can get a gray-scale, random picture with width, height, image index and message text', function() {
		const randomCat = new RandomCat();
		const catUrl = randomCat.getURL({
			width: 200,
			height: 700,
			imageIndex: 2,
			message: 'people are awesome'
		});
		expect(catUrl).to.match(/http:\/\/lorempixel.com\/200\/700\/cats\/2\/people%20are%20awesome/);
	});
});
