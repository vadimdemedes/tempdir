'use strict';

const fs = require('fs');
const tempfile = require('tempfile');
const pify = require('pify');

const mkdir = pify(fs.mkdir);

module.exports = () => {
	const path = tempfile();

	return mkdir(path).then(() => path);
};

module.exports.sync = () => {
	const path = tempfile();
	fs.mkdirSync(path);

	return path;
};
