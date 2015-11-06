'use strict';

var randomCat = require('..');
var expect = require('expect.js');

describe('random-cat', function () {
  it('can get a random cat', function () {
    var cat = randomCat.get();

    expect(cat).to.not.be.null;
  })
})