'use strict';

/**
 * Dependencies
 */

const Promise = require('native-or-bluebird');
const tmpdir = require('os-tmpdir');
const mkdir = require('fs').mkdir;
const join = require('path').join;
const uuid = require('uuid').v4;


/**
 * Expose fn
 */

module.exports = tempdir;


/**
 * Create a temporary directory
 */

function tempdir () {
  return new Promise(function (resolve, reject) {
    let path = join(tmpdir(), uuid());

    mkdir(path, function (err) {
      if (err) {
        return reject(err);
      }

      resolve(path);
    });
  });
}
