const fs = require('..');
const assert = require("assert");

describe("main", () => {
  it("example", done => {
    fs.mkdir('/home', function(err) {
      if (err) {
        throw err;
      }
      fs.writeFile('/home/hello-world.txt', 'Hello world!\n', function(err) {
        if (err) {
          throw err;
        }
        fs.readFile('/home/hello-world.txt', 'utf-8', function(err, data) {
          if (err) {
            throw err;
          }
          assert.equal(data, 'Hello world!\n');
          done();
        });
      });
    });
  });
});
