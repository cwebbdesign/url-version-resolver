// Dependencies
// --------------------------------------------------------------

// Test environment
var chai = require('chai'); // Test assertions that are expressive and readable
var should = chai.should();


// Things we are testing
var urlMap = require('./data/versionMap.json');
var urlResolver = require('../index')(urlMap);


// Tests
// ----------------------------------------------------------------
describe('Resolve url', function() {
  'use strict';

  it('Should return the versioned url when it exists in the data', function() {
    var resolver = urlResolver.resolveUrl;
    resolver('./dist/js/test.js').should.equal('./dist/js/test.92300c7a.js');
  });

  it('Should return the original url when it does not exist in the data', function() {
    var resolver = urlResolver.resolveUrl;
    resolver('/nourl').should.equal('/nourl');
  });

  it('Should return the original url when not given a urlMap', function() {
    var resolver = require('../index')().resolveUrl;
    resolver('/test').should.equal('/test');
  });
});