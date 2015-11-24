# Random Cat

[![Build Status](https://travis-ci.org/sturdynut/random-cat.svg?branch=master)](https://travis-ci.org/sturdynut/random-cat)

## Summary
A library for generating URLs of random cat pictures.

> Although by default this library will generate URLs of random cats, you can specify other categories.  All of the categories are listed at the bottom of [lorempixel's website](http://lorempixel.com/).  Meow.

## Installation

```bash
npm install --save random-cat
```
## Usage

```javascript
var randomCat = require('random-cat');

// Random cat picture of various widths and heights
// Possible values: 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600
// http://lorempixel.com/100/600/cats
var url = randomCat.get();

// Random cat picture of specific size
// http://lorempixel.com/120/600/cats
var urlWithSize = randomCat.get({
  width: 120,
  height: 600
});

// Don't like cats?  Try another category
// Possible values: abstract, animals, business, cats, city, food, nightlife, fashion, people, nature, sports, technics, transport
// http://lorempixel.com/120/500/people
var urlOfPeople = randomCat.get({
  width: 120,
  height: 500,
  category: 'people'
});

// All of the options
// http://lorempixel.com/g/200/700/food/2/om%20nom%20nom
var urlWithAllOptions = randomCat.get({
  width: 200,
  height: 700,
  category: 'food',
  imageIndex: 2,
  dummyText: 'om nom nom',
  gray: true
});
```

## Tests

```javascript
npm install
npm test
```

## Questions?

[@sturdynut](https://twitter.com/sturdynut)

## Bugs?

[Submit a bug](https://github.com/sturdynut/random-cat/issues)

## License

This project is distributed under the MIT license.