# url version resolver

A mapping tool that takes the .json output from https://github.com/theasta/grunt-assets-versioning and given the original url returns the versioned url.

Could be used more generically. given an array of objects, will find the one where 'originalValue' matches the given value and will return a different specified property of the object


## Installation

    npm install url-version-resolver

## Usage

    var urlMap = require('./path/to/json.json');
    var urlResolver = require('url-version-resolver')(urlMap);
    var resolveUrl = urlResolver.resolveUrl;
    var ajax = require('your-prefered-way-to-do-ajax');
    var url = resolveUrl('/js/unversioned.js'); // returns '/js/versioned.js'
	
    ajax(url, callback);



   