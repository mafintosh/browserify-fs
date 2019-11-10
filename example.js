'use strict';

global.window = global;
require('fake-indexeddb/auto');

const fs = require('.');

fs.mkdir('/home', function () {
  fs.writeFile('/home/hello-world.txt', 'Hello world!\n', function () {
    fs.readFile('/home/hello-world.txt', 'utf-8', function (err, data) {
      if (err) return console.error(err);
      console.log(data);
    });
  });
});
