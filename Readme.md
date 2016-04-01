# tempdir [![Circle CI](https://circleci.com/gh/vdemedes/tempdir.svg?style=svg)](https://circleci.com/gh/vdemedes/tempdir)

Create a temporary directory.


### Installation

```
$ npm install tempdir --save
```


### Usage

```javascript
const tempdir = require('tempdir');

tempdir().then(
  (path) => {
    // e.g. path = /var/folders/y6/dn6f5hk50qq1167fvxv6vwrw0000gp/T/4d95a74b-9676-447d-ae08-fdeb6e281609
  },
  (error) => {
    throw error;
  }
);

```


### Tests

[![Circle CI](https://circleci.com/gh/vdemedes/tempdir.svg?style=svg)](https://circleci.com/gh/vdemedes/tempdir)

```
$ make test
```


### License

tempdir is released under the MIT license.
