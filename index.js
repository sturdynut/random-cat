function RandomCat() { }

RandomCat.prototype.get = function (options) {
  options = options || {};

  if (options.dummyText) {
    options.dummyText = escape(options.dummyText);
  }

  var randomSizes = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600];

  var urlParts = [
      options.gray ? 'g' : false
    , options.width || randomSizes[Math.ceil(Math.random() * 12)]
    , options.height || randomSizes[Math.ceil(Math.random() * 12)]
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

module.exports = (new RandomCat());