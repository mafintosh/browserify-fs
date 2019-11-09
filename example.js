'use strict';

const fs = require('browserify-fs');

fs.mkdir('/home', function () {
  fs.writeFile('/home/hello-world.txt', 'Hello world!\n', function () {
    fs.readFile('/home/hello-world.txt', 'utf-8', function (_err, data) {
      console.log(data);
    });
  });
});
