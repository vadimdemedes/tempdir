'use strict';

/**
 * Dependencies
 */

const tempdir = require('./');
const expect = require('chai').expect;
const stat = require('fs').statSync;


/**
 * Tests
 */

describe ('tempdir', function () {

  it ('create a temporary directory', function (done) {
    tempdir().then(function (path) {
      let isDirectory = stat(path).isDirectory();

      expect(isDirectory).equal(true);

      done();
    });
  });

});
