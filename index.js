function RandomCat() {}

RandomCat.prototype.get = function () {
  // @todo get a randcom cat picture.
  return 'meow';
}

RandomCat.prototype.constructor = RandomCat;

module.exports = (new RandomCat());