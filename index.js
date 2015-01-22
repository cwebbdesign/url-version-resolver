module.exports = function(urlMap, opts) {
  'use strict';

  var urls = urlMap;
  var config = opts || {};
  var originalPath = config.oldPath || 'originalPath';
  var versionedPath = config.versionedPath || 'versionedPath';

  var find = function(collection, key, val) {
    var i;
    for (i = collection.length; i--; ) {
      if (collection[i][key] === val) {
        return collection[i];
      }
    }
  };

  var resolveUrl = function(oldUrl) {
    var item;

    // bail quickly if there's no map.
    if (!urls) {
      return oldUrl;
    }

    item = find(urls, originalPath, oldUrl);

    if (item) {
      return item[versionedPath];
    } else {
      return oldUrl;
    }

  };

  return {
    resolveUrl: resolveUrl
  };
};
