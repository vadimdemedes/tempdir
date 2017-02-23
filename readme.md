# tempdir [![Build Status](https://travis-ci.org/vadimdemedes/tempdir.svg?branch=master)](https://travis-ci.org/vadimdemedes/tempdir)

> Create a temporary directory.


## Installation

```
$ npm install --save tempdir
```


## Usage

```js
const tempdir = require('tempdir');

await tempdir();
//=> /tmp/x/y/z

tempdir.sync();
//=> /tmp/x/y/w
```


## API

### tempdir()

Returns a `Promise`, which resolves to a directory path.

### tempdir.sync()

Synchronous version of `tempdir()`.


## License

MIT © [Vadim Demedes](https://vadimdemedes.com)
