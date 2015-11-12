function RandomCat() { }

RandomCat.prototype.get = function (options) {
  return this._generateUrl(options);
}

RandomCat.prototype._generateUrl = function (options) {
  options = options || {};

  if (options.dummyText) {
    options.dummyText = options.dummyText.replace(/ /g, '-');
  }

  var urlParts = [
      options.width || 400
    , options.height || 200
    , options.category || 'cats'
    , options.imageIndex
    , options.dummyText
  ];

  var length = urlParts.length;
  var protocol = options.protocol || 'http';
  var baseUrl = options.baseUrl || 'lorempixel.com';
  var lastSlash = baseUrl.lastIndexOf('/');
  baseUrl = lastSlash === baseUrl.length - 1
    ? baseUrl.substr(0, lastSlash)
    : baseUrl;

  for (var i=0; i<length; i++) {
    if (!!!urlParts[i]) {
      urlParts.splice(i, 1);
    }
  }

  return protocol + '://' + baseUrl + '/' + urlParts.join('/');
}

RandomCat.prototype.constructor = RandomCat;

module.exports = (new RandomCat());